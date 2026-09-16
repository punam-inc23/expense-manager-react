import { useState } from "react";
import "../../addExpense/AddExpense.css";
import { addUserExpense } from "../../../utils/userStorage";


function AddExpenseForm() {

    const [expense, setExpense] = useState({
        title:"",
        amount: 0,
        category: "",
        description: "",
        transactionType: "sent"
    })

    const saveExpense = (event)=>{
        event.preventDefault();

        const saved = addUserExpense({
            ...expense,
            id: Date.now(),
            createdAt: new Date().toISOString()
        });

        if (!saved) {
            alert("Please log in before saving an expense");
        }

        setExpense({
            title: "",
            amount: 0,
            category: "",
            description: "",
            transactionType: "sent"
        });

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
                onChange={(event) => setExpense({
                    ...expense,
                    category: event.target.value
                })}
            >
                <option value="" disabled>
                    Select category
                </option>
                <option value="Food & Drink">Food & Drink</option>
                <option value="Education">Education</option>
                <option value="Income">Income</option>
                <option value="Housing">Housing</option>
                <option value="Groceries">Groceries</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Transport">Transport</option>
                <option value="Shopping">Shopping</option>
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