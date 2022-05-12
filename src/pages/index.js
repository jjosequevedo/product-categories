import React from 'react';
import ProductForm from '../components/productform';
import ProductList from '../components/productlist';

class Home extends React.Component {

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
                <ProductForm />
                <ProductList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
