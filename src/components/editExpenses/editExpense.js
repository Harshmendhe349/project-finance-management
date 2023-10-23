import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';

function EditExpense({ onEditExpense, expense, categories }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedExpense, setEditedExpense] = useState({ ...expense });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedExpense({
      ...editedExpense,
      [name]: value,
    });
  };

  const handleSaveEdit = () => {
    onEditExpense(editedExpense);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay absolute inset-0 bg-gray-800 opacity-25"></div>
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">Edit Expense</p>
                <span
                  className="cursor-pointer text-3xl"
                  onClick={handleCancelEdit}
                >
                  &times;
                </span>
              </div>
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
                <label className="text-sm font-semibold mb-1 block">
                  Date of Expense
                </label>
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
                onClick={handleSaveEdit}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-1"
          onClick={handleEditClick}
        >
          <AiFillEdit />
        </button>
      )}
    </div>
  );
}

export default EditExpense;
