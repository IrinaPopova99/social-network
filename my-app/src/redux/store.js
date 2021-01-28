
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
    addPost() {
        debugger;
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._subscriber(this.getState());
    },

    updateNewPostText (newText) {
        debugger;
        this._state.profilePage.newPostText = newText;
        this._subscriber(this.getState());    
    },
    
    sendMessage() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._subscriber(this.getState());
    },

    updateNewMessageText (newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._subscriber(this.getState());
    },

}

// export const addPost = () => {
//     let newPost = {
//         id: 5,
//         post: state.profilePage.newPostText,
//         likesCount: 0,
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = "";
//     rerenderEntireTree(state);
// };
// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }

// export const sendMessage = () => {
//     let newMessage = {
//         id: 4,
//         message: state.dialogsPage.newMessageText,
//     };
//     state.dialogsPage.messages.push(newMessage);
//     state.dialogsPage.newMessageText = "";
//     rerenderEntireTree(state);
// };
// export const updateNewMessageText = (newText) => {
//     state.dialogsPage.newMessageText = newText;
//     rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

export default store;