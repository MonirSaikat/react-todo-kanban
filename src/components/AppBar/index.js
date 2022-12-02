import AddBoard from 'components/AddBoard';
import CButton from 'components/CButton';
import CModal from 'components/CModal';
import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function AppBar() {
  const [addingBoard, setAddingBoard] = useState(false);

  return (
    <>
      {addingBoard && (
        <CModal show={addingBoard} setShow={() => setAddingBoard(false)} title="Add new board">
          <AddBoard closeAdding={() => setAddingBoard(false)} />
        </CModal>
      )}

      <Navbar bg="light" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">KanBan</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <CButton onClick={() => setAddingBoard(true)}>
              Add Board
            </CButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppBar;
