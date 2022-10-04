import i18n from "../helpers/i18n";
import { getPageTitle } from "./getSitePageTitle";
import { setDocumentLang, setDocumentDirectionPerLocale } from "./language";
import Swal from "sweetalert2";
import NProgress from "nprogress";

export function initialize(store, router) {
  /* Authentication middleware */
  router.beforeEach((to, from, next) => {
    NProgress.start();

    const requireAuth = to.matched.some((record) => record.meta.requireAuth);
    const authenticated = store.state.user.isLogged;

    document.title = getPageTitle(to);

    const lang = i18n.locale;
    setDocumentLang(lang);
    setDocumentDirectionPerLocale(lang);

    if (requireAuth && !authenticated) {
      next("/login");
    } else if (to.path === "/login" && authenticated) {
      next("/dashboard");
    } else if (to.path === "/register" && authenticated) {
      next("/dashboard");
    } else if (to.path === "/forget" && authenticated) {
      next("/dashboard");
    } else if (to.path === "/reset-password" && authenticated) {
      next("/dashboard");
    } else {
      if (canAccess(store, to)) {
        next();
      } else {
        NProgress.done();
        router.push("/unauthorized");
      }
    }
  });

  /* Checking api return unauthorized */
  axios.interceptors.response.use(null, (error) => {
    if (error.response.status === 401) {
      store.dispatch("user/logoutAction");
      router.push({ name: "login" });
    } else if (error.response.status === 403) {
      router.push("/unauthorized");
    } else if (error.response.status === 404) {
      router.push("/server-error");
      Swal.fire({
        icon: "error",
        title: i18n.t("404"),
        text: i18n.t("error_alert_text"),
        confirmButtonText: i18n.t("ok"),
      });
    } else if (error.response.status === 500) {
      Swal.fire({
        icon: "error",
        title: i18n.t("error_alert_title"),
        text: i18n.t("error_alert_text"),
        reverseButtons: true,
        confirmButtonText: i18n.t("ok"),
        cancelButtonText: i18n.t("cancel"),
      });
    }
    NProgress.done();
    return Promise.reject(error);
  });

  /* Authentication header for axios */
  if (store.getters["user/isLogged"]) {
    setAuthorization(store.getters["user/getToken"]);
  }

  router.afterEach(() => {
    NProgress.done();
  });
}

export function setAuthorization(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

function canAccess(store, route) {
  if (route.meta) {
    const roles = store.getters["user/getRoles"];
    const permissions = store.getters["user/getPermissions"];

    let hasRole = true;
    let hasPermission = true;
    if (route.meta.roles || route.meta.permissions) {
      // If it has meta.roles or meta.permissions, accessible = hasRole || permission
      hasRole = false;
      hasPermission = false;
      if (route.meta.roles) {
        hasRole = roles.some((role) => route.meta.roles.includes(role));
      }

      if (route.meta.permissions) {
        hasPermission = permissions.some((permission) =>
          route.meta.permissions.includes(permission)
        );
      }
    }
    return hasRole || hasPermission;
  }
  // If no meta.roles/meta.permissions inputted - the route should be accessible
  return true;
}
