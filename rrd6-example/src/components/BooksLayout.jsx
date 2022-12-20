import { Link, Outlet } from "react-router-dom";

export function BooksLayout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/books/1">Book 1</Link>
          </li>
          <li>
            <Link to="/books/2">Book 2</Link>
          </li>
          <li>
            <Link to="/books/new">New Book</Link>
          </li>
        </ul>
      </nav>

      <Outlet context={{hello: "world", copies: [0,1,2,3,4,5,6,], status: ['Available', 'On hold', 'Unavailable']}}/>
    </>
  );
}
