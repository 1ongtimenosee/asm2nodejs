import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Layout, message } from "antd";
import { useNavigate } from "react-router-dom";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: any) => {
    // event.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please enter email and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const {user,accessToken} = await response.json();
      console.log(user);
      if (user.role === "admin") {
        localStorage.setItem("token", accessToken);
        navigate("/admin/products")
        message.success("Đăng nhập thành công!");
      } else {
        localStorage.setItem("tokenuser", accessToken);
        navigate( "/")
      }
    } catch (error) {
      console.error(error);
      message.error("Đã xảy ra lỗi khi đăng nhập.");
    }
  };

  return (
    <Layout style={{ marginBottom: "150px", width: "100%" }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, marginTop: 100 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        onSubmitCapture={handleSubmit}
      >
        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: "Please input your email" }]}
        >
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox> <a href="/register">Register</a>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </Layout>
  );
};

export default LoginPage;
