export type Task = {
  assignedTo: string | null;
  createdAt: Date;
  deadline: Date | null;
  description: string | null;
  id: string;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
