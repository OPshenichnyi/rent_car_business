// Імпортуємо бібліотеку
import NextAuth from "next-auth/next";
// Імпортуємо конфігурацію та передаємо його в NextAuth
import{ authConfig} from "@/config/auth"

// Створюємо слухача
const handler = NextAuth(authConfig);

// Експортуємо методи слухачів GET i POST
export { handler as GET, handler as POST }
// Необхідно створити конфігурацію(для цього ствоюємо в корні проекту папку config та файл auth.ts)