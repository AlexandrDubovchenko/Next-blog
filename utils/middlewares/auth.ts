import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { IUser } from "../../store/ducks/auth/types";
import { NextApiRequestWithUser } from "../../types";
import {
  collection,
  CollectionReference,
  getDocs,
  query,
  where,
} from "@firebase/firestore";
import { firestore } from "../firebase";
export const authMiddleware =
  (handler: (req: NextApiRequestWithUser, res: NextApiResponse) => void) =>
  async (req: NextApiRequestWithUser, res: NextApiResponse) => {
    const token = req.headers.authorization;
    if (!token) {
      res.status(401).json({ error: "Unathorized" });
      return;
    }
    const user = jwt.verify(token, "SECRET") as IUser;
    const userQuery = query<IUser>(
      collection(firestore, "users") as CollectionReference<IUser>,
      where("email", "==", user.email)
    );
    const userSnapshot = await getDocs(userQuery);

    const users: Array<IUser> = [];
    userSnapshot.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });

    if (!users.length) {
      res.status(401).json({ error: "Unathorized" });
      return;
    }

    req.user = users[0];
    return handler(req, res);
  };
