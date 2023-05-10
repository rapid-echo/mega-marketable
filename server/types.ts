export type GlobalErrorType = {
  log: string;
  status: number;
  message: {
    err: string;
  };
};

export type ReqUserInfo = {
  username: string;
  password: string;
};
