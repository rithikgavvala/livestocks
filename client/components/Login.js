import React from 'react';
import '../css/App.css';
import { Button, Form, FormInput, FormGroup } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";


function Login(){


    return (

        <div className="login-container">
            <div className="login-form-container">
                <Form>
                    <FormGroup>
                        <label htmlFor="#username">Username</label>
                        <FormInput id="#username" placeholder="Username" />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="#password">Password</label>
                        <FormInput type="password" id="#password" placeholder="Password" />
                    </FormGroup>
                </Form>

            </div>
            <div className="login-buttons-container">
                <div className="login-login-container">
                    <Button
                        outline
                        size="lg">
                        Login
                    </Button>
                </div>
                <div className="login-register-container">
                    <Button
                        size="lg">
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Login;