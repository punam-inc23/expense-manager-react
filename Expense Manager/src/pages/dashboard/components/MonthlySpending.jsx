import { useState } from "react";
import { getUser } from "../../../utils/userStorage";
import "./MonthlySpending.css";

function MonthlySpending() {

    const [selectedBar, setSelectedBar] = useState(null);
    const [period, setPeriod] = useState("this-year");
    const user = getUser();
    const expenses = Array.isArray(user?.expense) ? user.expense : [];
    const currentYear = new Date().getFullYear();
    const chartYear = period === "last-year" ? currentYear - 1 : currentYear;
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const spendingData = monthNames.map((month, monthIndex) => ({
        month,
        amount: expenses.reduce((total, expense) => {
            const date = new Date(expense.createdAt);
            if (
                expense.transactionType !== "received" &&
                date.getFullYear() === chartYear &&
                date.getMonth() === monthIndex
            ) {
                return total + Math.abs(Number(expense.amount) || 0);
            }
            return total;
        }, 0)
    }));

    const maxAmount = Math.max(
        ...spendingData.map((item) => item.amount)
    , 1);

    return (
        <div className="monthly-spending-card">

            <div className="monthly-spending-header">

                <h3>Monthly Spending Trends</h3>

                <select
                    className="year-select"
                    value={period}
                    onChange={(event) => {
                        setPeriod(event.target.value);
                        setSelectedBar(null);
                    }}
                >
                    <option value="this-year">This Year</option>
                    <option value="last-year">Last Year</option>
                </select>

            </div>

            <div className="spending-chart">

                {spendingData.map((item) => {

                   
                    const barHeight =
                        (item.amount / maxAmount) * 100;

                    const isSelected = item.month === (selectedBar || monthNames[new Date().getMonth()]);
                    

                    return (
                        <div
                            className="bar-container"
                            key={item.month}
                            onClick={() => setSelectedBar(item.month)}
                        >

                            <div className="bar-wrapper">

                                <div
                                    className={`spending-bar ${isSelected ? "selected" : ""
                                        }`}
                                    style={{
                                        height: `${barHeight}%`
                                    }}
                                ></div>

                            </div>

                            <span
                                className={`month-label ${isSelected ? "selected-month" : ""
                                    }`}
                            >
                                {item.month}
                            </span>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}

export default MonthlySpending;