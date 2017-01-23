import './style.sass';
import Element from '../Element';

export default function (com) {
    const elem = new Element('div', {
        className: 'render full-size',
    });
    elem.appendChildren(com);
    const body = document.body;
    body.insertBefore(elem[0], body.firstChild);
}