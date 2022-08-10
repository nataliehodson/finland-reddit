export const apiRoot = 'https://www.reddit.com/search.json?q='

export const getFinlandPostsHot = async () => {
    const response = await fetch(`${apiRoot}finland&sort=hot`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
};

export const getFinlandPostsTop = async () => {
    const response = await fetch(`${apiRoot}finland&sort=top`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
};

export const getFinlandPostsNew = async () => {
    const response = await fetch(`${apiRoot}finland&sort=new`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
};

export const getSuomiPostsHot = async () => {
    const response = await fetch(`${apiRoot}suomi&sort=hot`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
};

export const getSuomiPostsTop = async () => {
    const response = await fetch(`${apiRoot}suomi&sort=top`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
};

export const getSuomiPostsNew = async () => {
    const response = await fetch(`${apiRoot}suomi&sort=new`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);

};