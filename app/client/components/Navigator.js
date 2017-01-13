/**
 * Created by Exper1ence on 2017/1/1.
 */
import React, {PropTypes} from 'react';
import Component from './Component';
import Container from './Container';
import Link from './Link';

class Navigator extends Component {
    _run({routes, style,}) {
        routes = routes.map((route, i) => {
            return (
                <Link to={route.path} key={i} style={{
                    margin: '1rem',
                    marginLeft: '0',
                }}>{route.name}</Link>
            );
        });
        return (
            <Container style={{
                backgroundColor: '#fff',
                fontSize: '1.1rem', fontWeight: 'bold',
                justifyContent: 'center',
                ...style,
            }}>
                <Container fixed>{routes}</Container>
            </Container>
        )
    }
}
Navigator.propTypes = {
    routes: PropTypes.array.isRequired,
};
export default Navigator;