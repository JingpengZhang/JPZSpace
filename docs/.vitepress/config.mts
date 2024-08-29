import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/JPZSpace/",
  title: "JPZSpace",
  description: "Store my notes and blablabla...",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/common-utils" },
    ],

    sidebar: [
      {
        text: "代码片段",
        items: [{ text: "常用工具函数", link: "/common-utils" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
