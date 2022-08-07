export const apiRoot = 'https://www.reddit.com/search.json?q='

export const getFinlandPosts = async () => {
    const response = await fetch(`${rootApi}finland`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
};

export const getSuomiPosts = async () => {
    const response = await fetch(`${rootApi}suomi`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
};