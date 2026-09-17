import Sidebar from "./components/Sidebar";
import "./HomePage.css";
import Header from "./components/Header";
import Dashboard from "../dashboard/Dashboard";
import { useState } from "react";
import AddExpense from "../addExpense/AddExpense";
import Transaction from "../transaction/Transaction";
import Categories from "../categories/Categories";
import AddCategory from "../addCategories/AddCategory";
import Settings from "../settings/Settings";
import Notifications from "../notifications/Notifications";

const tabContent = {
    "add-expense": "Add Expense",
    transactions: "Transactions",
    categories: "Categories",
    settings: "Settings",
    "add-category": "AddCategory"
};

function HomePage(){
    const [activeTab, setActiveTab] = useState("dashboard");
    const [expenseToEdit, setExpenseToEdit] = useState(null);

    const handleTabChange = (tab) => {
        setExpenseToEdit(null);
        setActiveTab(tab);
    };

    const handleEdit = (expense) => {
        setExpenseToEdit(expense);
        setActiveTab("add-expense");
    };

    const handleExpenseSaved = () => {
        setExpenseToEdit(null);
        setActiveTab("transactions");
    };

    const renderContent = () => {
        if (activeTab === "dashboard") {
            return <Dashboard onEdit={handleEdit} onViewAll={() => handleTabChange("transactions")} />;
        }else if(activeTab === "add-expense"){
            return <AddExpense expenseToEdit={expenseToEdit} onSaved={handleExpenseSaved} />
        } else if (activeTab == "transactions"){
            return <Transaction onTabChange={handleTabChange} onEdit={handleEdit} />
        } else if (activeTab == "categories"){
            return <Categories onTabChange={handleTabChange} />
        } else if (activeTab == "add-category"){
            return <AddCategory onTabChange={handleTabChange} />
        } else if (activeTab === "settings") {
            return <Settings />
        } else if (activeTab === "notifications") {
            return <Notifications />
        }

    };

    return (
        <div className="homepage-div">
            <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
            <div className="body-main">
                <Header onNotificationClick={() => setActiveTab("notifications")} />
                {renderContent()}
            </div>
        </div>
    )
}

export default HomePage;