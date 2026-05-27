import React, { useEffect, useState } from "react";

import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

import {
  getProducts,
  addProduct as createProduct,
  updateProduct as editProduct,
  deleteProduct as removeProduct
} from "./services/api";

function App() {

  const [products, setProducts] = useState([]);

  const [editingProduct, setEditingProduct] =
    useState(null);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {

      const res = await getProducts();

      setProducts(res.data);

    } catch (error) {

      alert("Error fetching products");

    }
  };

  const addProduct = async (product) => {

    try {

      await createProduct(product);

      fetchProducts();

    } catch (error) {

      alert("Error adding product");

    }
  };

  const updateProduct = async (id, product) => {

    try {

      await editProduct(id, product);

      setEditingProduct(null);

      fetchProducts();

    } catch (error) {

      alert("Error updating product");

    }
  };

  const deleteProduct = async (id) => {

    try {

      await removeProduct(id);

      fetchProducts();

    } catch (error) {

      alert("Error deleting product");

    }
  };

  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === ""
        ? true
        : product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (

    <div className="container mt-4">

      <h1 className="text-center mb-4">
        Inventory Management System
      </h1>

      <ProductForm
        addProduct={addProduct}
        editingProduct={editingProduct}
        updateProduct={updateProduct}
      />

      <div className="d-flex gap-2 mb-3">

        <input
          type="text"
          placeholder="Search by name"
          className="form-control"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          className="form-select"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >

          <option value="">
            All Categories
          </option>

          {[...new Set(
            products.map((p) => p.category)
          )].map((cat, index) => (

            <option key={index} value={cat}>
              {cat}
            </option>

          ))}

        </select>

      </div>

      <ProductList
        products={filteredProducts}
        deleteProduct={deleteProduct}
        setEditingProduct={setEditingProduct}
      />

    </div>
  );
}

export default App;