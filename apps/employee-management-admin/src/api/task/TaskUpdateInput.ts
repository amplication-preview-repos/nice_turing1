export type TaskUpdateInput = {
  assignedTo?: string | null;
  deadline?: Date | null;
  description?: string | null;
  status?: "Option1" | null;
  title?: string | null;
};
