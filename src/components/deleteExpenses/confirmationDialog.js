import React from 'react';

function ConfirmationDialog({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 w-64 text-center rounded shadow-md">
        <p className="text-lg font-semibold mb-4">{message}</p>
        <div className="flex justify-center">
          <button
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationDialog;
