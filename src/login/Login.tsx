import React from 'react';

import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { useForm } from 'react-hook-form';
import { CreateUserRequest } from './types';

const Login = () => {
    const { register, handleSubmit} = useForm<CreateUserRequest>();

    const {ref: emailRef, ...emailRest} = register("email");

    const onSubmit = (data: CreateUserRequest) => {
        console.log(data);
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <Label for="email">
                        Email
                    </Label>
                    <Input innerRef={emailRef} {...emailRest} />
                </FormGroup>
                <FormGroup>
                    <Button type='submit'>
                        Login
                    </Button>
                </FormGroup>
            </Form>
        </Container>
    )
};

export default Login;