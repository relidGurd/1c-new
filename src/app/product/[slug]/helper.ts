import qs from "qs";

export const qweryProduct = qs.stringify({
  populate: {
    image: true,
    subcategory: {
      populate: {
        image: true,
      },
    },
    tab: {
      populate: "*",
    },
  },
});
