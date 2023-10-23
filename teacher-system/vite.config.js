import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// });
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 这里设置别名以正确解析你的路由文件
      "@router": "./src/router.js",
    },
  },
});
