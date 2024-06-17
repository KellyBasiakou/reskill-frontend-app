import './styles.scss'; // Import the SASS file

function VerticalMenu({ button1Label, button2Label, button3Label, topicLabel }) {
    return (
        <div className="vertical-menu">
            <p1>{topicLabel}</p1>
            <button>{button1Label}</button>
            <button>{button2Label}</button>
            <button>{button3Label}</button>
        </div>
    );
}

export default VerticalMenu;
