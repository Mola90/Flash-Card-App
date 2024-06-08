import { Link } from "react-router-dom";


function NavBar() {
    return (
        <nav className="flex justify-center">
            <ul className="flex flex-col md:flex-row">
                <li className="m-4 text-white md:text-xl hover:text-indigo-200">
                     <Link to="/">Home</Link>
                </li>

                <li className="m-4 text-white md:text-xl hover:text-indigo-200">
                    <Link to="/create">Create New Flashcards</Link>
                </li>

                <li className="m-4 text-white md:text-xl hover:text-indigo-200">
                    <Link to="/practice">Practice</Link>
                    {/* <button onClick={()=> window.location.pathname ='/practice'}>Practice</button> */}
                </li>
            </ul>
        </nav>

    );
}

export default NavBar;