import "./CardCategory.css";

import cart from "../../../assets/icons/category/cart.png"
import utensils from "../../../assets/icons/category/utensils.png"
import travel from "../../../assets/icons/category/travel.png"
import tuition from "../../../assets/icons/category/tuition.png"
import heart from "../../../assets/icons/category/heart.png"
import home from "../../../assets/icons/category/home.png"
import transfer from "../../../assets/icons/category/transfer.png"
import wallet from "../../../assets/icons/category/wallet.png"

const categoryIcons = {
    1: cart,
    2: utensils,
    3: travel,
    4: tuition,
    5: heart,
    6: home,
    7: transfer,
    8: wallet
};

function CategoryCard({ category }) {

    return (
        <div className="category-card">

            <div className="category-top">

                <p className="category-name">{category.name}</p>

                <div className="category-icon"
                    style={{
                        "--category-color": category.color
                    }}
                >
                    <img
                        src={categoryIcons[category.icon]}
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