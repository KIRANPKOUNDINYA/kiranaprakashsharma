// A single shared Supabase client for the whole app.
// This runs entirely in the browser -- no Next.js server needed, so it
// works fine under `output: "export"` (your current GitHub Pages setup)
// AND on Vercel later, with zero changes.

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // This won't crash the build, but will warn loudly in the browser console
  // if you forgot to set up .env.local
  console.warn(
    "Supabase env vars are missing. Check .env.local has NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
