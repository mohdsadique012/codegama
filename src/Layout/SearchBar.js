// SearchBar.js
import React, { useState, useContext,useEffect} from "react";
import { AppContext} from "../Context/ProductContext";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
           
  const Data = useContext(AppContext);
let search=searchTerm
  const filteredTitles = Data?.products?.filter((product) =>
    searchTerm.toLowerCase() === ""
      ? ""
      : product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
      <input
        type="text"
        startIcon={<SearchIcon />}
        placeholder="Search product category"
        value={searchTerm}
        className="search-input"
        onChange={(e) => setSearchTerm(e.target.value)}
      />


      {searchTerm ? (
        <ul className="filtered-titles-list">
          {filteredTitles?.map((product, index) => (
            <Link
            to={`/Product/${product.id}`}
            style={{
              textDecoration: 'none', 
              color: 'black', 
            
            }}
          >
            <div className="container-search" key={index}>
              {" "}
              <img className="image-search" src={product.image} />{" "}
              <span className="title-search">{product.category}</span>
            </div>
            </Link>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
