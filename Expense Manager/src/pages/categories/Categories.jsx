import "../categories/Categories.css"
import add_icon from "../../assets/icons/add.png"
import CategoryCards from "./components/CategoryCards";

function Categories({onTabChange}){
    return(
        <div className="categories-main">
            <div className="categories-head">
                <div className="categories-head-left">
                    <h1>Categories</h1>
                    <p>Organize your spending habits efficiently.</p>
                </div>
                <button className="categories-add-expense"
                    onClick={() => onTabChange("add-category")}
                    >
                    <img src={add_icon} alt="add" />
                    Add New Category
                </button>
            </div>
            <CategoryCards />
        </div>
    )
}

export default Categories;