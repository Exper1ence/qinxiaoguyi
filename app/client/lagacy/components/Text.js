/**
 * Created by Exper1ence on 2016/12/31.
 */
import React from 'react';
import Component from './Component';
import View from './View';

export default class Text extends Component {
    _run({children, style,}) {
        return (
            <View style={{
                ...style,
            }}>
                {children}
            </View>
        )
    }
};