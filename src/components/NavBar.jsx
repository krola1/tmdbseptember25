import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
export default function NavBar() {
  return (
    <header className="navbar">
      <Link className="brand" to="/">
        Home
      </Link>
      <SearchBar />
    </header>
  );
}
