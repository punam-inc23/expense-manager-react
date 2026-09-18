import IconSelector from "./IconSelector";
import ColorPicker from "./ColorPicker";
import "./CategoryForm.css";
import { useState } from "react";
import useCategories from "../../../hooks/useCategories";

const emptyCategory = { name: "", icon: 0, color: "" };

function CategoryForm({ onSaved }) {

    const [category, setCategory] = useState(emptyCategory);
    const { addCategory } = useCategories();

    const handleCategory=(event)=>{
        event.preventDefault();
        addCategory({ ...category, id: Date.now() });
        setCategory(emptyCategory);
        onSaved?.();
    }

    return (
        <form onSubmit={handleCategory} className="category-form">

            <div className="form-group">
                <label htmlFor="categoryName">Category Name</label>

                <input
                    type="text"
                    id="categoryName"
                    placeholder="e.g., Monthly Subscriptions"
                    value={category.name}
                    onChange={(event)=>(setCategory({
                        ...category,
                        name: event.target.value
                    })
                )}
                />
            </div>

            <IconSelector
                selectedIcon={category.icon}
                setSelectedIcon={(icon) =>
                    setCategory({
                        ...category,
                        icon: icon
                    })
                }
            />

            <ColorPicker
                selectedColor={category.color}
                setSelectedColor={(color) =>
                    setCategory({
                        ...category,
                        color: color
                    })
                }
            />

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