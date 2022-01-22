export type ResponseError = {
  response?: {
    data?: {
      severity?: string;
      error?: string;
      message?: string;
      status?: number;
      simplified?: string;
    };
  };
};
