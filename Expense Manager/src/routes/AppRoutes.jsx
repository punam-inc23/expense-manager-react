import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import AddExpense from "../pages/AddExpense/AddExpense";
import Transactions from "../pages/Transactions/Transactions";
import Categories from "../pages/Categories/Categories";
import Settings from "../pages/Settings/Settings";

function AppRoutes() {

    return (
        <Routes>

            <Route
                path="/dashboard"
                element={<Dashboard />}
            />

            {/* <Route
                path="/add-expense"
                element={<AddExpense />}
            /> */}

            {/* <Route
                path="/transactions"
                element={<Transactions />}
            /> */}

            {/* <Route
                path="/categories"
                element={<Categories />}
            /> */}

            {/* <Route
                path="/settings"
                element={<Settings />}
            /> */}

        </Routes>
    );
}

export default AppRoutes;