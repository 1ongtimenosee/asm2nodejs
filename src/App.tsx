import { useEffect,useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import { getAllProduct,addProduct,deleteProduct, updateProduct } from './api/product'
import ProductDetailPage from './pages/ProductDetail'
import { Iproduct } from './types/product'
import AddProductPage from './pages/admin/AddProduct'
import UpdateProductPage from './pages/admin/UpdateProduct'
import ProductManagementPage from './pages/admin/ProductManagement'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/register'
import {  addUser} from './api/auth'
// import AddCategoryPage from './pages/admin/AddCategory'
// import UpdateCategorypage from './pages/admin/UpdateCategory'
// import CategoryManagementPage from './pages/admin/CategoryManagement'
import AddCategoryPage from './pages/admin/AddCategory'
import UpdateCategoryPage from './pages/admin/UpdateCategory'
import CategoryManagementPage from './pages/admin/CategoryManagement'
import {getAllCategory, getOneCategory,deleteCategory,updateCategory,addCategory} from './api/category'
function App() {
  const [products, setProduct] = useState<Iproduct[]>([])
  const [user, setUser] = useState([])
  const [category, setCategory] = useState([])
  useEffect(()=>{
    getAllProduct().then(({data}) => setProduct(data.products.data));
  },[])
  useEffect(()=>{
    getAllCategory().then(({data}) => setCategory(data))
  }
  ,[])
  const onHandleRemove = (id:number) =>{
    deleteProduct(id)
  }

  const onHandleAdd = (product:any) =>{
    addProduct(product)
  }

  const onHandleUpdate = (product:any) =>{
      updateProduct(product)
  }

  const onHandleRemove2 = (id:number) =>{
    deleteCategory(id)
  }

  const onHandleAdd2 = (category:any) =>{
    addCategory(category)
  }

  const onHandleUpdate2 = (category:any) =>{
      updateCategory(category)
  }

  const onHandleAdd3 = (user: any) => {
    addUser(user)
  }
  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage/>}/>
          <Route path='products'>
          <Route index element={<ProductPage products={products} onRemove={onHandleRemove}/>}/>
          <Route path=':id'element={<ProductDetailPage/>}/>
        </Route>
        </Route>
        <Route path='/admin'>
          <Route path='products'>
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd}/>}/>
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate}products={products}/>}/>
            <Route index element={<ProductManagementPage products={products}onRemove={onHandleRemove}/>}/>
            </Route>
            <Route path='category'>
            <Route path='add' element={<AddCategoryPage onAdd={onHandleAdd2}/>}/>
            <Route path=':id/update' element={<UpdateCategoryPage onUpdate={onHandleUpdate2}category={category}/>}/>
            <Route index element={<CategoryManagementPage category={category}onHandleRemove2={onHandleRemove2}/>}/>
            </Route>
        </Route>
        <Route path='/login' index element={<LoginPage/>}/>
        <Route path='/register' index element={<RegisterPage onAdd={onHandleAdd3}/>}/>
      </Routes>
     
    </div>
  )
}

export default App