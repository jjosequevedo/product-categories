import React from 'react';
import CategoryForm from '../../components/categoryform';
import CategoryList from '../../components/categorylist';

class Categories extends React.Component {

    constructor(props) {
        super(props);
        // Create a category form reference.
        this.categoryForm = React.createRef();
        this.state = {
            categories: []
        };
    }

    // After mounting the component, the list is loaded.
    componentDidMount = () => {
        this.loadList();
    };

    // Load a list of categories.
    loadList = () => {
        fetch('/api/listcategories').then(response => {
            return response.text();
        }).then(value => {
            this.setState({ categories: JSON.parse(value) });
        });
    }

    // Add a new category.
    onAddFormAction = data => {
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('/api/addcategory', request)
            .then(response => {
                if (response.status == 200) {
                    this.loadList();
                }
            });
    };

    // Edit a selected category.
    onEditFormAction = data => {
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('/api/editcategory', request)
            .then(response => {
                if (response.status == 200) {
                    this.loadList();
                }
            });
    };

    // Load a selected category into the form.
    onEdit = category => {
        if (typeof this.categoryForm.current.loadValues == 'function') {
            this.categoryForm.current.loadValues(category);
        }
    };

    // Remove a selected category.
    onDelete = category => {
        const request = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(category)
        };
        fetch('/api/deletecategory', request)
            .then(response => {
                if (response.status == 200) {
                    this.loadList();
                }
            });
    };

    render() {
        return (
            <>
                <CategoryForm
                    ref={this.categoryForm}
                    onAddFormAction={this.onAddFormAction}
                    onEditFormAction={this.onEditFormAction} />
                <CategoryList
                    categories={this.state.categories}
                    onEdit={this.onEdit}
                    onDelete={this.onDelete} />
            </>
        );
    }
}

export default Categories;
