import ExpenseItem from "./ExpenseItem";
import React from "react";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map(({ id, title, amount, date }) => {
        return (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        );
      })}
    </Card>
  );
};

export default Expenses;
