import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
}

export interface IdsState {
    ids: string[]
}

const initialState: IdsState = {
    ids: []
}

export const counterSlice = createSlice({
    // name: 'counter',
    // initialState,
    // reducers: {
    //     increment: (state) => {
    //         state.value += 1
    //     },
    //     decrement: (state) => {
    //         state.value -= 1
    //     },
    //     incrementByAmount: (state, action: PayloadAction<number>) => {
    //         state.value += action.payload
    //     }
    // },
    name: 'ids',
    initialState,
    reducers: {
        addId: (state, action: PayloadAction<string>) => {
            state.ids.push(action.payload)
        }
    }
})

export const { addId } = counterSlice.actions
