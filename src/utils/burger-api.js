const BURGER_API_URL = 'https://norma.nomoreparties.space/api';
const HEADERS = { 'Content-Type': 'application/json' }

const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const request = (url, options) => {
    return fetch(url, options)
        .then(checkResponse)
}

export const getData = () => {
    return request(`${BURGER_API_URL}/ingredients`, {
        headers: HEADERS
    })
};

export const sendPostOrderToServer = (ingredients) => {
    return request(`${BURGER_API_URL}/orders`,
        {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                "ingredients": ingredients

            })
        })
};