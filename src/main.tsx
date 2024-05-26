import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.tsx'
import { AuthProvider } from './hooks/AuthContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
<AuthProvider>
	<Provider store={store}>
		<BrowserRouter>
    <App />
  		</BrowserRouter>
  </Provider>
  </AuthProvider>
)
