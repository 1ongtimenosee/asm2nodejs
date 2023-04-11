import React from "react"
import { useForm,SubmitHandler } from "react-hook-form"
import { Iproduct } from "../../types/product"
import { Button, Checkbox, Form, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import {  message, Upload } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const props: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
const AddProductPage = (props) => {
    const onFinish = (values: any) => {
        props.onAdd(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    // const { register, handleSubmit } = useForm()
    // const onHandleSubmit = data => {
    //     props.onAdd(data);
    // }
    return (
        <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['4']}
              // items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
              //   (icon, index) => ({
              //         key: String(index + 1),
              //         icon: React.createElement(icon),
              //         label: `nav ${index + 1}`,
              //       }),
              //   )}
              >
              <Menu.Item>
              <Link to ={'/admin'}>dashboard</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to ={'/admin/products'}>products</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to ={'/admin/products/add'}>Add</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to ={'/admin/products'}>Update</Link>
            </Menu.Item>
            </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}><div>
            {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("name")} />
                <input type="number"  {...register("price")} />
                <button type="submit">Add New Product</button>
            </form> */}
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 800, margin: '0 auto' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Tên sản phẩm"
                    name="name"
                    rules={[{ required: true, message: 'vui lòng nhập tên sản phẩm' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Giá sản phẩm"
                    name="price"
                    rules={[{ required: true, message: 'vui lòng nhập giá sản phẩm' }]}
                >
                    <Input />
                    </Form.Item>
                    <Form.Item
                    label="Ảnh sản phẩm"
                    name="image"
                    rules={[{ required: true, message: 'vui lòng nhập ảnh sản phẩm' }]}
                >
                    {/* <Upload {...props}>
                        <Button icon={<UploadOutlined />}>
                            Click to Upload
                        </Button>
                    </Upload> */}
                    <Input />
                    </Form.Item>
                    <Form.Item
                    label="Mô tả sản phẩm"
                    name="description"
                    rules={[{ required: true, message: 'vui lòng nhập mô tả' }]}
                >
                    <Input />
                    </Form.Item>
                    <Form.Item
                    label="Danh mục"
                    name="categoryId"
                    rules={[{ required: true, message: 'vui lòng chọn danh mục' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Add New Product
                    </Button>
                </Form.Item>
            </Form>
        </div></div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    )
}
export default AddProductPage