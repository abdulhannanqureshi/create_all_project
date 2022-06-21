const Actions = (set) => ({
    tokenHandle: () => {
        set({ tokenStatus: true})
    },
    logoutTokenHandle: () => {
        set({ tokenStatus: false})
    },
    cartHandler: () => {
        set(state => ({ cartLength: state.cartLength + 1}))
    },
    removeCartHandler: () => {
        set(state => ({ cartLength: state.cartLength - 1}))
    },
    getCartLength: (item) => {
        set({ cartLength: item})
    }
})

export default Actions