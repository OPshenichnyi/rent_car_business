import type { AuthOptions, User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import type { AdapterUser } from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import Users from '../../Schema/user';
import connectMongoDB from '@/app/lib/connectDB';
import bcrypt from 'bcryptjs';

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email', required: true },
        password: { label: 'Password', type: 'password', required: true },
      },
      async authorize(credentials, req) {
        await connectMongoDB();
        if (!credentials?.email || !credentials.password) return null;
        const user = await Users.findOne({ email: credentials.email });

        if (!user) return null;

        const comparePassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!comparePassword) {
          return null;
        }

        const { password, ...userWithoutPassword } = user.toObject();

        return userWithoutPassword as User;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        await connectMongoDB();
        const existingUser = await Users.findOne({ email: user.email });
        if (!existingUser) {
          await Users.create({
            email: user.email,
            googleId: user.id,
          });
        }
        if (
          existingUser.googleId !== user.id &&
          existingUser.email === user.email
        ) {
          throw new Error('User already exists');
        }
      }
      return true;
    },
    async jwt({ token, user }: { token: JWT; user?: AdapterUser | User }) {
      if (user) {
        token.id = (user as any)._id; // Додаємо MongoDB id до токену
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      if (token && session.user) {
        session.user.id = token.id as string; // Додаємо id до сесії
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.JWT_SECRET!, // Забезпечте наявність цього секрету у вашому .env файлі
  },
};

export default authConfig;
