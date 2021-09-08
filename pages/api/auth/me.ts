import jwt from "jsonwebtoken";
import { NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { IUser } from "../../../store/ducks/auth/types";
import { ErrorResponse, NextApiRequestWithUser } from "../../../types";
import { authMiddleware } from "../../../utils/middlewares/auth";

async function handler(
  req: NextApiRequestWithUser,
  res: NextApiResponse<IUser | ErrorResponse>
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  res.status(200).json(req.user);
}
export default authMiddleware(handler);
