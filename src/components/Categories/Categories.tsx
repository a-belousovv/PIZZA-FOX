import { CategoriesItemInterface } from '../../@types/CategoriesTypes/types'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { changeOpenCartValue } from '../../redux/Slices/Cart'
import SkeletonNav from '../../skeletons/skeleton-nav/skeleton-nav'
import { useProducts } from '../../services/useProducts'
const Categories = () => {
	const queryKey = 'categories'
	const { data, isLoading, isError } = useProducts(
		`http://localhost:3000/${queryKey}`,
		queryKey
	)
	const intialCategories: CategoriesItemInterface[] = [
		{
			title: 'Пицца',
			path: '#pizzas',
		},
		{
			title: 'Комбо',
			path: '#combos',
		},
		{
			title: 'Закуски',
			path: '#snacks',
		},
	]
	const isOpenStats = useAppSelector((state) => state.header.isOpenStats)

	const dispatch = useAppDispatch()

	const handleClick = (value: boolean) => {
		dispatch(changeOpenCartValue(value))
	}

	const totalCount = useAppSelector((state) => state.cart.totalCount)

	if (data) {
		return (
			<div className={`categories ${isOpenStats ? 'under' : 'up'}`}>
				<div className='container'>
					<div className='categories__box'>
						<ul className='categories__items'>
							{data.map((item: CategoriesItemInterface, i: number) => {
								return (
									<a
										className='categories__items_item'
										key={i}
										href={item.path}>
										{item.title}
									</a>
								)
							})}
						</ul>
						<button
							onClick={() => handleClick(true)}
							className='categories__cart_button'>
							{totalCount == 0 ? (
								<p>Корзина</p>
							) : (
								<div className='cart__button_box'>
									<p>Корзина</p>
									<div className='cart__button_hr'></div>
									<div className='cart__button_count'>{totalCount}</div>
									<svg
										className='cart__button_arrow'
										width='13'
										height='11'
										viewBox='0 0 13 11'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M1 5.483h11m0 0L7.286 1M12 5.483L7.286 10'
											stroke='#fff'
											stroke-width='1.5'
											stroke-linecap='round'
											stroke-linejoin='round'></path>
									</svg>
								</div>
							)}
						</button>
					</div>
				</div>
			</div>
		)
	}
	if (isLoading) {
		return (
			<div className='nav-skeleton'>
				<div className='container'>
					<div className='nav-skeleton__box'>
						{[...new Array(3)].map((i) => {
							return <SkeletonNav key={i} />
						})}
					</div>
				</div>
			</div>
		)
	}
	if (isError) {
		return (
			<div className={`categories ${isOpenStats ? 'under' : 'up'}`}>
				<div className='container'>
					<div className='categories__box'>
						<ul className='categories__items'>
							{intialCategories.map(
								(item: CategoriesItemInterface, i: number) => {
									return (
										<a
											className='categories__items_item'
											key={i}
											href={item.path}>
											{item.title}
										</a>
									)
								}
							)}
						</ul>
						<button
							onClick={() => handleClick(true)}
							className='categories__cart_button'>
							{totalCount == 0 ? (
								<p>Корзина</p>
							) : (
								<div className='cart__button_box'>
									<p>Корзина</p>
									<div className='cart__button_hr'></div>
									<div className='cart__button_count'>{totalCount}</div>
									<svg
										className='cart__button_arrow'
										width='13'
										height='11'
										viewBox='0 0 13 11'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M1 5.483h11m0 0L7.286 1M12 5.483L7.286 10'
											stroke='#fff'
											stroke-width='1.5'
											stroke-linecap='round'
											stroke-linejoin='round'></path>
									</svg>
								</div>
							)}
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Categories
