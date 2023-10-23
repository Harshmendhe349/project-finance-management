import React from 'react';
import DeleteButton from '../deleteExpenses/deleteExpenses';
import EditExpense from '../editExpenses/editExpense';

function ExpenseTable({ expenses, onDeleteExpense,onEditExpense }) {
  const categories = [
    'Category 1',
    'Category 2',
    'Category 3',
  ];
  
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-400 px-4 py-2">Name</th>
          <th className="border border-gray-400 px-4 py-2">Category</th>
          <th className="border border-gray-400 px-4 py-2">Date of Expense</th>
          <th className="border border-gray-400 px-4 py-2">Amount</th>
          <th className="border border-gray-400 px-4 py-2">Updated at</th>
          <th className="border border-gray-400 px-4 py-2">Created By</th>
          <th className="border border-gray-400 px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((data, index) => (
          <tr key={index} className="border border-gray-400">
            <td className="border border-gray-400 px-4 py-2">{data.Name}</td>
            <td className="border border-gray-400 px-4 py-2">{data.Category}</td>
            <td className="border border-gray-400 px-4 py-2">{data.date_of_expense}</td>
            <td className="border border-gray-400 px-4 py-2">${parseFloat(data.Amount).toFixed(2)}</td>
            <td className="border border-gray-400 px-4 py-2">{data.updated_at}</td>
            <td className="border border-gray-400 px-4 py-2">{data.created_by}</td>
            <td className="border border-gray-400 px-4 py-2">
              <div className="flex space-x-2">
                <EditExpense onEditExpense={onEditExpense}expense={data} categories={categories} />
                <DeleteButton onDeleteClick={() => onDeleteExpense(index)} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
