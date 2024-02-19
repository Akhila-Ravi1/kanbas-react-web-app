import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaDesktop, FaShareSquare, FaQuestionCircle } from "react-icons/fa";

function KanbasNavigation() {
    const links = [
        { label: "", icon: <><a href="http://northeastern.edu" target="_blank" rel="noopener noreferrer"><img src="/images/neu_logo.png" alt="..." /></a><span></span></> },
        { label: "Account", icon: <span className="fs-2"><FaRegUserCircle /></span> },
        { label: "Dashboard", icon: <span className="fs-2 wd-active"><FaTachometerAlt /></span> },
        { label: "Courses", icon: <span className="fs-2"><FaBook /></span> },
        { label: "Calendar", icon: <span className="fs-2"><FaRegCalendarAlt /></span> },
        { label: "Inbox", icon: <span className="fs-2"><FaInbox /></span> },
        { label: "History", icon: <span className="fs-2"><FaClock /></span> },
        { label: "Studio", icon: <span className="fs-2"><FaDesktop /></span> },
        { label: "Commons", icon: <span className="fs-2"><FaShareSquare /></span> },
        { label: "Help", icon: <span className="fs-2"><FaQuestionCircle /></span> }

    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation d-none d-md-block">
            {links.map((link, index) => (
                <li key={index} className={link.label && pathname.includes(link.label) ? "wd-active" : ""}>
                    {link.label ? (
                        <Link to={`/Kanbas/${link.label}`}>{link.icon} {link.label}</Link>
                    ) : (
                        // External link for NEU logo
                        <>{link.icon}</>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default KanbasNavigation;