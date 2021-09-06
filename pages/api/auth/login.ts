import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "Bad Request" });
    return;
  }
  const accessToken = jwt.sign({ email }, "SECRET");
  res.status(200).json({ accessToken });
}
