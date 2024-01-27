import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { allRoutes } from "./routes";
import { ScrollToTop } from "./utils/scrollToTop";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          {allRoutes.map((each: any, i: number) => (
            <Route path={each.href} key={i} element={each.element} />
          ))}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
