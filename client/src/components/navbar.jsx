
function NavBar() {
    return (
        <nav className="flex justify-center">
            <ul className="flex flex-col md:flex-row">
                <li className="m-4 text-white md:text-xl hover:text-indigo-200">Home</li>
                <li className="m-4 text-white md:text-xl hover:text-indigo-200">Create New Flashcards</li>
                <li className="m-4 text-white md:text-xl hover:text-indigo-200">Practice</li>
            </ul>
        </nav>

    );
}

export default NavBar;