const ProductReducer= (state, action) => {
    switch (action.type) {
        case "IS_LOADING":
            return {
                ...state,
                is_loading: true
            };

        case "API_ERROR":
            return {
                ...state,
                is_loading: false,
                is_error: true
            };
            case "Search":
                return {
                    ...state,
                    search:action.payload
                };
            case "SET_API_DATA":
                const productByCategory={};
                const allproduct=action.payload
               
                action.payload?.forEach(item => {
                  
                        if (!productByCategory[item.category]) {
                            productByCategory[item.category] = [];
                        }else{
                            productByCategory[item.category].push(item);
                        }
                       
                });
                console.log(productByCategory,"asas")
                return {
                    ...state,
                    is_loading: false,
                    is_error: false,
                    products:action.payload,
                    allproduct:action.payload,
                    productCategory:productByCategory
                    
                };   
      


                case "DATA_FILTER":
                       const filterData=state.allproduct.filter((item)=>{
                           return  action.payload=="Allproduct"? item : item.category==action.payload
                       })
                       console.log(filterData,"filter")
                    return {
                        ...state,
                        is_loading: false,
                        is_error: false,
                        products:filterData
                      
                        
                    };   
          

                    case "OPEN_MODAL":
                        
                     return {
                         ...state,
                         is_loading: false,
                         is_error: false,
                        cart:action.payload
                       
                         
                     };   

                     case "PRODUCT_DETAILS":
                        let productDetails=state.allproduct.filter((item)=>{
                            return   item.id == action.payload
                        })

                       
                        let categoryDetail=state.allproduct.filter((item)=>{
                            return   item.id !== action.payload && item.category === productDetails[0].category
                        })
                     return {
                         ...state,
                         is_loading: false,
                         is_error: false,
                        detailproduct:productDetails,
                        categoryproduct:categoryDetail
                       
                         
                     };   


                     case "ADD_CART":
                        let filterCart=state.addcart

                        const filterAddCart=state.allproduct.filter((item)=>{
                            return item.id==action.payload
                               
                        }).map((item)=>{
                            console.log(item)
                            filterCart.push(item)
                        })
                      
                        
                     return {
                         ...state,
                         is_loading: false,
                         is_error: false,
                        addcart:filterCart
                       
                         
                     };   
                     case "DELETE_CART":
    

                        const filterDeleteCart=state.addcart.filter((item ,index)=>{
                            return index !==action.payload
                               
                        })
                      
                        
                     return {
                         ...state,
                         is_loading: false,
                         is_error: false,
                        addcart:filterDeleteCart
                       
                         
                     };   
           

        default:
            return state;
    }
}

export default ProductReducer;