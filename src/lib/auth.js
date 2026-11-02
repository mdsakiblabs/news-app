import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGO_DB_URI);
const db = client.db("news-users");

export const auth = betterAuth({
   trustedOrigins: [
    process.env.BETTER_AUTH_URL,
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : undefined,
    ...(process.env.NODE_ENV === "development"
      ? ["http://localhost:3000"]
      : []),
  ].filter(Boolean),
  
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: { 
    enabled: true, 
  }, 
  // socialProviders: { 
  //   github: { 
  //     clientId: process.env.GITHUB_CLIENT_ID,
  //     clientSecret: process.env.GITHUB_CLIENT_SECRET 
  //   }, 
  // }, 
});