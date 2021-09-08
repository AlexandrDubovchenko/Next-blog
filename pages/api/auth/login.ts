import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "Bad Request" });
    return;
  }
  const accessToken = jwt.sign({ email }, "SECRET");
  res.status(200).json({ accessToken });
}
