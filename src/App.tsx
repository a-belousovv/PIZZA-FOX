import './assets/styles/main.scss'
import Header from './components/Header/Header'
import Categories from './components/Categories/Categories'
import OftenOrder from './components/OftenOrder/OftenOrder'

import Pizzas from './components/Pizzas/Pizzas'

import DeliveryandPayment from './components/DeliveryandPayment/DeliveryandPayment'
import Cart from './components/Cart/Cart'
import Payment from './components/Payment/Payment'
function App() {
	return (
		<div>
			<Payment />
			<Cart />
			<Header />
			<Categories />
			<OftenOrder />
			<Pizzas />
			<DeliveryandPayment />
		</div>
	)
}

export default App
