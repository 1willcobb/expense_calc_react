import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import categories from "./Categories";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 3, category: "Utilities" },
    { id: 2, description: "sdf", amount: 3, category: "Groceries" },
    { id: 3, description: "asdfasd", amount: 3, category: "Entertainment" },
    { id: 4, description: "asd", amount: 3, category: "Utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
