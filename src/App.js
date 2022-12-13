
import Form from "./Form";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import ChangeBatch from "./ChangeBatch";
function App() {
  return (
   
    <BrowserRouter>
      <main>
        <Navbar />
        {/* <Form /> */}
        {/* <ChangeBatch/> */}
        <Routes>
          <Route exact path="/changeBatch" element={<ChangeBatch />} />
          <Route exact path="/home" element={<Form />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
