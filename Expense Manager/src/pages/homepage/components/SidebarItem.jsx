import dashboard from "../../../assets/icons/dashboard.svg";
import add_expenses from "../../../assets/icons/add_expenses.svg";
import transaction from "../../../assets/icons/transaction.svg";
import categories from "../../../assets/icons/categories.svg";
import settings from "../../../assets/icons/settings.svg";

function SidebarItem({ activeTab, onTabChange }) {

    const itemData = [
        {
            img: dashboard,
            name: "Dashboard",
            tab: "dashboard"
        },
        {
            img: add_expenses,
            name: "Add Expense",
            tab: "add-expense"
        },
        {
            img: transaction,
            name: "Transactions",
            tab: "transactions"
        },
        {
            img: categories,
            name: "Categories",
            tab: "categories"
        },
        {
            img: settings,
            name: "Settings",
            tab: "settings"
        }
    ];

    return (
        <div className="sidebar-item">

            {
                itemData.map((item, index) => (

                    <button
                        type="button"
                        key={index}
                        className={`sidebar-link ${(activeTab === item.tab || (activeTab === "add-category" && item.tab === "categories")) ? "active" : ""}`}
                        onClick={() => onTabChange(item.tab)}
                    >

                        <img
                            src={item.img}
                            alt={item.name}
                            className="svg-icons"
                        />

                        <p>{item.name}</p>

                    </button>

                ))
            }

        </div>
    );
}

export default SidebarItem;