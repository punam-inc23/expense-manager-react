import "../addExpense/AddExpense.css";
import pro_tip from "../../assets/icons/tip.png";
import AddExpenseForm from "./components/AddExpenseForm";

function AddExpense({ expenseToEdit, onSaved }) {
    return (
        <div className="expense-div">

            <div className="expense-head">
                <h1>{expenseToEdit ? "Edit Expense" : "Add New Expense"}</h1>
                <p>
                    Keep track of your academic and personal spending to stay on budget.
                </p>
            </div>

            <AddExpenseForm expenseToEdit={expenseToEdit} onSaved={onSaved} />
            
            <div className="pro-tip-div">
                <img src={pro_tip} alt="Pro Tip" />

                <div className="pro-tip-data">
                    <p className="pro-tip-head">Pro Tip</p>
                    <p className="pro-tip-subhead">
                        Categorizing your expenses correctly helps the Academic Budget Planner
                        provide better insights for your semester spending.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default AddExpense;