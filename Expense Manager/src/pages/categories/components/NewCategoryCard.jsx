import "./NewCategoryCard.css";

function NewCategoryCard({ onClick }) {
    return (
        <button type="button" className="new-category-card" onClick={onClick}>

            <div className="new-category-icon">
                +
            </div>

            <p>Create Category</p>

        </button>
    );
}

export default NewCategoryCard;