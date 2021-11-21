import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div>
      {props.items.map(({ id, title, amount, date }) => {
        return (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        );
      })}
    </div>
  );
}

export default Expenses;
