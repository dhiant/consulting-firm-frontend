"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  FileText,
  FolderKanban,
  MessageSquare,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type Tab = "blogs" | "projects" | "reviews";

interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author?: string;
  read_time?: string;
  category: string;
  tags: string[];
  related_posts: unknown[];
}

interface Project {
  id: number;
  slug: string;
  title: string;
  location: string;
  category: string;
  image: string;
  sections: Array<{ heading: string; body: string }>;
  cta_prompt: string;
  cta_link_text: string;
  cta_href: string;
  display_order: number;
}

interface Review {
  id: number;
  project: string;
  quote: string;
  author: string;
  rating: number;
  display_order: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>("blogs");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [editing, setEditing] = useState<Blog | Project | Review | null>(null);
  const [showForm, setShowForm] = useState(false);

  const checkAuth = useCallback(async () => {
    try {
      const response = await fetch("/api/auth/check");
      const data = await response.json();
      if (data.authenticated) {
        setAuthenticated(true);
      } else {
        router.push("/admin/login");
      }
    } catch {
      router.push("/admin/login");
    } finally {
      setLoading(false);
    }
  }, [router]);

  const fetchData = useCallback(async () => {
    try {
      if (activeTab === "blogs") {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data);
      } else if (activeTab === "projects") {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } else if (activeTab === "reviews") {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        setReviews(data);
      }
    } catch {
      toast.error("Failed to fetch data");
    }
  }, [activeTab]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (authenticated) {
      fetchData();
    }
  }, [authenticated, fetchData]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const handleDelete = async (type: Tab, id: number) => {
    if (!confirm("Are you sure you want to delete this item?")) return;

    try {
      const response = await fetch(`/api/${type}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Item deleted successfully");
        fetchData();
      } else {
        toast.error("Failed to delete item");
      }
    } catch {
      toast.error("An error occurred");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex space-x-2 mb-8 border-b border-gray-200">
          <button
            onClick={() => {
              setActiveTab("blogs");
              setShowForm(false);
              setEditing(null);
            }}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
              activeTab === "blogs"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <FileText className="h-4 w-4 inline mr-2" />
            Blogs
          </button>
          <button
            onClick={() => {
              setActiveTab("projects");
              setShowForm(false);
              setEditing(null);
            }}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
              activeTab === "projects"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <FolderKanban className="h-4 w-4 inline mr-2" />
            Projects
          </button>
          <button
            onClick={() => {
              setActiveTab("reviews");
              setShowForm(false);
              setEditing(null);
            }}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
              activeTab === "reviews"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <MessageSquare className="h-4 w-4 inline mr-2" />
            Reviews
          </button>
        </div>

        {/* Content */}
        {showForm ? (
          <AdminForm
            type={activeTab}
            data={editing}
            onCancel={() => {
              setShowForm(false);
              setEditing(null);
            }}
            onSuccess={() => {
              setShowForm(false);
              setEditing(null);
              fetchData();
            }}
          />
        ) : (
          <>
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900 capitalize">
                {activeTab}
              </h2>
              <Button onClick={() => setShowForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add New
              </Button>
            </div>

            <div className="grid gap-4">
              {activeTab === "blogs" &&
                blogs.map((blog) => (
                  <Card key={blog.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {blog.excerpt}
                        </p>
                        <p className="text-gray-500 text-xs">
                          Slug: {blog.slug} | Category: {blog.category}
                        </p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setEditing(blog);
                            setShowForm(true);
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete("blogs", blog.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}

              {activeTab === "projects" &&
                projects.map((project) => (
                  <Card key={project.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {project.location} | {project.category}
                        </p>
                        <p className="text-gray-500 text-xs">
                          Slug: {project.slug}
                        </p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setEditing(project);
                            setShowForm(true);
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete("projects", project.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}

              {activeTab === "reviews" &&
                reviews.map((review) => (
                  <Card key={review.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">
                          {review.project}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          &ldquo;{review.quote}&rdquo;
                        </p>
                        <p className="text-gray-500 text-xs">
                          — {review.author} | Rating: {review.rating}/5
                        </p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setEditing(review);
                            setShowForm(true);
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete("reviews", review.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Admin Form Component
function AdminForm({
  type,
  data,
  onCancel,
  onSuccess,
}: {
  type: Tab;
  data?: Blog | Project | Review;
  onCancel: () => void;
  onSuccess: () => void;
}) {
  const [formData, setFormData] = useState<Record<string, unknown>>(() => {
    if (data) {
      const dataRecord = data as unknown as Record<string, unknown>;
      // Convert tags array to comma-separated string if it exists
      if (type === "blogs" && "tags" in dataRecord) {
        const tags = dataRecord.tags;
        if (Array.isArray(tags)) {
          dataRecord.tags = tags.join(", ");
        } else if (typeof tags === "string" && tags.startsWith("[")) {
          // Handle case where tags might be a JSON string
          try {
            const parsed = JSON.parse(tags);
            dataRecord.tags = Array.isArray(parsed) ? parsed.join(", ") : tags;
          } catch {
            dataRecord.tags = tags;
          }
        }
      }
      // Ensure sections is properly formatted as an array for projects
      if (type === "projects" && "sections" in dataRecord) {
        const sections = dataRecord.sections;
        if (typeof sections === "string") {
          try {
            dataRecord.sections = JSON.parse(sections);
          } catch {
            dataRecord.sections = [{ heading: "", body: "" }];
          }
        } else if (!Array.isArray(sections)) {
          dataRecord.sections = [{ heading: "", body: "" }];
        }
      }
      return dataRecord;
    }
    if (type === "blogs")
      return {
        slug: "",
        title: "",
        excerpt: "",
        content: "",
        image: "",
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        author: "",
        read_time: "",
        category: "",
        tags: "",
        related_posts: [],
      } as Record<string, unknown>;
    if (type === "projects")
      return {
        slug: "",
        title: "",
        location: "",
        category: "",
        image: "",
        sections: [{ heading: "", body: "" }],
        cta_prompt: "",
        cta_link_text: "",
        cta_href: "",
        display_order: 0,
      } as Record<string, unknown>;
    return {
      project: "",
      quote: "",
      author: "",
      rating: 5,
      display_order: 0,
    } as Record<string, unknown>;
  });

  const [uploading, setUploading] = useState(false);
  const [tagInput, setTagInput] = useState("");

  // Helper function to convert comma-separated string to array
  const tagsStringToArray = (tagsStr: string): string[] => {
    if (!tagsStr || typeof tagsStr !== "string") return [];
    return tagsStr
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
  };

  // Helper function to convert array to comma-separated string
  const tagsArrayToString = (tagsArray: string[]): string => {
    return tagsArray.join(",");
  };

  // Initialize tags array from formData
  const [tagsArray, setTagsArray] = useState<string[]>(() => {
    if (type === "blogs" && "tags" in formData) {
      return tagsStringToArray(String(formData.tags || ""));
    }
    return [];
  });

  // Sync tagsArray with formData when data prop changes (initial load or when editing different item)
  useEffect(() => {
    if (type === "blogs" && "tags" in formData) {
      const newTagsArray = tagsStringToArray(String(formData.tags || ""));
      setTagsArray(newTagsArray);
      setTagInput(""); // Reset input when tags change
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.id, type]); // Only sync when switching to a different item

  // Update formData when tagsArray changes
  const updateTags = (newTags: string[]) => {
    setTagsArray(newTags);
    setFormData({ ...formData, tags: tagsArrayToString(newTags) });
  };

  // Add a new tag
  const addTag = (tag: string) => {
    const trimmedTag = tag.trim();
    if (trimmedTag && !tagsArray.includes(trimmedTag)) {
      updateTags([...tagsArray, trimmedTag]);
    }
  };

  // Remove a tag
  const removeTag = (indexToRemove: number) => {
    updateTags(tagsArray.filter((_, index) => index !== indexToRemove));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setFormData((prev) => ({ ...prev, image: result.url }));
        toast.success("Image uploaded successfully");
      } else {
        toast.error(result.error || "Failed to upload image");
      }
    } catch {
      toast.error("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  // Helper functions for managing sections (for projects)
  const sections =
    (formData.sections as Array<{ heading: string; body: string }>) || [];

  const updateSection = (
    index: number,
    field: "heading" | "body",
    value: string
  ) => {
    setFormData((prev) => {
      const currentSections =
        (prev.sections as Array<{ heading: string; body: string }>) || [];
      const updatedSections = [...currentSections];
      updatedSections[index] = { ...updatedSections[index], [field]: value };
      return { ...prev, sections: updatedSections };
    });
  };

  const addSection = () => {
    setFormData((prev) => {
      const currentSections =
        (prev.sections as Array<{ heading: string; body: string }>) || [];
      return {
        ...prev,
        sections: [...currentSections, { heading: "", body: "" }],
      };
    });
  };

  const removeSection = (index: number) => {
    setFormData((prev) => {
      const currentSections =
        (prev.sections as Array<{ heading: string; body: string }>) || [];
      if (currentSections.length > 1) {
        return {
          ...prev,
          sections: currentSections.filter((_, i) => i !== index),
        };
      }
      return prev;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = data ? `/api/${type}/${data.id}` : `/api/${type}`;
      const method = data ? "PUT" : "POST";

      // Prepare data
      const submitData = { ...formData };
      if (type === "blogs" && "tags" in submitData) {
        // Ensure tags is a comma-separated string
        submitData.tags = String(submitData.tags || "").trim();
        if ("related_posts" in submitData) {
          submitData.related_posts = Array.isArray(submitData.related_posts)
            ? submitData.related_posts
            : [];
        }
      }

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        toast.success(data ? "Updated successfully" : "Created successfully");
        onSuccess();
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to save");
      }
    } catch {
      toast.error("An error occurred");
    }
  };

  if (type === "blogs") {
    return (
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">
          {data ? "Edit Blog" : "New Blog"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Slug</Label>
            <Input
              value={String(formData.slug || "")}
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
              required
            />
          </div>
          <div>
            <Label>Title</Label>
            <Input
              value={String(formData.title || "")}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>
          <div>
            <Label>Excerpt</Label>
            <textarea
              className="w-full p-2 border rounded text-sm"
              value={String(formData.excerpt || "")}
              onChange={(e) =>
                setFormData({ ...formData, excerpt: e.target.value })
              }
              required
              rows={3}
            />
          </div>
          <div>
            <Label>Content</Label>
            <div className="mt-2">
              <ReactQuill
                theme="snow"
                value={String(formData.content || "")}
                onChange={(value) =>
                  setFormData({ ...formData, content: value })
                }
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ indent: "-1" }, { indent: "+1" }],
                    ["link", "image"],
                    [{ color: [] }, { background: [] }],
                    [{ align: [] }],
                    ["clean"],
                  ],
                }}
                formats={[
                  "header",
                  "bold",
                  "italic",
                  "underline",
                  "strike",
                  "list",
                  "bullet",
                  "indent",
                  "link",
                  "image",
                  "color",
                  "background",
                  "align",
                ]}
                className="bg-white"
                style={{ minHeight: "300px" }}
              />
            </div>
          </div>
          <div>
            <Label>Image</Label>
            <div className="flex space-x-2 items-center">
              <Input
                value={String(formData.image || "")}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                placeholder="Image URL or upload"
              />
              <label className="cursor-pointer">
                <Upload className="h-5 w-5" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  disabled={uploading}
                />
              </label>
            </div>
            {formData.image && (
              <div className="mt-2 relative w-48 h-48">
                <Image
                  src={String(formData.image)}
                  alt="Preview"
                  fill
                  className="object-cover rounded"
                />
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Date</Label>
              <Input
                value={String(formData.date || "")}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label>Category</Label>
              <Input
                value={String(formData.category || "")}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Author</Label>
              <Input
                value={String(formData.author || "")}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
              />
            </div>
            <div>
              <Label>Read Time</Label>
              <Input
                value={String(formData.read_time || "")}
                onChange={(e) =>
                  setFormData({ ...formData, read_time: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <Label>Tags</Label>
            <div className="space-y-2">
              {/* Tag Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Type a tag and press Enter or comma"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (
                      (e.key === "Enter" || e.key === ",") &&
                      tagInput.trim()
                    ) {
                      e.preventDefault();
                      addTag(tagInput);
                      setTagInput("");
                    } else if (
                      e.key === "Backspace" &&
                      !tagInput &&
                      tagsArray.length > 0
                    ) {
                      // Remove last tag if input is empty and backspace is pressed
                      removeTag(tagsArray.length - 1);
                    }
                  }}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    if (tagInput.trim()) {
                      addTag(tagInput);
                      setTagInput("");
                    }
                  }}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {/* Tag Chips */}
              {tagsArray.length > 0 && (
                <div className="flex flex-wrap gap-2 p-3 border rounded-md bg-gray-50 min-h-[3rem]">
                  {tagsArray.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium"
                    >
                      <span>{tag}</span>
                      <button
                        type="button"
                        onClick={() => removeTag(index)}
                        className="ml-1 hover:bg-gray-200 rounded-full p-0.5 transition-colors"
                        aria-label={`Remove ${tag} tag`}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
              {tagsArray.length === 0 && (
                <div className="p-3 border rounded-md bg-gray-50 min-h-[3rem] flex items-center text-sm text-gray-500">
                  No tags added yet. Type a tag and press Enter or comma to add.
                </div>
              )}
            </div>
          </div>
          <div className="flex space-x-2">
            <Button type="submit">Save</Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    );
  }

  if (type === "projects") {
    return (
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">
          {data ? "Edit Project" : "New Project"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Slug</Label>
            <Input
              value={String(formData.slug || "")}
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
              required
            />
          </div>
          <div>
            <Label>Title</Label>
            <Input
              value={String(formData.title || "")}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Location</Label>
              <Input
                value={String(formData.location || "")}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label>Category</Label>
              <Input
                value={String(formData.category || "")}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div>
            <Label>Image</Label>
            <div className="flex space-x-2 items-center">
              <Input
                value={String(formData.image || "")}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                placeholder="Image URL or upload"
              />
              <label className="cursor-pointer">
                <Upload className="h-5 w-5" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  disabled={uploading}
                />
              </label>
            </div>
            {formData.image && (
              <div className="mt-2 relative w-48 h-48">
                <Image
                  src={String(formData.image)}
                  alt="Preview"
                  fill
                  className="object-cover rounded"
                />
              </div>
            )}
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label>Sections</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addSection}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Section
              </Button>
            </div>
            <div className="space-y-4">
              {sections.map((section, index) => (
                <Card key={index} className="p-4 border-2">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm font-medium text-gray-600">
                      Section {index + 1}
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeSection(index)}
                      disabled={sections.length === 1}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <Label className="text-sm">Heading</Label>
                      <Input
                        value={section.heading || ""}
                        onChange={(e) =>
                          updateSection(index, "heading", e.target.value)
                        }
                        placeholder="e.g., 🎯 The Vision"
                        required
                      />
                    </div>
                    <div>
                      <Label className="text-sm">Body</Label>
                      <Textarea
                        value={section.body || ""}
                        onChange={(e) =>
                          updateSection(index, "body", e.target.value)
                        }
                        placeholder="Enter the section content..."
                        rows={4}
                        required
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <Label>CTA Prompt</Label>
            <Input
              value={String(formData.cta_prompt || "")}
              onChange={(e) =>
                setFormData({ ...formData, cta_prompt: e.target.value })
              }
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>CTA Link Text</Label>
              <Input
                value={String(formData.cta_link_text || "")}
                onChange={(e) =>
                  setFormData({ ...formData, cta_link_text: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label>CTA Href</Label>
              <Input
                value={String(formData.cta_href || "")}
                onChange={(e) =>
                  setFormData({ ...formData, cta_href: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div>
            <Label>Display Order</Label>
            <Input
              type="number"
              value={Number(formData.display_order) || 0}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  display_order: parseInt(e.target.value) || 0,
                })
              }
            />
          </div>
          <div className="flex space-x-2">
            <Button type="submit">Save</Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">
        {data ? "Edit Review" : "New Review"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Project</Label>
          <Input
            value={String(formData.project || "")}
            onChange={(e) =>
              setFormData({ ...formData, project: e.target.value })
            }
            required
          />
        </div>
        <div>
          <Label>Quote</Label>
          <textarea
            className="w-full p-2 border rounded"
            value={String(formData.quote || "")}
            onChange={(e) =>
              setFormData({ ...formData, quote: e.target.value })
            }
            required
            rows={4}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Author</Label>
            <Input
              value={String(formData.author || "")}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              required
            />
          </div>
          <div>
            <Label>Rating (1-5)</Label>
            <Input
              type="number"
              min="1"
              max="5"
              value={Number(formData.rating) || 5}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  rating: parseInt(e.target.value) || 5,
                })
              }
              required
            />
          </div>
        </div>
        <div>
          <Label>Display Order</Label>
          <Input
            type="number"
            value={Number(formData.display_order) || 0}
            onChange={(e) =>
              setFormData({
                ...formData,
                display_order: parseInt(e.target.value) || 0,
              })
            }
          />
        </div>
        <div className="flex space-x-2">
          <Button type="submit">Save</Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
}
