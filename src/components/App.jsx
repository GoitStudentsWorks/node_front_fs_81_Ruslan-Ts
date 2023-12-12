import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { selectIsRefreshing, selectUserToken } from 'redux/auth/selectors.js';
import { refreshUserThunk } from 'redux/auth/thunk.js';

import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from 'guards/PublicRoute.jsx';

import 'react-toastify/dist/ReactToastify.css';
import ModalProvider from './ModalContext.jsx';
import Layout from 'layouts/Layout/Layout.jsx';
import Loader from './Loader.jsx';
import PrivateRoute from 'guards/PrivateRoute.jsx';

const WelcomePage = lazy(() => import('../Pages/WelcomePage/WelcomePage.jsx'));
const HomePage = lazy(() => import('../Pages/HomePage/HomePage.jsx'));
const SignIn = lazy(() => import('../Pages/SignInPage.jsx'));
const SignUp = lazy(() => import('../Pages/SignUpPage.jsx'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage.jsx'));
const ForgotPasswordPage = lazy(() =>
  import('../Pages/ForgotPasswordPage.jsx')
);

const createRouter = isAuth => {
  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          {
            path: '/',
            element: !isAuth ? <WelcomePage /> : <HomePage />,
            errorElement: <NotFoundPage />,
          },
          {
            path: '/signup',
            element: (
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            ),
            errorElement: <NotFoundPage />,
          },
          {
            path: '/signin',
            element: (
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            ),
            errorElement: <NotFoundPage />,
          },
          {
            path: '/forgot-password',
            element: (
              <PublicRoute>
                <ForgotPasswordPage />
              </PublicRoute>
            ),
            errorElement: <NotFoundPage />,
          },
          {
            path: '/home',
            element: (
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            ),
            errorElement: <NotFoundPage />,
          },
          {
            path: '*',
            element: (
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            ),
            errorElement: <NotFoundPage />,
          },
        ],
      },
    ],
    { basename: '/node_front_fs_81_Ruslan-Ts' }
  );
  return router;
};

export const App = () => {
  const token = useSelector(selectUserToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return !isRefreshing ? (
    <ModalProvider>
      <RouterProvider router={createRouter(token)} />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ModalProvider>
  ) : (
    <Loader />
  );
};
