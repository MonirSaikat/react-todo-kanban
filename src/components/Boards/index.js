import Board from 'components/Board';
import useBoards from 'hooks/use-boards';
import React from 'react';
import 'assets/Boards.scss';

const Boards = () => {
  const { boards } = useBoards();

  return (
    <div className="boards">
      {boards.map((board) => (
        <div className="" key={board.id}>
          <Board board={board} />
        </div>
      ))}
    </div>
  );
}

export default Boards;
