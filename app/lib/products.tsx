type Product = {
  id: string;
  name: string;
  description: string;
};

type Products = {
  [id: string]: Product;
};

export async function getProductData(id: string) {
  // Simulate fetching product data from an API or database
  const products: Products = {
    "1": {
      id: "1",
      name: "First Product",
      description: "This is the first product.",
    },
    "2": {
      id: "2",
      name: "Second Product",
      description: "This is the second product.",
    },
  };
  return products[id];
}
