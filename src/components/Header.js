function Header() {
    return(
        <header className="container">
            <div className="flex justify-between">
                <h1>Connor Hall</h1>
                <nav>
                    <ul class="flex">
                        <li><a href="#about">About me</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#contact">Contact me</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;