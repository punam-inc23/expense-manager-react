import CategoryCard from "./CategoryCard";
import "./CategoryCards.css";

function CategoryCards() {

    const categories = [
        {
            id: 1,
            name: "Food & Dining",
            amount: "₹2,450.00",
            change: "↗ +4.5% from last month",
            positive: true,
            icon: "/assets/food.png",
            iconBackground: "#fff0dc"
        },
        {
            id: 2,
            name: "Travel",
            amount: "₹3,200.00",
            change: "↓ ₹150 pending",
            positive: false,
            icon: "/assets/travel.png",
            iconBackground: "#e2edff"
        },
        {
            id: 3,
            name: "Tuition & Fees",
            amount: "₹1,245.50",
            change: "↗ 8% increase this week",
            positive: false,
            icon: "/assets/tuition.png",
            iconBackground: "#f0e4ff"
        },
        {
            id: 4,
            name: "Entertainment",
            amount: "₹1,500.00",
            change: "↗ 8% increase this week",
            positive: false,
            icon: "/assets/entertainment.png",
            iconBackground: "#e5f0ff"
        }
    ];

    return (
        <section className="category-section">

            <div className="category-grid">

                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        category={category}
                    />
                ))}

            </div>

        </section>
    );
}

export default CategoryCards;