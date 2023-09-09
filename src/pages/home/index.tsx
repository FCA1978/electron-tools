import React, { useState } from "react";
import Music from "@/pages/music";
import Translate from "@/pages/translate";
import type { MenuProps } from "antd/es/menu";
import {
  CustomerServiceOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import "./home.styl";

type MenuItem = Required<MenuProps>["items"][number];

function Home() {
  // methods
  const menuClick: MenuProps["onClick"] = (e) => {
    setComponentType(e.key);
  };

  const [component, setComponentType] = useState("Music");

  const renderComponent = () => {
    if (component === "Music") {
      return <Music />;
    } else if (component === "Translate") {
      return <Translate />;
    } else {
      return null;
    }
  };

  const items: MenuItem[] = [
    getItem("Music", "Music", <CustomerServiceOutlined />),
    getItem("Translate", "Translate", <TranslationOutlined />),
  ];

  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  return (
    <div className="homeContain">
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        items={items}
        theme="dark"
        onClick={menuClick}
      />
      {renderComponent()}
    </div>
  );
}
export default Home;
