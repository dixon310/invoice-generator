import React from 'react';

function InvoicePreview({ invoiceData }) {
  const { clientName, clientAddress, items } = invoiceData;

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Invoice</h2>
      <p className="mb-2">
        <strong>Client Name:</strong> {clientName}
      </p>
      <p className="mb-4">
        <strong>Client Address:</strong> {clientAddress}
      </p>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2 text-left">Description</th>
            <th className="border p-2 text-right">Quantity</th>
            <th className="border p-2 text-right">Price</th>
            <th className="border p-2 text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.description}</td>
              <td className="border p-2 text-right">{item.quantity}</td>
              <td className="border p-2 text-right">${item.price}</td>
              <td className="border p-2 text-right">
                ${item.quantity * item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="text-right mt-4">
        Total: <span className="font-bold">${calculateTotal()}</span>
      </h3>
    </div>
  );
}

export default InvoicePreview;
