import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
// import { Token, CustomSession } from "@/type";

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
        const response = await fetch("https://akil-backend.onrender.com/login", {
          method: "POST",
          body: JSON.stringify({
            redirect: false,
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        const res = await response.json();
        console.log("res response", res)
        const user = res.data;
        console.log("user==============",  user)

        if (response.status === 200 && user) {
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
      // console.log("user, profile, account, credentials =====================", user, profile, account, credentials)
      return true;
    },
    async jwt({token, user}: {token: any, user: any}): Promise<any> {
      // console.log("user,token ===================", "user:", user,"token", token)
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = user.accessTokenExpires;
      }

      return token
    },
    async session({ token, session }: { token: any; session: any }) {
      // console.log( "token, session ========================" ,"token: ", token,"session: ", session)
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.accessTokenExpires = token.accessTokenExpires;
      // console.log( "token, session ======================== after" ,"token: ", token,"session: ", session)
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
