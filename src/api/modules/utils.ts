// baseUrlApi 是一个函数，用于根据环墂变量返回不同的请求地址
export const baseUrlApi = (url: string) => {
  return process.env.NODE_ENV === "development" ? `/api${url}` : url;
};
