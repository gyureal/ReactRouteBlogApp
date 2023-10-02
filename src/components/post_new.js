import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

    renderField(field) {
        const { meta : { touched, error } } = field; 
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className = {className}>
                <label>{field.label}</label>
                <input 
                    className='form-control'
                    type="text"
                    {...field.input}    // event?
                />
                <div className="text-help">
                    {touched?error:''}
                </div>
            </div>
        ); 
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                <button type="submit" className='btn btn-primary'>submit</button>
            </form>
        );
    }
}

// automatically right before submit
function validate(values) {
    const errors = {};

    // Validate inputs
    if (!values.title) {
        errors.title = "Enter a title";
    }

    if (!values.categories) {
        errors.categories = "Enter a categories";
    }

    if (!values.content) {
        errors.content = "Enter a content";
    }

    // if errors empty, the form is fine to submit
    // if errors have *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostNewForm'     // should be unique (동일한 폼 이름으로 만들면 merge 됨)
})(PostNew);