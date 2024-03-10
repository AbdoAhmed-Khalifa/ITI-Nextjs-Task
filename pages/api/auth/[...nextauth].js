import NextAuth from 'next-auth/next';
import github from 'next-auth/providers/github';
export default NextAuth({
  providers: [
    github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  // pages: {
  //   signIn: '/login',
  //   error: '/login',
  //   verifyRequest: '/login',
  //   newUser: '/login',
  // },
  // callbacks: {
  //   async session(session, user) {
  //     session.user = user;
  //     return session;
  //   },
  // },
});
