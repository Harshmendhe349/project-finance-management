import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import ConfirmationDialog from './confirmationDialog'; // Import the ConfirmationDialog component

function DeleteButton({ onDeleteClick }) {
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);

  const openConfirmation = () => {
    setConfirmationVisible(true);
  };

  const closeConfirmation = () => {
    setConfirmationVisible(false);
  };

  const handleDelete = () => {
    onDeleteClick();
    closeConfirmation();
  };

  return (
    <div>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        onClick={openConfirmation}
      >
        <AiFillDelete />
      </button>

      {isConfirmationVisible && (
        <ConfirmationDialog
          message="Are you sure you want to delete this item?"
          onConfirm={handleDelete}
          onCancel={closeConfirmation}
        />
      )}
    </div>
  );
}

export default DeleteButton;
