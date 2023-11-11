import { configureStore } from '@reduxjs/toolkit'
import HeaderSlice from './Slices/Header'
import ProductItemModal from './Slices/ProductItemModal'
import CartSlice from './Slices/Cart'
import PaymentSlice from './Slices/Payment'

const store = configureStore({
	reducer: {
		header: HeaderSlice,
		productItemModal: ProductItemModal,
		cart: CartSlice,
		payment: PaymentSlice,
	},
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
