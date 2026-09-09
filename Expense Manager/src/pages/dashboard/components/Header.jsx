import "./Header.css";

function Header() {
    return (
        <header className="header">

            <div className="search-box">
                <img
                    src="/assets/search.png"
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
                        src="/assets/notification.png"
                        alt="notification"
                    />
                    <span className="notification-dot"></span>
                </button>

                <img
                    src="/assets/profile.png"
                    alt="profile"
                    className="profile-image"
                />

            </div>

        </header>
    );
}

export default Header;