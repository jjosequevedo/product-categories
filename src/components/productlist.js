import React from 'react';

class ProductList extends React.Component {

    render = () => {
        return (
            <>
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="product-list-tab" databstoggle="tab" databstarget="#product-list-tab" type="button" role="tab" aria-controls="product-list-tab" aria-selected="true">Product list</button>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="product-list-tab">
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Product name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Name 1</td>
                                    <td>2</td>
                                    <td>4.00</td>
                                    <td>
                                        <button className='btn btn-default'>Edit</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Name 2</td>
                                    <td>4</td>
                                    <td>5.00</td>
                                    <td>
                                        <button className='btn btn-default'>Edit</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Name 3</td>
                                    <td>4</td>
                                    <td>10.00</td>
                                    <td>
                                        <button className='btn btn-default'>Edit</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    };
}

export default ProductList;
