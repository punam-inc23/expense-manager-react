import { useState } from "react";
import "./MonthlySpending.css";

function MonthlySpending() {

    const [selectedBar , setSelectedBar] = useState("MAR");

    const spendingData = [
        { month: "JAN", amount: 85 },
        { month: "FEB", amount: 120 },
        { month: "MAR", amount: 155 },
        { month: "APR", amount: 105 },
        { month: "MAY", amount: 145 },
        { month: "JUN", amount: 130 },
        { month: "JUL", amount: 110 },
        { month: "AUG", amount: 138 },
        { month: "SEP", amount: 78 },
        { month: "OCT", amount: 115 },
        { month: "NOV", amount: 130 },
        { month: "DEC", amount: 103 }
    ];

    const maxAmount = Math.max(
        ...spendingData.map((item) => item.amount)
    );

    return (
        <div className="monthly-spending-card">

            <div className="monthly-spending-header">

                <h3>Monthly Spending Trends</h3>

                <select className="year-select">
                    <option>Last Year</option>
                    <option>This Year</option>
                    <option>2024</option>
                    <option>2023</option>
                </select>

            </div>

            <div className="spending-chart">

                {spendingData.map((item) => {

                   
                    const barHeight =
                        (item.amount / maxAmount) * 100;

                    const isSelected = item.month === selectedBar;
                    console.log(selectedBar);
                    

                    return (
                        <div
                            className="bar-container"
                            key={item.month}
                            onClick={()=>setSelectedBar(item.month)}
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