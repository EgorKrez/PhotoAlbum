import { combineReducers, createStore } from "redux";
import { postsReducer } from "./postsReducer";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    posts: postsReducer,
})

const persistedReducer = persistReducer([persistConfig, rootReducer])

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return {store, persistor}
}