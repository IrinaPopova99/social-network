import { combineReducers } from "redux";
import authReducer from "./authentication/reducer";
import dialogsReducer from "./dialogs/reducer";
import profileReducer from "./profile/reducer";
import sidebarReducer from "./sidebar/reducer";
import usersReducer from "./users/reducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});