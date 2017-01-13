import React, {PropTypes} from 'react';
import Component from './Component';
import Container from './Container';
import View from './View';
import {propTypes,defaultProps} from './types';

class Footer extends Component{
    _run({children,style,}){
        return(
            <Container style={{...style,}}>
                
            </Container>
        );
    }
}
Footer.propTypes ={
    
};
Footer.defaultProps={
    
};
export default Footer;