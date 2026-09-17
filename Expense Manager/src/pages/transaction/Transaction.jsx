import { useState } from "react";
import "../transaction/Transaction.css"
import add_icon from "../../assets/icons/add.png"
import TransactionFilter from "./components/TransactionFilter";
import RecentTransactions from "../dashboard/components/RecentTransactions";

function Transaction({ onTabChange, onEdit }){
    const [filters, setFilters] = useState({ search: "", dateRange: "all", category: "all" });
    return(
        <div className="transaction-main">
            <div className="transaction-head">
                <div className="transaction-head-left">
                    <h1>Transactions</h1>
                    <p>View and manage your detailed spending history.</p>
                </div>
                <button className="transaction-add-expense"
                    onClick={() => onTabChange("add-expense")}
                    >
                    <img src={add_icon} alt="add" />
                    Add New Expense
                </button>
            </div>
            <TransactionFilter filters={filters} onChange={setFilters} />
            <RecentTransactions
                showHeader={false}
                showViewAll={false}
                showPagination={true}
                onEdit={onEdit}
                filters={filters}
            />
        </div>
    )
}

export default Transaction;