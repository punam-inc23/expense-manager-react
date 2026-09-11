import Sidebar from "./components/Sidebar";
import "./HomePage.css";
import Header from "./components/Header";
import Dashboard from "../dashboard/Dashboard";
import { useState } from "react";
import AddExpense from "../addExpense/AddExpense";

const tabContent = {
    "add-expense": "Add Expense",
    transactions: "Transactions",
    categories: "Categories",
    settings: "Settings"
};

function HomePage(){
    const [activeTab, setActiveTab] = useState("dashboard");

    const renderContent = () => {
        if (activeTab === "dashboard") {
            return <Dashboard />;
        }else if(activeTab === "add-expense"){
            return <AddExpense />
        }

    };

    return (
        <div className="homepage-div">
            <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="body-main">
                <Header />
                {renderContent()}
            </div>
        </div>
    )
}

export default HomePage;