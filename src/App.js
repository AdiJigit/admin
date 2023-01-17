import './index.css'
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/users' element={<UserList />} />
        </Routes>
        <Routes>
          <Route path='/user/:userId' element={<User />} />
        </Routes>
        <Routes>
          <Route path='/newUser' element={<NewUser />} />
        </Routes>
        <Routes>
          <Route path='/movies' element={<ProductList />} />
        </Routes>
        <Routes>
          <Route path='/product/:productId' element={<Product />} />
        </Routes>
        <Routes>
          <Route path='/newProduct' element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
