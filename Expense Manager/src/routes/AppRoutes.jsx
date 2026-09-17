import { Navigate, Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import HomePage from "../pages/homepage/HomePage";
import AddExpense from "../pages/addExpense/AddExpense";
import Signup from "../pages/signup/Signup";
import { isLoggedIn } from "../utils/userStorage";

function AppRoutes() {
    const defaultRoute = isLoggedIn() ? "/homepage" : "/login";

    return (
        <Routes>

            <Route
                path="/"
                element={<Navigate to={defaultRoute} replace />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/signup"
                element={<Signup />}
            />

            <Route
                path="/homepage"
                element={<HomePage />}
            />

            <Route
                path="/dashboard"
                element={<Dashboard />}
            />

            <Route
                path="/add-expense"
                element={<AddExpense />}
            />

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