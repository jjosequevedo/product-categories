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
                                {
                                    this.props.products.map((p, i) => {
                                        return (
                                            <tr key={p._id}>
                                                <th scope="row">{i + 1}</th>
                                                <td>{p.product_name}</td>
                                                <td>{p.quantity}</td>
                                                <td>{p.price}</td>
                                                <td>
                                                    <button className='btn btn-default'>Edit</button>
                                                    <button className='btn btn-danger'>Delete</button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    };
}

export default ProductList;
