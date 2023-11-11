import React from 'react'
import { ProductItemInterface } from '../../@types/ProductTypes/types'
import { useProductsItem } from '../../services/useProductsItem'
import { useAppDispatch } from '../../hooks/hooks'
import {
	setIsFindItem,
	setIsOpenModal,
} from '../../redux/Slices/ProductItemModal'

const ProductItem: React.FC<ProductItemInterface> = ({
	title,
	src,
	text,
	price,
	keyQuery,
	id,
}) => {
	const { data } = useProductsItem(id, keyQuery, keyQuery)
	const dispatch = useAppDispatch()
	const handleClick = (id: string) => {
		const findItem = data.find((obj: ProductItemInterface) => obj.id == id)
		dispatch(setIsFindItem(findItem))
		dispatch(setIsOpenModal(true))
	}

	return (
		<div className='product__items_item'>
			<div className='product__item_top'>
				<div className='product__item_img' onClick={() => handleClick(id)}>
					<img src={src} alt='' />
				</div>
				<div className='product__item_content'>
					<h4 className='product__item_title'>{title}</h4>
					<p className='product__item_text'>{text}</p>
				</div>
			</div>

			<div className='product__item_price'>
				<p className='product__item_title'>{price[3].price} руб</p>
				<button
					onClick={() => handleClick(id)}
					className='product__item_button collect'>
					Выбрать
				</button>
			</div>
		</div>
	)
}

// const ProductItemButton: React.FC<ProductItemButtonInterface> = ({
// 	status,
// 	name,
// }) => {
// 	switch (status) {
// 		case 0:
// 			return
// 		case 1:
// 			return <button className='product__item_button choose'>{name}</button>
// 		case 2:
// 			return <button className='product__item_button cart'>{name}</button>
// 	}
// }

export default ProductItem
