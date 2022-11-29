import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
// https://dull-tan-gopher-kit.cyclic.app/api/signin

// mocked users
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  // Get data from your database
  const { method, body } = _req;

  switch (method) {
    case "GET":
      // Get data from your database
      console.log("toy re mareao", body);
      res.status(200).json(users);
      break;
    case "POST":
      // Update or create data in your database
      const { username, email, password } = body;
      // make axios post
      const response = await axios.post("http://localhost:8000/api/signin", {
        username,
        email,
        password,
      });
      console.log("RESPONSE", response.data);
      res.status(200).json(response.data);
      break;
    default:
      res.status(200).json(users);
  }
}
