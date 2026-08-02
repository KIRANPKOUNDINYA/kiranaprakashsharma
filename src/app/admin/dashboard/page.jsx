"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { useAdminSession } from "@/hooks/useAdminSession";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

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
  const [editingImage, setEditingImage] = useState(null);
  const [editCaption, setEditCaption] = useState("");
  const [editFile, setEditFile] = useState(null);
  const [updatingImage, setUpdatingImage] = useState(false);

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

  function startEdit(image) {
    setEditingImage(image);
    setEditCaption(image.caption || "");
    setEditFile(null);
    setMessage(null);
  }

  async function handleUpdateImage(e) {
    e.preventDefault();
    if (!editingImage) return;

    setUpdatingImage(true);
    setMessage(null);

    try {
      let imageUrl = editingImage.image_url;
      let storagePath = editingImage.storage_path;

      if (editFile) {
        const safeName = editFile.name.replace(/\s+/g, "-").toLowerCase();
        const newPath = `${category}/${Date.now()}-${safeName}`;

        const { error: uploadError } = await supabase.storage
          .from("gallery")
          .upload(newPath, editFile);

        if (uploadError) {
          throw new Error(uploadError.message);
        }

        const { data: publicUrlData } = supabase.storage
          .from("gallery")
          .getPublicUrl(newPath);

        imageUrl = publicUrlData.publicUrl;
        storagePath = newPath;
      }

      const { error: updateError } = await supabase
        .from("gallery_images")
        .update({
          caption: editCaption || null,
          image_url: imageUrl,
          storage_path: storagePath,
        })
        .eq("id", editingImage.id);

      if (updateError) {
        throw new Error(updateError.message);
      }

      setMessage({ type: "success", text: "Image updated." });
      setEditingImage(null);
      setEditCaption("");
      setEditFile(null);
      loadImages();
    } catch (error) {
      setMessage({ type: "error", text: error.message || "Failed to update image." });
    } finally {
      setUpdatingImage(false);
    }
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

      {/* Edit form */}
      {editingImage && (
        <form
          onSubmit={handleUpdateImage}
          className="mb-8 rounded-xl border border-orange-200 bg-orange-50 p-4 shadow-sm"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-orange-700">Edit Image</h2>
            <button
              type="button"
              onClick={() => {
                setEditingImage(null);
                setEditCaption("");
                setEditFile(null);
              }}
              className="text-sm text-gray-600 hover:text-orange-700"
            >
              Cancel
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Replace Image (optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setEditFile(e.target.files?.[0] || null)}
                className="block w-full text-sm text-gray-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Caption
              </label>
              <input
                type="text"
                value={editCaption}
                onChange={(e) => setEditCaption(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900"
                placeholder="Optional"
              />
            </div>

            <button
              type="submit"
              disabled={updatingImage}
              className="rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700 disabled:opacity-60"
            >
              {updatingImage ? "Updating..." : "Update Image"}
            </button>
          </div>
        </form>
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
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={() => startEdit(img)}
                    className="flex-1 flex items-center justify-center gap-1 text-xs text-orange-700 hover:bg-orange-50 border border-orange-300 rounded py-1 transition"
                  >
                    <FiEdit3 size={12} /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(img)}
                    className="flex-1 flex items-center justify-center gap-1 text-xs text-red-600 hover:text-white hover:bg-red-600 border border-red-300 rounded py-1 transition"
                  >
                    <FiTrash2 size={12} /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
