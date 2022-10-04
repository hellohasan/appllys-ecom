import i18n from "../../helpers/i18n";
const prefix = "/setting";
export default [
  {
    path: prefix + "/basic-setting",
    name: "basic-setting",
    component: () =>
      import(
        /*webpackChunkName: "settings/basic-setting"*/ "../../components/Settings/BasicSetting"
      ),
    meta: {
      title: i18n.tc("BasicSetting"),
      requireAuth: true,
      role: ["Super Admin"],
    },
  },
];
