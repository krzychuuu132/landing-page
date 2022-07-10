interface ProductImages {
  src: string;
}

interface ProductFeature {
  title: string;
}
interface ACFData {
  features: Array<ProductFeature>;
  location: string;
  per_month: number;
}
interface ProductData {
  id: number;
  images: Array<ProductImages>;
  name: string;
  description?: string;
  acf: ACFData;
  price: number;
}

interface SubcategoryData {
  title: string;
  id: number;
  name: string;
  slug: string;
  display: string;
  products: Array<ProductData>;
}

interface LinkHref {
  href: string;
}

interface SubcategoryLinks {
  collection: Array<LinkHref>;
  self: Array<LinkHref>;
}

interface CategoryData {
  title: string;
  id: number;
  parent: number;
  name: string;
  slug: string;
  display: string;
  _links: SubcategoryLinks;
  subcategory: Array<SubcategoryData>;
}

interface CategoriesData {
  category: Array<CategoryData>;
}

interface CategoryIndentifier {
  categoryID: number;
  categoryTitle: string;
}

export {
  ProductImages,
  ProductFeature,
  ACFData,
  ProductData,
  SubcategoryData,
  LinkHref,
  SubcategoryLinks,
  CategoryData,
  CategoriesData,
  CategoryIndentifier,
};
