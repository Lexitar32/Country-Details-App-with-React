import Axios from "axios";

const axios = Axios.create({
    baseURL: 'https://api.countrylayer.com/v2/',
    timeout: 80000,
});

export const getCountries = async () => {
    try {
        return await axios.get('all/?access_key = e2637c3c3a31b7e485e3171fa8c84f27');
    } catch (err) {
        return err;
    }
};
