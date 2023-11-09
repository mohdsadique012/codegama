// SearchBar.js
import React, { useState, useContext, useEffect } from "react";
import { AppContext, useProfileGlobal } from "../Context/ProductContext";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
const {searchTerms}=useProfileGlobal()
  const Data = useContext(AppContext);
  let search = searchTerm;
  const filteredTitles = Data?.products?.filter((product) =>
    searchTerm.toLowerCase() === ""
      ? ""
      : product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleLinkClick = () => {
    setSearchTerm(""); // Resets the searchTerm to an empty string
  };

  return (
    <div>
      <input
        type="text"
        startIcon={<SearchIcon />}
        color="#e91e63"
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
              onClick={handleLinkClick}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <div className="container-search" key={index} >
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
