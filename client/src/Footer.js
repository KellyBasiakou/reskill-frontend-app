import VerticalMenu from './VerticalMenu';
import './styles.scss'; 

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <header className="footer-header">Site name</header>
                    <p1 className="footer-social">Social media here</p1>
                </div>
                <div className="footer-right">
                    <VerticalMenu topicLabel="Topic1" button1Label="Button 1" button2Label="Button 2" button3Label="Button 3" />
                    <VerticalMenu topicLabel="Topic2" button1Label="First" button2Label="Second" button3Label="Third" />
                    <VerticalMenu topicLabel="Topic3" button1Label="One" button2Label="Two" button3Label="Three" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
