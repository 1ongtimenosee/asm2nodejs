import React, {useEffect,useState} from 'react'
import { Iproduct } from '../types/product'
import './test.css'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { EditOutlined,EllipsisOutlined,SettingOutlined } from '@ant-design/icons';
import { Avatar,Card } from 'antd';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const { Meta } = Card;
const { Header, Content, Footer } = Layout;

interface IProps {
  products: Iproduct[],
  onRemove: (id: number) => void
}
const ProductPage = (props:IProps) => {
  const [data, setData] = useState<Iproduct[]>([])
  useEffect (() => {
    setData(props.products)
  },[props])
  const removeProduct = (id:number) => {
    props.onRemove(id)
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  )
  const onSearch = (value: string) => console.log(value);
  return (
    
    <Layout className="layout">
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
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}
          items={[
            {
              title: 'Home',
            },
            {
              title: <a href="http://localhost:5173/products">Trang chủ</a>,
            },
            {
              title: <a href="http://localhost:5173/login">Đăng nhập</a>,
            },
          ]}
        />
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
        <h1>ProductPage</h1>
        
    <div>
    <Row gutter={[1, 1]}>
          {data.map((item) => (
            <Col
              xs={{ span: 25 }}
              lg={{ span: 6 }}
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Link to={`/products/${item.id}`}>
                <div style={{ margin: '10px',}}>
                  <Link to={`/products/${item.id}`}>
                <Card
    hoverable
    cover={<img width="200px" alt="example" src={item.image}/>}
  >
    <Meta title={item.name} description={item.price} />
  </Card>
  </Link>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
    </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by truongnvph20296</Footer>
    </Layout>
  )
}

export default ProductPage