import Sidebar from "./components/Sidebar";
import "../dashboard/Dashboard.css"
import Header from "./components/Header";
import CategoryCards from "./components/CategoryCards";
import MonthlySpending from "./components/MonthlySpending";
import RecentTransactions from "./components/RecentTransactions";

function Dashboard(){
    return(
        <div className="dashboard-div">
            <Sidebar />
            <div className="body-main">
                <Header />
                <CategoryCards />
                <MonthlySpending />
                <RecentTransactions />
            </div>
        </div>
    )
}

export default Dashboard;