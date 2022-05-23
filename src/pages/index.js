import React from 'react';
import ProductForm from '../components/productform';
import ProductList from '../components/productlist';

/**
 * Home component to display the main view.
 */
class Home extends React.Component {

  constructor(props) {
    super(props);
    // Create a product form reference.
    this.productForm = React.createRef();
    this.state = {
      products: []
    };
  }

  // After mounting the component, the list is loaded.
  componentDidMount = () => {
    this.loadList();
  };

  // Load a list of products.
  loadList = () => {
    fetch('/api/list').then(response => {
      return response.text();
    }).then(value => {
      this.setState({ products: JSON.parse(value) });
    });
  }

  // Add a new product.
  onAddFormAction = data => {
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch('/api/addproduct', request)
      .then(response => {
        if (response.status == 200) {
          this.loadList();
        }
      });
  };

  // Edit a selected product.
  onEditFormAction = data => {
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch('/api/editproduct', request)
      .then(response => {
        if (response.status == 200) {
          this.loadList();
        }
      });
  };

  // Load a selected product into the form.
  onEdit = product => {
    if (typeof this.productForm.current.loadValues == 'function') {
      this.productForm.current.loadValues(product);
    }
  };

  // Remove a selected product.
  onDelete = product => {
    const request = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    };
    fetch('/api/deleteproduct', request)
      .then(response => {
        if (response.status == 200) {
          this.loadList();
        }
      });
  };

  render = () => {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className="card mt-2">
              <div className="card-header">
                Product details
              </div>
              <div className="card-body">
                {/* This is the form to add or edit a product. */}
                <ProductForm
                  ref={this.productForm}
                  onAddFormAction={this.onAddFormAction}
                  onEditFormAction={this.onEditFormAction} />
                  {/*This is a component to list products and also has the actions to edit or delete them. */}
                <ProductList
                  products={this.state.products}
                  onEdit={this.onEdit}
                  onDelete={this.onDelete} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
