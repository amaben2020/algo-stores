import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLOUD_ID ?? "",
      clientSecret: process.env.GOOGLE_CLOUD_CLIENT_SECRET ?? "",
    }),
  ],
};

export default NextAuth(authOptions);
