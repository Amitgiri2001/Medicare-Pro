
import './App.css';
import Home from './Pages/Home';
import Template from './Pages/Template';
import Products from './Pages/Products';

// ----------------routing---------
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './Pages/Error';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AllProducts from './Components/AllProducts/AllProducts';

const router = createBrowserRouter([
  // template's
  {
    path: '/', element: <Template />,
    errorElement: <Error />, children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/products', element: <AllProducts /> },
      { path: '/products/:productId', element: <ProductDetailsPage /> },
      { path: '/all_products', element: <AllProducts /> },
    ]
  },

]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
