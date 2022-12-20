// import logo from './logo.svg';
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Booklist from "./components/Booklist";
import Book from "./components/Book";
import "./App.css";
import Sections from "./components/Sections";
import NotFound from "./components/NotFound";
import NewBook from "./components/NewBook";
import { BooksLayout } from "./components/BooksLayout";
import Contact from "./components/Contact"
import About from "./components/About"
import OtherLayout from "./components/OtherLayout";

function App() {
  return (
    <div className="App">
      <>
        <nav style={{ width: "100%" }}>
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              margin: "10px auto",
              justifyContent: "center",
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/sections">Sections</Link>
            </li>
          </ul>
        </nav>
      </>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* passing an element prop to a parent route will render that component for every single child Route  */}
        <Route path="/books" element={<BooksLayout />}>
          <Route index element={<Booklist />} />
          {/* dynamic routing that adds key/value to the parameter after colon (courtesy of useParams) */}
          <Route path="/books/:id" element={<Book />} />
          <Route path="/books/new" element={<NewBook />} />
        </Route>
        {/* the context prop on Outlet will determine what is render, based on route element */}
        <Route element={<OtherLayout />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="/sections" element={<Sections />} />
        <Route path="/sections/:section" element={<Sections />} />

        {/* the "*" accepts any undefined route, making it perfect for a 404 error page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
