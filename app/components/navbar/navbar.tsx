"use client";

import React, { useState } from "react";
import {
  MessageCircleMore,
  CalendarRange,
  User,
  Grid2x2,
  Folder,
  LogOut,
  CircleAlert,
} from "lucide-react";

export default function Navbar() {
  const [selectedProject, setSelectedProject] = useState("Sport Xi Project");
  const sidebarItems = [
    { icon: Grid2x2, label: "Dashboard", active: false },
    { icon: Folder, label: "Boards", active: true, hasSubmenu: true },
    { icon: MessageCircleMore, label: "Messages", active: false, badge: 1 },
    { icon: CalendarRange, label: "Calendar", active: false },
    { icon: User, label: "Team members", active: false },
  ];

  const projects = [
    "Create mobile app",
    "Deployment React App",
    "Sport Xi Project",
    "Wordpress theme",
  ];

  return (
    <>
      <div className="flex justify-between items-center px-3 py-2 rounded-lg border-2 border-[#f4f5f6]">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-5">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-3">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative p-3.5 rounded-[33px] bg-[#353945]">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format"
                alt="Profile"
                className="w-4 h-4 rounded-full"
              />
            </div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#b1b5c3]">
                workspace
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#353945]">
                Root folder
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav className="space-y-1 pt-5">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index}>
              <div
                className={`flex items-center justify-between px-3 py-2 cursor-pointer transition-colors ${
                  item.active
                    ? " text-blue-600 rounded-lg border-2 border-[#f4f5f6]"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {item.badge && (
                    <span className="bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                  {item.hasSubmenu && <span className="text-gray-400">›</span>}
                </div>
              </div>

              {item.hasSubmenu && item.active && (
                <div className="mt-2.5 p-3 rounded-lg border-2 border-[#f4f5f6]">
                  {projects.map((project, idx) => (
                    <div
                      className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pt-1.5"
                      key={idx}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                        preserveAspectRatio="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.79289 7.79289C9.40237 8.18342 9.40237 8.81658 9.79289 9.20711L12.5858 12L9.79289 14.7929C9.40237 15.1834 9.40237 15.8166 9.79289 16.2071C10.1834 16.5976 10.8166 16.5976 11.2071 16.2071L14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929L11.2071 7.79289C10.8166 7.40237 10.1834 7.40237 9.79289 7.79289Z"
                          fill="#3772FF"
                        ></path>
                      </svg>
                      <div
                        className={`px-3 py-1 text-sm rounded cursor-pointer text-sm font-medium text-left transition-colors ${
                          project === selectedProject
                            ? " text-[#3772ff]"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {project}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="absolute left-4 right-4 bottom-4">
        <button className="flex items-center space-x-3 px-3 py-2 text-gray-600 rounded-lg transition-colors w-full">
          <CircleAlert size={18} />
          <span className="text-sm font-medium">Support</span>
        </button>
        <button className="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors w-55 bg-[#353945]">
          <LogOut size={18} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </>
  );
}
