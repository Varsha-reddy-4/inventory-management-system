import React, { useState, useEffect } from "react";

const ProductForm = ({ addProduct, editingProduct, updateProduct }) => {

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    minStock: ""
  });

  useEffect(() => {
    if (editingProduct) {
      setProduct(editingProduct);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !product.name ||
      !product.category
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingProduct) {
      updateProduct(editingProduct._id, product);
    } else {
      addProduct(product);
    }

    setProduct({
      name: "",
      category: "",
      price: "",
      quantity: "",
      minStock: ""
    });
  };

  return (
    <div className="card p-3 mb-4">

      <h3>
        {editingProduct ? "Edit Product" : "Add Product"}
      </h3>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="form-control mb-2"
          value={product.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          className="form-control mb-2"
          value={product.category}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="form-control mb-2"
          value={product.price}
          onChange={handleChange}
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          className="form-control mb-2"
          value={product.quantity}
          onChange={handleChange}
        />

        <input
          type="number"
          name="minStock"
          placeholder="Minimum Stock"
          className="form-control mb-2"
          value={product.minStock}
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          Save Product
        </button>

      </form>
    </div>
  );
};

export default ProductForm;