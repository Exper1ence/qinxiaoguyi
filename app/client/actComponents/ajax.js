export default function ({url, method = 'get', json,}) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            }
            else {
                reject(xhr.status)
            }
        };
        xhr.send(json ? JSON.stringify(json) : void 0);
    });
}