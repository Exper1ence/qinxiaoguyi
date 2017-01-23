export const click = {
    handleClick(e){
        this.props.onClick && this.props.onClick(e, this);
    },
};
export function propagateEvent(...events) {
    const handlers = {};
    events.forEach(event =>
        handlers['propagate' + event.slice(2)] = function (e) {
            this.props[event] && this.props[event](e, this);
        });
    return handlers;
}