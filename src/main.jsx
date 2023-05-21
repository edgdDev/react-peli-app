import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

//Font Roboto Material Ui
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline } from '@mui/material';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DetailShow } from './components/DetailShow.jsx';
import { ErrorPage } from './components/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/show-detail/:nameSerie',
    element: <DetailShow />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline>
      <RouterProvider router={ router } />
      {/* <App /> */}
    </CssBaseline>
  </React.StrictMode>,
)
