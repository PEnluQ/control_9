import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import Form from "../../components/Form/Form";
import {postContact} from "../../store/actionCreators/contactActions";

const NewContacts = props => {
    const [contact, setContact] = useState({nameValue: '', phoneValue: '', emailValue: '', photoValue: '',});

    const changeValue = (event) => {
        setContact({
            ...contact,
            [event.target.name]:event.target.value,
        });
    };

    const submitInfo = async e => {
        e.preventDefault();
        await props.postContact(contact);
        setContact({nameValue: '', phoneValue: '', emailValue: '', photoValue: '',});
    };

    return (
        <Fragment>
            <h2>Add new contact</h2>
            <Form
                onChange={changeValue}
                nameValue={contact.name}
                phoneValue={contact.phone}
                emailValue={contact.email}
                photoValue={contact.photoValue}
                submit={submitInfo}
            />
        </Fragment>
    );
};

const mapDispatchToProps = dispatch => ({
   postContact: (contact) => dispatch(postContact(contact)),
});

export default connect(null, mapDispatchToProps)(NewContacts);