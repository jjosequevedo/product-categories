import React from 'react';
import Sidebar from '../components/sidebar';

class AdminLayout extends React.Component {

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <nav className='col-md-3 col-lg-2 d-md-block bg-light sidebar collapse'>
                        <Sidebar />
                    </nav>
                    <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col'>
                                    <div className="card mt-2">
                                        <div className="card-header">
                                            Product details
                                        </div>
                                        <div className="card-body">
                                            {this.props.children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default AdminLayout;
