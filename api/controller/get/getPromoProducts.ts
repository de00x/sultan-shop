import { Request, Response } from "express";
import { DbModel } from "../../db/connect";

export const getPromoProducts = async (req: Request, res: Response) => {
  const success = await DbModel.getPromoProducts();
  if (success) {
    res.json(success);
  } else res.json({ success: false });
};
