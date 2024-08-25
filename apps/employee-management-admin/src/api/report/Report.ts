export type Report = {
  createdAt: Date;
  description: string | null;
  id: string;
  status?: "Option1" | null;
  submittedBy: string | null;
  title: string | null;
  updatedAt: Date;
};
