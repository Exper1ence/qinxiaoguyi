/**
 * Created by Exper1ence on 2017/1/17.
 */
import {array, string,} from './util';
import Component from './Component';

class Style {
    constructor(_style) {
        this._style = _style;
        ['bottom', 'top', 'left', 'right', 'marginLeft', 'marginRight','height','width'].forEach(prop => {
            const _prop = Symbol(prop);
            this[_prop] = parseFloat(this._style[prop]);
            Object.defineProperty(this, prop, {
                get: () => this[_prop],
                set: value => {
                    this[_prop] = value;
                    this._style[prop] = value + 'px';
                },
            })
        });
    }
    addStyle(style) {
        if (style === void 0)return;
        for (let prop in style) {
            if (this[prop] === void 0)
                this._style[prop] = style[prop];
            else this[prop] = style[prop];
        }
    }
}

export default class Element {
    get style() {
        return this._style;
    }
    
    constructor(name, {style, children, className, classList, ...events}) {
        this[0] = document.createElement(name);
        this._style = new Style(this[0].style);
        this._style.addStyle(style);
        if (string(className)) this[0].setAttribute('class', className);
        else if (array(classList)) classList.forEach(name => this.addClass(name));
        this.appendChildren(children);
        for (let event in events) {
            this.on(event, events[event]);
        }
    }
    
    addClass(name) {
        this[0].classList.add(name);
        return this;
    }
    
    removeClass(name) {
        this[0].classList.remove(name);
        return this;
    }
    
    appendChildren(children) {
        if (array(children)) {
            for (let child of children) {
                this.appendChildren(child);
            }
        }
        else if (children instanceof Component) this[0].appendChild(children.$element[0]);
        else if (children instanceof Element) this[0].appendChild(children[0]);
        else if (string(children)) this[0].innerText = children;
        return this;
    }
    
    on(event, callback) {
        this[0].addEventListener(event.toLowerCase(), callback);
        return this;
    }
}