import { Route, Routes } from "react-router-dom";
import ShowDetailPage from "./components/ShowDetail";
import ShowList from "./components/ShowList";

function App() {
  return (
    <div className="">
      <Routes>
        <Route index element={<ShowList />} />
        <Route path="/show/:id" element={<ShowDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
