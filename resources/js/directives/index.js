import permission from "./permission";
import role from "./role";
require("./tooltip/index.js"); // add tooltip directive

export default {
  install(Vue) {
    Vue.directive("role", role);
    Vue.directive("permission", permission);
  },
};
