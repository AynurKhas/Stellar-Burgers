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
        return this.request(`${this._baseUrl}/ingredients`, {
            headers: this._headers
        })
    }

    sendPostOrderToServer = (ingredients) => {
        return this.request(`${this._baseUrl}/orders`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            "ingredients": ingredients
          })
        })
      }
}

export const api = new Api({
    baseUrl: url,
    headers: {
        'Content-Type': 'application/json'
    }
});