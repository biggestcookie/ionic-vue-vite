import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    // username: useStorage("username", null, undefined, {
    //   serializer: StorageSerializers.string,
    // }),
  }),
});
