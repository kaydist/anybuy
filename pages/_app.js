import '../styles/globals.css'
import Layout from "../components/Layout"
import {Provider} from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from  '../store/store'


const {store, persistor} = configureStore()

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
