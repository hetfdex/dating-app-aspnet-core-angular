export interface Message {
    id: number;
    senderId: number;
    recipientId: number;

    senderAlias: string;
    recipientAlias: string;
    senderPhotoUrl: string;
    recipientPhotoUrl: string;
    content: string;

    isRead: boolean;

    dateRead: Date;
    dateSent: Date;
}