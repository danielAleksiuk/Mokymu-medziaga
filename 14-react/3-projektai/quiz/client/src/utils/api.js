export const BASE_URL = 'http://localhost:3000';

export const getData = async (url) => {
    return await fetch(BASE_URL + url).then(res => res.json());
}