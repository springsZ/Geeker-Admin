import { defineStore } from "pinia";
import { UserState } from "@/stores/interface";
import piniaPersistConfig from "@/config/piniaPersist";

export const useUserStore = defineStore({
  id: "geeker-user",
  state: (): UserState => ({
    token: "",
    userInfo: { name: "Geeker" }
  }),
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    }
  },
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token;
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState["userInfo"]) {
      this.userInfo = userInfo;
    },
    setName(name: string) {
      this.userInfo.name = name;
    }
  },
  persist: piniaPersistConfig("geeker-user")
});
