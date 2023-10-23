import React, { useState } from 'react';

function FilterByDate({ expenses, setExpenses }) {
  const [isDescending, setIsDescending] = useState(true);

  const handleFilterByDate = () => {
    const sortedExpenses = expenses.slice().sort((a, b) => {
      const dateA = new Date(a.date_of_expense);
      const dateB = new Date(b.date_of_expense);
      const comparison = dateA - dateB;

      // Toggle between ascending and descending
      if (isDescending) {
        return comparison;
      } else {
        return -comparison;
      }
    });

    setExpenses(sortedExpenses);
    setIsDescending(!isDescending); // Toggle the sorting order
  };

  return (
    <button onClick={handleFilterByDate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {isDescending ? "Sort by Date" : "Sort by Date"}
    </button>
  );
}

export default FilterByDate;
