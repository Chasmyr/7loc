import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from "./pages/Shop";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
