import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { changeOpenStats } from '../../redux/Slices/Header'

const Header = () => {
	const dispatch = useAppDispatch()
	const isOpenStats = useAppSelector((state) => state.header.isOpenStats)
	const onMouseEnter = () => {
		dispatch(changeOpenStats(true))
	}
	const onMouseLeave = () => {
		dispatch(changeOpenStats(false))
	}
	return (
		<div className='header'>
			<div className='container'>
				<div className='header__box'>
					<div className='header__left'>
						<Link to='/' className='header__logo'>
							<img
								src='/src/assets/logo.png'
								alt=''
								className='header__logo_img'
							/>
							<div className='header__logo_content'>
								<h1 className='header__logo_title'>ЛАПКИ ФОКСИ</h1>
								<h3 className='header__logo_text'></h3>
							</div>
						</Link>

						<div className='header__delivery'>
							<h3 className='header__delivery_title'>
								Доставка пиццы <span>Гродно</span>
							</h3>
							<div className='header__delivery_stats'>
								<div
									className={`header__stats_more-info ${
										isOpenStats ? '' : 'hide'
									} `}>
									<div className='header__more_top'>
										<div className='header__more_arrow-top'></div>
										<h4 className='header__top_title'>
											Всегда бесплатная, всегда быстрая
										</h4>
										<p className='header__top_text'>
											Условия доставки не меняются в течение дня. Но если вы
											ждали заказ больше часа, мы подарим сертификат на пиццу
										</p>
									</div>
									<div className='header__more_bottom'>
										<div className='header__bottom_content'>
											<h3 className='header__content_title'>32 минуты</h3>
											<h4 className='header__content_subtitle'>
												Среднее время доставки
											</h4>
											<p className='header__content_text'>
												Если не успеем за 60 минут, вы получите сертификат на
												большую пиццу
											</p>
										</div>
										<div className='header__bottom_stats'>
											<div className='header__stats_img'>
												<span>4.84</span>

												<img
													src='/src/assets/images/icons/header-stats-star.svg'
													alt=''
												/>
												<img
													src='/src/assets/images/icons/header-stats-star.svg'
													alt=''
												/>
												<img
													src='/src/assets/images/icons/header-stats-star.svg'
													alt=''
												/>
												<img
													src='/src/assets/images/icons/header-stats-star.svg'
													alt=''
												/>
											</div>
											<h4 className='header__content_subtitle'>416 оценок</h4>
											<p className='header__content_text'>
												Оценить заказ можно в мобильном приложении
											</p>
										</div>
									</div>
									<h4 className='header__content_text'>
										Данные за последние 7 дней в вашем городе
									</h4>
								</div>
								<div className='header__stats_box'>
									<p className='header__stats_text'>32 мин</p>
								</div>
								<div
									className='header__stats_box star'
									onMouseEnter={() => onMouseEnter()}
									onMouseLeave={() => onMouseLeave()}>
									<p className='header__stats_text'>4.84</p>
									<img
										src='/src/assets/images/icons/header-stats-star.svg'
										alt=''
										className='header__stats_star'
									/>
								</div>
							</div>
						</div>
						<div className='header__phone'>
							<a href='tel:7576' className='header__phone_title'>
								375 29 000 000 00
							</a>
							<p className='header__phone_text'>Звонок по телефону</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
