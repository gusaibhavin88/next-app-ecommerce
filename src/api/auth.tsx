import AxiosDefault from "../../src/services/AxiosDefault";

export const signInApi = async (data: any) => {
  const response = await AxiosDefault({
    method: "POST",
    url: "api/v1/login",
    contentType: "application/json",
    data: data,
  });

  return response?.data;
};

export const signUpApi = async (data: any) => {
  const response = await AxiosDefault({
    method: "POST",
    url: "api/v1/register",
    contentType: "multipart/form-data",
    data: data,
  });

  return response?.data;
};
