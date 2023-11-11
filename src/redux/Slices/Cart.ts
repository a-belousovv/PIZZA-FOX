import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
	CartItem,
	CartSliceInterface,
	newCartItem,
} from '../../@types/CartTypes/types.ts'

const initialState: CartSliceInterface = {
	carts: [],
	isOpen: false,
	totalCount: 0,
	totalPrice: 0,
}
export const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addNewCartItem: (state, action: PayloadAction<newCartItem>) => {
			const findItem = state.carts.find(
				(obj: CartItem) => obj.id == action.payload.data.id
			)
			if (findItem) {
				if (
					findItem.title == action.payload.data.title &&
					findItem.size == action.payload.size &&
					findItem.type == action.payload.type &&
					findItem.price == action.payload.price
				) {
					findItem.count++
					findItem.id = `${findItem.id}/${findItem.count}/${findItem.size}/${findItem.type}`
				} else {
					const newItem: CartItem = {
						//если юзать ...data начинается е**я с типами ...(((
						id: action.payload.customid,
						price: action.payload.price,
						size: action.payload.size,
						src: action.payload.data.src,
						status: action.payload.data.status,
						text: action.payload.data.text,
						title: action.payload.data.title,
						type: action.payload.type,
						count: 1,
					}
					state.carts.unshift(newItem)
				}
			} else {
				const newItem: CartItem = {
					//если юзать ...data начинается е**я с типами ...(((
					id: action.payload.customid,
					price: action.payload.price,
					size: action.payload.size,
					src: action.payload.data.src,
					status: action.payload.data.status,
					text: action.payload.data.text,
					title: action.payload.data.title,
					type: action.payload.type,
					count: 1,
				}
				state.carts.unshift(newItem)
			}
		},
		changeOpenCartValue: (state, action: PayloadAction<boolean>) => {
			state.isOpen = action.payload
		},
		incrementItemValue: (state, action: PayloadAction<string>) => {
			const findItem = state.carts.find((obj) => obj.id == action.payload)
			if (findItem) {
				if (findItem.count < 15) {
					findItem.count++
				}
			}
		},
		decrementItemValue: (state, action: PayloadAction<string>) => {
			const findItem = state.carts.find((obj) => obj.id == action.payload)
			if (findItem) {
				if (findItem.count > 0) {
					findItem.count--
				}
				if (findItem.count == 0) {
					state.carts = state.carts.filter((obj) => obj.id != action.payload)
				}
			}
		},
		setTotalCount: (state, action: PayloadAction<number>) => {
			state.totalCount = action.payload
		},
		setTotalPrice: (state, action: PayloadAction<number>) => {
			state.totalPrice = action.payload
		},
		clearCart: (state) => {
			state.carts = []
		},
	},
})
export const {
	addNewCartItem,
	changeOpenCartValue,
	incrementItemValue,
	decrementItemValue,
	setTotalCount,
	setTotalPrice,
	clearCart,
} = CartSlice.actions
export default CartSlice.reducer
