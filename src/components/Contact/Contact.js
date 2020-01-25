import React from 'react';
import {Button, Card, CardBody, CardGroup, CardImg, CardTitle} from "reactstrap";
import './Contact.css';

const Contact = props => {
    return (
        <div>
            <CardGroup>
                <Card className='card'>
                    <CardImg top width="100%" className='img' src={props.image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{props.name}</CardTitle>
                        <Button onClick={props.removeC}>Delete</Button>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Contact;