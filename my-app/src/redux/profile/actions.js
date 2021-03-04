import { ProfileAPI } from "../../api/api";
import types from "./types";

export const addPostActionCreator = (text) => ({ type: types.ADD_POST, text });
const setUserProfile = (profile) => ({
    type: types.SET_USER_PROFILE, 
    profile
});
const setUserStatus = (status) => ({
    type: types.SET_USER_STATUS, 
    status
});
const putUserStatus = (status) => ({
    type: types.PUT_USER_STATUS, 
    status
});

export const getUserProfile = (userId) => (dispatch) => {
    ProfileAPI.getUserProfileAPI(userId).then((data) => {
        dispatch(setUserProfile(data));
      });
} 
export const getUserStatus = (userId) => (dispatch) => {
    ProfileAPI.getUserStatusAPI(userId).then((data) => {
        dispatch(setUserStatus(data));
      });
}
export const updateUserStatus = (status) => (dispatch) => {
    ProfileAPI.updateStatusAPI(status).then((data) => {
        if (data.resultCode === 0) {
            dispatch(putUserStatus(status));
        }
      });
}