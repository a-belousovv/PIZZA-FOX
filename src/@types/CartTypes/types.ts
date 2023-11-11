import { ProductItemInterface } from '../ProductTypes/types'

export interface CartItem {
	id: string
	price: number | undefined
	size: string
	src: string
	status: number
	text: string
	title: string
	type: string
	count: number
}

export interface newCartItem {
	data: ProductItemInterface
	size: string
	type: string
	price: number | undefined
	customid: string
}

export interface CartSliceInterface {
	carts: CartItem[]
	isOpen: boolean
	totalCount: number
	totalPrice: number
}
