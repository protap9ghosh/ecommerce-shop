import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <Button variant="primary" disabled>
                <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
                Loading...
            </Button>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;