import { Plus, MoreHorizontal } from "lucide-react";
import TaskCard from "./taskCard/taskCard";

export interface IColumn {
  id: string;
  title: string;
  color: string;
  tasks: ITask[];
}

export interface ColumnProps {
  column: IColumn;
}

export interface ITask {
  id: number;
  title: string;
  priority: string;
  priorityColor: string;
  assignees: string[];
  comments: number;
  attachments: number;
  dueDate: string;
  hasImage: boolean;
  views: number;
  reports: number;
  groupCall: boolean;
  isStreaming: boolean;
}

const columns = [
  {
    id: "todo",
    title: "To Do",
    color: "bg-gray-100",
    tasks: [
      {
        id: 1,
        title: "User interview",
        priority: "Research",
        priorityColor: "bg-red-100 text-red-600",
        assignees: [
          "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=32&h=32&fit=crop&crop=face&auto=format",
        ],
        comments: 2,
        attachments: 0,
        dueDate: "Tomorrow",
      },
      {
        id: 2,
        title: "Design System",
        priority: "Design",
        priorityColor: "bg-green-100 text-green-600",
        assignees: [
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format",
        ],
        comments: 8,
        attachments: 0,
        reports: 2,
      },
      {
        id: 3,
        title: "Speech",
        priority: "SPRINT",
        priorityColor: "bg-yellow-100 text-yellow-600",
        assignees: [
          "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=32&h=32&fit=crop&crop=face&auto=format",
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
        ],
        comments: 3,
        attachments: 0,
        isStreaming: true,
      },
      {
        id: 4,
        title: "Wireframe",
        priority: "Design",
        priorityColor: "bg-green-100 text-green-600",
        assignees: [
          "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=32&h=32&fit=crop&crop=face&auto=format",
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
        ],
        comments: 0,
        attachments: 0,
        hasImage: true,
      },
    ],
  },
  {
    id: "inprogress",
    title: "In Progress",
    color: "bg-orange-100",
    tasks: [
      {
        id: 5,
        title: "UI Design",
        priority: "Design",
        priorityColor: "bg-green-100 text-green-600",
        assignees: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format",
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
        ],
        comments: 2,
        attachments: 0,
        dueDate: "Tomorrow",
      },
      {
        id: 6,
        title: "Check Clients Feedback",
        priority: "Research",
        priorityColor: "bg-red-100 text-red-600",
        assignees: [
          "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=32&h=32&fit=crop&crop=face&auto=format",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format",
        ],
        comments: 0,
        attachments: 0,
        dueDate: "22 April 2022",
        hasImage: true,
      },
      {
        id: 7,
        title: "Copyright",
        priority: "Presentation",
        priorityColor: "bg-orange-100 text-orange-600",
        assignees: [
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
        ],
        comments: 4,
        attachments: 0,
        dueDate: "22 April 2022",
      },
      {
        id: 8,
        title: "Filter sorting",
        priority: "Development",
        priorityColor: "bg-blue-100 text-blue-600",
        assignees: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format",
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
        ],
        comments: 0,
        attachments: 0,
        hasImage: true,
      },
    ],
  },
  {
    id: "approved",
    title: "Approved",
    color: "bg-green-100",
    tasks: [
      {
        id: 9,
        title: "Research",
        priority: "Research",
        priorityColor: "bg-red-100 text-red-600",
        assignees: [
          "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=32&h=32&fit=crop&crop=face&auto=format",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format",
        ],
        comments: 243,
        views: 35,
      },
      {
        id: 10,
        title: "Detail Page",
        priority: "Interface",
        priorityColor: "bg-purple-100 text-purple-600",
        assignees: [
          "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=32&h=32&fit=crop&crop=face&auto=format",
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
        ],
        comments: 0,
        attachments: 25,
        hasImage: true,
      },
      {
        id: 11,
        title: "Animation preloaders",
        priority: "Interface",
        priorityColor: "bg-purple-100 text-purple-600",
        assignees: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format",
        ],
        comments: 4,
        attachments: 31,
      },
      {
        id: 12,
        title: "Sorting category",
        priority: "Interface",
        priorityColor: "bg-purple-100 text-purple-600",
        assignees: [
          "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=32&h=32&fit=crop&crop=face&auto=format",
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format",
        ],
        comments: 0,
        attachments: 0,
        hasImage: true,
      },
    ],
  },
  {
    id: "reject",
    title: "Reject",
    color: "bg-red-100",
    tasks: [
      {
        id: 13,
        title: "Setup",
        priority: "Backend",
        priorityColor: "bg-gray-100 text-gray-600",
        assignees: [
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
        ],
        comments: 0,
        views: 8,
      },
      {
        id: 14,
        title: "Group Management",
        priority: "Backend",
        priorityColor: "bg-gray-100 text-gray-600",
        assignees: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format",
        ],
        comments: 8,
        groupCall: true,
      },
      {
        id: 15,
        title: "Design System",
        priority: "WINDOW",
        priorityColor: "bg-blue-100 text-blue-600",
        assignees: [
          "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=32&h=32&fit=crop&crop=face&auto=format",
        ],
        comments: 0,
        reports: 2,
      },
      {
        id: 16,
        title: "Slider controls",
        priority: "WINDOW",
        priorityColor: "bg-blue-100 text-blue-600",
        assignees: [
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format",
        ],
        comments: 31,
        attachments: 8,
      },
      {
        id: 17,
        title: "Slider controls",
        priority: "Backend",
        priorityColor: "bg-gray-100 text-gray-600",
        assignees: [
          "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=32&h=32&fit=crop&crop=face&auto=format",
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
        ],
        comments: 0,
        attachments: 0,
        hasImage: true,
      },
    ],
  },
];

const Column: React.FC<ColumnProps> = ({ column }) => (
  <div className="bg-gray-50 rounded-lg p-4 min-h-screen" data-testid="Column">
    <div className="flex items-center justify-between mb-4">
      <div
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          column.id === "todo"
            ? "bg-gray-200 text-gray-700"
            : column.id === "inprogress"
            ? "bg-orange-200 text-orange-700"
            : column.id === "approved"
            ? "bg-green-200 text-green-700"
            : "bg-red-200 text-red-700"
        }`}
      >
        {column.title}
      </div>
      <div className="flex items-center space-x-2">
        <button className="text-gray-400 hover:text-gray-600">
          <Plus size={16} />
        </button>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>

    <div className="space-y-3">
      {column.tasks.map((task: ITask) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  </div>
);

export default function Kanban() {
  return (
    <div className="flex-1 p-6">
      <div className="grid grid-cols-4 gap-6 h-full">
        {columns.map((col) => (
          <Column key={col.id} column={col} />
        ))}
      </div>
    </div>
  );
}
