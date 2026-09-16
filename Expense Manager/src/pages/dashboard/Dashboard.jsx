
import "../dashboard/Dashboard.css"
import CategoryCards from "./components/CategoryCards";
import MonthlySpending from "./components/MonthlySpending";
import RecentTransactions from "./components/RecentTransactions";

function Dashboard() {
    return (
        <div className="dashboard-div">
            <CategoryCards />
            <MonthlySpending />
            <RecentTransactions limit={5} />
        </div>
    )
}

export default Dashboard;