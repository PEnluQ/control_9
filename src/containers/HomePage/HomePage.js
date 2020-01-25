import React, {useEffect, Fragment} from 'react';
import {getContacts} from "../../store/actionCreators/contactActions";
import Contact from "../../components/Contact/Contact";
import {connect} from "react-redux";

const HomePage = props => {

useEffect(() => {
   props.getContacts();
    //eslint-disable-next-line
}, []);

    return (
        <Fragment>
            {Object.keys(props.contacts).map(c => (
                <Contact key={c} image={props.contacts[c].photoValue} name={props.contacts[c].nameValue}/>
            ))}
        </Fragment>
    );
};

const mapStateToProps = state => ({
   contacts: state.packContacts,
});

const mapDispatchToProps = dispatch => ({
    getContacts: (contacts) => dispatch(getContacts(contacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);