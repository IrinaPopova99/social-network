let state = {
    profilePage: {
        posts : [
            {id: 1, post: "Hi, how are you", likesCount: 23},
            {id: 2, post: "It's my first post", likesCount: 5},
        ],
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
    },
    sidebar: {
        friends : [
            {name: 'Dima'},
            {name: 'Sveta'},
            {name: 'Sasha'},
        ]
    }
    
}

export default state;