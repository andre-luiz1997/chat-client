export interface IMessage {
    user: string;
    text: string;
}

export class Message implements IMessage {
    user: string;
    text: string;

    constructor(props: IMessage) {
      this.user = props.user;
      this.text = props.text;
    }
}

export interface CreateMessageDto {
  user: string;
  text: string;
}
