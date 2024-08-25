export type Notification = {
  createdAt: Date;
  id: string;
  message: string | null;
  recipient: string | null;
  timestamp: Date | null;
  title: string | null;
  updatedAt: Date;
};
