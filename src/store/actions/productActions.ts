import { Dispatch } from "react"
import { AppDispatch } from ".."
import axios from "../../axios"
import { IProduct } from "../../models"
import {productSlice} from "../slices/productSlice"
import { IProductCard } from "../../models"


export const fetchProducts = () => {
    return async (dispatch: AppDispatch) => {
        try {     
            dispatch(productSlice.actions.fetching())       
            const response = await axios.get<IProduct[]>('products')   
            dispatch(productSlice.actions.fetchSuccess(
                response.data
            ))
        }
      catch(e) {
          dispatch(productSlice.actions.fetchError(e as Error))
      }
    }
    
    
  }
// export const fetchProduct = (id: number) => {
//     return async (dispatch: AppDispatch) => {
//         try {     
//             dispatch(productCardSlice.actions.fetching())       
//             const response = await axios.get<IProductCard>(`products/${id}`)   
//             dispatch(productCardSlice.actions.fetchSuccess(
//                 response.data
//             ))
//         }
//       catch(e) {
//           dispatch(productSlice.actions.fetchError(e as Error))
//       }
//     }
    
    
//   }