import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

function NewExpense({ onAddExpense }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        className="bg-green-500 text-white p-2 rounded"
        onClick={openModal}
      >
        + New Expense
      </button>
      {showModal && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
          <ExpenseForm onAddExpense={onAddExpense} onClose={closeModal} />
        </div>
      )}
    </div>
  );
}

export default NewExpense;
