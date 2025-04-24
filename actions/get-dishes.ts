async function getStrapiData(url: string) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
  }
}