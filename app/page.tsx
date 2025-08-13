import React from "react";
import Board from "./components/board/board";
import Kanban from "./components/board/kanban/kanban";

export default function Home() {
  return (
    <div>
      <Board />
      {/* Kanban Board */}
      <Kanban />
    </div>
  );
}
