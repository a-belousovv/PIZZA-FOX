import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import {
	ProductItemInterface,
	ProductsInterface,
} from '../../@types/ProductTypes/types'
import ProductItemModal from '../ProductItemModal/ProductItemModal'
const Products: React.FC<ProductsInterface> = ({
	settings,
	title,
	queryKey,
}) => {
	return (
		<div className='product'>
			<ProductItemModal />
			<div className='container'>
				<div className='product__box'>
					<h2 className='product__title'>{title}</h2>
					<div className='product__items'>
						{settings.map((item: ProductItemInterface) => {
							return (
								<ProductItem
									//@Пишет что может перезаписаться значение если юзать {...item} keyquery={queryKey}
									//хз бред какой то понимаю как ошибка происходит но хз как фикс мб просто лень
									keyQuery={queryKey}
									title={item.title}
									src={item.src}
									text={item.text}
									price={item.price}
									id={item.id}
									key={item.id}
									status={item.status}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Products
