import { ProductPriceItem } from './../ProductTypes/types'

export interface ProductInitialItem {
	title: string
	src: string
	id: string
	text: string
	price: ProductPriceItem[]
	status: number
}
