/**
 * accepts a query string and returns and object of string keys and values
 * @param  str a query string. ex. ?test=true&id=123
 */
export default function parseQueryString(str) {
  if (!str) return {};
  if (str.startsWith("?")) str = str.replace("?", "");

  const pairs = str.split("&");
  const keyValuePairs = pairs
    .map((pair) => pair.split("="))
    .filter((pairArr) => pairArr.length === 2)
    .map((pairArr) => [pairArr[0], decodeURIComponent(pairArr[1])]);

  return keyValuePairs.reduce((obj, pair) => {
    obj[pair[0]] = pair[1];
    return obj;
  }, {});
}
