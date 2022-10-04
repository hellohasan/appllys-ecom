import { logout } from "../helpers/auth";
const logoutMix = {
  methods: {
    async logoutHandel() {
      await logout().then((res) => {
        this.$store.dispatch("user/logoutAction");
        this.$router.push({ name: "login" });
      });
    },
  },
};

export default logoutMix;
