import type { AuthOptions } from 'next-auth'
// Імпортуємо гугл провайдер 
import GoogleProvider from 'next-auth/providers/google'

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            //  Створюємо env.local куди записуємо дані GOOGLE_CLIENT_ID та GOOGLE_SECRET
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        })
    ]

}