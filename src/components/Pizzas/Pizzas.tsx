import Products from '../Products/Products'
import { useProducts } from '../../services/useProducts'
import SkeletonPizza from '../../skeletons/skeleton-pizza/skeleton'
import { ProductItemInterface } from '../../@types/ProductTypes/types'
const Pizzas = () => {
	const queryKey = 'pizzas'
	const initialPizzas: ProductItemInterface[] = [
		{
			title: 'Кантри-пицца',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/3276f7457aa646caa256ad77fa984634_584x584.webp',
			id: 'country-pizza',
			text: 'Бекон, ветчина, жареный лук, маринованные огурчики, красный лук, чеснок, моцарелла, соус ранч, соус барбекю',
			price: [
				{ size: 0, type: 0, price: 18.99 },
				{ size: 1, type: 0, price: 21.99 },
				{ size: 2, type: 0, price: 24.99 },
				{ size: 0, type: 1, price: 14.99 },
				{ size: 1, type: 1, price: 18.99 },
				{ size: 2, type: 1, price: 21.99 },
			],
			status: 1,
			keyQuery: 'pizzas',
		},
		{
			title: 'Трюфельная с ветчиной',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/aa2554d960a8417e8103041763f74520_584x584.webp',
			id: 'truffle-pizza',
			text: 'Ветчина, трюфельный соус, моцарелла, красный лук, чеснок, шампиньоны, фирменный соус альфредо',
			price: [
				{ size: 0, type: 0, price: 19.99 },
				{ size: 1, type: 0, price: 26.99 },
				{ size: 2, type: 0, price: 29.99 },
				{ size: 0, type: 1, price: 15.99 },
				{ size: 1, type: 1, price: 23.99 },
				{ size: 2, type: 1, price: 26.99 },
			],

			status: 1,
			keyQuery: 'pizzas',
		},
		{
			title: 'Пицца Жюльен',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/774244815038438fa52dcd6dcfcdaf35_584x584.webp',
			id: 'pizza-julien',
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
			keyQuery: 'pizzas',
		},
		{
			title: 'Миксик',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/9647d574e05b423ba8ae9abca46150b1_584x584.webp',
			id: 'pizza-mix',
			text: 'Цыпленок, ветчина, моцарелла, томаты, кубики брынзы, фирменный соус альфредо',
			price: [
				{ size: 0, type: 0, price: 18.99 },
				{ size: 1, type: 0, price: 21.99 },
				{ size: 2, type: 0, price: 24.99 },
				{ size: 0, type: 1, price: 14.99 },
				{ size: 1, type: 1, price: 18.99 },
				{ size: 2, type: 1, price: 21.99 },
			],
			status: 2,
			keyQuery: 'pizzas',
		},
		{
			title: 'Додо Микс',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/19d5e8d134984d4f800a2ed42d4ef3d2_584x584.webp',
			id: 'pizza-dodo-mix',
			text: 'Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, блю чиз, соус альфредо, чеснок, итальянские травы',
			price: [
				{ size: 0, type: 0, price: 19.99 },
				{ size: 1, type: 0, price: 23.99 },
				{ size: 2, type: 0, price: 27.99 },
				{ size: 0, type: 1, price: 16.99 },
				{ size: 1, type: 1, price: 19.99 },
				{ size: 2, type: 1, price: 24.99 },
			],
			status: 1,
			keyQuery: 'pizzas',
		},
		{
			title: 'Пепперони',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/70834e6311c0483493bf2279dbc1718d_584x584.webp',
			id: 'pizza-peperoni',
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
			keyQuery: 'pizzas',
		},
		{
			title: 'Карбонара',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/0a496a3d8b87415dbc3d3647ff8f3db8_584x584.webp',
			id: 'pizza-karbonara',
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
			keyQuery: 'pizzas',
		},
		{
			title: 'Итальянский цыпленок',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/778cd3360b124344b86d3031bc02386e_584x584.webp',
			id: 'pizza-italian-chicken',
			text: 'Цыпленок, итальянские травы, сыр моцарелла, красный лук, томаты свежие, соус альфредо',
			price: [
				{ size: 0, type: 0, price: 17.99 },
				{ size: 1, type: 0, price: 20.99 },
				{ size: 2, type: 0, price: 24.99 },
				{ size: 0, type: 1, price: 14.99 },
				{ size: 1, type: 1, price: 17.99 },
				{ size: 2, type: 1, price: 20.99 },
			],
			status: 1,
			keyQuery: 'pizzas',
		},
		{
			title: 'Ветчина и грибы',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/170dc9490a9f47928d616c9937b55735_584x584.webp',
			id: 'pizza-tomat-souse',
			text: 'Томатный соус, моцарелла, ветчина, шампиньоны',
			price: [
				{ size: 0, type: 0, price: 17.99 },
				{ size: 1, type: 0, price: 20.99 },
				{ size: 2, type: 0, price: 24.99 },
				{ size: 0, type: 1, price: 13.99 },
				{ size: 1, type: 1, price: 17.99 },
				{ size: 2, type: 1, price: 20.99 },
			],
			status: 1,
			keyQuery: 'pizzas',
		},
		{
			title: 'Четыре сезона!',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/f05b3d7ed33647a985d383d68a94bf09_584x584.webp',
			id: 'pizza-four-season',
			text: 'Итальянские травы, томатный соус, томаты, пикантная пепперони, кубики брынзы, моцарелла, ветчина, шампиньоны',
			price: [
				{ size: 0, type: 0, price: 20.99 },
				{ size: 1, type: 0, price: 24.99 },
				{ size: 2, type: 0, price: 27.99 },
				{ size: 0, type: 1, price: 18.99 },
				{ size: 1, type: 1, price: 21.99 },
				{ size: 2, type: 1, price: 24.99 },
			],
			status: 1,
			keyQuery: 'pizzas',
		},
		{
			title: 'Деревенская!',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/4ce729f1b8db4b60abf8827c7efb28c6_584x584.webp',
			id: 'pizza-village',
			text: 'Картофель из печи, маринованные огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус',
			price: [
				{ size: 0, type: 0, price: 20.99 },
				{ size: 1, type: 0, price: 24.99 },
				{ size: 2, type: 0, price: 27.99 },
				{ size: 0, type: 1, price: 18.99 },
				{ size: 1, type: 1, price: 21.99 },
				{ size: 2, type: 1, price: 24.99 },
			],
			status: 1,
			keyQuery: 'pizzas',
		},
		{
			title: 'Аррива!',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/d878f20b7ed84877b33662a212a398a0_584x584.webp',
			id: 'pizza-arriva',
			text: 'Цыпленок, чоризо, соус бургер, томаты, сладкий перец, лук красный, чеснок, моцарелла, соус ранч',
			price: [
				{ size: 0, type: 0, price: 20.99 },
				{ size: 1, type: 0, price: 24.99 },
				{ size: 2, type: 0, price: 27.99 },
				{ size: 0, type: 1, price: 18.99 },
				{ size: 1, type: 1, price: 21.99 },
				{ size: 2, type: 1, price: 24.99 },
			],
			status: 1,
			keyQuery: 'pizzas',
		},
		{
			title: 'Гавайская с альфредо',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2f01bd53e7374171838e95f001bae829_760x760.webp',
			id: 'pizza-hawaiian-with-alfredo',
			text: 'Фирменный соус альфредо, цыпленок, моцарелла, ананасы',
			price: [
				{ size: 0, type: 0, price: 20.99 },
				{ size: 1, type: 0, price: 24.99 },
				{ size: 2, type: 0, price: 27.99 },
				{ size: 0, type: 1, price: 18.99 },
				{ size: 1, type: 1, price: 21.99 },
				{ size: 2, type: 1, price: 24.99 },
			],
			status: 1,
			keyQuery: 'pizzas',
		},
		{
			title: 'Домашняя',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ee610848581545c298a429c05802f56d_292x292.webp',
			id: 'pizza-home',
			text: 'Пикантная пепперони, ветчина, маринованные огурчики, томаты, моцарелла, томатный соус',
			price: [
				{ size: 0, type: 0, price: 18.99 },
				{ size: 1, type: 0, price: 24.99 },
				{ size: 2, type: 0, price: 27.99 },
				{ size: 0, type: 1, price: 14.99 },
				{ size: 1, type: 1, price: 18.99 },
				{ size: 2, type: 1, price: 24.99 },
			],
			status: 1,
			keyQuery: 'pizzas',
		},
		{
			title: 'Бургер-пицца',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/b5267f2ab19346bcbef26693aed7a2ce_292x292.webp',
			id: 'pizza-burger',
			text: 'Томатный соус, моцарелла, ветчина, красный лук, томаты, маринованные огурчики, соус бургер, чеснок',
			price: [
				{ size: 0, type: 0, price: 20.99 },
				{ size: 1, type: 0, price: 24.99 },
				{ size: 2, type: 0, price: 27.99 },
				{ size: 0, type: 1, price: 18.99 },
				{ size: 1, type: 1, price: 21.99 },
				{ size: 2, type: 1, price: 24.99 },
			],
			status: 1,
			keyQuery: 'pizzas',
		},
		{
			title: 'Цыпленок барбекю',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/f04f6e1cd2004bfa83389a3563076053_292x292.webp',
			id: 'pizza-chicken-b-b-q',
			text: 'Соус барбекю, томатный соус, цыпленок, красный лук, моцарелла, бекон',
			price: [
				{ size: 0, type: 0, price: 20.99 },
				{ size: 1, type: 0, price: 24.99 },
				{ size: 2, type: 0, price: 27.99 },
				{ size: 0, type: 1, price: 18.99 },
				{ size: 1, type: 1, price: 21.99 },
				{ size: 2, type: 1, price: 24.99 },
			],
			status: 1,
			keyQuery: 'pizzas',
		},
		{
			title: 'Сырный цыплёнок',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2d8ceb3abd6646c5a7012916a720e9ed_292x292.webp',
			id: 'pizza-chicken-cheese',
			text: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
			price: [
				{ size: 0, type: 0, price: 23.99 },
				{ size: 1, type: 0, price: 26.99 },
				{ size: 2, type: 0, price: 29.99 },
				{ size: 0, type: 1, price: 20.99 },
				{ size: 1, type: 1, price: 23.99 },
				{ size: 2, type: 1, price: 26.99 },
			],
			status: 1,
			keyQuery: 'pizzas',
		},
		{
			title: 'Итальянская',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/143590256f2c4010b8028219e2fd93dc_292x292.webp',
			id: 'pizza-italian',
			text: 'Итальянские травы, томатный соус, пикантная пепперони, маслины, моцарелла, шампиньоны',
			price: [
				{ size: 0, type: 0, price: 20.99 },
				{ size: 1, type: 0, price: 24.99 },
				{ size: 2, type: 0, price: 27.99 },
				{ size: 0, type: 1, price: 18.99 },
				{ size: 1, type: 1, price: 21.99 },
				{ size: 2, type: 1, price: 24.99 },
			],
			status: 1,
			keyQuery: 'pizzas',
		},
		{
			title: 'Четыре сыра',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/91e62f95cea14ceebc06fe046e03e759_292x292.webp',
			id: 'pizza-four-cheese',
			text: 'Соус альфредо, сыры пармезан и чеддер, сыр блю чиз, моцарелла',
			price: [
				{ size: 0, type: 0, price: 23.99 },
				{ size: 1, type: 0, price: 27.99 },
				{ size: 2, type: 0, price: 29.99 },
				{ size: 0, type: 1, price: 20.99 },
				{ size: 1, type: 1, price: 24.99 },
				{ size: 2, type: 1, price: 27.99 },
			],
			status: 1,
			keyQuery: 'pizzas',
		},
		{
			title: 'Маграрита',
			src: 'https://dodopizza-a.akamaihd.net/static/Img/Products/a10ad669c5054be2b019613e5cfd2477_292x292.webp',
			id: 'pizza-margarita',
			text: 'Итальянские травы, томатный соус, томаты, моцарелла',
			price: [
				{ size: 0, type: 0, price: 14.99 },
				{ size: 1, type: 0, price: 17.99 },
				{ size: 2, type: 0, price: 20.99 },
				{ size: 0, type: 1, price: 11.99 },
				{ size: 1, type: 1, price: 14.99 },
				{ size: 2, type: 1, price: 17.99 },
			],
			status: 1,
			keyQuery: 'pizzas',
		},
	]
	const { data, isLoading, isError } = useProducts(
		'http://localhost:3000/pizzas',
		queryKey
	)
	if (isLoading) {
		return (
			<div className='skeleton'>
				<div className='container'>
					<div className='skeleton__box'>
						{[...new Array(20)].map((i) => (
							<SkeletonPizza key={i} />
						))}
					</div>
				</div>
			</div>
		)
	}
	if (data) {
		return (
			<div id='pizzas'>
				<Products settings={data} title='Пиццы' queryKey={queryKey} />
			</div>
		)
	}
	if (isError) {
		return (
			<div id='pizzas'>
				<Products settings={initialPizzas} title='Пиццы' queryKey={queryKey} />
			</div>
		)
	}
}

export default Pizzas
