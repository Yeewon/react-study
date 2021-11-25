import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          seleted={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map(({ id, title, amount, date }) => {
          return (
            <ExpenseItem key={id} title={title} amount={amount} date={date} />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
