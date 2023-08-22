import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from '@/redux/store'
import { router } from './pages/Router'
import '@/assets/scss/index.scss'
import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'

Bugsnag.start({
  apiKey: import.meta.env.VITE_BUGSANG_API_KEY,
  plugins: [new BugsnagPluginReact()]
})
const ErrorBoundary = (Bugsnag as any).getPlugin("react").createErrorBoundary(React)

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </ErrorBoundary>,
)