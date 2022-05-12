import React from 'react';

class ProductForm extends React.Component {

    render = () => {
        return (
            <div className='card mb-2 mt-2'>
                <div className='card-body'>
                    <h5 className="card-title">Add product</h5>
                    <hr className='divider'/>
                    <form>
                        <div className='row mb-2'>
                            <div className="col">
                                <input type="text" className="form-control" id="product_name" name="product_name" placeholder='Product name' />
                            </div>
                            <div className="col">
                                <input type="number" className="form-control" id="product_quantity" name="product_quantity" placeholder='Quantity' />
                            </div>
                            <div className="col">
                                <input type="number" className="form-control" id="product_price" name="product_price" placeholder='Price' />
                            </div>
                            <div className='col'>
                                <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ProductForm;
