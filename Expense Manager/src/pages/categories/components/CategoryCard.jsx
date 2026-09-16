import "./CategoryCard.css";

function CategoryCard({ icon, name, transactions , bgColor}) {
    return (
        <div className="category-card">
            {console.log(bgColor)}
            <div className="category-icon" style={{backgroundColor:bgColor}}>
                <img src={icon} alt={name} />
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