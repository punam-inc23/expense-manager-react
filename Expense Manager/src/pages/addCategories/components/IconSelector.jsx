import { useState } from "react";
import "./IconSelector.css";
import cart from "../../../assets/icons/category/cart.png"
import utensils from "../../../assets/icons/category/utensils.png"
import travel from "../../../assets/icons/category/travel.png"
import tuition from "../../../assets/icons/category/tuition.png"
import heart from "../../../assets/icons/category/heart.png"
import home from "../../../assets/icons/category/home.png"
import transfer from "../../../assets/icons/category/transfer.png"
import wallet from "../../../assets/icons/category/wallet.png"


function IconSelector({ selectedIcon, setSelectedIcon }) {

    const icons = [
        { id: 1, name: cart },
        { id: 2, name: utensils },
        { id: 3, name: travel },
        { id: 4, name: tuition },
        { id: 5, name: heart },
        { id: 6, name: home},
        { id: 7, name: transfer },
        { id: 8, name: wallet }
    ];

    return (
        <div className="icon-selector">

            <label>Choose Icon</label>

            <div className="icons-grid">

                {icons.map((icon) => (
                    <button
                        type="button"
                        key={icon.id}
                        className={`icon-option ${selectedIcon === icon.id ? "selected-icon" : ""
                            }`}
                        onClick={() => setSelectedIcon(icon.id)}
                    >
                        <img
                            src={`${icon.name}`}
                            alt={icon.name}
                        />
                    </button>
                ))}

            </div>

        </div>
    );
}

export default IconSelector;