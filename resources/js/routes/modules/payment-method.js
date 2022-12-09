const prefix = "/admin";
export default [
  {
    path: prefix + "/payment-method",
    component: () =>
      import(
        /*webpackChunkName: "admin/payment-method"*/ "../../components/Admin/PaymentMethod/PaymentMethod.vue"
      ),
    meta: { requireAuth: true },
    children: [
      {
        path: "/",
        name: "admin.payment-method",
        component: () =>
          import(
            /*webpackChunkName: "admin/payment-method/index"*/ "../../components/Admin/PaymentMethod/Index"
          ),
        meta: {
          title: "Payment Method List",
          permissions: ["payment-method"],
        },
      },
      {
        path: "create",
        name: "admin.payment-method.create",
        component: () =>
          import(
            /*webpackChunkName: "admin/payment-method/create"*/ "../../components/Admin/PaymentMethod/Create"
          ),
        meta: {
          title: "Create Payment Method",
          permissions: ["payment-method-create"],
        },
      },
      {
        path: ":id/edit",
        name: "admin.payment-method.edit",
        component: () =>
          import(
            /*webpackChunkName: "admin/payment-method/edit"*/ "../../components/Admin/PaymentMethod/Edit"
          ),
        meta: {
          title: "Edit Payment Method",
          permissions: ["payment-method-edit"],
        },
      },
    ],
  },
];
