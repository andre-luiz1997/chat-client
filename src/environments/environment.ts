const server = 'http://localhost:3000';

export const environment = {
    production: false,
    server,
    EVENTS: {
        CHAT_EVENT: 'chat',
        CREATE_MESSAGE_EVENT: 'createMessage',
        CREATE_CHAT_EVENT: 'createChat',
        FIND_ALL_MESSAGES_EVENT: 'findAllMessages',
        FIND_ALL_CHATS_EVENT: 'findAllChats',
        JOIN_EVENT: 'join',
        MESSAGE_EVENT: 'message',
        TYPING_EVENT: 'typing',
    },
};
