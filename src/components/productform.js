import React from 'react';

/**
 * This is a product form component.
 */
class ProductForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            product_name: '',
            quantity: '',
            price: '',
            category: '',
            categories: []
        };
    }

    componentDidMount = () => {
        this.loadCategories();
    };

    // Load a list of categories.
    loadCategories = () => {
        fetch('/api/listcategories').then(response => {
            return response.text();
        }).then(value => {
            this.setState({ categories: JSON.parse(value) });
        });
    }

    // Update the state after adding or editing a product.
    onChangedData = (e, field_name) => {
        this.setState({
            [field_name]: e.target.value
        });
    };

    // Clear values.
    clearValues = () => {
        this.setState({
            _id: '',
            product_name: '',
            quantity: '',
            price: '',
            category: ''
        });
    }

    // Add a new product.
    onAddFormAction = e => {
        e.preventDefault();
        if (typeof this.props.onAddFormAction == 'function' && this.isValid()) {
            this.props.onAddFormAction({
                product_name: this.state.product_name,
                quantity: this.state.quantity,
                price: this.state.price,
                category: this.state.category,
            });
            this.clearValues();
        }
    };

    // Edit a product.
    onEditFormAction = e => {
        e.preventDefault();
        if (typeof this.props.onEditFormAction == 'function' && this.isValid()) {
            this.props.onEditFormAction(this.state);
            this.clearValues();
        }
    };

    // Load the values after selecting a product from the list.
    loadValues = product => {
        this.setState({
            _id: product._id,
            product_name: product.product_name,
            quantity: product.quantity,
            price: product.price,
            category: product.category
        });
    };

    // Display buttons according to the operation.
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

    // Check if the state is valid.
    isValid = () => {
        const isValid = Object.keys(this.state).every(key => {
            if (key != '_id') {
                return this.state[key] != '' && this.state[key] != '-1';
            }
            return true;
        });
        if (!isValid) {
            alert("There are some fields empty!");
        }
        return isValid;
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
                                    required={true}
                                    onChange={e => this.onChangedData(e, 'product_name')} />
                            </div>
                            <div className="col">
                                <input type="number"
                                    className="form-control"
                                    id="product_quantity"
                                    name="product_quantity"
                                    placeholder='Quantity'
                                    value={this.state.quantity}
                                    required={true}
                                    onChange={e => this.onChangedData(e, 'quantity')} />
                            </div>
                            <div className="col">
                                <input type="number"
                                    className="form-control"
                                    id="product_price"
                                    name="product_price"
                                    placeholder='Price'
                                    value={this.state.price}
                                    required={true}
                                    onChange={e => this.onChangedData(e, 'price')} />
                            </div>
                            <div className="col">
                                <select placeholder='Select a category'
                                    className="form-select"
                                    id="category"
                                    name="category"
                                    value={this.state.category}
                                    required={true}
                                    onChange={e => this.onChangedData(e, 'category')}>
                                    <option value={'-1'}>-Select-</option>
                                    {
                                        this.state.categories.map(c => <option value={c._id}>{c.category_name}</option>)
                                    }
                                </select>
                            </div>
                            <div className='col'>
                                <div className="d-grid gap-2 d-md-flex">
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
