import { Switch } from "antd";
import "./header.styl";

function Login() {
  const onChange = () => {
    console.log("change~");
  };

  return (
    <div className="header">
      <Switch defaultChecked onChange={onChange} />
    </div>
  );
}

export default Login;
