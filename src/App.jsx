import PhotosComponent from './components/photos_component/PhotosComponent';
import TodosComponent from "./components/todos_component/TodosComponent";
import Accueil from './components/accueil/Accueil';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path="/photos" element={<PhotosComponent />} />
        <Route path="/todos" element={<TodosComponent />} />
      </Routes>
    </>
  );
};

export default App;
