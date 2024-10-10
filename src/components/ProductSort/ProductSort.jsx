import { FaSearch } from "react-icons/fa";
import style from './ProductSort.module.css';
import { useState } from "react";

export const ProductSort = ({ sortProducts, searchProduct }) => {
    let [searchText, setSearchText] = useState('');
    function search(e) {
        // console.log(e.target.value);
        // setTimeout(() => {
        searchProduct(e.target.value);
        // }, 1000)
    }
    return (
        <div className={style.sort_filter_section}>
            <div className={style.sort_container}>
                <label htmlFor="sort-price">Sort by Price:</label>
                <select onChange={(e) => sortProducts(e)} id="sort-price" className={style.sort_select}>
                    <option value="reset">None</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>
            <div className={style.search_container}>
                <input onChange={(e) => search(e)} type="text" placeholder="Search..." className={style.search_input} />
                <button className={style.search_button}><FaSearch />
                </button>
            </div>
        </div>
    )
}
