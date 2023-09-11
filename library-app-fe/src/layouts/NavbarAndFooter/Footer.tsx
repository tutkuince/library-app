export const Footer = () => {
    return(
        <div className="main-color">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 px-3 mt-4 border-top bg-dark text-white">
                <p className="col-md-4 mb-0 text-body-secondary">&copy; 2023 Passion Library App, Inc</p>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary text-white">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary text-white">Search Books</a></li>
                </ul>
            </footer>
        </div>
    );
}