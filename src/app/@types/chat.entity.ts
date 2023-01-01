export interface IChat {
    name: string;
    participants: string[];
}

export class Chat implements IChat {
    name: string;
    participants: string[];

    constructor(props: IChat) {
        this.name = props.name;
        this.participants = props.participants;
    }
}

export interface CreateChatDto extends IChat {}
