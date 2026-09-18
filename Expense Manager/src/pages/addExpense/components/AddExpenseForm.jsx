import { useReducer } from "react";
import "../../addExpense/AddExpense.css";
import useExpenses from "../../../hooks/useExpenses";
import useCategories from "../../../hooks/useCategories";


const emptyExpense = {
    title: "",
    amount: 0,
    category: "",
    description: "",
    transactionType: "sent"
};

function expenseFormReducer(state, action) {
    switch (action.type) {
        case "fieldChanged":
            return { ...state, [action.field]: action.value };
        case "reset":
            return { ...emptyExpense };
        default:
            return state;
    }
}

function AddExpenseForm({ expenseToEdit, onSaved }) {
    const [expense, dispatchForm] = useReducer(
        expenseFormReducer,
        expenseToEdit || emptyExpense,
        (initialExpense) => ({ ...initialExpense })
    );
    const { addExpense, updateExpense } = useExpenses();
    const { categories } = useCategories();

    const saveExpense = (event)=>{
        event.preventDefault();

        if (expenseToEdit) {
            updateExpense({ id: expenseToEdit.id, changes: expense });
        } else {
            addExpense({
                ...expense,
                id: Date.now(),
                createdAt: new Date().toISOString()
            });
        }

        if (expenseToEdit) {
            onSaved?.();
        } else {
            dispatchForm({ type: "reset" });
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
                onChange={(event) => dispatchForm({ type: "fieldChanged", field: "title", value: event.target.value })}
            />

            <label htmlFor="amount">Amount (₹)</label>

            <div className="amount-div input-div">
                <span>₹</span>
                <input
                    type="number"
                    id="amount"
                    placeholder="0.00"
                    value={expense.amount === 0 ? "" : expense.amount}
                    onChange={(event) => dispatchForm({ type: "fieldChanged", field: "amount", value: Number(event.target.value) })}
                />
            </div>

            <label htmlFor="category">Category</label>

            <select
                name="Category"
                id="category"
                className="input-div"
                value={expense.category}
                onChange={(event) => dispatchForm({ type: "fieldChanged", field: "category", value: Number(event.target.value) })}
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
                        onChange={() => dispatchForm({ type: "fieldChanged", field: "transactionType", value: "sent" })}
                    />
                    Sent
                </label>

                <label className="expense-type-option">
                    <input
                        type="checkbox"
                        checked={expense.transactionType === "received"}
                        onChange={() => dispatchForm({ type: "fieldChanged", field: "transactionType", value: "received" })}
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
                onChange={(event) => dispatchForm({ type: "fieldChanged", field: "description", value: event.target.value })}
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