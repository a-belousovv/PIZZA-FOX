import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProductsItemSliceInterface } from '../../@types/ProductTypes/types'

const initialState: ProductsItemSliceInterface = {
	activeSize: 0,
	activeType: 0,
	sizes: ['Маленькая 30 см', 'Средняя 35 см', 'Большая 40 см'],
	types: ['Традиционное 600 г', 'Тонкое 450 г'],
	isOpenModal: false,
	modalFindItem: {
		title: '',
		src: '',
		id: '',
		text: '',
		price: [{ price: 0, type: 0, size: 0 }],
		status: 0,
		keyQuery: '',
	},
}

export const ProductsItemSlice = createSlice({
	name: 'productsItem',
	initialState,
	reducers: {
		setActiveSize: (state, action: PayloadAction<number>) => {
			state.activeSize = action.payload
		},
		setActiveType: (state, action: PayloadAction<number>) => {
			state.activeType = action.payload
		},
		setIsOpenModal: (state, action: PayloadAction<boolean>) => {
			state.isOpenModal = action.payload
		},
		setIsFindItem: (state, action) => {
			state.modalFindItem = action.payload
		},
	},
})

export const { setActiveSize, setActiveType, setIsOpenModal, setIsFindItem } =
	ProductsItemSlice.actions

export default ProductsItemSlice.reducer
