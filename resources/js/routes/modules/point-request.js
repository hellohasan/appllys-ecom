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
  {
    path: prefix + "/point-request/:custom/view",
    name: "merchant.point-request.view",
    component: () =>
      import(
        /*webpackChunkName: "merchant/point-request-view"*/ "../../components/Merchant/PointRequest/View"
      ),
    meta: {
      title: "Point Request Detail",
      requireAuth: true,
      permission: ["point-request-view"],
    },
  },
];
