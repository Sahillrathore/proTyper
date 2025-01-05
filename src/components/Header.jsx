import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <nav className="px-12 py-3 flex justify-center items-center gap-5 bg-black/80 text-white">
        <Link to="/">Home</Link>
        <Link to="/leaderboard">Leaderboard</Link>
    </nav>
);

export default Header;
