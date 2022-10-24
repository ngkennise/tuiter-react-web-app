import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";


const NavigationSidebar = (
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                Explore
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>
            <a className="list-group-item">Notifications</a>
            <a className="list-group-item">Messages</a>
            <a className="list-group-item">Bookmarks</a>
            <a className="list-group-item">Lists</a>
            <a className="list-group-item">Profile</a>
            <a className="list-group-item">More</a>
        </div>
    );

};
export default NavigationSidebar;

