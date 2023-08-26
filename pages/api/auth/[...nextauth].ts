import NextAuth, { Account, AuthOptions, ISODateString, Session, TokenSet, User } from "next-auth"
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import { Type } from "typescript";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [    
    {
      id: "google",
      name: "Google",
      type: "oauth",
      wellKnown: "https://accounts.google.com/.well-known/openid-configuration",
      authorization: { params: { scope: "openid email profile", access_type:"offline", prompt: "consent"},  },
      idToken: true,
      checks: ["pkce", "state"],
      profile(profile, tokens) {
        console.log(tokens)
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          tokens: tokens
        }
      },
      style: {
        logo: "/google.svg",
        logoDark: "/google.svg",
        bgDark: "#fff",
        bg: "#fff",
        text: "#000",
        textDark: "#000",
      },
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }    
  ],  
  callbacks:{
    async session ({session, token, user}){      
      return { ...session, id: "pelotudo", token: token }
    },
    // async jwt({ token, account, profile }) {
    //   // Persist the OAuth access_token and or the user id to the token right after signin
    //   if (account) {
    //     token.accessToken = account.refresh_token        
    //   }
    //   return token
    // }
    async jwt ({token, profile, account, user}){       
      return {...token, hola:"hola", ...account }
    }
  }
}  as AuthOptions

export default NextAuth(authOptions)