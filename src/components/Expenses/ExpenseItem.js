import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = ({ expense: { title, amount, date } }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__details">
          <h2>{title}</h2>
          <div>${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
