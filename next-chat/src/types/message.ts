export type Message = {
  text: string;
  room: string;
  userID: number;
  username: string;
  sentAt?: {
    date: string;
    time: string;
  };
};
