export const apiRoot = 'https://www.reddit.com/'

export const getFinlandPosts = async (sortMethod) => {
    const response = await fetch(`${apiRoot}search.json?q=finland&sort=${sortMethod}`);
    const json = await response.json();
    
    return json.data.children.map((post) => post.data);
};

export const getSuomiPosts = async (sortMethod) => {
    const response = await fetch(`${apiRoot}search.json?q=suomi&sort=${sortMethod}`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
};

export const getComments = async (permalink) => {
    const response = await fetch(`${apiRoot}${permalink}.json`);

    const json = await response.json();
    return json[1].data.children.map((post) => post.data);
}
