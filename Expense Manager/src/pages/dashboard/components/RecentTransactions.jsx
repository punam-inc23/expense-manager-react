import "./RecentTransactions.css";
import food_drink from "../../../assets/icons/food&drink.png"
import education from "../../../assets/icons/education.png"
import income from "../../../assets/icons/income.png"
import housing from "../../../assets/icons/housing.png"
import groceries from "../../../assets/icons/groceries.png"
import deleteIcon from "../../../assets/icons/delete.png"
import editIcon from "../../../assets/icons/edit.png"


function RecentTransactions() {

    const transactions = [
        {
            id: 1,
            date: "Oct 24, 2024",
            merchant: "Starbucks Coffee",
            category: "Food & Drink",
            amount: "-₹6.50",
            type: "expense",
            icon: food_drink
        },
        {
            id: 2,
            date: "Oct 23, 2024",
            merchant: "University Book Store",
            category: "Education",
            amount: "-₹124.99",
            type: "expense",
            icon: education
        },
        {
            id: 3,
            date: "Oct 22, 2024",
            merchant: "Monthly Allowance",
            category: "Income",
            amount: "+₹800.00",
            type: "income",
            icon: income
        },
        {
            id: 4,
            date: "Oct 20, 2024",
            merchant: "Monthly Rent",
            category: "Housing",
            amount: "-₹650.00",
            type: "expense",
            icon: housing
        },
        {
            id: 5,
            date: "Oct 19, 2024",
            merchant: "Whole Foods Market",
            category: "Groceries",
            amount: "-₹45.20",
            type: "expense",
            icon: groceries
        }
    ];

    return (
        <div className="recent-transactions-card">

            {/* Header */}
            <div className="transactions-header">

                <h3>Recent Transactions</h3>

                <button className="view-all-btn">
                    View All
                </button>

            </div>


            {/* Table Header */}
            <div className="transactions-table-header">

                <div>Date</div>

                <div>Merchant / Details</div>

                <div>Category</div>

                <div>Amount</div>

                <div>Actions</div>

            </div>


            {/* Transactions */}
            <div className="transactions-list">

                {transactions.map((transaction) => (

                    <div
                        className="transaction-row"
                        key={transaction.id}
                    >

                        {/* Date */}
                        <div className="transaction-date">
                            {transaction.date}
                        </div>


                        {/* Merchant */}
                        <div className="merchant-details">

                            <div
                                className={`merchant-icon ${transaction.category
                                    .toLowerCase()
                                    .replace(" & ", "-")
                                    .replace(" ", "-")}`}
                            >
                                <img
                                    className="merchant-icon-img"
                                    src={transaction.icon}
                                    alt={transaction.category}
                                />
                            </div>

                            <span>
                                {transaction.merchant}
                            </span>

                        </div>


                        {/* Category */}
                        <div className="transaction-category">

                            <span
                                className={`category-badge ${transaction.category
                                    .toLowerCase()
                                    .replace(" & ", "-")
                                    .replace(" ", "-")}`}
                            >
                                {transaction.category}
                            </span>

                        </div>


                        {/* Amount */}
                        <div
                            className={`transaction-amount ${transaction.type}`}
                        >
                            {transaction.amount}
                        </div>


                        {/* Actions */}
                        <div className="transaction-actions">

                            <button
                                className="action-btn edit-btn"
                                title="Edit"
                                onClick={() => console.log("Edit:", transaction.id)}
                            >
                                <img
                                    src={editIcon}
                                    alt="Edit"
                                    className="action-icon"
                                />
                            </button>

                            <button
                                className="action-btn delete-btn"
                                title="Delete"
                                onClick={() => console.log("Delete:", transaction.id)}
                            >
                                <img
                                    src={deleteIcon}
                                    alt="Delete"
                                    className="action-icon"
                                />
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default RecentTransactions;  