import {
  collection,
  addDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  doc,
} from "firebase/firestore";
import { NextApiResponse } from "next";
import { NextApiRequestWithUser } from "../../../types";
import { firestore } from "../../../utils/firebase";
import { authMiddleware } from "../../../utils/middlewares/auth";

async function handler(req: NextApiRequestWithUser, res: NextApiResponse) {
  const newPost = req.body;
  const user = req.user;
  const userRef = doc(firestore, "users", user.id);

  try {
    const postsCol = collection(firestore, "posts");
    const postRef = await addDoc(postsCol, {
      ...newPost,
      author: userRef,
    });
    const post = await getDoc(postRef);
    await updateDoc(userRef, {
      posts: arrayUnion(postRef),
    });

    res.status(200).json(post.data());
  } catch (error) {
    res.status(402).json({ error });
  }
}

export default authMiddleware(handler);
