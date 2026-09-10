import "./Header.css";
import search from "../../../assets/icons/search.png"
import notification from "../../../assets/icons/notification.png"
import profile from "../../../assets/images/profile.png"



function Header() {
    return (
        <header className="header">

            <div className="search-box">
                <img
                    src={search}
                    alt="search"
                    className="search-icon"
                />

                <input
                    type="text"
                    placeholder="Search transactions, categories..."
                />
            </div>

            <div className="header-right">

                <button className="notification-btn">
                    <img
                        src={notification}
                        alt="notification"
                    />
                    <span className="notification-dot"></span>
                </button>

                <img
                    src={profile}
                    alt="profile"
                    className="profile-image"
                />

            </div>

        </header>
    );
}

export default Header;