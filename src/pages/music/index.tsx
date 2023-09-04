import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./music.styl";

function Music() {
  // 路由钩子
  const navigate = useNavigate();
  return (
    <div className="P-home">
      <h1>Music Page</h1>
      <div className="ipt-con">
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          返回登录
        </Button>
      </div>
    </div>
  );
}
export default Music;
