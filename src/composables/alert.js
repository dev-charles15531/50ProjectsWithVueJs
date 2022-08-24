import { unref } from "vue";
import { useCommentsStore } from "../stores/comments";

export function useAlert() {
  // init store
  const commentStore = useCommentsStore();

  const dropMssg = (type, mssg) => {
    type = unref(type);
    mssg = unref(mssg);

    commentStore.appMssg = {
      type: type,
      message: mssg,
    };

    setTimeout(() => {
      commentStore.appMssg = {};
    }, 2000);
  };

  // expose managed state as return value
  return { dropMssg };
}
