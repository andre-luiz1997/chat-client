const server = 'http://localhost:3000';

export const environment = {
  production: false,
  server,
  EVENTS: {
    CREATE_MESSAGE_EVENT: 'createMessage',
    FIND_ALL_MESSAGES_EVENT: 'findAllMessages',
    JOIN_EVENT: 'join',
    MESSAGE_EVENT: 'message',
    TYPING_EVENT: 'typing'
  }
};
