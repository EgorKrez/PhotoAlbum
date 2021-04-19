export const addItem = (state, payload) => {
return {...state, items: state.items.concat([payload])}
}
export const removeItem = (state) => {
    return {...state, items: state.items.slice(0, state.items.length - 1)}
    }