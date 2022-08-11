export const apiRoot = 'https://www.reddit.com/search.json?q='

export const getFinlandPosts = async (sortMethod) => {
    const response = await fetch(`${apiRoot}finland&sort=${sortMethod}`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
};


export const getSuomiPosts = async (sortMethod) => {
    const response = await fetch(`${apiRoot}suomi&sort=${sortMethod}`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
};
