import { Request, Response } from "express";
import { DbModel } from "../../db/connect";

export const getProductCard = async (req: Request, res: Response) => {
  const currentProductId = Number(req.query.id);
  const success = await DbModel.getProductCard(currentProductId);

  if (success) {
    res.json(success);
  } else res.json({ success: false });
};
