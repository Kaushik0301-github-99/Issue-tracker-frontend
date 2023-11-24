import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import AllProject from './AllProject';
import store from './redux/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {path:"/",element:<AllProject/>}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.Fragment>
    <Provider store={store}>
   <RouterProvider router={router} / >
   </Provider>
  </React.Fragment>
);
