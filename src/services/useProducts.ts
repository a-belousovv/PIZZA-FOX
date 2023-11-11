import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
export const useProducts = (url: string, key: string) => {
	return useQuery({
		queryKey: [key],
		queryFn: async () => {
			return await axios.get(url)
		},
		select: ({ data }) => data,
	})
}
