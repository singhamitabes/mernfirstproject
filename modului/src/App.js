
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateToDo from "./Component/CreateToDo"
import EditToDo from "./Component/EditToDo"
import ReadToDo from "./Component/ReadToDo"
import { useState } from "react";

function App() {
  const [editId, seteditId] = useState({})
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateToDo />} />
          <Route path="/edit" element={<EditToDo editId={editId} />} />
          <Route path="/read" element={<ReadToDo seteditId={seteditId} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
