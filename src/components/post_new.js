import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

    renderField(field) {
        return (
            <div className='form-group'>
                <label>{field.label}</label>
                <input 
                    className='form-control'
                    type="text"
                    {...field.input}    // event?
                />
            </div>
        );
    }

    render() {
        return (
            <form>
                <Field 
                    label = "Title"     // trasfer in field
                    name = "title"
                    component={this.renderField}
                />
                <Field
                    label = "Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label = "Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostNewForm'     // should be unique (동일한 폼 이름으로 만들면 merge 됨)
})(PostNew);