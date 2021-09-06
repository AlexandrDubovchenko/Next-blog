import { collection, getDocs } from "firebase/firestore";
import { NextApiResponse } from "next";
import { NextApiRequestWithUser } from "../../../types";
import { firestore } from "../../../utils/firebase";

async function handler(req: NextApiRequestWithUser, res: NextApiResponse) {
  try {
    const postsCol = collection(firestore, "posts");
    const postsSnapshot = await getDocs(postsCol);
    const posts = postsSnapshot.docs.map((doc) => doc.data());
    res.status(200).json(posts);
  } catch (error) {
    res.status(402).json({ error });
  }
}

export default handler;
