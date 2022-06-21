import React from 'react';
import create from 'zustand'
import Actions from './Action'

const initialState = {
    tokenStatus: false,
    cartLength: 0
}

export const useStore = create(set => ({
    ...initialState,
    ...Actions(set)
}))

