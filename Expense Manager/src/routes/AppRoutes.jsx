import { Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";

function AppRoutes() {

    return (
        <Routes>

            <Route
                path="/"
                element={<Login />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

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