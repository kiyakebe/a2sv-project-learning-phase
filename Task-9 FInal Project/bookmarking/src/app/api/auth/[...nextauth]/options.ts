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
      async authorize(credentials, req) {
        const response = await fetch(
          "https://akil-backend.onrender.com/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          }
        );

        // console.log("Response from the login server: ", response);

        const user = await response.json();

        // console.log("User from the login server: ", user);

        if (user && user.data) {
          return {
            id: user.data.id,
            accessToken: user.data.accessToken,
            refreshToken: user.data.refreshToken,
            name: user.data.name,
            email: user.data.email,
            role: user.data.role,
            profileComplete: user.data.profileComplete,
            message: user.data.message,
            success: user.data.success,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      return true;
    },
    async jwt({ token, user }: any) {
        // console.log("From user login jwt callback before modification: ", token, user);
      if (user) {
        token.accessToken = user.accessToken || "";
        token.refreshToken = user.refreshToken || "";
      }
      // console.log("From user login jwt callback after modification: ", token, user);
      return token;
    },
    async session({ session, token }: any) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      // console.log("From user login session callback after modification: ", session, token);
      return session;
    },
  },
};
