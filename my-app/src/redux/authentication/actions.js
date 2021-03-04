import { AuthAPI, ProfileAPI } from "../../api/api";
import types from "./types";

const setAuthUserData = (id, email, login, isAuth) => ({
    type: types.SET_AUTH_USER_DATA,
    data: {id, email, login, isAuth}
});
const setCurrentUser = (photo) => ({
    type: types.SET_CURRENT_USER,
    photo
});

export const getAuthUserData = () => (dispatch) => {
    AuthAPI.setAuthUserDataAPI().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true));
            ProfileAPI.getUserProfileAPI(data.data.id).then(data => {
                    dispatch(setCurrentUser(data.photos.small));
            })
        }
    });
}
export const getLoginUser = (email, password, rememberMe) => (dispatch) => {
    AuthAPI.loginUserAPI(email, password, rememberMe).then((data) => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
    });
}
export const logoutUser = () => (dispatch) => {
    AuthAPI.logoutUserAPI().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}