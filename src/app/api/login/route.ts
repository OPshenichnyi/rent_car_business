import connectMongoDB from '@/app/lib/connectDB';
import User from '../../../../Schema/user';

import bcrypt from 'bcryptjs';

// import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: any, res: any) {
  const { email, password } = await req.body;
  await connectMongoDB();
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    return res.status(409).json({ message: 'Email or password is incorrect' });
  }
  return res.status(200).json({ message: 'User logged in' });
}
