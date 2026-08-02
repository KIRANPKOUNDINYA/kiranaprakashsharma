"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { useAdminSession } from "@/hooks/useAdminSession";

const CATEGORIES = [
  { key: "shuba", label: "Shuba (Auspicious Poojas)" },
  { key: "ashuba", label: "Ashuba (Post-death Rituals)" },
];

export default function AdminDashboardPage() {
  const { status, user } = useAdminSession({ redirectIfNotAdmin: true });

  const [category, setCategory] = useState("shuba");
  const [images, setImages] = useState([]);
  const [loadingImages, setLoadingImages] = useState(true);
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (status === "admin") loadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, category]);

  async function loadImages() {
    setLoadingImages(true);
    const { data, error } = await supabase
      .from("gallery_images")
      .select("*")
      .eq("category", category)
      .order("display_order", { ascending: true })
      .order("created_at", { ascending: true });

    if (!error) setImages(data || []);
    setLoadingImages(false);
  }

  async function handleUpload(e) {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    setMessage(null);

    const safeName = file.name.replace(/\s+/g, "-").toLowerCase();
    const path = `${category}/${Date.now()}-${safeName}`;

    // 1. Upload the actual file to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from("gallery")
      .upload(path, file);

    if (uploadError) {
      setMessage({ type: "error", text: uploadError.message });
      setUploading(false);
      return;
    }

    // 2. Get its public URL
    const { data: publicUrlData } = supabase.storage
      .from("gallery")
      .getPublicUrl(path);

    // 3. Save a row pointing to it, so the public site can list/query it
    const { error: insertError } = await supabase.from("gallery_images").insert({
      category,
      storage_path: path,
      image_url: publicUrlData.publicUrl,
      caption: caption || null,
    });

    if (insertError) {
      setMessage({ type: "error", text: insertError.message });
    } else {
      setMessage({ type: "success", text: "Image added." });
      setFile(null);
      setCaption("");
      loadImages();
    }
    setUploading(false);
  }

  async function handleDelete(image) {
    const confirmed = window.confirm("Delete this image? This cannot be undone.");
    if (!confirmed) return;

    await supabase.storage.from("gallery").remove([image.storage_path]);
    await supabase.from("gallery_images").delete().eq("id", image.id);
    loadImages();
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    window.location.assign(`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/admin/login`);
  }

  if (status === "loading") {
    return (
      <main className="min-h-[60vh] flex items-center justify-center text-gray-500">
        Checking your session...
      </main>
    );
  }

  if (status !== "admin") return null; // hook already redirects to /admin/login

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-orange-700">Admin Dashboard</h1>
          <p className="text-sm text-gray-500">Signed in as {user?.email}</p>
        </div>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 rounded-md border border-orange-600 text-orange-700 hover:bg-orange-50 transition text-sm font-medium"
        >
          Sign Out
        </button>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 mb-6">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            onClick={() => setCategory(c.key)}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
              category === c.key
                ? "bg-orange-600 text-white"
                : "bg-orange-50 text-orange-700 hover:bg-orange-100"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Upload form */}
      <form
        onSubmit={handleUpload}
        className="bg-white border border-orange-100 rounded-xl shadow-sm p-6 mb-8 flex flex-col sm:flex-row gap-4 sm:items-end"
      >
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image file
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-600"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Caption
          </label>
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900"
            placeholder="Optional"
          />
        </div>
        <button
          type="submit"
          disabled={uploading || !file}
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-2.5 rounded-md transition disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Add Image"}
        </button>
      </form>

      {message && (
        <p
          className={`text-sm mb-6 ${
            message.type === "error" ? "text-red-600" : "text-green-600"
          }`}
        >
          {message.text}
        </p>
      )}

      {/* Image grid */}
      {loadingImages ? (
        <p className="text-gray-500">Loading images...</p>
      ) : images.length === 0 ? (
        <p className="text-gray-500">No images in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="border border-orange-100 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <div className="relative w-full h-32">
                <Image
                  src={img.image_url}
                  alt={img.caption || "Gallery image"}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <p className="text-xs text-gray-600 truncate">
                  {img.caption || "—"}
                </p>
                <button
                  onClick={() => handleDelete(img)}
                  className="mt-2 w-full text-xs text-red-600 hover:text-white hover:bg-red-600 border border-red-300 rounded py-1 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
