export const decodeRedditImgUrl = (str: string) => {
  return str.replaceAll("\u0026", "&").replaceAll("amp;", "");
};
