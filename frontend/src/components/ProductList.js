import React from "react";

const ProductList = ({
  products,
  deleteProduct,
  setEditingProduct
}) => {

  return (
    <table className="table table-bordered">

      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Min Stock</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>

        {products.map((product) => (

          <tr
            key={product._id}

            style={{
              backgroundColor:
                product.quantity <= product.minStock
                  ? "#ffcccc"
                  : "white"
            }}
          >

            <td>{product.name}</td>

            <td>{product.category}</td>

            <td>{product.price}</td>

            <td>{product.quantity}</td>

            <td>{product.minStock}</td>

            <td>

              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() =>
                  setEditingProduct(product)
                }
              >
                Edit
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() =>
                  deleteProduct(product._id)
                }
              >
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
};

export default ProductList;