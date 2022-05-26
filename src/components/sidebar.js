import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">
                            Products
                        </a>
                        <a className="nav-link" href="/categories">
                            Categories
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
