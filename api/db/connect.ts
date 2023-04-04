import * as FyleSync from "lowdb/adapters/FileSync";
import { IProduct } from "../types/Product.types";
import * as lowDb from "lowdb";

const db = lowDb(new FyleSync("./db/db.json"));

export class DbModel {
  public static async getAllProducts(
    prevCatalogPage: number,
    currentCatalogPage: number
  ) {
    const allProducts = db
      .get("all-products")
      .slice(prevCatalogPage, currentCatalogPage)
      .value();

    return allProducts;
  }

  public static async getPromoProducts() {
    const promoProducts = db.get("all-products").slice(0, 8).value();

    return promoProducts;
  }

  public static async getProductsByParameters(
    priceFrom: number,
    priceBefore: number,
    byProducer: string,
    byCareOf: string
  ) {
    let productsByParameters = db
      .get("all-products")
      .value()
      .filter(
        (product: IProduct) =>
          parseFloat(product.price) > priceFrom &&
          parseFloat(product.price) < priceBefore
      );
    if (byProducer !== "0") {
      productsByParameters = productsByParameters.filter(
        (product: IProduct) => product.producer === byProducer
      );
    }
    if (byCareOf !== "0") {
      productsByParameters = productsByParameters.filter(
        (product: IProduct) =>
          byCareOf ===
          product.typeOfCare.find((typeOfCare) => typeOfCare === byCareOf)
      );
    }

    return productsByParameters;
  }

  public static async getProductCard(currentProductId: number) {
    const currentProductCard = db
      .get("all-products")
      .value()
      .filter((product: IProduct) => product.id === currentProductId);
    return currentProductCard;
  }
}
