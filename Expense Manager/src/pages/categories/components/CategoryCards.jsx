
import food from "../../../assets/icons/food.png";
import travel from "../../../assets/icons/travel.png";
import tuition from "../../../assets/icons/tuition.png";
import CategoryCard from "./CategoryCard";

import "./CategoryCards.css";
import NewCategoryCard from "./NewCategoryCard";

function CategoryCards() {

    const categories = [
        {
            id: 1,
            name: "Food & Dining",
            icon: food,
            transactions: 12,
            iconBackground: "#fff0dc"
        },
        {
            id: 2,
            name: "Travel",
            icon: travel,
            transactions: 4,
            iconBackground: "#e2edff"
        },
        {
            id: 3,
            name: "Tuition & Fees",
            icon: tuition,
            transactions: 1,
            iconBackground: "#f0e4ff"
        }
    ];

    return (
        <div className="categories-grid">

            {categories.map((category) => (
                <CategoryCard
                    key={category.id}
                    icon={category.icon}
                    name={category.name}
                    transactions={category.transactions}
                    bgColor={category.iconBackground}
                />
            ))}

            <NewCategoryCard />

        </div>
    );
}

export default CategoryCards;