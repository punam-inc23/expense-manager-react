import logo from "../../../assets/images/expense-logo.png"
import logout from "../../../assets/icons/logout.png"
import SidebarItem from "./SidebarItem";
import "./Sidebar.css"
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../../utils/userStorage";

function Sidebar({ activeTab, onTabChange }){
    const navigate = useNavigate();

    const handleLogout = () => {
        removeUser();
        navigate("/login");
    };

    return(
        <div className="sidebar">
            <div className="upper-side">
                <div className="logo-name">
                    <img src={logo} alt="logo" />
                    <p>Expense Manager</p>
                </div>
                <SidebarItem activeTab={activeTab} onTabChange={onTabChange} />
            </div>

            <div className="lower-side">
                {/* <hr /> */}
                <div className="logout-section" onClick={handleLogout}>
                    <img src={logout} alt="logout" />
                    <p>Logout</p>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar;