import IconSelector from "./IconSelector";
import ColorPicker from "./ColorPicker";
import "./CategoryForm.css";

function CategoryForm() {
    return (
        <form className="category-form">

            <div className="form-group">
                <label htmlFor="categoryName">Category Name</label>

                <input
                    type="text"
                    id="categoryName"
                    placeholder="e.g., Monthly Subscriptions"
                />
            </div>

            <IconSelector />

            <ColorPicker />

            <div className="category-form-buttons">

                <button type="submit" className="create-category-btn">
                    Create Category
                </button>

                <button type="button" className="cancel-category-btn">
                    Cancel
                </button>

            </div>

        </form>
    );
}

export default CategoryForm;