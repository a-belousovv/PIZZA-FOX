import { useAppDispatch, useAppSelector } from '../../hooks/hooks'

import { CartItem } from '../../@types/CartTypes/types'
import {
	changeOpenCartValue,
	decrementItemValue,
	incrementItemValue,
	setTotalCount,
	setTotalPrice,
} from '../../redux/Slices/Cart'
import { changeIsOpenPayment } from '../../redux/Slices/Payment'

const Cart = () => {
	const dispatch = useAppDispatch()

	const isOpen = useAppSelector((state) => state.cart.isOpen)

	const items = useAppSelector((state) => state.cart.carts)

	const totalCount = items.reduce(
		(sum: number, item: CartItem) => sum + item.count,
		0
	)

	const totalPrice = Math.ceil(
		items.reduce(
			(sum: number, item: CartItem) => sum + item.price * item.count,
			0
		)
	)

	const handleClick = () => {
		dispatch(changeIsOpenPayment(true))
		dispatch(changeOpenCartValue(false))
	}

	dispatch(setTotalCount(totalCount))
	dispatch(setTotalPrice(totalPrice))
	if (isOpen) {
		document.body.classList.add('cart-open')
		window.scrollTo(0, 0)
		return (
			<div className='cart'>
				<div className='cart__fade'></div>
				<div className='container'>
					<div
						className='cart__button-close'
						onClick={() => dispatch(changeOpenCartValue(false))}>
						<img
							src='/src/assets/images/icons/product-modal-close.svg'
							alt=''
						/>
					</div>
					<div className='cart__box'>
						{items.length == 0 ? (
							<div className='cart__empty'>
								<img
									src='/src/assets/images/images/cart-empty.svg'
									alt=''
									className='cart__empty-dog'
								/>
								<h3 className='cart__empty_title'>Ой, пусто!</h3>
								<p className='cart__empty_text'>
									Ваша корзина пуста, откройте «Меню» и выберите понравившийся
									товар. Мы доставим ваш заказ от 14,90 руб.
								</p>
							</div>
						) : (
							<div className='cart__content'>
								<div className='cart__header'>
									<h3 className='cart__header_title'>
										{totalCount} товар на {totalPrice} руб.
									</h3>
								</div>
								<div className='cart__items'>
									{items.map((item: CartItem) => {
										return (
											<div className='cart__items_item' key={item.id}>
												<div className='cart__item_top'>
													<div className='cart__item_img'>
														<img src={item.src} alt='' />
													</div>
													<div className='cart__item_content'>
														<h3 className='cart__item_title'>{item.title}</h3>
														<p className='cart__item_text'>
															{item.size}, {item.type}
														</p>
													</div>
												</div>
												<div className='cart__item_hr'></div>
												<div className='cart__item_bottom'>
													<h4 className='cart__item_price'>
														{item.price} руб.
													</h4>
													<div className='cart__item_change'>
														<div
															className='cart__change_minus'
															onClick={() =>
																dispatch(decrementItemValue(item.id))
															}>
															<svg
																width='10'
																height='10'
																viewBox='0 0 10 10'
																xmlns='http://www.w3.org/2000/svg'
																className='icon'>
																<rect
																	fill='#454B54'
																	y='4'
																	width='10'
																	height='2'
																	rx='1'></rect>
															</svg>
														</div>
														<h3 className='cart__change_count'>{item.count}</h3>
														<div
															className='cart__change_plus'
															onClick={() =>
																dispatch(incrementItemValue(item.id))
															}>
															<svg
																width='10'
																height='10'
																viewBox='0 0 10 10'
																xmlns='http://www.w3.org/2000/svg'
																className='icon'>
																<g fill='#454B54'>
																	<rect
																		x='4'
																		width='2'
																		height='10'
																		ry='1'></rect>
																	<rect
																		y='4'
																		width='10'
																		height='2'
																		rx='1'></rect>
																</g>
															</svg>
														</div>
													</div>
												</div>
											</div>
										)
									})}
								</div>
								<div className='cart__button-success'>
									<p
										className='cart__button_text'
										onClick={() => handleClick()}>
										Оформить заказ на сумму - {totalPrice} рублей
									</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		)
	} else {
		document.body.classList.remove('cart-open')
	}
}

export default Cart
