
import "./AddCategory.css";
import CategoryForm from "./components/CategoryForm";

function AddCategory({ onTabChange }) {
    return (
        <div className="add-category-page">


            <button className="back-category"
                onClick={() => onTabChange("categories")}
            >
                <span>←</span>
                <p>Back to Categories</p>
            </button>


            <div className="add-category-head">
                <h1>Add New Category</h1>

                <p>
                    Define a new spending bucket to keep your scholarship
                    and savings organized.
                </p>
            </div>

            <CategoryForm onSaved={() => onTabChange("categories")} />

        </div>
    );
}

export default AddCategory;