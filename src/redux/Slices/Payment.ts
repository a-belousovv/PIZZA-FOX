import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PaymentSliceInitial } from '../../@types/PaymentTypes/types'

const initialState: PaymentSliceInitial = {
	isOpen: false,
}
export const PaymentSlice = createSlice({
	name: 'payment',
	initialState,
	reducers: {
		changeIsOpenPayment: (state, action: PayloadAction<boolean>) => {
			state.isOpen = action.payload
		},
	},
})

export const { changeIsOpenPayment } = PaymentSlice.actions
export default PaymentSlice.reducer
