import axios from "axios";

export const menuList = async (menu:string) => {
    try {
      const { data } = await axios.get(
        `https://bobbykjh.github.io/subway/${menu}.json`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };
  