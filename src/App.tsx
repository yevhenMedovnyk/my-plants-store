import {createBrowserRouter} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import './App.css';

import BlogsPage from './pages/BlogsPage/BlogsPage';
import ShopItemPage, {fetchData} from './pages/PlantFullPage/PlantFullPage';
import CartPage from './pages/CartPage/CartPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import AccountPage from './pages/AccountPage/AccountPage';
import {RequireAuth} from './helpers/RequireAuth';
import WishlistPage from './pages/WishlistPage/WishlistPage';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import SearchPage from './pages/SearchPage/SearchPage';
import {FC} from 'react';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <HomePage />,
                index: true,
            },
            {
                path: '/plant/:id',
                element: <ShopItemPage />,
                loader: fetchData,
            },
            {
                path: '/search',
                element: <SearchPage />,
            },
            {
                path: '/blogs',
                element: <BlogsPage />,
            },
            {
                path: '/cart',
                element: <CartPage />,
            },
            {
                path: '/cart/checkout',
                element: <CheckoutPage />,
            },
            {
                path: '/account',
                element: (
                    <RequireAuth>
                        <AccountPage />
                    </RequireAuth>
                ),
                children: [
                    {
                        element: <WishlistPage />,
                        index: true,
                    },
                    {
                        path: 'my_orders',
                        element: <OrdersPage />,
                    },
                ],
            },
        ],
    },
]);

const App = () => {
    return <></>;
};

export default App;
