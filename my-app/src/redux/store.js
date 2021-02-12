const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

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
        switch(action.type) {
            case ADD_POST: {
                let newPost = {
                    id: 5,
                    post: this._state.profilePage.newPostText,
                    likesCount: 0,
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = "";
                this._subscriber(this.getState());
                break;
            }
            case UPDATE_NEW_POST_TEXT: {
                this._state.profilePage.newPostText = action.newText;
                this._subscriber(this.getState());   
                break;
            }
            case SEND_MESSAGE: {
                let newMessage = {
                    id: 4,
                    message: this._state.dialogsPage.newMessageText,
                };
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText = "";
                this._subscriber(this.getState());
            }
            case UPDATE_NEW_MESSAGE_TEXT: {
                this._state.dialogsPage.newMessageText = action.newMessage;
                this._subscriber(this.getState());
            }
            default: {
                return '';
            }
        }        
    }
}

export const addPostActionCreater = () => ({ type: ADD_POST });

export const addMessageActionCreater = () => ({ type: SEND_MESSAGE });

export const updatePostTextActionCreater = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export const updateMessageTextActionCreater = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text,
});

// addPost() {
    //     debugger;
    //     let newPost = {
    //         id: 5,
    //         post: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = "";
    //     this._subscriber(this.getState());
    // },

    // updateNewPostText (newText) {
    //     debugger;
    //     this._state.profilePage.newPostText = newText;
    //     this._subscriber(this.getState());    
    // },
    
    // sendMessage() {
    //     let newMessage = {
    //         id: 4,
    //         message: this._state.dialogsPage.newMessageText,
    //     };
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = "";
    //     this._subscriber(this.getState());
    // },

    // updateNewMessageText (newText) {
    //     this._state.dialogsPage.newMessageText = newText;
    //     this._subscriber(this.getState());
    // },
export default store;