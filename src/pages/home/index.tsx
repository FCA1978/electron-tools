// import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./home.styl";

function Home() {
  // 路由钩子
  // const navigate = useNavigate();
  return (
    <div className="P-home">
      <h1>Home Page</h1>
      <div className="ipt-con">
        <Button
          onClick={() => {
            // navigate("/login");
          }}
        >
          返回登录
        </Button>
      </div>
    </div>
  );
}
export default Home;