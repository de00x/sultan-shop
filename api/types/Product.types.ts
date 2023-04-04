export interface IProduct {
  id: number;
  name: string;
  inStock: boolean;
  size: string;
  sizeType: string;
  quantityBox?: number;
  boxSize?: string;
  boxWeight?: number;
  barcode: number;
  article: number;
  producer: string;
  brand: string;
  description: string;
  price: string;
  urlImg: string;
  typeOfCare: string[];
  characteristics: {
    purpose: string;
    type: string;
  };
}
