import "./CategoryCard.css";
import cart from "../../../assets/icons/category/cart.png";
import utensils from "../../../assets/icons/category/utensils.png";
import travel from "../../../assets/icons/category/travel.png";
import tuition from "../../../assets/icons/category/tuition.png";
import heart from "../../../assets/icons/category/heart.png";
import home from "../../../assets/icons/category/home.png";
import transfer from "../../../assets/icons/category/transfer.png";
import wallet from "../../../assets/icons/category/wallet.png";

const categoryIcons = { 1: cart, 2: utensils, 3: travel, 4: tuition, 5: heart, 6: home, 7: transfer, 8: wallet };

function CategoryCard({ icon, name, transactions , bgColor}) {
    return (
        <div className="category-card">
            <div className="category-icon" style={{backgroundColor:`color-mix(in srgb, ${bgColor} 18%, transparent)`}}>
                <img src={categoryIcons[icon] || icon} alt={name} />
            </div>

            <div className="category-info">
                <h2>{name}</h2>
                <div className="category-meta">
                    <span className="expense-badge">Expense</span>
                    <p>{transactions} Transactions</p>
                </div>
            </div>

        </div>
    );
}

export default CategoryCard;