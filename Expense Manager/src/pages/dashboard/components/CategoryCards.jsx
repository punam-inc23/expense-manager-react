import CategoryCard from "./CardCategory";
import "./CategoryCards.css";
import foodDrink from "../../../assets/icons/food&drink.png";
import education from "../../../assets/icons/education.png";
import income from "../../../assets/icons/income.png";
import housing from "../../../assets/icons/housing.png";
import groceries from "../../../assets/icons/groceries.png";
import entertainment from "../../../assets/icons/entertainment.png";
import transport from "../../../assets/icons/transport.png";
import shopping from "../../../assets/icons/shopping.png";
import { getUser } from "../../../utils/userStorage";

const categoryIcons = {
    "Food & Drink": foodDrink,
    Education: education,
    Income: income,
    Housing: housing,
    Groceries: groceries,
    Entertainment: entertainment,
    Transport: transport,
    Shopping: shopping
};

const categoryBackgrounds = {
    "Food & Drink": "#fff0df",
    Education: "#e3efff",
    Income: "#e4f3ec",
    Housing: "#f0e3ff",
    Groceries: "#fff4bf",
    Entertainment: "#ffe4ed",
    Transport: "#dff5f8",
    Shopping: "#edf0f3"
};


function CategoryCards() {

    const user = getUser();
    const expenses = Array.isArray(user?.expense)
        ? user.expense
        : user?.expense
            ? [user.expense]
            : [];

    const categoryTotals = expenses.reduce((totals, expense) => {
        if (expense.transactionType === "received" || !expense.category) {
            return totals;
        }

        const amount = Math.abs(Number(expense.amount) || 0);
        const currentCategory = totals[expense.category] || {
            amount: 0,
            transactions: 0
        };

        totals[expense.category] = {
            amount: currentCategory.amount + amount,
            transactions: currentCategory.transactions + 1
        };

        return totals;
    }, {});

    const categories = Object.entries(categoryTotals)
        .sort(([, first], [, second]) => second.amount - first.amount)
        .slice(0, 4)
        .map(([name, summary], index) => ({
            id: name,
            name,
            amount: `₹${summary.amount.toFixed(2)}`,
            change: `${summary.transactions} transaction${summary.transactions === 1 ? "" : "s"}`,
            positive: true,
            icon: categoryIcons[name],
            iconBackground: categoryBackgrounds[name],
            order: index
        }));

    return (
        <div className="category-section">

            <div className="category-grid">

                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        category={category}
                    />
                ))}

            </div>

        </div>
    );
}

export default CategoryCards;