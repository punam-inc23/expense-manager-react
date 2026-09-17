import { useState } from "react";
import "./ColorPicker.css";

function ColorPicker({ selectedColor, setSelectedColor }) {

    const colors = [
        "#0DA66F",
        "#3B82F6",
        "#8B5CF6",
        "#EC4899",
        "#F59E0B",
        "#EF4444"
    ];

    return (
        <div className="color-picker">

            <label>Pick Category Color</label>

            <div className="colors-list">

                {colors.map((color) => (
                    <button
                        type="button"
                        key={color}
                        className={`color-option ${selectedColor === color ? "selected-color" : ""
                            }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                        aria-label={`Select color ${color}`}
                    ></button>
                ))}

            </div>

        </div>
    );
}

export default ColorPicker;