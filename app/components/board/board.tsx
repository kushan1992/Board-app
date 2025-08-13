import { Search, Plus, Settings, Star, Filter } from "lucide-react";

export default function Board() {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 flex items-center space-x-2 gap-2.5">
              <span>Sport Xi Project</span>
              {/* <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium"> */}
              <span className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-1 rounded-[5px] bg-[#ffa800] text-[10px] font-medium text-left text-[#353945]">
                In progress
              </span>
            </h1>
            <span className="text-base text-left text-[#b1b5c3]">
              event production
            </span>
            <div className="flex items-center space-x-4 text-sm text-[#b1b5c3]">
              <div className="flex items-center space-x-1">
                <span>assigned</span>
                <div className="flex -space-x-1 ml-2">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face&auto=format"
                    alt=""
                    className="w-6 h-6 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face&auto=format"
                    alt=""
                    className="w-6 h-6 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face&auto=format"
                    alt=""
                    className="w-6 h-6 rounded-full border-2 border-white"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-1 justify-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-1 rounded-[46px] bg-white border border-[#e6e8ec]">
                <span>Manage</span>
                <Settings size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4 border-gray-300" />
      <p className="text-xs text-[#b1b5c3] mt-1">
        Last updated on: 04 April 2022
      </p>
    </div>
  );
}
