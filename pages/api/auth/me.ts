import jwt from "jsonwebtoken";
import { NextApiResponse } from "next";
import { IUser } from "../../../store/ducks/auth/types";
import { ErrorResponse, NextApiRequestWithUser } from "../../../types";
import { authMiddleware } from "../../../utils/middlewares/auth";

function handler(
  req: NextApiRequestWithUser,
  res: NextApiResponse<IUser | ErrorResponse>
) {
  res.status(200).json(req.user);
}
export default authMiddleware(handler);
