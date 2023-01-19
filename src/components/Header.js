import Navigation from "./Navigation";


const Header = (props) => {
    return (
        <>
        <header>
            <div className="header">
                <h1>Cascade</h1>
                <Navigation/>
                </div>
        </header>
        </>
    );
}

export default Header;