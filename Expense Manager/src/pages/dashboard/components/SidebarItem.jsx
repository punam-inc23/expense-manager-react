import { NavLink } from "react-router-dom";

import dashboard from "../../../assets/icons/dashboard.svg";
import add_expenses from "../../../assets/icons/add_expenses.svg";
import transaction from "../../../assets/icons/transaction.svg";
import categories from "../../../assets/icons/categories.svg";
import settings from "../../../assets/icons/settings.svg";

function SidebarItem() {

    const itemData = [
        {
            img: dashboard,
            name: "Dashboard",
            path: "/dashboard"
        },
        {
            img: add_expenses,
            name: "Add Expense",
            // path: "/add-expense"
            path: ""
        },
        {
            img: transaction,
            name: "Transactions",
            // path: "/transactions"
            path: ""
        },
        {
            img: categories,
            name: "Categories",
            // path: "/categories"
            path: ""
        },
        {
            img: settings,
            name: "Settings",
            // path: "/settings"
            path: ""
        }
    ];

    return (
        <div className="sidebar-item">

            {
                itemData.map((item, index) => (

                    <NavLink
                        to={item.path}
                        key={index}
                        className={({ isActive }) =>
                            item.path && isActive
                                ? "sidebar-link active"
                                : "sidebar-link"
                        }
                    >

                        <img
                            src={item.img}
                            alt={item.name}
                            className="svg-icons"
                        />

                        <p>{item.name}</p>

                    </NavLink>

                ))
            }

        </div>
    );
}

export default SidebarItem;