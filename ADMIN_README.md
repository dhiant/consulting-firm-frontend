# Admin Panel Documentation

## Overview

This application now includes a fully dynamic admin panel for managing blogs, projects, and reviews. All data is stored in a SQLite database, and images can be uploaded directly to the server.

## Setup

### 1. Install Dependencies

All required dependencies are already installed:

- `better-sqlite3` - SQLite database
- `bcryptjs` - Password hashing
- `tsx` - TypeScript execution for migration scripts

### 2. Run Migration

To migrate existing static data to the database:

```bash
npm run migrate
```

This will:

- Create the database schema
- Migrate all existing projects from `app/projects/data.ts`
- Migrate all existing blogs from `app/blogs/data.ts`
- Migrate all existing reviews from `app/(home)/client-feedback.tsx`

### 3. Access Admin Panel

Navigate to: `http://localhost:3000/admin/login`

⚠️ **Important:** Change the default password in production!

## Features

### Admin Dashboard

The admin panel (`/admin`) provides:

1. **Blogs Management**

   - Create, edit, and delete blog posts
   - Upload images directly
   - Manage content, tags, categories, and related posts

2. **Projects Management**

   - Create, edit, and delete projects
   - Upload images directly
   - Manage project details, sections, and CTAs

3. **Reviews Management**
   - Create, edit, and delete client reviews
   - Manage project names, quotes, authors, and ratings

### Image Upload

- Images are uploaded to `/public/uploads/`
- Supported formats: JPEG, PNG, WebP, GIF
- Maximum file size: 10MB
- Images are automatically given unique filenames

## Database Structure

### Tables

1. **admin_users** - Admin authentication
2. **blogs** - Blog posts with full content
3. **projects** - Project portfolio items
4. **reviews** - Client testimonials/reviews

### Database Location

The SQLite database is stored at: `data/database.db`

## API Routes

### Public Routes (No Authentication)

- `GET /api/public/blogs` - Get all blogs
- `GET /api/public/projects` - Get all projects
- `GET /api/public/reviews` - Get all reviews
- `GET /api/blogs/slug/[slug]` - Get blog by slug
- `GET /api/projects/slug/[slug]` - Get project by slug

### Admin Routes (Authentication Required)

- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/check` - Check authentication status
- `POST /api/upload` - Upload image
- `GET /api/blogs` - Get all blogs (admin)
- `POST /api/blogs` - Create blog
- `PUT /api/blogs/[id]` - Update blog
- `DELETE /api/blogs/[id]` - Delete blog
- Similar routes for projects and reviews

## Frontend Updates

The following components have been updated to fetch from the database:

- `app/(home)/client-feedback.tsx` - Now fetches reviews from API
- Future updates needed for:
  - `app/blogs/page.tsx` - Should fetch from `/api/public/blogs`
  - `app/projects/page.tsx` - Should fetch from `/api/public/projects`

## Security Notes

1. **Session Management**: Currently using simple cookie-based sessions. For production, consider:

   - JWT tokens
   - Secure session storage
   - CSRF protection

2. **Password Security**: Default password should be changed immediately in production

3. **File Upload**:

   - File type validation is implemented
   - File size limits are enforced
   - Consider adding virus scanning in production

4. **Database**:
   - SQLite is suitable for small to medium applications
   - For production with high traffic, consider PostgreSQL or MySQL

## Troubleshooting

### Database not found

- Ensure the `data/` directory exists
- Run the migration script again

### Images not uploading

- Check that `/public/uploads/` directory exists and is writable
- Verify file size is under 10MB
- Check file format is supported

### Authentication issues

- Clear browser cookies
- Verify admin user exists in database
- Check that default admin was created during migration

## Future Enhancements

- [ ] Add pagination for large datasets
- [ ] Add search/filter functionality
- [ ] Add image cropping/resizing
- [ ] Add bulk operations
- [ ] Add activity logs
- [ ] Add user roles and permissions
- [ ] Add rich text editor for blog content
- [ ] Add drag-and-drop for project ordering
