export type Article = {
  id: number | null,
  heading: string | null,
  slug: string | null,
  body: string,
}

function stringToSlug(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  var to = 'aaaaeeeeiiiioooouuuunc------';
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
}

const idPattern = /`id:(\d*?)`/;
const headPattern = /># ?(.*?)</;

const parseArticle = (articleBody: string): Article => {
  const idMatches = articleBody.match(idPattern);
  const id = idMatches?.[1] || null;
  const headMatches = articleBody.match(headPattern);
  const heading = headMatches?.[1] || null;
  const body = articleBody.replace(idPattern, '').replace(headPattern, '');
  return {
    id: parseInt(id, 10) || null,
    heading: heading || null,
    slug: (heading && stringToSlug(heading)) || null,
    body
  }
}

export default parseArticle;
