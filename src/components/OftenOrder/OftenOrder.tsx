import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import { useProducts } from '../../services/useProducts'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import {
	setIsFindItem,
	setIsOpenModal,
} from '../../redux/Slices/ProductItemModal'
import { ProductItemInterface } from '../../@types/ProductTypes/types'
import SkeletonOftenOrder from '../../skeletons/skeleton-often-order/skeleton-often'
import { ProductInitialItem } from '../../@types/OftenOrder/types'
const OftenOrder = () => {
	const queryKey = 'oftenOrder'
	const { data, isLoading, isError } = useProducts(
		`http://localhost:3000/${queryKey}`,
		queryKey
	)

	const initialOftenItems: ProductInitialItem[] = [
		{
			title: 'Пицца Жюльен',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/774244815038438fa52dcd6dcfcdaf35_584x584.webp',
			id: 'often-pizza-julien',
			text: 'Цыпленок, шампиньоны, сливочный соус с грибами, красный лук, чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо',
			price: [
				{ size: 0, type: 0, price: 19.99 },
				{ size: 1, type: 0, price: 26.99 },
				{ size: 2, type: 0, price: 29.99 },
				{ size: 0, type: 1, price: 15.99 },
				{ size: 1, type: 1, price: 23.99 },
				{ size: 2, type: 1, price: 26.99 },
			],
			status: 1,
		},
		{
			title: 'Карбонара',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/0a496a3d8b87415dbc3d3647ff8f3db8_584x584.webp',
			id: 'often-pizza-karbonara',
			text: 'Бекон, сыры чеддер и пармезан, моцарелла, томаты, соус альфредо, красный лук, чеснок, итальянские травы',
			price: [
				{ size: 0, type: 0, price: 16.99 },
				{ size: 1, type: 0, price: 19.99 },
				{ size: 2, type: 0, price: 22.99 },
				{ size: 0, type: 1, price: 12.99 },
				{ size: 1, type: 1, price: 16.99 },
				{ size: 2, type: 1, price: 25.99 },
			],
			status: 1,
		},
		{
			title: 'Додо Микс',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/19d5e8d134984d4f800a2ed42d4ef3d2_584x584.webp',
			id: 'often-pizza-dodo-mix',
			text: 'Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, блю чиз, соус альфредо, чеснок, итальянские травы',
			price: [
				{ size: 0, type: 0, price: 18.99 },
				{ size: 1, type: 0, price: 21.99 },
				{ size: 2, type: 0, price: 24.99 },
				{ size: 0, type: 1, price: 14.99 },
				{ size: 1, type: 1, price: 18.99 },
				{ size: 2, type: 1, price: 21.99 },
			],
			status: 1,
		},
		{
			title: 'Пепперони',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/70834e6311c0483493bf2279dbc1718d_584x584.webp',
			id: 'often-pizza-peperoni',
			text: 'Томатный соус, пикантная пепперони, моцарелла',
			price: [
				{ size: 0, type: 0, price: 16.99 },
				{ size: 1, type: 0, price: 19.99 },
				{ size: 2, type: 0, price: 22.99 },
				{ size: 0, type: 1, price: 12.99 },
				{ size: 1, type: 1, price: 16.99 },
				{ size: 2, type: 1, price: 25.99 },
			],
			status: 1,
		},
	]

	const dispatch = useAppDispatch()

	const handleClick = (id: string) => {
		const findItem = data.find((obj: ProductItemInterface) => obj.id == id)

		dispatch(setIsFindItem(findItem))
		dispatch(setIsOpenModal(true))
	}

	const isOpenStats = useAppSelector((state) => state.header.isOpenStats)
	if (data) {
		return (
			<div className={`often-order ${isOpenStats ? '' : ''}`}>
				<div className='container'>
					<div className='often__box'>
						<h2 className='often__title'>Часто заказывают</h2>
						<Swiper slidesPerView={4} spaceBetween={30}>
							{data.map((item: ProductItemInterface, i: number) => {
								return (
									<SwiperSlide key={i}>
										<div
											className='often__item'
											onClick={() => handleClick(item.id)}>
											<img src={item.src} alt='' className='often__item_img' />
											<div className='often__content'>
												<h4 className='often__content_title'>{item.title}</h4>
												<p className='often__content_price'>
													{item.price[0].price} руб
												</p>
											</div>
										</div>
									</SwiperSlide>
								)
							})}
						</Swiper>
					</div>
				</div>
			</div>
		)
	}
	if (isLoading) {
		return (
			<div className='often-skeleton'>
				<div className='container'>
					<div className='often-skeleton__box'>
						{[...new Array(4)].map((item) => {
							return <SkeletonOftenOrder key={item} />
						})}
					</div>
				</div>
			</div>
		)
	}
	if (isError) {
		return (
			<div className={`often-order ${isOpenStats ? '' : ''}`}>
				<div className='container'>
					<div className='often__box'>
						<h2 className='often__title'>Часто заказывают</h2>
						<Swiper slidesPerView={4} spaceBetween={30}>
							{initialOftenItems.map((item: ProductInitialItem, i: number) => {
								return (
									<SwiperSlide key={i}>
										<div
											className='often__item'
											onClick={() => handleClick(item.id)}>
											<img src={item.src} alt='' className='often__item_img' />
											<div className='often__content'>
												<h4 className='often__content_title'>{item.title}</h4>
												<p className='often__content_price'>
													{item.price[0].price} руб
												</p>
											</div>
										</div>
									</SwiperSlide>
								)
							})}
						</Swiper>
					</div>
				</div>
			</div>
		)
	}
}

export default OftenOrder
