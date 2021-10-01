import axios from 'axios';
import { ifNotNull, ifNotUndefined, recoverUndefined } from 'errable';
import { pipe } from 'ramda';

const localiseBody = (body: string, cssPrefix: string) => {
  const styleMatcher = /<style(.*?)>(.*?)<\/style>/;
  return pipe(
    () => body,
    ifNotUndefined((bodyStr) => bodyStr.match(styleMatcher)),
    ifNotUndefined((matches) => matches?.[2]),
    ifNotUndefined((styleBody) =>
      styleBody.replace(
        /(p|h1|h2|h3|h4|h5|h6|li|ol|table td,table th|\.subtitle|\.title)\{.*?\}/g,
        '',
      ),
    ),
    ifNotUndefined((styleBody) =>
      styleBody.replace(/@import url\(.*?\);/g, ''),
    ),
    ifNotUndefined((styleBody) => styleBody.replace(/\}/g, `}.${cssPrefix} `)),
    ifNotUndefined((localisedStyles) => {
      return body?.replace(styleMatcher, `<style$1>${localisedStyles}</style>`);
    }),
    ifNotUndefined((newBody) =>
      newBody.replace(
        /<p[^>]*?><span[^>]*?><img(.*?)style=".*?width:(.*?);.*?"(.*?)>/g,
        `<p class="_imgCtnr"><img$1style="width:$2"$3>`,
      ),
    ),
    recoverUndefined(() => null),
  )();
};

const getGDocContent = (gdocId: string, cssPrefix?: string) => {
  return axios
    .get(`https://docs.google.com/document/${gdocId}/pub?embedded=true`)
    .then((resp) => {
      if (resp.status === 200 && typeof resp.data === 'string') {
        return resp.data;
      }
      return null;
    })
    .then(ifNotNull((successResponse) => localiseBody(successResponse, cssPrefix)))
    .catch((e: any) => null);
};

export default getGDocContent;
