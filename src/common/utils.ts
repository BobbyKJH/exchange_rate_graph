import { useLocation } from "react-router-dom";

export const pathUrl = (url: string): boolean => {
  const { pathname } = useLocation();

  return pathname.includes(`/${url}`);
};
