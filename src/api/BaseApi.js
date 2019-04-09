class BaseApi {
    static getBaseUrl() {
        return 'https://react-commerce-api.herokuapp.com';
    }

    static getUrl(url) {
        if (url[0] === '/') url = url.substr(1);
        return `${BaseApi.getBaseUrl()}/${url}`;
    }
}

export default BaseApi;
