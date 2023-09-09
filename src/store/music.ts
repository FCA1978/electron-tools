import { makeObservable, observable } from "Mobx";
import musicType from "@/store/types/music";

class MusicData {
  constructor() {
    // 参数1：target，把谁变成响应式（可观察）
    // 参数2：指定哪些属性或者方法变成可观察
    makeObservable(this, {
      musicData: observable,
    });
  }
  musicData: musicType = {
    time: "",
  };
}
const musicData = new MusicData();
export default musicData;
