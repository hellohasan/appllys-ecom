const prefix = "/merchant";
export default [
  {
    path: prefix + "/point-request/create",
    name: "merchant.point-request.create",
    component: () =>
      import(
        /*webpackChunkName: "merchant/point-request-create"*/ "../../components/Merchant/PointRequest/Create"
      ),
    meta: {
      title: "Point Request",
      requireAuth: true,
      permission: ["point-request-create"],
    },
  },
  {
    path: prefix + "/point-request/list",
    name: "merchant.point-request.list",
    component: () =>
      import(
        /*webpackChunkName: "merchant/point-request-index"*/ "../../components/Merchant/PointRequest/Index"
      ),
    meta: {
      title: "Point Request Log",
      requireAuth: true,
      permission: ["point-request-list"],
    },
  },
];
