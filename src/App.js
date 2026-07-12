import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, lightGreen, cyan, deepPurple } from "@mui/material/colors";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./pages/Blog";
import RegistrationDialog from "./components/RegistrationDialog";
import CounsellingDialog from "./components/CounsellingDialog";
import { CodexoProvider } from "./contexts/codexoContext";
import CodexoSuccessDialog from "./components/CodexoSuccessDialog";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0F0F0F",
      },
      secondary: {
        main: "#141414",
      },
      text: {
        main: grey[100],
        secondary: grey[400],
      },
    },
    gradients: {
      primary: `linear-gradient(135deg, ${lightGreen["500"]} 0%, ${cyan[400]} 50%, ${deepPurple[400]} 100%)`,
    },
    typography: {
      fontFamily: '"Plus Jakarta Sans", "Helvetica Neue", Arial, sans-serif',
      h1: { fontWeight: 800 },
      h2: { fontWeight: 700 },
      h5: { fontWeight: 800 },
      body1: { fontWeight: 400 },
      button: {
        fontWeight: 700,
        textTransform: "none",
      },
    },
  });

  return (
    <CodexoProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop />
          <NavBar />
          <RegistrationDialog />
          <CounsellingDialog />
          <CodexoSuccessDialog />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </CodexoProvider>
  );
}

export default App;
