import { collection, addDoc, getDoc } from "firebase/firestore";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { IUser } from "../../../store/ducks/auth/types";
import { firestore } from "../../../utils/firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "Bad Request" });
    return;
  }
  const usersCol = collection(firestore, "users");
  const userRef = await addDoc(usersCol, {
    email,
    password,
  });
  const user = await getDoc(userRef);
  const accessToken = jwt.sign({ email }, "SECRET");
  res.status(200).json({ accessToken });
}
