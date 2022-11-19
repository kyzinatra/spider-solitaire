// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../firebase.config";
import { set, ref } from "firebase/database";
import { v4 as uuid } from "uuid";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: "John Doe" });
}
