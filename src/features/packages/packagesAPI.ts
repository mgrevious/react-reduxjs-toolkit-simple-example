import axios from "axios";

export const fetchPackages = async (term: string) => {
  const { data } = await axios.get("https://registry.npmjs.org/-/v1/search", {
    params: { text: term },
  });
  return data.objects.map((result: any) => result.package.name);
};
