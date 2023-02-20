import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      date: new Date(2023, 3, 23),
      title: "D mart",
      price: 2000,
    },
    {
      date: new Date(2023, 3, 25),
      title: "R mart",
      price: 500,
    },
    {
      date: new Date(2023, 3, 28),
      title: "Vehicle Maintainance",
      price: 1000,
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        price={expenses[0].price}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        price={expenses[1].price}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        price={expenses[2].price}
      ></ExpenseItem>
    </div>
  );
}

export default App;
