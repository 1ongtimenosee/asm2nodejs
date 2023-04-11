import React from "react";
import { Space, Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import "../test.css";
import { Link } from "react-router-dom";
import UpdateProductPage from "./UpdateProduct";
import { updateProduct } from "../../api/product";
const { Header, Content, Footer, Sider } = Layout;
const ProductManagementPage = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const data = props.products.map((product) => {
    return {
      key: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      categoryId: product.categoryId,
    };
  });
  interface DataType {
    key: string;
    name: string;
    price: number;
    image: File;
    description: string;
    categoryId: number;
    tags: string[];
  }
  const removeProduct = (id: any) => {
    props.onRemove(id);
  };
  const MyButton = ({ productId }: { productId: number }) => {
    return (
      <Link to={`/admin/products/${productId}/update`}>
        <Button type="primary" style={{ backgroundColor: "#2F83E7" }}>
          Update
        </Button>
      </Link>
    );
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Product name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Product Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Product image",
      dataIndex: "image",
      key: "image",
      render: (_, data) => <img src={data?.image} alt="" width={200} />,
    },
    {
      title: "Product description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Product categoryId",
      dataIndex: "categoryId",
      key: "number",
    },
    {
      title: "Action",
      key: "_id",
      render: (record) => {
        return (
          <Space size="middle">
            <Button
              type="primary"
              danger
              onClick={() => removeProduct(record.key)}
            >
              Remove
            </Button>
            <MyButton productId={record.key} />
          </Space>
        );
      },
    },
  ];
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
        <div className="logo">
          <img src="" alt="" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item>
            <Link to={"/products"}>Trang Chủ</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={"/admin/products/add"}>Thêm mới sản phẩm</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={"/admin/category/add"}>thêm danh mục</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={"/admin/category"}>Danh sách danh mục</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Table rowKey="_id" columns={columns} dataSource={data} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default ProductManagementPage;
