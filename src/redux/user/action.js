export const SET_CURRENT_USER = "set_current_user";

export const setUser = (data) => {
  return {
    type: SET_CURRENT_USER,
    data,
  };
};
