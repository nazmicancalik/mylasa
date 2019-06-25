const initialState = {
    messages: []
}

export function ChatReducer(state = initialState , action){
    switch (action.type) {
        case "MESSAGE_ADD": {
            return {
                messages: [
                    ...state.messages,
                    action.payload
                ]
            };
        }
    }
    return state;
};

