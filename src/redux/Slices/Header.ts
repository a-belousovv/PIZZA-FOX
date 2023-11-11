import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
	isOpenStats: false,
}
export const HeaderSlice = createSlice({
	name: 'headerSlice',
	initialState,
	reducers: {
		changeOpenStats: (state, action: PayloadAction<boolean>) => {
			state.isOpenStats = action.payload
		},
	},
})

export const { changeOpenStats } = HeaderSlice.actions

export default HeaderSlice.reducer
