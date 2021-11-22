import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map(({ id, title, amount, date }) => {
        return (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        );
      })}
    </Card>
  );
}

export default Expenses;
