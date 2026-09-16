import Sidebar from "./components/Sidebar";
import "./HomePage.css";
import Header from "./components/Header";
import Dashboard from "../dashboard/Dashboard";
import { useState } from "react";
import AddExpense from "../addExpense/AddExpense";
import Transaction from "../transaction/Transaction";
import Categories from "../categories/Categories";
import AddCategory from "../addCategories/AddCategory";

const tabContent = {
    "add-expense": "Add Expense",
    transactions: "Transactions",
    categories: "Categories",
    settings: "Settings",
    "add-category": "AddCategory"
};

function HomePage(){
    const [activeTab, setActiveTab] = useState("dashboard");

    const renderContent = () => {
        if (activeTab === "dashboard") {
            return <Dashboard />;
        }else if(activeTab === "add-expense"){
            return <AddExpense />
        } else if (activeTab == "transactions"){
            return <Transaction onTabChange={setActiveTab} />
        } else if (activeTab == "categories"){
            return <Categories onTabChange={setActiveTab} />
        } else if (activeTab == "add-category"){
            return <AddCategory onTabChange={setActiveTab} />
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