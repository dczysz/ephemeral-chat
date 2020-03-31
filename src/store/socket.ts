export const ENDPOINT =
  process.env.NODE_ENV === 'production'
    ? 'https://serene-savannah-11228.herokuapp.com/'
    : 'localhost:5000';

export type UserType = {
  id?: string;
  name: string;
  room: string;
};

export type JoinRoomResponseType = {
  user?: UserType;
  error?: string;
};

export type RoomDataType = {
  room: string;
  users: UserType[];
};

export type MessageType = {
  user: string;
  text: string;
};
