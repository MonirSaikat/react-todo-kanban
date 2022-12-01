import React, { useState } from 'react';
import { AiTwotoneDelete } from "react-icons/ai";
import { BiMoveHorizontal } from "react-icons/bi";
import useBoards from 'hooks/use-boards';
import MyModal from 'components/Modal';
import CButton from 'components/CButton';
import 'assets/Card.scss';
import { Card } from 'react-bootstrap';

const CCard = ({
  boardId,
  item
}) => {
  const { removeItem } = useBoards();
  const handleRemove = () => removeItem(boardId, item.id);
  const [move, setMove] = useState();
  const { boards, moveItem } = useBoards();

  const handleUpdate = (nextBoardId) => {
    moveItem(boardId, nextBoardId, item.id);
  };

  const renderdBoards = boards.map((board) => {
    const button = (
      <CButton
        className={"mb-2"}
        onClick={() => handleUpdate(board.id)}
        key={board.id}
      >
        {board.title}
      </CButton>
    );

    return board.id !== boardId && button;
  });

  return (
    <Card className="card item">
      <MyModal
        title="Move task to : "
        setShow={() => setMove(false)}
        show={move}
      >
        {renderdBoards}
      </MyModal>
      <span>{item.text}</span>

      <div className="menu">
        <span>
          <BiMoveHorizontal onClick={() => setMove(true)} />
        </span>
        <AiTwotoneDelete onClick={handleRemove} />
      </div>
    </Card>
  );
}

export default CCard;
