import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../api/product'
import { Descriptions } from 'antd';
import './test.css'
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const ProductDetailPage:React.FC = () => {
    const { id } = useParams() //{id: '1'} string
    const [product,setProduct] = useState({id: '0',name:'',price:0,image:'',description:''})
    useEffect(()=>{
        getOneProduct(Number(id)).then(({data})=>setProduct(data))
    },[])
  return (
    <div>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
        />
         <Search className='searchHD' placeholder="input search text" onSearch={onSearch} style={{ width: 500 }} />
        <div className='buttonHD'> <Button type="primary">Đăng nhập</Button></div>
      </Header>
      <div className='flex-detail'>
        <div>
          <img src={product.image} alt="" />
        </div>
        <div>{product.price}</div>
      </div>
    <h2>{product.name}</h2>
    <p>{product.price}</p>
</div>
  )
}

export default ProductDetailPage