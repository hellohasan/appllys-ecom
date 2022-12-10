const prefix = "/admin";
export default [
  {
    path: prefix + "/point-requests",
    name: "admin.point-requests",
    component: () =>
      import(
        /*webpackChunkName: "admin/point-requests"*/ "../../components/Admin/Point/Log"
      ),
    meta: {
      title: "Point Request",
      requireAuth: true,
      role: ["Super Admin"],
    },
  },
  {
    path: prefix + "/point-requests/:custom/view",
    name: "admin.point-requests.view",
    component: () =>
      import(
        /*webpackChunkName: "admin/point-requests/view"*/ "../../components/Admin/Point/View"
      ),
    meta: {
      title: "Point Request View",
      requireAuth: true,
      role: ["Super Admin"],
    },
  },
  {
    path: prefix + "/assign-point",
    name: "admin.assign-point",
    component: () =>
      import(
        /*webpackChunkName: "admin/point-requests/assign"*/ "../../components/Admin/Point/Assign"
      ),
    meta: {
      title: "Point Request",
      requireAuth: true,
      role: ["Super Admin"],
    },
  },
];
