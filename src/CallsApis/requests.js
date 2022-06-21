// Two bases url's to fetch datas from local mock or back-end
// const BASE_URL = "http://127.0.0.1:3000";
const BASE_URL = "";

/**
 * @description Function to create the url to fetch, who check if datas are mocked and add .json if needed
 * @param  {string} base First part of API adress ("" for mocked datas)
 * @param  {string} path Path of the desired end-point of the API
 */
const createUrl = (base, path) => {
    let url = `${base}${path}`;
    if (base === "") {
        url += ".json";
    }
    // console.log(url)
    return url;
};

/**
 * @description Function to fetch datas, and return response in json format
 * @param {string} url Path of the desired end-point of the API
 */
const getApiDatas = (url) => fetch(createUrl(BASE_URL, url)).then((response) => response.json());

/**
 * @description Get all the user datas we need for all our components
 * @param  {number} userId Id of the user
 */
export const getUserDatas = (userId) => {
    let userData = getApiDatas(process.env.PUBLIC_URL + `/user/${userId}`);
    let activityData = getApiDatas(process.env.PUBLIC_URL + `/user/${userId}/activity`);
    let sessionData = getApiDatas(process.env.PUBLIC_URL + `/user/${userId}/average-sessions`);
    let perfData = getApiDatas(process.env.PUBLIC_URL + `/user/${userId}/performance`);

    // Just two lines to check if these routes are working (user stories 8 and 10)
    // console.log(getApiDatas(process.env.PUBLIC_URL + `/user/${userId}/today-score`).then((res) => console.log(res)))
    // console.log(getApiDatas(process.env.PUBLIC_URL + `/user/${userId}/key-data`).then((res) => console.log(res)))

    return Promise.all([userData, activityData, sessionData, perfData]);
};
