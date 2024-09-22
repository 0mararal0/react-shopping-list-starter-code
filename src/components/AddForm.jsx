import { useState } from "react";

function AddForm({ allProducts, setAllProducts }) {
  const [nameValue, setNameValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPriceValue(e.target.value);
  };
  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      name: nameValue,
      price: priceValue,
      isPurchased: false,
    };
    const clone = [...allProducts];
    clone.unshift(newProduct);
    setAllProducts(clone);
    setNameValue("");
    setPriceValue(0);
  };
  return (
    <div className="add-form container">
      <h2>Add Form</h2>

      <form onSubmit={handleAddProduct}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={nameValue}
            onChange={handleNameChange}
          />
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            name="price"
            value={priceValue}
            onChange={handlePriceChange}
          />
        </div>

        <button>Add</button>
      </form>
    </div>
  );
}

export default AddForm;
