import MenuBar from "./MenuBar";
import './styles.scss'; 

function Header() {
    return (
        <header>
            <div className="site-name">Site name</div>
            <div className="header-right"></div>
            <MenuBar />
            <button className="header-button">
                Button
            </button>
        </header>
    );
}
export default Header;
