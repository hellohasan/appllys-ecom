const prefix = "/admin";
export default [
  {
    path: prefix + "/products",
    component: () =>
      import(
        /*webpackChunkName: "admin/products"*/ "../../components/Admin/Product/Product.vue"
      ),
    meta: { requireAuth: true },
    children: [
      {
        path: "/",
        name: "admin.products",
        component: () =>
          import(
            /*webpackChunkName: "admin/products"*/ "../../components/Admin/Product/Index"
          ),
        meta: {
          title: "Product List",
          permissions: ["products"],
        },
      },
      {
        path: "create",
        name: "admin.products.create",
        component: () =>
          import(
            /*webpackChunkName: "admin/products/create"*/ "../../components/Admin/Product/Create"
          ),
        meta: {
          title: "Create Product",
          permissions: ["products-create"],
        },
      },
      {
        path: ":id/edit",
        name: "admin.products.edit",
        component: () =>
          import(
            /*webpackChunkName: "admin/products/edit"*/ "../../components/Admin/Product/Edit"
          ),
        meta: {
          title: "Edit Product",
          permissions: ["products-edit"],
        },
      },
    ],
  },
];
