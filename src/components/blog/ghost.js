import GhostContentAPI from '@tryghost/content-api';

const key = '18cabc6cb811e0fbed07d1c70a';
const url = 'https://chiziteremuwaga.ghost.io';

const api = new GhostContentAPI({
  url,
  key,
  version: 'v3',
});

export async function getPosts() {
  return await api.posts
    .browse({
      include: 'tags,authors',
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
export async function getPostById(id) {
  return await api.posts
    .read({
      id: id,
    })
    .catch((err) => {
      console.error(err);
    });
}

export const truncate = (str = '', n) => {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', day: 'numeric', month: 'long' };

  return date.toLocaleDateString('en-US', options);
};

export const getQueryParams = () => {
  const search = window.location.search.substring(1);
  return JSON.parse(
    '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
    function (key, value) {
      return key === '' ? value : decodeURIComponent(value);
    }
  );
};
