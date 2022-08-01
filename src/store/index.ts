import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice'
import modalReducer from './slices/modalSlice'

const rootReducer = combineReducers({
    product: productReducer,
    modal: modalReducer
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
