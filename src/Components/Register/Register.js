import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
             <form>
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="" />
            </form>
            <Link to="/login">Already registered</Link>
        </div>
    );
};

export default Register;