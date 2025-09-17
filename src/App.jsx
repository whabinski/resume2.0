import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import KeyCourses from "./pages/KeyCourses";
import Skills from "./pages/Skills";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Profile />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/courses" element={<KeyCourses />} />
        <Route path="/skills" element={<Skills />} />
      </Route>
    </Routes>
  );
}
