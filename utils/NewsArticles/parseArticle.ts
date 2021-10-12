export type ArticleData = {
  id: number | null,
  heading: string | null,
  slug: string | null,
  date: string | null,
  summary: string,
  body: string | null,
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
const datePattern = />#### ?(.*?)</;
const moreSeparatorPattern = /<.*?><.*?>--more--<\/.*?><\/.*?/;

const formatContent = (str) =>
  str.replace(/<p[^>]*?><span[^>]*?>?<?\/span><\/p><p[^>]*?><span[^>]*?>?<?\/span><\/p><p[^>]*?><span[^>]*?>?<?\/span><\/p>/g,
    '<p><span></span></p><p><span></span></p>')
    .replace(/<p[^>]*?><span[^>]*?>$/, '')
    .replace(/^.*?(<p[^>]*?><span[^>]*?>[^<])/g,
      '$1')
    .replace(/^<\/span><\/p>/, '')
    .replace(/\[(.*?)\]\((.*?)\)/g, `<a href='$2' target="_blank">$1</a>`);

const parseArticle = (articleBody: string): ArticleData => {
  const idMatches = articleBody.match(idPattern);
  const id = idMatches?.[1] || null;
  const headMatches = articleBody.match(headPattern);
  const heading = headMatches?.[1] || null;
  const dateMatches = articleBody.match(datePattern);
  const date = dateMatches?.[1] || null;
  const content = articleBody
    .replace(idPattern, '')
    .replace(headPattern, '')
    .replace(datePattern, '');
  const moreSeparatorMatchPos = content.match(moreSeparatorPattern);
  const moreSeparatorPos = moreSeparatorMatchPos?.index;
  const hasMore = moreSeparatorMatchPos?.index > 0;
  const wholeBody = hasMore ? content.replace(moreSeparatorPattern, '') : content;
  const summary = formatContent(hasMore ? content.substr(0, moreSeparatorPos) : content);
  const body = hasMore ? formatContent(wholeBody.substr(moreSeparatorPos)) : null;

  return {
    id: isNaN(parseInt(id, 10) || null) ? null : parseInt(id, 10),
    heading: heading || null,
    slug: (heading && stringToSlug(heading)) || null,
    date: date || null,
    summary,
    body
  }
}

export default parseArticle;
