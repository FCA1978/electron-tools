import { app, BrowserWindow, Tray, nativeImage, Menu } from "electron";
import path from "node:path";

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, "../dist");
process.env.PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  // 在外面创建tray变量，防止被自动删除，导致图标自动消失
  let tray: Tray | null = null;

  win = new BrowserWindow({
    icon: path.join(process.env.PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  // 启用调试工具
  win.webContents.openDevTools();

  // 创建任务栏图标
  const icon = nativeImage.createFromPath(
    path.join(process.env.PUBLIC, "icon.png")
  );
  // 实例化一个 托盘对象，传入的是托盘的图标
  tray = new Tray(icon);
  // 移动到托盘的提示
  tray.setToolTip("electron tools is running");
  // 设置title
  tray.setTitle("electron tools");

  // 监听托盘右键事件
  tray.on("right-click", () => {
    // 右键菜单模板
    const template = [
      {
        label: "设置",
      },
      {
        label: "退出",
        click: () => app.quit(),
      },
    ];
    // 通过Menu 创建菜单
    const menuConfig = Menu.buildFromTemplate(template);
    // 让我们写的托盘右键的菜单替代原来的
    tray?.popUpContextMenu(menuConfig);
  });

  tray.on("click", () => {
    // 这里来控制窗口的显示和隐藏
    if (win?.isVisible()) {
      win?.hide();
    } else {
      win?.show();
    }
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }
}

app.on("window-all-closed", () => {
  win = null;
});

app.whenReady().then(createWindow);
