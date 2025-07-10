import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import type { User } from '../utils/types';
import { useUserLogin } from '../hooks/useUserService';
import {  useNavigate } from "react-router-dom";


const Login = () => {
     const [user, setUser] = useState<User>({
        email: '',
        password: ''
    });
    const { login, isLoading, error } = useUserLogin();
    const navigate = useNavigate();

    const onPswInputChange = (e: any) => {
        setUser({
            email: user.email,
            password: e.target.value
        })
    };

    const onEmailInputChange = (e: any) => {
          setUser({
            email: e.target.value,
            password: user.password
        })
    };

    const handleSubmitButton = async() => {
        console.log(user);
        const userData = await login(user);

        if (userData) {
            localStorage.setItem('user', JSON.stringify(userData));
// add in context
            navigate('/');
        }
    }

    return (
        <Container>
            <h2>Prisijungimo laikas :)</h2>
            <Form>
                { error && (
                    <Form.Text className='errorMessage'>
                        {error}
                    </Form.Text>
                )}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Elektronis pastas</Form.Label>
                    <Form.Control 
                        type="email"
                        placeholder="El.pastas"
                        onChange={(e) => onEmailInputChange(e)}
                    />
                    <Form.Text className="text-muted">
                        Emailas bus saugus :)
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Slaptazodis</Form.Label>
                    <Form.Control 
                        onChange={(e) => onPswInputChange(e)} 
                        type="password" 
                        placeholder="Slaptazodis"
                    />
                </Form.Group>
                <Button variant="primary" type="button" onClick={handleSubmitButton}>
                    Prisijungti
                </Button>
            </Form>
        </Container>
    )
};

export default Login;