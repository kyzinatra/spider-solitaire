import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuid } from "uuid";
import { auth, db } from "../../../../admin.config";
import { TGrid } from "../../../types/card";
import { OriginTest } from "../../../utils/originTest";
export type TSimpleResponse = { success: boolean; message: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<TSimpleResponse>) {
  if (req.method !== "POST" || !OriginTest.test(req.headers.origin || "")) {
    res.status(403).json({ message: "Incorrect method or origin!", success: false });
    return;
  }
  try {
    const token = req.headers.authorization || "";
    const cards = req.body.cards as TGrid;
    const claims = await auth.verifyIdToken(token);
    const user = await auth.getUser(claims.uid);
    if (user.uid) {
      const mapId = uuid();
      db.ref("/maps/" + mapId).set({
        userId: user.uid,
        userEmail: user.email,
        displayName: user.displayName,
        map: cards,
        mapId,
      });
      res.status(200).json({ success: true, message: "Карта успешно добавлена!" });
    } else {
      res.status(400).json({ success: false, message: "Что-то пошло не так..." });
    }
  } catch (e) {
    res
      .status(400)
      .json({ success: false, message: (e as Error).message || "Что-то пошло не так..." });
  }
}
