import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Checkbox, Form } from "antd";
import Header from "@/common/components/header";
import user from "@/store/userInfo";
import { observer } from "Mobx-react"; // observer 需要包裹一个组件，这样组件才会更新
import imgLogo from "./logo.png";
import "./login.styl";

function Login() {
  const [form] = Form.useForm();
  const [checkRemember, setCheckRemember] = useState(true);

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  // router
  const navigate = useNavigate();

  // methods
  const onFinish = (values: any) => {
    console.log(values, "finish");
    // 登入成功跳转
    navigate("/music");
  };

  const onFinishFailed = () => {
    console.log("finishFailed");
  };

  const onCheckboxChange = (e: { target: { checked: boolean } }) => {
    setCheckRemember(e.target.checked);
  };

  return (
    <div className="P-login">
      <Header />
      <img src={imgLogo} alt="" className="logo" />
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        initialValues={user.userInfo}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox onChange={onCheckboxChange}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default observer(Login);
