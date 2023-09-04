import { makeObservable, observable } from "Mobx";
import userType from "@/store/types/user";

class UserInfo {
  constructor() {
    // 参数1：target，把谁变成响应式（可观察）
    // 参数2：指定哪些属性或者方法变成可观察
    makeObservable(this, {
      userInfo: observable,
    });
  }
  userInfo: userType = {
    username: "hacker",
    password: "hacker",
    remember: true,
  };
}
const userInfo = new UserInfo();
export default userInfo;
