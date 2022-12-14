import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
//import clientPromise from "./lib/mongodb"
import CredentialsProvider from "next-auth/providers/credentials"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  //adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'credentials',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "Insert username" },
          email: { label: "Email", type: "text", placeholder: "Insert email" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // You can also use the `req` object to obtain additional parameters
          // (i.e., the request IP address)

          const res = await fetch('https://dull-tan-gopher-kit.cyclic.app/api/signin', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })
          const user = await res.json()
    

          console.log('res:' + res, 'user:' + user);

          // If no error and we have user data, return it
          if (res.ok && user) {
            return user
          }
          // Return null if user data could not be retrieved
          return null
        }
      })
    ],
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
    },
    secret: process.env.SECRET,
    database: process.env.MONGODB_URI,
})
