"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

interface ProjectFormData {
  slug: string;
  title: string;
  location: string;
  category: string;
  image: string;
  sections: Array<{ heading: string; body: string }>;
  cta: {
    prompt: string;
    linkText: string;
    href: string;
  };
  display_order: number;
}

export default function ProjectForm({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<ProjectFormData>({
    slug: "",
    title: "",
    location: "",
    category: "",
    image: "",
    sections: [{ heading: "", body: "" }],
    cta: {
      prompt: "",
      linkText: "",
      href: "",
    },
    display_order: 0,
  });

  useEffect(() => {
    if (params.id !== "new") {
      fetchProject();
    } else {
      setLoading(false);
    }
  }, [params.id]);

  const fetchProject = async () => {
    try {
      const response = await fetch(`/api/projects/${params.id}`);
      const data = await response.json();
      setFormData({
        slug: data.slug || "",
        title: data.title || "",
        location: data.location || "",
        category: data.category || "",
        image: data.image || "",
        sections: data.sections || [{ heading: "", body: "" }],
        cta: data.cta || { prompt: "", linkText: "", href: "" },
        display_order: data.display_order || 0,
      });
    } catch (error) {
      console.error("Error fetching project:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const url = params.id === "new" ? "/api/projects" : `/api/projects/${params.id}`;
      const method = params.id === "new" ? "POST" : "PUT";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/admin/projects");
      }
    } catch (error) {
      console.error("Error saving project:", error);
    } finally {
      setSaving(false);
    }
  };

  const addSection = () => {
    setFormData({
      ...formData,
      sections: [...formData.sections, { heading: "", body: "" }],
    });
  };

  const removeSection = (index: number) => {
    setFormData({
      ...formData,
      sections: formData.sections.filter((_, i) => i !== index),
    });
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center space-x-4 mb-6">
        <Link href="/admin/projects" className="text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">
          {params.id === "new" ? "Add New Project" : "Edit Project"}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Display Order</label>
            <input
              type="number"
              value={formData.display_order}
              onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-50"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-50"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <input
              type="text"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-50"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
          <input
            type="text"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-50"
            required
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">Sections</label>
            <button
              type="button"
              onClick={addSection}
              className="text-sm text-brand-50 hover:text-brand-100"
            >
              + Add Section
            </button>
          </div>
          {formData.sections.map((section, index) => (
            <div key={index} className="mb-4 p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Section {index + 1}</span>
                {formData.sections.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSection(index)}
                    className="text-sm text-red-600 hover:text-red-900"
                  >
                    Remove
                  </button>
                )}
              </div>
              <input
                type="text"
                placeholder="Heading"
                value={section.heading}
                onChange={(e) => {
                  const newSections = [...formData.sections];
                  newSections[index].heading = e.target.value;
                  setFormData({ ...formData, sections: newSections });
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2 focus:ring-2 focus:ring-brand-50"
              />
              <textarea
                placeholder="Body"
                value={section.body}
                onChange={(e) => {
                  const newSections = [...formData.sections];
                  newSections[index].body = e.target.value;
                  setFormData({ ...formData, sections: newSections });
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-50"
                rows={4}
              />
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Call to Action</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Prompt</label>
              <input
                type="text"
                value={formData.cta.prompt}
                onChange={(e) => setFormData({ ...formData, cta: { ...formData.cta, prompt: e.target.value } })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-50"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Link Text</label>
                <input
                  type="text"
                  value={formData.cta.linkText}
                  onChange={(e) => setFormData({ ...formData, cta: { ...formData.cta, linkText: e.target.value } })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Link Href</label>
                <input
                  type="text"
                  value={formData.cta.href}
                  onChange={(e) => setFormData({ ...formData, cta: { ...formData.cta, href: e.target.value } })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-50"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <Link
            href="/admin/projects"
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="flex items-center space-x-2 bg-brand-50 text-white px-4 py-2 rounded-lg hover:bg-brand-100 transition-colors disabled:opacity-50"
          >
            <Save className="w-5 h-5" />
            <span>{saving ? "Saving..." : "Save Project"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}


