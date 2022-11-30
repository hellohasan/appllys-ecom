const prefix = "/admin";
export default [
  {
    path: prefix + "/merchant-stores",
    component: () =>
      import(
        /*webpackChunkName: "admin/merchant-store"*/ "../../components/Admin/MerchantStore/MerchantStore.vue"
      ),
    meta: { requireAuth: true },
    children: [
      {
        path: "/",
        name: "admin.merchant-stores",
        component: () =>
          import(
            /*webpackChunkName: "admin/merchant-store"*/ "../../components/Admin/MerchantStore/Index"
          ),
        meta: {
          title: "Merchant Store List",
          permissions: ["merchant-stores"],
        },
      },
      {
        path: "create",
        name: "admin.merchant-stores.create",
        component: () =>
          import(
            /*webpackChunkName: "admin/merchant-store/create"*/ "../../components/Admin/MerchantStore/Create"
          ),
        meta: {
          title: "Create Merchant Store",
          permissions: ["merchant-stores-create"],
        },
      },
      {
        path: ":id/edit",
        name: "admin.merchant-stores.edit",
        component: () =>
          import(
            /*webpackChunkName: "admin/merchant-store/edit"*/ "../../components/Admin/MerchantStore/Edit"
          ),
        meta: {
          title: "Edit Merchant Store",
          permissions: ["merchant-stores-edit"],
        },
      },
    ],
  },
];
