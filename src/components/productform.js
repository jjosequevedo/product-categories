import React from 'react';

class ProductForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            product_name: '',
            quantity: '',
            price: ''
        };
    }

    onChangedData = (e, field_name) => {
        this.setState({
            [field_name]: e.target.value
        });
    };

    clearValues = () => {
        this.setState({
            _id: '',
            product_name: '',
            quantity: '',
            price: ''
        });
    }

    onAddFormAction = e => {
        e.preventDefault();
        if (typeof this.props.onAddFormAction == 'function') {
            this.props.onAddFormAction({
                product_name: this.state.product_name,
                quantity: this.state.quantity,
                price: this.state.price
            });
            this.clearValues();
        }
    };

    onEditFormAction = e => {
        e.preventDefault();
        if (typeof this.props.onEditFormAction == 'function') {
            this.props.onEditFormAction(this.state);
            this.clearValues();
        }
    };

    loadValues = product => {
        this.setState({
            _id: product._id,
            product_name: product.product_name,
            quantity: product.quantity,
            price: product.price
        });
    };

    showButtons = () => {
        if (this.state._id != '') {
            return (
                <>
                    <button type="submit" className="btn btn-primary" onClick={this.onEditFormAction}>Edit</button>
                    <a className="btn btn-danger" onClick={this.clearValues}>Cancel</a>
                </>
            );
        }
        return (
            <button type="submit" className="btn btn-primary" onClick={this.onAddFormAction}>Add</button>
        );
    };

    render = () => {
        return (
            <div className='card mb-2 mt-2'>
                <div className='card-body'>
                    <h5 className="card-title">Add product</h5>
                    <hr className='divider' />
                    <form method='post' name='form-product'>
                        <div className='row mb-2'>
                            <div className="col">
                                <input type="text"
                                    className="form-control"
                                    id="product_name"
                                    name="product_name"
                                    placeholder='Product name'
                                    value={this.state.product_name}
                                    onChange={e => this.onChangedData(e, 'product_name')} />
                            </div>
                            <div className="col">
                                <input type="number"
                                    className="form-control"
                                    id="product_quantity"
                                    name="product_quantity"
                                    placeholder='Quantity'
                                    value={this.state.quantity}
                                    onChange={e => this.onChangedData(e, 'quantity')} />
                            </div>
                            <div className="col">
                                <input type="number"
                                    className="form-control"
                                    id="product_price"
                                    name="product_price"
                                    placeholder='Price'
                                    value={this.state.price}
                                    onChange={e => this.onChangedData(e, 'price')} />
                            </div>
                            <div className='col'>
                                <div class="d-grid gap-2 d-md-flex">
                                    {this.showButtons()}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ProductForm;
