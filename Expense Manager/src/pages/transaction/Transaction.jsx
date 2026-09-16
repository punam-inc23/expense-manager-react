import "../transaction/Transaction.css"
import add_icon from "../../assets/icons/add.png"
import TransactionFilter from "./components/TransactionFilter";
import RecentTransactions from "../dashboard/components/RecentTransactions";

function Transaction({ onTabChange }){
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
            <TransactionFilter />
            <RecentTransactions
                showHeader={false}
                showViewAll={false}
                showPagination={true}
            />
        </div>
    )
}

export default Transaction;