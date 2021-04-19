import {addItem, removeItem} from './Reducers'
import { CREATE_ITEM, REMOVE_ITEM } from './Types'

export const initialState = {
    items: [
        {title: "gsgdgdsgdsg", id: 1},
        {title: "dsadsa", id: 2},
        {title: "gsgdgdsad2dsgdsg", id: 3},
        {title: "gsgdgdfsafsgdsg", id: 4},
        {title: "123", id: 5},
        {title: "gsgdg2123dsgdsg", id: 6},
        {title: "gsgfdsafasfdgdsgdsg", id: 7},
        {title: "1223", id: 8},
    ]
}

export const itemsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_ITEM:
            return addItem(state, {title: 'safsafsafsaf', id: state.items.length + 1})
        case REMOVE_ITEM:
            return removeItem(state)
        default: return state
    }
}