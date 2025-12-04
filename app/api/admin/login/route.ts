import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
    }

    // Simple authentication - in production, use proper password hashing
    const user = db.prepare('SELECT * FROM admin_users WHERE username = ?').get(username);
    
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // For now, simple password check - CHANGE THIS IN PRODUCTION
    // In production, use bcrypt.compare(password, user.password_hash)
    if (password === 'admin' && username === 'admin') {
      return NextResponse.json({ success: true, message: 'Login successful' });
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}


