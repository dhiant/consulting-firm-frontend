"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  FolderKanban, 
  BookOpen, 
  Clock, 
  MessageSquare,
  LogOut,
  Menu,
  X
} from "lucide-react";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const auth = localStorage.getItem("admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("admin_auth", "true");
        setIsAuthenticated(true);
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
          <p className="text-gray-600 mb-6">Enter your credentials to access the admin panel</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
            
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-50 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-50 focus:border-transparent"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-brand-50 text-white py-2 px-4 rounded-lg hover:bg-brand-100 transition-colors font-semibold"
            >
              Login
            </button>
          </form>
          
          <p className="mt-4 text-sm text-gray-500 text-center">
            Default: username: <strong>admin</strong>, password: <strong>admin</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed lg:static lg:translate-x-0 w-64 bg-white border-r border-gray-200 h-[calc(100vh-73px)] transition-transform duration-300 z-40`}>
          <nav className="p-4 space-y-2">
            <Link
              href="/admin"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-brand-50 text-white font-medium"
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/admin/projects"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <FolderKanban className="w-5 h-5" />
              <span>Projects</span>
            </Link>
            <Link
              href="/admin/blogs"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              <span>Blogs</span>
            </Link>
            <Link
              href="/admin/timeline"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Clock className="w-5 h-5" />
              <span>Timeline</span>
            </Link>
            <Link
              href="/admin/testimonials"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Testimonials</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Projects</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">-</p>
                </div>
                <FolderKanban className="w-8 h-8 text-brand-50" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Blogs</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">-</p>
                </div>
                <BookOpen className="w-8 h-8 text-brand-50" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Timeline Events</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">-</p>
                </div>
                <Clock className="w-8 h-8 text-brand-50" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Testimonials</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">-</p>
                </div>
                <MessageSquare className="w-8 h-8 text-brand-50" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/admin/projects/new"
                className="p-4 border border-gray-200 rounded-lg hover:border-brand-50 hover:bg-brand-50/10 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">Add New Project</h3>
                <p className="text-sm text-gray-600 mt-1">Create a new project entry</p>
              </Link>
              <Link
                href="/admin/blogs/new"
                className="p-4 border border-gray-200 rounded-lg hover:border-brand-50 hover:bg-brand-50/10 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">Add New Blog</h3>
                <p className="text-sm text-gray-600 mt-1">Create a new blog post</p>
              </Link>
              <Link
                href="/admin/timeline/new"
                className="p-4 border border-gray-200 rounded-lg hover:border-brand-50 hover:bg-brand-50/10 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">Add Timeline Event</h3>
                <p className="text-sm text-gray-600 mt-1">Add a new timeline entry</p>
              </Link>
              <Link
                href="/admin/testimonials/new"
                className="p-4 border border-gray-200 rounded-lg hover:border-brand-50 hover:bg-brand-50/10 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">Add Testimonial</h3>
                <p className="text-sm text-gray-600 mt-1">Add a new client review</p>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


