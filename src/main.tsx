import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App, { router } from './App.jsx';
import './index.scss';
import { store } from './store/store.js';
import './assets/fonts/fonts.js';
import { Provider } from 'react-redux';
import './firebase.ts';
import { AuthContextProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <AuthContextProvider>
            <RouterProvider router={router} />
            <App />
        </AuthContextProvider>
    </Provider>
);
