export interface responseBody<T = any> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export type requestOptions = {
  showloading?: boolean;
  throwErr?: boolean;
  showMessage?: boolean;
};
