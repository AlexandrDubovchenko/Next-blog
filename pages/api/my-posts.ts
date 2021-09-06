import { DocumentReference } from "firebase/firestore";
import { NextApiResponse } from "next";
import { NextApiRequestWithUser } from "../../types";
import { getDataFromRefs } from "../../utils/firebase";
import { authMiddleware } from "../../utils/middlewares/auth";

async function handler(req: NextApiRequestWithUser, res: NextApiResponse) {
  try {
    const { user } = req;
    const postsRefs = user.posts;
    const posts = await getDataFromRefs(postsRefs);
    res.status(200).json(posts);
  } catch (error) {
    res.status(402).json({ error });
  }
}

export default authMiddleware(handler);
