import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Coffee } from '../constants/types'

export interface CoffeesState {
  coffees: Array<Coffee>
}

const initialState: CoffeesState = {
  coffees: [],
}

export const coffeesSlice = createSlice({
  name: 'coffees',
  initialState,
  reducers: {
    addCoffee: (state, action: PayloadAction<Coffee>) => {
      state.coffees.push(action.payload)
    }
  },
})

export const { addCoffee } = coffeesSlice.actions

export default coffeesSlice.reducer