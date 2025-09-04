import qs from "qs";
export const qweryCategory = qs.stringify({
  populate: {
    subcategories: {
      populate: "*",
    },
  },
});
