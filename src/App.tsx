import { Route, Routes } from "react-router-dom";
import ActorDetail from "./components/ActorDetail";
import ShowDetailPage from "./components/ShowDetail";
import ShowList from "./components/ShowList";

function App() {
  return (
    <div className="">
      <Routes>
        <Route index element={<ShowList />} />
        <Route path="/show/:id" element={<ShowDetailPage />} />
        <Route path="/actor/:actorId" element={<ActorDetail /> } />
      </Routes>
    </div>
  );
}

export default App;
