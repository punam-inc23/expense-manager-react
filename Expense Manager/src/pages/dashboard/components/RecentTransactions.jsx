import "./RecentTransactions.css";
import { useState } from "react";
import useExpenses from "../../../hooks/useExpenses";
import useCategories from "../../../hooks/useCategories";

import cart from "../../../assets/icons/category/cart.png"
import utensils from "../../../assets/icons/category/utensils.png"
import travel from "../../../assets/icons/category/travel.png"
import tuition from "../../../assets/icons/category/tuition.png"
import heart from "../../../assets/icons/category/heart.png"
import home from "../../../assets/icons/category/home.png"
import transfer from "../../../assets/icons/category/transfer.png"
import wallet from "../../../assets/icons/category/wallet.png"


import deleteIcon from "../../../assets/icons/delete.png";
import editIcon from "../../../assets/icons/edit.png";

const categoryIcons = {
    1: cart,
    2: utensils,
    3: travel,
    4: tuition,
    5: heart,
    6: home,
    7: transfer,
    8: wallet
};


function RecentTransactions({limit = null, showHeader = true, showViewAll = true, showPagination = false, onEdit, onViewAll, filters = {}}) {
    const [currentTime] = useState(() => Date.now());
    const { expenses: savedExpenses, removeExpense } = useExpenses();
    const { categories } = useCategories();

    const filteredExpenses = savedExpenses.filter((expense) => {
        const search = (filters.search || "").toLowerCase().trim();
        const categoryFilter = filters.category || "all";
        const dateRange = filters.dateRange || "all";
        const matchesSearch = !search || `${expense.title || ""} ${expense.description || ""}`.toLowerCase().includes(search);
        const matchesCategory = categoryFilter === "all" || String(expense.category) === String(categoryFilter);
        const age = dateRange !== "all"
            ? (currentTime - new Date(expense.createdAt).getTime()) / 86400000
            : 0;
        const matchesDate = dateRange === "all" || age <= Number(dateRange);

        return matchesSearch && matchesCategory && matchesDate;
    });

    const transactions = filteredExpenses.map((expense) => {
        const isReceived = expense.transactionType === "received";
        const amount = Math.abs(Number(expense.amount) || 0).toFixed(2);
        const category = categories.find(
            (category) => String(category.id) === String(expense.category)
        );

        return {
            id: expense.id,
            expense,
            date: expense.createdAt
                ? new Date(expense.createdAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                })
                : "Date unavailable",
            merchant: expense.title,
            category: category?.name || "Unknown",
            color: category?.color || "#e5e7eb",
            amount: `${isReceived ? "+" : "-"}₹${amount}`,
            type: isReceived ? "income" : "expense",
            icon: categoryIcons[category?.icon]
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

    const removeItem = (id) => {

        removeExpense(id);
    };

    return (
        <div className="recent-transactions-card">

            {showHeader && (
                <div className="transactions-header">
                    <h3>Recent Transactions</h3>

                    {showViewAll && (
                        <button className="view-all-btn" type="button" onClick={onViewAll}>
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

                {displayedTransactions.length === 0 && (
                    <div className="transactions-empty">
                        No transactions yet
                    </div>
                )}

                {displayedTransactions.map((transaction) => {

                    const categoryClass = getCategoryClass(transaction.category || "other");
                    return (

                        <div
                            className="transaction-row"
                            key={transaction.id}
                        >

                            <div className="transaction-date">{transaction.date}</div>

                            <div className="merchant-details">
                                <div
                                    className={`merchant-icon ${categoryClass}`}
                                    style={{
                                        "--category-color": transaction.color
                                    }}
                                >
                                    {transaction.icon && (
                                        <img src={transaction.icon} alt={transaction.category} className="merchant-icon-img"/>
                                    )}
                                </div>

                                <span>
                                    {transaction.merchant}
                                </span>
                            </div>

                            <div className="transaction-category">

                                <span
                                    className="category-badge"
                                    style={{
                                        "--category-color": transaction.color
                                    }}
                                >
                                    {transaction.category}
                                </span>

                            </div>

                            <div className={`transaction-amount ${transaction.type}`}>
                                {transaction.amount}
                            </div>

                            <div className="transaction-actions">

                                <button className="action-btn" title="Edit"
                                    onClick={() =>
                                        onEdit?.(transaction.expense)
                                    }
                                >

                                    <img src={editIcon} alt="Edit" className="action-icon" />
                                </button>


                                <button className="action-btn" title="Delete"
                                    onClick={() =>
                                        removeItem(transaction.id)
                                        // console.log("Delete:", transaction.id)
                                    }
                                >

                                    <img src={deleteIcon} alt="Delete" className="action-icon" />

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