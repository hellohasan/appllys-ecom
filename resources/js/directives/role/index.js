import store from "../../stores";

const role = {
  inserted(el, binding, vnode) {
    const { value } = binding;

    const roles = store.getters["user/getRoles"];

    if (value && value instanceof Array && value.length > 0) {
      const requiredRoles = value;
      const hasRole = roles.some((role) => {
        return requiredRoles.includes(role);
      });

      if (!hasRole) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error(
        `Roles are required! Example: v-role="['admin','editor']"`
      );
    }
  },
};

export default role;
