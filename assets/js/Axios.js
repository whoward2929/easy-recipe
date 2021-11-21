import Axios from "axios";

export const instance = Axios.create({
    baseURL: 'https://spoonacular.com/food-api'
});
