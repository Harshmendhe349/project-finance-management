import React, { useState } from 'react';
import data from '../../expenses.json';
import FilterByDate from './filterByDate';
import ExpenseTable from './expenseTable';
import NewExpense from '../createExpenses/newexpense';

function ViewExpenses() {
  const [expenses, setExpenses] = useState(data);
  const [searchTerm, setSearchTerm] = useState(''); // New state for search term

  const handleDeleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleEditExpense = (updatedExpense) => {
    const updatedExpenses = [...expenses];
    const index = updatedExpenses.findIndex((expense) => expense.id === updatedExpense.id);
    if (index !== -1) {
      updatedExpenses[index] = updatedExpense;
      setExpenses(updatedExpenses);
    }
  };

  // Filter expenses by name based on the search term
  const filteredExpenses = expenses.filter((expense) =>
    expense.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="border border-gray-700 p-5 m-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">My Expense Manager</h1>
        <div className="flex space-x-4">
          <FilterByDate expenses={expenses} setExpenses={setExpenses} />
          <input
            className="border border-gray-300 rounded py-2 px-4"
            type="text"
            placeholder="Search Expense by Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <NewExpense onAddExpense={handleAddExpense} />
        </div>
      </div>

      <ExpenseTable
        expenses={filteredExpenses} // Display filtered expenses
        onDeleteExpense={handleDeleteExpense}
        onEditExpense={handleEditExpense}
      />
    </div>
  );
}

export default ViewExpenses;
