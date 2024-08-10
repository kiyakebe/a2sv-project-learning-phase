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

        if (user) {
          return user.data;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      //   console.log(
      //     "From user login singIn callback: ",
      //     user,
      //     account,
      //     profile,
      //     email,
      //     credentials
      //   );
      return true;
    },
    async jwt({ token, user }: any) {
      //   console.log("From user login jwt callback: ", token, user);
      token = { ...token, ...user };
        console.log("From user login jwt callback: ", token, user);

      return token;
    },
    async session({ session, token }: any) {
      session.user = {
        // id: token.id,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        // accessTokenExpires: token.accessTokenExpires,
        // Add any additional user data you want to include
      };
      //   console.log("From user login session callback: ", session, token);
      return session;
    },
  },
};
