import { Request, Response } from "express";
import { DbModel } from "../../db/connect";

export const getAllProducts = async (req: Request, res: Response) => {
  const prevCatalogPage = (Number(req.query.currentPage) - 1) * 18;
  const currentCatalogPage = Number(req.query.currentPage) * 18;

  const success = await DbModel.getAllProducts(
    prevCatalogPage,
    currentCatalogPage
  );
  if (success) {
    res.json(success);
  } else res.json({ success: false });
};
