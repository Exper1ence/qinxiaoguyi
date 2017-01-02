/**
 * Created by Exper1ence on 2016/12/30.
 */
import React from 'react';
import {render} from 'react-dom';
import {
    Container, Component,
    Wrapper, Padding, Text, Responsive,
    Button, Navigator, View, Footer,
    Link,
} from './components';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

class MathRobot extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
    }
    
    run({children,}) {
        return (
            <Wrapper style={{}}>
                <Container style={{
                    height: '100%',
                    overflow: 'hidden',
                    position: 'relative'
                }}>{children}</Container>
            </Wrapper>
        )
    }
}
class Content extends Component {
    init() {
        return {
            top: 0,
            transition: 0,
        }
    }
    
    run({}, {top, transition,}) {
        return (
            <Container
                style={{
                    height: '100%',
                    backgroundColor: '#563D7C',
                    position: 'absolute',
                    top,
                    transition,
                }}
                onDragVertical={(e, diff) => {
                    this.setState({top: diff + 'px', transition: 0});
                }}
                onSwipeUp={() => {
                    this.setState({top: '-100%', transition: 'top .2s'});
                }}
            >
                asdasdas
            </Container>
        )
    }
}
class Test extends Component {
    run() {
        return (
            <div>test</div>
        )
    }
}
class Doc extends Component {
    run() {
        return (
            <div>doc</div>
        )
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={MathRobot}>
            <IndexRoute component={Content}/>
            <Route path="/test" component={Test}/>
            <Route path="/doc" component={Doc}/>
        </Route>
    </Router>
), document.getElementById('math-robot'));