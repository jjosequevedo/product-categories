import React from 'react';
import ProductForm from '../components/productform';
import ProductList from '../components/productlist';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount = () => {
    this.loadList();
  };

  loadList = () => {
    fetch('/api/list').then(response => {
      return response.text();
    }).then(value => {
      this.setState({ products: JSON.parse(value) });
    });
  }

  onSubmitForm = data => {
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

  onEdit = product => {

  };

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
                <ProductForm onSubmitForm={this.onSubmitForm} />
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
