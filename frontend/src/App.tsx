import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { LandingPage } from "./components/LandingPage";
import { StudyPathPage } from "./pages/StudyPathPage";
import { WeekPage } from "./pages/WeekPage";
import { ConceptPage } from "./pages/ConceptPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/study-path" element={<StudyPathPage />} />
          <Route path="/study-path/:weekId" element={<WeekPage />} />
          <Route path="/concepts/:slug" element={<ConceptPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
