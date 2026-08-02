"use client";
// A reusable hook: "am I looking at an authenticated admin, or a guest?"
// Used by the dashboard page to gate access, and by the Navbar to decide
// whether to show "Admin Login" or "Dashboard".

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export function useAdminSession({ redirectIfNotAdmin = false } = {}) {
  const [status, setStatus] = useState("loading"); // "loading" | "admin" | "guest"
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        if (!isMounted) return;
        setStatus("guest");
        setUser(null);
        if (redirectIfNotAdmin) router.replace("/admin/login");
        return;
      }

      // Logged in to Google via Supabase -- but is this email on our admin list?
      const { data: adminRow } = await supabase
        .from("admin_users")
        .select("email")
        .eq("email", session.user.email)
        .maybeSingle();

      if (!isMounted) return;

      if (adminRow) {
        setUser(session.user);
        setStatus("admin");
      } else {
        // Logged in, but not an authorized admin email -- kick them out
        setStatus("guest");
        setUser(null);
        await supabase.auth.signOut();
        if (redirectIfNotAdmin) router.replace("/admin/login");
      }
    }

    checkSession();

    // Re-check whenever auth state changes (login, logout, token refresh)
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      checkSession();
    });

    return () => {
      isMounted = false;
      listener.subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redirectIfNotAdmin]);

  return { status, user };
}
