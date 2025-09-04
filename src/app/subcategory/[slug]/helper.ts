import qs from "qs";

export const filtersProducts = (slug: string) => {
  const actualFiltering = qs.stringify({
    filters: {
      subcategories: {
        $eq: slug,
      },
    },
  });

  return actualFiltering;
};
// export const qweryCategory = qs.stringify({
//   filters: {
//     subcategories: {
//       populate: "*",
//     },
//   },
// });
