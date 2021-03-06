import { Photo } from './photo';

export interface User {
    id: number;
    userName: string;
    alias: string;
    gender: string;
    city: string;
    country: string;
    photoUrl: string;
    age: number;
    created: Date;
    lastActive: Date;
    bio?: string;
    lookingFor?: string;
    hobbies?: string;
    photos?: Photo[];
    roles?: string[];
}
