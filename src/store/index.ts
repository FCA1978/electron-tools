import { useContext, createContext } from "react";
import userInfo from "./userInfo";
import music from "./music";

class RootStore {
  music = music;
  userInfo = userInfo;
}
const store = new RootStore();

// 创建一个上下文对象，用于跨级组件通讯
// 如果 createContext 提供了默认值，不需要 Provider
const Context = createContext(store);

// 自定义 hooks
export const useStore = () => {
  return useContext(Context);
};
