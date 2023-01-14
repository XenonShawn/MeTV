import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-12">
      <h1>MeTV</h1>
      <nav className="flex gap-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}