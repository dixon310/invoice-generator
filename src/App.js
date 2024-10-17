import React, { useState, useRef } from 'react';
import InvoiceForm from './InvoiceForm';
import InvoicePreview from './InvoicePreview';
import { useReactToPrint } from 'react-to-print';

function App() {
  const [invoiceData, setInvoiceData] = useState({});
  const invoiceRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  });

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Invoice Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InvoiceForm setInvoiceData={setInvoiceData} />
        <div>
          <button
            onClick={handlePrint}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4"
          >
            Print Invoice
          </button>
          <div ref={invoiceRef}>
            <InvoicePreview invoiceData={invoiceData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
