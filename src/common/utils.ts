import { useLocation } from "react-router-dom";

export const pathUrl = (url: string) => {
  const { pathname } = useLocation();

  return pathname.includes(`/${url}`) ? true : false;
};
