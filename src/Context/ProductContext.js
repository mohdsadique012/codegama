import {
    useContext,
    createContext,
    useEffect,
    useState,
    useReducer,
  } from "react";
  import AllProduct from "./ProductReducer.js";
  import axios from "axios";
  
  /* API URL */
  const ALLMOVIEURL = "https://dummyjson.com/products?limit=200";
  // const authToken = "Bearer Wookie2019";
  const AppContext = createContext();
  
  /* Initial State */
  const intialState = {
    is_loading: false,
    is_error: false,
    products: [],
    allproduct:[],
    productCategory: {},
    is_single_loading: false,
    is_single_error: false,
    search :'',
    cart:false,
    addcart:[],
    detailproduct:[],
    categoryproduct:[]
  };
 
  const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AllProduct, intialState);
  
  
    const getProduct = async (url) => {
      dispatch({ type: "IS_LOADING" });
      try {
        const res = await axios.get(url);
        const Product = await res.data;
        const product= Product
        console.log(Product,"lllll")
      
        dispatch({ type: "SET_API_DATA", payload:product.products });
      
      } catch (error) {
        dispatch({ type: "API_ERROR" });
      }
    };
   
    
    const handleClickFilter=(data)=>{
      console.log(data,"sygdsygdsygdysgdsygdsygsygsygdsgsy")
      dispatch({ type: "DATA_FILTER", payload: data });
    }
    const hanldeClickCart=(data)=>{
      console.log(data,"sygdsygdsygdysgdsygdsygsygsygdsgsy")
      dispatch({ type: "OPEN_MODAL", payload: data });
    }

    const handleAddCart=(data)=>{
      console.log(data,"sygdsygdsygdysgdsygdsygsygsygdsgsy")
      dispatch({ type: "ADD_CART", payload: data });
    }
  const  hanldeClickDeleteCart=(data)=>{
    console.log(data,"sygdsygdsygdysgdsygdsygsygsygdsgsy")
    dispatch({ type: "DELETE_CART", payload: data });
  }
 
 const productDetails=(data)=>{
    console.log(data,"sygdsygdsygdysgdsygdsygsygsygdsgsy")
    dispatch({ type: "PRODUCT_DETAILS", payload: data });
  }

    useEffect(() => {
      getProduct(ALLMOVIEURL);
    }, []);
    return (
      <AppContext.Provider value={{ ...state ,getProduct,handleClickFilter,hanldeClickCart,handleAddCart, hanldeClickDeleteCart,productDetails}}>
        {children}
      </AppContext.Provider>
    );
  };
  
  const useProfileGlobal = () => {
    return useContext(AppContext);
  };
  
  export { AppContext, AppProvider, useProfileGlobal,   };
  