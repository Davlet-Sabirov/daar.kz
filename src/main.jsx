import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop.jsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import NewsPage from "./pages/NewsPage/NewsPage.jsx";
import SeedsPage from "./pages/articles/SeedsPage/SeedsPage.jsx";
import NutsPage from "./pages/articles/NutsPage/NutsPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import TermsPage from "./pages/TermsPage/TermsPage.jsx";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/seeds" element={<SeedsPage />} />
        <Route path="/news/nuts" element={<NutsPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
