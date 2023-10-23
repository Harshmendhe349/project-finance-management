import React, { useState } from 'react';

const overlayClass = "fixed inset-0 bg-gray-100 opacity-60 z-40";

function ExpenseForm({ onAddExpense, onClose }) {
  const [formData, setFormData] = useState({
    Name: '',
    Category: '', 
    date_of_expense: '',
    Amount: 0,
    updated_at: new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }),
    created_by: 'me',
  });

  const categories = [
    'Category 1',
    'Category 2',
    'Category 3',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddExpense = () => {
    onAddExpense(formData);
    onClose(); // Close the form
    setFormData({
      Name: '',
      Category: '',
      date_of_expense: '',
      Amount: 0,
      updated_at: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
      created_by: 'me', // You can set the appropriate user
    });
  };

  return (
    <>
      {/* Modal overlay */}
      <div className={overlayClass} onClick={onClose}></div>
      <div className="bg-white p-4 rounded shadow-md w-96 relative z-50">
        <span
          className="absolute top-2 right-2 text-gray-600 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-lg font-semibold mb-2">New Expense</h2>
        <div className="mb-2">
          <label className="text-sm font-semibold mb-1 block">Name</label>
          <input
            type="text"
            name="Name"
            placeholder="Name"
            value={formData.Name}
            onChange={handleInputChange}
            className="w-full p-2 rounded border border-gray-400"
          />
        </div>
        <div className="mb-2">
          <label className="text-sm font-semibold mb-1 block">Category</label>
          <select
            name="Category"
            value={formData.Category}
            onChange={handleInputChange}
            className="w-full p-2 rounded border border-gray-400"
          >
            <option value="">Select a Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label className="text-sm font-semibold mb-1 block">Date of Expense</label>
          <input
            type="date"
            name="date_of_expense"
            value={formData.date_of_expense}
            onChange={handleInputChange}
            className="w-full p-2 rounded border border-gray-400"
          />
        </div>
        <div className="mb-2">
          <label className="text-sm font-semibold mb-1 block">Amount</label>
          <input
            type="number"
            name="Amount"
            placeholder="Amount"
            value={formData.Amount}
            onChange={handleInputChange}
            className="w-full p-2 rounded border border-gray-400"
          />
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded w-full"
          onClick={handleAddExpense}
        >
          Add Expense
        </button>
      </div>
    </>
  );
}

export default ExpenseForm;
