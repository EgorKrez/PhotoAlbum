
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import { itemsReducer } from './itemReducer'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    items: itemsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer