export interface ProductItemInterface {
	title: string
	src: string
	id: string
	text: string
	price: ProductPriceItem[]
	status: number
	keyQuery: string
}

export interface ProductPriceItem {
	price: number
	type: number
	size: number
}
export interface ProductsInterface {
	settings: ProductItemInterface[]
	title: string
	queryKey: string
}
export interface ProductItemButtonInterface {
	status: number
	name: string
	id: string
	queryKey: string
}

export interface ProductsItemSliceInterface {
	activeSize: number
	activeType: number

	sizes: string[]
	types: string[]
	isOpenModal: boolean
	modalFindItem: ProductItemInterface
}
