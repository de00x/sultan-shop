import { getProductCard } from "./get/getProductCard";
import { getAllProducts } from "./get/getAllProducts";
import { getPromoProducts } from "./get/getPromoProducts";
import { getProductsByParameters } from "./get/getProductsByParameters";

export const Controller = {
  get: {
    getAllProducts,
    getProductCard,
    getPromoProducts,
    getProductsByParameters,
  },
};
