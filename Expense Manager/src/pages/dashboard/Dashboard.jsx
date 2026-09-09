import Sidebar from "./components/Sidebar";
import "../dashboard/Dashboard.css"
import Header from "./components/Header";
import CategoryCard from "./components/CardCategory";

function Dashboard(){
    return(
        <div>
            <Sidebar />
            <div>
                <Header />
                <CategoryCards />
            </div>
        </div>
    )
}

export default Dashboard;