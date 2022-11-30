const prefix = "/admin";
export default [
  {
    path: prefix + "/categories",
    name: "admin.categories",
    component: () =>
      import(
        /*webpackChunkName: "admin/categories"*/ "../../components/Admin/Category/Category.vue"
      ),
    meta: {
      title: "Categories",
      requireAuth: true,
      role: ["Super Admin"],
    },
  },
  {
    path: prefix + "/subcategories",
    name: "admin.subcategories",
    component: () =>
      import(
        /*webpackChunkName: "admin/categories"*/ "../../components/Admin/Category/Subcategories.vue"
      ),
    meta: {
      title: "Subcategories",
      requireAuth: true,
      role: ["Super Admin"],
    },
  },
  {
    path: prefix + "/childcategories",
    name: "admin.childcategories",
    component: () =>
      import(
        /*webpackChunkName: "admin/categories"*/ "../../components/Admin/Category/Childcategories.vue"
      ),
    meta: {
      title: "Childcategories",
      requireAuth: true,
      role: ["Super Admin"],
    },
  },
];
