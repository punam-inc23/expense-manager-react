import CategoryCard from "./CardCategory";
import "./CategoryCards.css";
import food from "../../../assets/icons/food.png"
import travel from "../../../assets/icons/travel.png"
import tuition from "../../../assets/icons/tuition.png"
import entertainment from "../../../assets/icons/entertainment.png"


function CategoryCards() {

    const categories = [
        {
            id: 1,
            name: "Food & Dining",
            amount: "₹2,450.00",
            change: "↗ +4.5% from last month",
            positive: true,
            icon: food,
            iconBackground: "#fff0dc"
        },
        {
            id: 2,
            name: "Travel",
            amount: "₹3,200.00",
            change: "↓ ₹150 pending",
            positive: false,
            icon: travel,
            iconBackground: "#e2edff"
        },
        {
            id: 3,
            name: "Tuition & Fees",
            amount: "₹1,245.50",
            change: "↗ 8% increase this week",
            positive: false,
            icon: tuition,
            iconBackground: "#f0e4ff"
        },
        {
            id: 4,
            name: "Entertainment",
            amount: "₹1,500.00",
            change: "↗ 8% increase this week",
            positive: false,
            icon: entertainment,
            iconBackground: "#e5f0ff"
        }
    ];

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