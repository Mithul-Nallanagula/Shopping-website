import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"; // Keep Home eagerly loaded
import "./App.css";

// Lazy loading only less frequently accessed components
const Productdetail = lazy(() => import("./components/Productdetail"));
const Category = lazy(() => import("./components/Catogory"));
const Cartitem = lazy(() => import("./components/Cartitem"));
const Searchitem = lazy(() => import("./components/Searchitem"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product/:id"
            element={
              <Suspense fallback={<p className="text-center">Loading...</p>}>
                <Productdetail />
              </Suspense>
            }
          />
          <Route
            path="/category/:category"
            element={
              <Suspense fallback={<p className="text-center">Loading...</p>}>
                <Category />
              </Suspense>
            }
          />
          <Route
            path="/search/:query"
            element={
              <Suspense fallback={<p className="text-center">Loading...</p>}>
                <Searchitem />
              </Suspense>
            }
          />
          <Route
            path="/Cart"
            element={
              <Suspense fallback={<p className="text-center">Loading...</p>}>
                <Cartitem />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<p className="text-center">Loading...</p>}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
