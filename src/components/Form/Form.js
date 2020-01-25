import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";

const Form = props => {
    return (
        <Fragment>
            <input type='text' placeholder='name'
                   onChange={props.onChange}
                   value={props.nameValue}
                   name='nameValue'
            />
            <input type='number' placeholder='phone'
                   onChange={props.onChange}
                   value={props.phoneValue}
                   name='phoneValue'
            />
            <input type='email' placeholder='email'
                   onChange={props.onChange}
                   value={props.emailValue}
                   name='emailValue'
            />
            <input type='url' placeholder='photo URL'
                   onChange={props.onChange}
                   value={props.photoValue}
                   name='photoValue'
            />
            <div className='photo'>Photo Preview</div>
            <button onClick={props.submit}>Save</button>
            <NavLink to='/'><button>Back to contacts</button></NavLink>
        </Fragment>
    );
};

export default Form;