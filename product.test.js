const {
  resetProducts,
  addProduct,
  removeProduct,
  getProducts,
  getProduct,
  updateProduct,
} = require("./product");

afterEach(() => {
  resetProducts();
});

describe('resetProducts', () => {
    test('should reset products array and id counter', () => {
        resetProducts();
        expect(getProducts()).toEqual([]);
    });
});

describe("addProduct", () => {
  test("Should return a product with name and price if a new product is added to the database.", () => {
    const expected = {
      name: expect.any(String),
      price: expect.any(Number),
    };
    const result = addProduct("mac", 100);
    expect(result).toMatchObject(expected);
  });
  test("Dont have the two parameters", () => {
    expect(() => addProduct("ipad")).toThrow(
      "One of the parameters is not defined"
    );
  });
  test("Product shouldn`t already exist in the database", () => {
    addProduct("iphone", 50);
    expect(() => addProduct("iphone", 50)).toThrow("This product exists");
  });
});

describe("removeProduct", () => {
  test("should remove a product", () => {
    addProduct("Product1", 10);
    removeProduct(0);
    const products = getProducts();
    expect(products).toHaveLength(0);
  });

  test("should throw an error if product does not exist", () => {
    expect(() => removeProduct(0)).toThrow("Product not found");
  });
});

describe("getProduct", () => {
  test("Should return a product by Id", () => {
    addProduct("iPhone", 100);
    const product = getProduct(0);
    expect(product).toEqual({ name: "iPhone", price: 100 });
  });
  test("Should throw an error if product does not exist", () => {
    expect(() => getProduct(0)).toThrow("Product not found");
  });
});

describe("updateProduct", () => {
  test("", () => {
    const expected = {
      id: 1,
      name: "Product",
      price: 10,
    };

    const result = updateProduct(2, "mac", 100);
    expect(result).toMatchObject(expected);
  });

  test("The product does not exist in the database", () => {
    expect(() => updateProduct(900, "Shit", 13)).toThrow(
      "This product does not exist"
    );
  });

  test("Update ID and name", () => {
    expect(updateProduct(3, "Sheep")).not.toBeNull();
  });

  test("Update ID and price", () => {
    expect(updateProduct(901, "", 14)).not.toBeNull();
  });
});

module.exports = {
  resetProducts,
  addProduct,
  removeProduct,
  getProducts,
  getProduct,
  updateProduct,
};
