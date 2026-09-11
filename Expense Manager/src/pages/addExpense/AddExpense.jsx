import "../addExpense/AddExpense.css";
import pro_tip from "../../assets/icons/tip.png";

function AddExpense() {
    return (
        <div className="expense-div">

            <div className="expense-head">
                <h1>Add New Expense</h1>
                <p>
                    Keep track of your academic and personal spending to stay on budget.
                </p>
            </div>

            <form>

                <label htmlFor="title">Expense Title</label>
                <input
                    type="text"
                    id="title"
                    className="input-div"
                    placeholder="e.g., Monthly Grocery, Stationery"
                />

                <label htmlFor="amount">Amount (₹)</label>

                <div className="amount-div input-div">
                    <span>₹</span>
                    <input
                        type="number"
                        id="amount"
                        placeholder="0.00"
                    />
                </div>

                <label htmlFor="category">Category</label>

                <select
                    name="Category"
                    id="category"
                    className="input-div"
                    defaultValue=""
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

                <label htmlFor="description">Description (Optional)</label>

                <textarea
                    id="description"
                    className="input-div description-input"
                    placeholder="Add some notes about this expense..."
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