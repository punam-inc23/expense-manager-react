import "./CardCategory.css";

function CategoryCard({ category }) {

    return (
        <div className="category-card">

            <div className="category-top">

                <p className="category-name">
                    {category.name}
                </p>

                <div
                    className="category-icon"
                    style={{
                        backgroundColor: category.iconBackground
                    }}
                >
                    <img
                        src={category.icon}
                        alt={category.name}
                    />
                </div>

            </div>

            <h2 className="category-amount">
                {category.amount}
            </h2>

            <p
                className={`category-change ${category.positive ? "positive" : "negative"}`}
            >
                {category.change}
            </p>

        </div>
    );
}

export default CategoryCard;