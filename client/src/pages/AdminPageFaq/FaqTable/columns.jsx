import { CellAction } from "./cell-actions";

export const columns = [
  {
    accessorKey: "question",
    header: "QUESTION",
  },
  {
    accessorKey: "answer",
    header: "ANSWER",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
