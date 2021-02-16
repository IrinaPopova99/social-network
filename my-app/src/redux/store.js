import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';

let store = {
    _state: {
        profilePage: {
            posts : [
                {id: 1, post: "Hi, how are you", likesCount: 23},
                {id: 2, post: "It's my first post", likesCount: 5},
            ],
            newPostText : "Hello",
        },
        dialogsPage: {
            dialogs : [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Sasha'},
            ],
            messages : [
                {id: 1, message: "Hello"},
                {id: 2, message: "Hi"},
                {id: 3, message: "Yeah"},
            ],
            newMessageText : "",
        },
        sidebar: {
            friends : [
                {name: 'Dima'},
                {name: 'Sveta'},
                {name: 'Sasha'},
            ]
        }
    },
    _subscriber() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._subscriber(this._state);
    }
}

export default store;