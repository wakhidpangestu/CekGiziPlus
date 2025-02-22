import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import Home from "./components/home";
import ChatPage from "./pages/ChatPage";
import SchoolPage from "./pages/SchoolPage";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<Home />} />
          <Route path="/school" element={<SchoolPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </Layout>
    </Suspense>
  );
}

export default App;
