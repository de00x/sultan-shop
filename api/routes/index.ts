import * as express from "express";
import { Controller } from "../controller";

const routes = express.Router();

routes.get("/allProducts", Controller.get.getAllProducts);
routes.get("/productCard", Controller.get.getProductCard);
routes.get("/promotionalProducts", Controller.get.getPromoProducts);
routes.get("/searchByParameters", Controller.get.getProductsByParameters);

export default routes;
