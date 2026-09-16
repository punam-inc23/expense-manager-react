import search from "../../../assets/icons/search.png"
import download from "../../../assets/icons/download.png"
import "../components/TransactionFilter.css"

function TransactionFilter(){
    return(
        <div className="transaction-filter">
            <div className="filter-search">
                <p>Search Merchant or Note</p>
                <div className="filter-searchbar">
                    <img src={search} alt="search" />
                    <input type="text" placeholder="e.g. Starbucks" />
                </div>
            </div>

            <div className="filter-date">
                <p>Date Range</p>
                <select name="date" id="date" defaultValue="30">
                    <option value="30" selected>Last 30 Days</option>
                    <option value="20">Last 20 Days</option>
                    <option value="10">Last 10 Days</option>
                    <option value="5">Last 5 Days</option>
                </select>
            </div>

            <div className="filter-category">
                <p>Category</p>
                <select name="category" id="category" defaultValue="all">
                    <option value="all" disabled>
                        All Categories
                    </option>
                    <option value="Food & Drink">Food & Drink</option>
                    <option value="Education">Education</option>
                    <option value="Income">Income</option>
                    <option value="Housing">Housing</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Transport">Transport</option>
                    <option value="Shopping">Shopping</option>
                </select>
            </div>

            <button className="download-btn">
                <img src={download} alt="download" />
                Download CSV
            </button>


        </div>
    )
}

export default TransactionFilter;