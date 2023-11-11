import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { clearCart } from '../../redux/Slices/Cart'
import { changeIsOpenPayment } from '../../redux/Slices/Payment'

const Payment = () => {
	const isOpen = useAppSelector((state) => state.payment.isOpen)

	const totalCount = useAppSelector((state) => state.cart.totalCount)
	const totalPrice = useAppSelector((state) => state.cart.totalPrice)
	const dispatch = useAppDispatch()

	const handleClick = () => {
		dispatch(changeIsOpenPayment(false))
		dispatch(clearCart())
	}
	if (isOpen) {
		document.body.classList.add('payment-open')
		return (
			<div className='payment'>
				<div className='payment__box'>
					<div className='payment__fade'></div>
					<div className='payment__item'>
						<div
							className='payment__button-close'
							onClick={() => dispatch(changeIsOpenPayment(false))}>
							<img
								src='/src/assets/images/icons/product-modal-close.svg'
								alt=''
							/>
						</div>
						<div className='payment__content'>
							<div className='payment__content_header'>
								<h3 className='payment__content_title'>
									Сведения о вашем заказе
								</h3>
								<div className='payment__content_img'>
									<img src='/src/assets/images/images/payment-img.png' alt='' />
								</div>
							</div>
							<div className='payment__content_form'>
								<div className='payment__form_item'>
									<h3 className='payment__item_title'>
										Общее количество элементов заказа -{' '}
									</h3>
									<p className='payment__item_text'>{totalCount}</p>
								</div>
								<div className='payment__form_item'>
									<h3 className='payment__item_title'>Общая сумма заказа - </h3>
									<p className='payment__item_text'>{totalPrice} BYN</p>
								</div>
								<div className='payment__form_item'>
									<h3 className='payment__item_title'>Вид оплаты - </h3>
									<p className='payment__item_text'>Тестовый платёж</p>
								</div>
								<div
									className='payment__item_button-success'
									onClick={() => handleClick()}>
									Оплатить
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	} else {
		document.body.classList.remove('payment-open')
	}
}

export default Payment
