import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import LeftContext from "@/pages/translate/component/leftContext";
import RightContext from "@/pages/translate/component/rightContext";
import { SwapOutlined } from "@ant-design/icons";
import "./translate.styl";

function Translate() {
  // 路由钩子
  const navigate = useNavigate();
  return (
    <div className="translateHome">
      <h1>Translate Page</h1>

      <div className="translateTemplate">
        <LeftContext />
        <div className="translateBtn">
          <Button shape="circle" icon={<SwapOutlined />} />
        </div>

        <RightContext />
      </div>

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
export default Translate;
