import store from "../stores";
let title = store.getters.getBasic.title ?? process.env.MIX_APP_NAME;

export function getPageTitle(to) {
  //to.matched.some((record) => record.meta.requireAuth);
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  if (typeof title === "undefined") {
    title = process.env.MIX_APP_NAME;
  }

  if (nearestWithMeta) {
    return `${to.meta.title} - ${title}`;
  } else {
    return `${title}`;
  }
}
