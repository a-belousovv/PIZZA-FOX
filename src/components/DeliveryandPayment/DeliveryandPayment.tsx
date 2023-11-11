const DeliveryandPayment = () => {
	return (
		<div className='delivery-and-payment'>
			<div className='container'>
				<div className='delivery-and-payment__box'>
					<div className='delivery__header'>
						<h2 className='delivery__header_title'>Доставка и оплата</h2>
					</div>
					<div className='delivery__content'>
						<div className='delivery__content_time'>
							<h4 className='delivery__content_title'>
								60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО
							</h4>
							<p className='delivery__content_text'>
								Если мы не успеем доставить любые продукты, кроме сувенирной
								продукции и соусов, в течение 60 минут, курьер подарит вам
								сертификат на большую пиццу.
							</p>
						</div>
						<div className='delivery__content_price'>
							<h4 className='delivery__content_title'>14,90 РУБ.</h4>
							<p className='delivery__content_text'>
								Минимальная сумма доставки. Заказы на меньшую сумму оформляются
								на условиях самовывоза.
							</p>
							<h4 className='delivery__content_title'>1 000,00 РУБ.</h4>
							<p className='delivery__content_text'>
								Максимальная сумма при оплате наличными
							</p>
							<p className='delivery__content_text'>
								Изображения продуктов могут отличаться от продуктов в заказе.
							</p>
						</div>
						<div className='delivery__content_map'>
							<h4 className='delivery__content_title'>
								ЗОНА ДОСТАВКИ ОГРАНИЧЕНА
							</h4>
							<div className='delivery__map_img'>
								<p className='delivery__map_text'>Зона Доставки</p>
								<img src='/src/assets/images/images/dodomap-mini.jpg' alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DeliveryandPayment
