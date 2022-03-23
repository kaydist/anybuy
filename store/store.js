import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from "redux-devtools-extension"; 
import cart from "./reducers/cartReducer";

const persistConfig = {
    key: 'AnybuyCart',
    storage,
    whitelist: ['cart', 'auth', 'rechargeCart']
}

const persistedReducer = persistReducer(persistConfig, reducers)
const middleware = [thunk]

export default ()=> {
    let store = createStore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(...middleware))
    )

    let persistor = persistStore(store)
    return { store, persistor }
}
