import { Request, Response } from "express";
import { DbModel } from "../../db/connect";

export const getProductsByParameters = async (req: Request, res: Response) => {
  const priceFrom = parseFloat(req.query.priceFrom);
  const priceBefore = parseFloat(req.query.priceBefore);
  const byProducer = req.query.producer;
  const byCareOf = req.query.careOf;

  const success = await DbModel.getProductsByParameters(
    priceFrom,
    priceBefore,
    byProducer,
    byCareOf
  );

  if (success) {
    res.json(success);
  } else res.json({ success: false });
};
