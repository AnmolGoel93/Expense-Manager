import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = ({ onYearChangeHandler, selectedYearValue }) => {
  const yearSelectChangeHandler = (event) => {
    onYearChangeHandler(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__year">
        <label htmlFor="year">Filter by year</label>
        <select
          name="year"
          id="year"
          onChange={yearSelectChangeHandler}
          value={selectedYearValue}
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
