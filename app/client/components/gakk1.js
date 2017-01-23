import Party from './patterns/Party';

export const scrollUp = {
    _top: 0,
    get top() {
        return this._top;
    },
    _party: new Party(),
    _init: (() => {
        let isUp = !0;
        document.addEventListener('scroll', () => {
            let top = scrollUp._top;
            const newTop = document.body.scrollTop;
            if (newTop === 0) {
                scrollUp._party.high(isUp, newTop);
            }
            else if (isUp && newTop > top) {
                isUp = !!0;
                scrollUp._party.high(isUp, newTop);
            }
            else if (!isUp && newTop < top) {
                isUp = !0;
                scrollUp._party.high(isUp, newTop);
            }
            scrollUp._top = newTop;
        });
    })(),
    join(handler){
        this._party.join(handler);
    },
    quit(handler){
        this._party.quit(handler);
    },
};
export function scrollToTop() {
    document.body.scrollTop = 0;
}
