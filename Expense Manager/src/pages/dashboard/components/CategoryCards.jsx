import CategoryCard from "./CardCategory";
import "./CategoryCards.css";
import useExpenses from "../../../hooks/useExpenses";
import useCategories from "../../../hooks/useCategories";

function CategoryCards({ limit = null }) {
    const { expenses } = useExpenses();
    const { categories: storedCategories } = useCategories();
    const categoryTotals = expenses.reduce((totals, expense) => {
        if (expense.transactionType === "received" || !expense.category) {
            return totals;
        }

        const currentCategory = totals[expense.category] || { amount: 0, transactions: 0 };
        totals[expense.category] = {
            amount: currentCategory.amount + Math.abs(Number(expense.amount) || 0),
            transactions: currentCategory.transactions + 1
        };
        return totals;
    }, {});

    const categories = storedCategories
        .map((category) => ({
            ...category,
            ...categoryTotals[category.id],
            amount: categoryTotals[category.id]?.amount || 0,
            transactions: categoryTotals[category.id]?.transactions || 0
        }))
        .filter((category) => category.transactions > 0)
        .sort((first, second) => second.transactions - first.transactions);

    const visibleCategories = limit ? categories.slice(0, limit) : categories;

    return (
        <div className="category-section">
            <div className="category-grid">
                {visibleCategories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        category={{
                            ...category,
                            amount: `₹${category.amount.toFixed(2)}`,
                            change: `${category.transactions} transaction${category.transactions === 1 ? "" : "s"}`,
                            positive: true
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default CategoryCards;