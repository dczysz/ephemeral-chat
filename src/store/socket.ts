export const ENDPOINT =
  process.env.NODE_ENV === 'production'
    ? 'https://serene-savannah-11228.herokuapp.com/'
    : 'localhost:5000';

export const MAX_NAME_LENGTH = 12;
export const MAX_ROOM_LENGTH = 12;
export const MAX_MESSAGE_LENGTH = 2000;

export type UserType = {
  id?: string;
  num?: number;
  name: string;
  room: string;
};

export type JoinRoomResponseType = {
  user?: UserType;
  error?: {
    msg: string;
    type: 'fatal' | 'password';
  };
};

export type RoomDataType = {
  room: string;
  users: UserType[];
  leader: UserType | null;
  isPrivate: boolean;
};

export type MessageType = {
  user: UserType;
  text: string;
};
