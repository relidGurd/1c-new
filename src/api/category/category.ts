import { notFound } from "next/navigation";
import { strapi_site_url } from "../../../test";

async function getCategories(qwery?: string) {
  const url = `${strapi_site_url}/api/categories?${qwery}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    notFound();
  }
}

async function getCategory(slug: string, qwery?: string) {
  const url = `${strapi_site_url}/api/category/${slug}?${qwery}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    notFound();
  }
}

export { getCategories, getCategory };
