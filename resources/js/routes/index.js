export const routes = [
  {
    path: "/checker",
    name: "checker",
    meta: { title: "Checker Page" },
    component: require("../components/Errors/Checker").default,
  },
  {
    path: "/server-error",
    name: "server-error",
    meta: { title: "Server Error" },
    component: require("../components/Errors/500").default,
  },
  {
    path: "/unauthorized",
    name: "unauthorized",
    meta: { title: "503" },
    component: require("../components/Errors/503").default,
  },
  {
    path: "*",
    name: "404",
    meta: { title: "404" },
    component: require("../components/Errors/404").default,
  },
];
const requireRoute = require.context("./modules", false, /\.js$/); // extract js files inside modules folder
const modules = [];
requireRoute.keys().forEach((fileName) => {
  if (fileName === "./index.js") return; // reject the index.js file
  modules.push(requireRoute(fileName).default);
});
modules.forEach((val) => {
  val.forEach((route) => {
    routes.push(route);
  });
});
