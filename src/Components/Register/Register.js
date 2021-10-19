import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className="mt-5 mb-5">
           <Container>
           <form>
                <input type="email" placeholder="Email" />
                <br />
                <input type="password" placeholder="password"/>
                <br />
                <input type="submit" value="Register" />
            </form>
            <Link to="/login">Already registered</Link>
           </Container>
        </div>
    );
};

export default Register;