import search from "../../../assets/icons/search.png"
import download from "../../../assets/icons/download.png"
import { getCategory } from "../../../utils/userStorage";
import "../components/TransactionFilter.css"

function TransactionFilter({ filters, onChange }){
    const categories = getCategory();
    const updateFilter = (key, value) => onChange({ ...filters, [key]: value });
    return(
        <div className="transaction-filter">
            <div className="filter-search">
                <p>Search Merchant or Note</p>
                <div className="filter-searchbar">
                    <img src={search} alt="search" />
                    <input type="text" placeholder="e.g. Starbucks" value={filters.search}
                        onChange={(event) => updateFilter("search", event.target.value)} />
                </div>
            </div>

            <div className="filter-date">
                <p>Date Range</p>
                <select name="date" id="date" value={filters.dateRange}
                    onChange={(event) => updateFilter("dateRange", event.target.value)}>
                    <option value="all">All Time</option>
                    <option value="30">Last 30 Days</option>
                    <option value="20">Last 20 Days</option>
                    <option value="10">Last 10 Days</option>
                    <option value="5">Last 5 Days</option>
                </select>
            </div>

            <div className="filter-category">
                <p>Category</p>
                <select name="category" id="category" value={filters.category}
                    onChange={(event) => updateFilter("category", event.target.value)}>
                    <option value="all">
                        All Categories
                    </option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
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