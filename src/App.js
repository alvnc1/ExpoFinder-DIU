import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar" element={<ProjectSearch />} />
        <Route path="/ediciones-pasadas" element={<PastEditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


