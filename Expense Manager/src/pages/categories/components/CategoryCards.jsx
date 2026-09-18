
import CategoryCard from "./CategoryCard";

import "./CategoryCards.css";
import NewCategoryCard from "./NewCategoryCard";
import useExpenses from "../../../hooks/useExpenses";
import useCategories from "../../../hooks/useCategories";

function CategoryCards({ onAddCategory, limit = null }) {
    const { expenses } = useExpenses();
    const { categories } = useCategories();

    const categoryCards = categories.map((category) => ({
        ...category,
        transactions: expenses.filter(
            (expense) => expense.category === category.id && expense.transactionType !== "received"
        ).length
    }));

    const visibleCategories = limit
        ? categoryCards.filter((category) => category.transactions > 0).slice(0, limit)
        : categoryCards;

    return (
        <div className="categories-grid">

            {visibleCategories.map((category) => (
                <CategoryCard
                    key={category.id}
                    icon={category.icon}
                    name={category.name}
                    transactions={category.transactions}
                    bgColor={category.color}
                />
            ))}

            {!limit && <NewCategoryCard onClick={onAddCategory} />}

        </div>
    );
}

export default CategoryCards;