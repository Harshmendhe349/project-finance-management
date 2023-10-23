import React, { useState } from 'react';

function EditExpenseForm({ expense, categories, onSaveEdit, onCancelEdit }) {
  const [editedExpense, setEditedExpense] = useState({ ...expense });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedExpense({
      ...editedExpense,
      [name]: value,
    });
  };


  const handleSaveClick = () => {
    onSaveEdit(editedExpense);
  };

  const handleCancelClick = () => {
    onCancelEdit();
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-96">
      <span
        className="absolute top-2 right-2 text-gray-600 cursor-pointer"
        onClick={handleCancelClick}
      >
        &times;
      </span>
      <h2 className="text-lg font-semibold mb-2">Edit Expense</h2>
      <div className="mb-2">
        <label className="text-sm font-semibold mb-1 block">Name</label>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          value={editedExpense.Name}
          onChange={handleInputChange}
          className="w-full p-2 rounded border border-gray-400"
        />
      </div>
      <div className="mb-2">
        <label className="text-sm font-semibold mb-1 block">Category</label>
        <select
          name="Category"
          value={editedExpense.Category}
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
          value={editedExpense.date_of_expense}
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
          value={editedExpense.Amount}
          onChange={handleInputChange}
          className="w-full p-2 rounded border border-gray-400"
        />
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded w-full"
        onClick={handleSaveClick}
      >
        Save Changes
      </button>
    </div>
  );
}

export default EditExpenseForm;
