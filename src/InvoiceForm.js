import React, { useState } from 'react';

function InvoiceForm({ setInvoiceData }) {
  const [form, setForm] = useState({
    clientName: '',
    clientAddress: '',
    items: [{ description: '', quantity: 1, price: 0 }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleItemChange = (index, event) => {
    const { name, value } = event.target;
    const items = [...form.items];
    items[index][name] = value;
    setForm({ ...form, items });
  };

  const addItem = () => {
    setForm({
      ...form,
      items: [...form.items, { description: '', quantity: 1, price: 0 }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInvoiceData(form);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Client Name</label>
        <input
          type="text"
          name="clientName"
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Client Address</label>
        <input
          type="text"
          name="clientAddress"
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      {form.items.map((item, index) => (
        <div key={index} className="grid grid-cols-12 gap-4 mb-4">
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={(e) => handleItemChange(index, e)}
            className="col-span-6 border rounded p-2"
          />
          <input
            type="number"
            name="quantity"
            placeholder="Qty"
            onChange={(e) => handleItemChange(index, e)}
            className="col-span-3 border rounded p-2"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={(e) => handleItemChange(index, e)}
            className="col-span-3 border rounded p-2"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addItem}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Item
      </button>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-4"
      >
        Generate Invoice
      </button>
    </form>
  );
}

export default InvoiceForm;
