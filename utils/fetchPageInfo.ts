import { server } from "../server";
import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${server}/api/getPageInfo`
  );
  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;
  return pageInfo;
};