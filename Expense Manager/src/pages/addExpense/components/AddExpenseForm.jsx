import { useState } from "react";
import "../../addExpense/AddExpense.css";
import { addUserExpense, updateUserExpense,getCategory } from "../../../utils/userStorage";


const emptyExpense = {
    title: "",
    amount: 0,
    category: "",
    description: "",
    transactionType: "sent"
};

function AddExpenseForm({ expenseToEdit, onSaved }) {

    const [expense, setExpense] = useState(() => expenseToEdit || emptyExpense);

    const [categories, setCategories] = useState(() => getCategory());

    const saveExpense = (event)=>{
        event.preventDefault();

        const saved = expenseToEdit
            ? updateUserExpense(expenseToEdit.id, expense)
            : addUserExpense({
                ...expense,
                id: Date.now(),
                createdAt: new Date().toISOString()
            });

        if (saved === undefined || saved === false) {
            alert("Please log in before saving an expense");
            return;
        }

        if (expenseToEdit) {
            onSaved?.();
        } else {
            setExpense(emptyExpense);
        }

    }

    return (
        <form onSubmit={saveExpense}>

            <label htmlFor="title">Expense Title</label>
            <input
                type="text"
                id="title"
                className="input-div"
                placeholder="e.g., Monthly Grocery, Stationery"
                value={expense.title}
                onChange={(event) => setExpense({
                    ...expense,
                    title: event.target.value
                })}
            />

            <label htmlFor="amount">Amount (₹)</label>

            <div className="amount-div input-div">
                <span>₹</span>
                <input
                    type="number"
                    id="amount"
                    placeholder="0.00"
                    value={expense.amount === 0 ? "" : expense.amount}
                    onChange={(event) => setExpense({
                        ...expense,
                        amount: Number(event.target.value)
                    })}
                />
            </div>

            <label htmlFor="category">Category</label>

            <select
                name="Category"
                id="category"
                className="input-div"
                value={expense.category}
                onChange={(event) =>
                    setExpense({
                        ...expense,
                        category: Number(event.target.value)
                    })
                }
            >
                <option value="" disabled>
                    Select category
                </option>

                {categories.map((category) => (
                    <option
                        key={category.id}
                        value={category.id}
                    >
                        {category.name}
                    </option>
                ))}
            </select>

            <div className="expense-type-options">
                <label className="expense-type-option">
                    <input
                        type="checkbox"
                        checked={expense.transactionType === "sent"}
                        onChange={() => setExpense({
                            ...expense,
                            transactionType: "sent"
                        })}
                    />
                    Sent
                </label>

                <label className="expense-type-option">
                    <input
                        type="checkbox"
                        checked={expense.transactionType === "received"}
                        onChange={() => setExpense({
                            ...expense,
                            transactionType: "received"
                        })}
                    />
                    Received
                </label>
            </div>

            <label htmlFor="description">Description (Optional)</label>

            <textarea
                id="description"
                className="input-div description-input"
                placeholder="Add some notes about this expense..."
                value={expense.description}
                onChange={(event) => setExpense({
                    ...expense,
                    description: event.target.value
                })}
            ></textarea>

            <div className="expense-btns">
                <button type="submit" className="save-btn">
                    Save Expense
                </button>

                <button type="button" className="cancel-btn">
                    Cancel
                </button>
            </div>

        </form>

    )
}

export default AddExpenseForm;