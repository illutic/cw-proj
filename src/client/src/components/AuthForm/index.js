import { Link } from 'react-router-dom';
import * as Styled from './styled';
import Button from '../Button/index';
import GoogleButton from '../../components/GoogleButton/index';
import FORM_TYPES from '../../constants/formTypes';
import withOriginAuth from '../../hoc/withOriginAuth';

const AuthForm = ({ type, error, ...rest }) => {
    return (
        <Styled.Form {...rest}>
            {type === FORM_TYPES.signup ? (
                <Styled.Split>
                    <Styled.Group>
                        <Styled.Label htmlFor="firstName">
                            First Name
                        </Styled.Label>
                        <Styled.Input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Aa"
                        />
                    </Styled.Group>
                    <Styled.Group spaced>
                        <Styled.Label htmlFor="lastName">
                            Last Name
                        </Styled.Label>
                        <Styled.Input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Aa"
                        />
                    </Styled.Group>
                </Styled.Split>
            ) : null}
            <Styled.Group>
                <Styled.Label htmlFor="email">E-mail</Styled.Label>
                <Styled.Input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="@"
                />
            </Styled.Group>
            <Styled.Split>
                <Styled.Group>
                    <Styled.Label htmlFor="password">Password</Styled.Label>
                    <Styled.Input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="*"
                    />
                </Styled.Group>
                {type === FORM_TYPES.signup ? (
                    <Styled.Group spaced>
                        <Styled.Label htmlFor="confirmPassword">
                            Confirm Password
                        </Styled.Label>
                        <Styled.Input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="*"
                        />
                    </Styled.Group>
                ) : null}
            </Styled.Split>
            <Styled.Buttons>
                <Button type="submit">
                    {type === FORM_TYPES.signup ? 'Sign up' : 'Log in'}
                </Button>
                <GoogleButton>Continue with Google</GoogleButton>
            </Styled.Buttons>
            <Styled.Choice>
                {type === FORM_TYPES.signup ? (
                    <Link to="/login">I'm already a member</Link>
                ) : (
                    <Link to="/signup">I don't have an account</Link>
                )}
            </Styled.Choice>
            {error ? <Styled.Error>{error}</Styled.Error> : null}
        </Styled.Form>
    );
};

export default withOriginAuth(AuthForm);
