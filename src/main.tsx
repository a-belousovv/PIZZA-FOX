import ReactDOM from 'react-dom/client'
import App from './App.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.js'
const queryClient = new QueryClient()
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
])
ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</Provider>
)
