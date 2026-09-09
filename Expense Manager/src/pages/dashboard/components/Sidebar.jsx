import logo from "../../../assets/images/expense-logo.png"
import logout from "../../../assets/icons/logout.png"
import SidebarItem from "./SidebarItem";

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="upper-side">
                <div className="logo-name">
                    <img src={logo} alt="logo" />
                    <p>Expense Manager</p>
                </div>
                <SidebarItem />
            </div>

            <div className="lower-side">
                {/* <hr /> */}
                <div className="logout-section">
                    <img src={logout} alt="logout" />
                    <p>Logout</p>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar;