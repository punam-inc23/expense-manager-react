import { lazy, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import { isLoggedIn } from "../utils/userStorage";

const Login = lazy(() => import("../pages/login/Login"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const HomePage = lazy(() => import("../pages/homepage/HomePage"));
const AddExpense = lazy(() => import("../pages/addExpense/AddExpense"));
const Signup = lazy(() => import("../pages/signup/Signup"));

function AppRoutes() {
    const defaultRoute = isLoggedIn() ? "/homepage" : "/login";

    return (
        <Suspense fallback={<div className="route-loading">Loading...</div>}>
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
        </Suspense>
    );
}

export default AppRoutes;