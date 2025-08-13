import { MoreHorizontal, MessageCircle, Link, Eye, Clock } from "lucide-react";
import { ITask } from "../kanban";

interface ITaskCardProp {
  task: ITask;
}

export default function TaskCard({ task }: ITaskCardProp) {
  return (
    <div className="bg-white rounded-lg p-4 mb-3 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <div
            className={`flex-grow-0 flex-shrink-0 w-2 h-2 rounded-sm ${
              task && task.priorityColor
            }`}
          ></div>
          <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#b1b5c3]">
            {task && task.priority}
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={14} />
        </button>
      </div>

      <h4 className="font-medium text-gray-900 mb-3 text-sm text-black">
        {task && task.title}
      </h4>
      <div className="flex -space-x-1 pb-2">
        {task &&
          task.assignees?.map((avatar: string, idx: number) => (
            <img
              key={idx}
              src={avatar}
              alt=""
              className="w-6 h-6 rounded-full border-2 border-white"
            />
          ))}
      </div>
      {task && task.hasImage && (
        <div className="w-full h-24 bg-gray-800 rounded-lg mb-3 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
        </div>
      )}

      <hr className="my-4 border-gray-300" />

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 text-xs text-gray-500">
          {task && task.attachments > 0 && (
            <div className="flex items-center space-x-1">
              <Link size={12} />
              <span>{task.attachments}</span>
            </div>
          )}
          {task && task.comments > 0 && (
            <div className="flex items-center space-x-1">
              <MessageCircle size={12} />
              <span>{task.comments}</span>
            </div>
          )}
          {task && task.views && (
            <div className="flex items-center space-x-1">
              <Eye size={12} />
              <span>{task.views}</span>
            </div>
          )}
          {task && task.reports && (
            <div className="flex items-center space-x-1 text-red-500">
              <span>{task.reports} Reports</span>
            </div>
          )}
          {task && task.groupCall && (
            <div className="flex items-center space-x-1 text-blue-500">
              <span>Group Call</span>
            </div>
          )}
          {task && task.dueDate && (
            <div className="flex items-center space-x-1">
              <Clock size={12} />
              <span>Due: {task.dueDate}</span>
            </div>
          )}
          {task && task.isStreaming && (
            <div className="flex items-center space-x-1 text-green-500">
              <span>Streaming</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
