import { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class NewUserForm extends Component {
    state = {
        firstName: '',
        lastName: '',
    };

    handleSubmit = e => {
        e.preventDefault();
        const {firstName, lastName} = this.state;
        this.props.onSubmit({
            firstName,
            lastName
        });

        this.setState({
            firstName: '',
            lastName: ''
        });
    };

    handleFirstNameChange = e => {
        this.setState({
            firstName: e.target.value
        });
    };

    handleLastNameChange = e => {
        this.setState({
            lastName: e.target.value
        });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>
                        First name:
                    </Label>
                    <Input placeholder="First name" onChange={this.handleFirstNameChange} />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Last name:
                    </Label>
                    <Input placeholder="Last name" onChange={this.handleLastNameChange} />
                </FormGroup>
                <FormGroup>
                    <Button block outline type="submit" color="primary">
                        Create
                    </Button>
                </FormGroup>
            </Form>
        );
    }
}

export default NewUserForm;