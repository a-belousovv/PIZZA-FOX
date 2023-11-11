import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import {
	setActiveSize,
	setActiveType,
	setIsOpenModal,
} from '../../redux/Slices/ProductItemModal'
import { addNewCartItem } from '../../redux/Slices/Cart'
import { newCartItem } from '../../@types/CartTypes/types'
import { ProductItemInterface } from '../../@types/ProductTypes/types'

const ProductItemModal = () => {
	const dispatch = useAppDispatch()
	const activeSize = useAppSelector(
		(state) => state.productItemModal.activeSize
	)
	const activeType = useAppSelector(
		(state) => state.productItemModal.activeType
	)

	const data = useAppSelector((state) => state.productItemModal.modalFindItem)

	const sizes = useAppSelector((state) => state.productItemModal.sizes)
	const types = useAppSelector((state) => state.productItemModal.types)
	const isOpen = useAppSelector((state) => state.productItemModal.isOpenModal)

	if (data && data.price.length > 0) {
		const ActivePrice = data.price.find(
			(obj) => obj.size == activeSize && obj.type == activeType
		)
		const handleClick = (data: ProductItemInterface) => {
			const newItemProps: newCartItem = {
				data: data,
				price: ActivePrice?.price,
				size: sizes[activeSize],
				type: types[activeType],
				customid: data.id,
			}
			dispatch(addNewCartItem(newItemProps))
			dispatch(setIsOpenModal(false))
			window.scrollTo(0, 0)
		}

		if (isOpen) {
			document.body.classList.add('modal-open')
			return (
				<div className={`product-modal`}>
					<div
						className='product-modal__item_button-close'
						onClick={() => dispatch(setIsOpenModal(false))}>
						<img
							src='/src/assets/images/icons/product-modal-close.svg'
							alt=''
						/>
					</div>
					<div className='product-modal__fade'></div>
					<div className='product-modal__item'>
						<div className='product-modal__item_content'>
							<div className='product-modal__content_img'>
								<img src={data.src} alt='' />
							</div>
							<div className='product-modal__info'>
								<h3 className='product-modal__info_title'>{data.title}</h3>
								<h4 className='product-modal__info_subtitle'>
									{sizes[activeSize]}, {types[activeType]}
								</h4>
								<div className='product-modal__info_composition'>
									{data.text}
								</div>
								<div className='product-modal__info_sizes'>
									{sizes.map((item: string, i: number) => {
										return (
											<div
												onClick={() => dispatch(setActiveSize(i))}
												key={i}
												className={`product-modal__sizes_item ${
													activeSize == i ? 'active' : ''
												}`}>
												{item}
											</div>
										)
									})}
								</div>
								<div className='product-modal__info_types'>
									{types.map((item: string, i: number) => {
										return (
											<div
												key={i}
												onClick={() => dispatch(setActiveType(i))}
												className={`product-modal__types_item ${
													activeType == i ? 'active' : ''
												}`}>
												{item}
											</div>
										)
									})}
								</div>
								<div
									className='product-modal__info_button-add'
									onClick={() => handleClick(data)}>
									<p>Добавить в корзину</p>

									<p> {ActivePrice?.price} руб.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			document.body.classList.remove('modal-open')
		}
	}
}

export default ProductItemModal
