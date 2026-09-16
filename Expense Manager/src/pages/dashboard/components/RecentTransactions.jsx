import "./RecentTransactions.css";
import { getUser } from "../../../utils/userStorage";

import food_drink from "../../../assets/icons/food&drink.png";
import education from "../../../assets/icons/education.png";
import income from "../../../assets/icons/income.png";
import housing from "../../../assets/icons/housing.png";
import groceries from "../../../assets/icons/groceries.png";
import entertainment from "../../../assets/icons/entertainment.png"
import transport from "../../../assets/icons/transport.png";
import shopping from "../../../assets/icons/shopping.png";

import deleteIcon from "../../../assets/icons/delete.png";
import editIcon from "../../../assets/icons/edit.png";

const categoryIcons = {
    "Food & Drink": food_drink,
    Education: education,
    Income: income,
    Housing: housing,
    Groceries: groceries,
    Entertainment: entertainment,
    Transport: transport,
    Shopping: shopping
};

function RecentTransactions({limit = null, showHeader = true, showViewAll = true, showPagination = false}) {

    const user = getUser();
    const savedExpenses = Array.isArray(user?.expense)
        ? user.expense
        : user?.expense
            ? [user.expense]
            : [];

    const transactions = savedExpenses.map((expense) => {
        const isReceived = expense.transactionType === "received";
        const amount = Math.abs(Number(expense.amount) || 0).toFixed(2);

        return {
            id: expense.id,
            date: expense.createdAt
                ? new Date(expense.createdAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                })
                : "Date unavailable",
            merchant: expense.title,
            category: expense.category,
            amount: `${isReceived ? "+" : "-"}₹${amount}`,
            type: isReceived ? "income" : "expense",
            icon: categoryIcons[expense.category]
        };
    }).reverse();

    const displayedTransactions = limit
        ? transactions.slice(0, limit)
        : transactions;

    const getCategoryClass = (category) => {
        return category
            .toLowerCase()
            .replace(/ & /g, "-")
            .replace(/ /g, "-");
    };


    return (
        <div className="recent-transactions-card">

            {showHeader && (
                <div className="transactions-header">

                    <h3>Recent Transactions</h3>

                    {showViewAll && (
                        <button className="view-all-btn">
                            View All
                        </button>
                    )}

                </div>
            )}

            <div className="transactions-table-header">
                <div>Date</div>
                <div>Merchant / Details</div>
                <div>Category</div>
                <div>Amount</div>
                <div>Actions</div>
            </div>

            <div className="transactions-list">

                {displayedTransactions.map((transaction) => {

                    const categoryClass = getCategoryClass(transaction.category || "other");
                    return (

                        <div
                            className="transaction-row"
                            key={transaction.id}
                        >

                            <div className="transaction-date">{transaction.date}</div>

                            <div className="merchant-details">
                                <div className={`merchant-icon ${categoryClass}`} >
                                    {transaction.icon && (
                                        <img src={transaction.icon} alt={transaction.category} className="merchant-icon-img"/>
                                    )}
                                </div>

                                <span>
                                    {transaction.merchant}
                                </span>
                            </div>

                            <div className="transaction-category">

                                <span className={`category-badge ${categoryClass}`}>
                                    {transaction.category}
                                </span>

                            </div>

                            <div
                                className={`transaction-amount ${transaction.type}`}
                            >
                                {transaction.amount}
                            </div>

                            <div className="transaction-actions">

                                <button className="action-btn" title="Edit"
                                    onClick={() =>
                                        console.log("Edit:",transaction.id)
                                    }
                                >

                                    <img src={editIcon} alt="Edit" className="action-icon" />
                                </button>


                                <button
                                    className="action-btn"
                                    title="Delete"
                                    onClick={() =>
                                        console.log(
                                            "Delete:",
                                            transaction.id
                                        )
                                    }
                                >

                                    <img
                                        src={deleteIcon}
                                        alt="Delete"
                                        className="action-icon"
                                    />

                                </button>

                            </div>

                        </div>

                    );
                })}

            </div>

            {showPagination && (

                <div className="transactions-footer">

                    <span className="transaction-count">
                        Showing {displayedTransactions.length} of {transactions.length} results
                    </span>

                    <div className="pagination">
                        <button className="pagination-btn arrow disabled">‹</button>
                        <button className="pagination-btn active">1</button>
                        <button className="pagination-btn">2</button>
                        <button className="pagination-btn">3</button>
                        <span className="pagination-dots">...</span>
                        <button className="pagination-btn">6</button>
                        <button className="pagination-btn arrow">›</button>
                    </div>

                </div>

            )}

        </div>
    );
}

export default RecentTransactions;