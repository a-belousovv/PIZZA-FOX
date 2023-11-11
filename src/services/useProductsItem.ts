import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
export const useProductsItem = (id: string, product: string, key: string) => {
	return useQuery({
		queryKey: [key],
		queryFn: async () => {
			return await axios.get(`http://localhost:3000/${product}?id=${id}`)
		},
		select: ({ data }) => data,
		enabled: false,
	})
}
