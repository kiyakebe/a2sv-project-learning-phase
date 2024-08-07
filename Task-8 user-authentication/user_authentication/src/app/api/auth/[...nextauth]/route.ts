import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        const res = await fetch("https://akil-backend.onrender.com/login", {
          method: "POST",
          body: JSON.stringify({
            redirect: false,
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        const reer = await res.json();
        const user = reer.data;

        if (res.ok && user) {
          return {
            id: user.id,
            accessToken: user.accessToken,
            refreshToken: user.refreshToken,
            name: user.name,
            email: user.email,
            role: user.role,
            profileComplete: user.profileComplete,
            message: user.message,
            success: user.success,
          };
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, profile, account, credentials }: any) {
      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
