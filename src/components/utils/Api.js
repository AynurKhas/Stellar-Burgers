import { url } from "./constants";

class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    //ответ от сервера
    checkResponse = (res) =>
        res.ok
            ? res.json()
            : Promise.reject(`Ошибка: ${res.status}`);

    // универсальную функцию запроса с проверкой ответа
    request(url, options) {
        return fetch(url, options).then(this.checkResponse)
    }

    getData = () => {
        return this.request(this._baseUrl, {
            headers: this._headers
        })
    }
}

export const api = new Api({
    baseUrl: url,
    headers: {
        'Content-Type': 'application/json'
    }
});