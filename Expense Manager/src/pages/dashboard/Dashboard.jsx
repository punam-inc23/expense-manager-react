
import "../dashboard/Dashboard.css"
import CategoryCards from "./components/CategoryCards";
import MonthlySpending from "./components/MonthlySpending";
import RecentTransactions from "./components/RecentTransactions";

function Dashboard({ onEdit, onViewAll }) {
    return (
        <div className="dashboard-div">
            <CategoryCards limit={4} />
            <MonthlySpending />
            <RecentTransactions limit={5} onEdit={onEdit} onViewAll={onViewAll} />
        </div>
    )
}

export default Dashboard;