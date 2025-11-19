/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentComponent = (element) => {
  console.log(import.meta.env);
  const html = `
    Dev: ${import.meta.env.DEV} <br/>
    Prod: ${import.meta.env.PROD} <br/>
    Api Key: ${import.meta.env.VITE_API_KEY} <br/>
    Base Url: ${import.meta.env.VITE_BASE_URL} <br/>
  `;
  element.innerHTML = html;
}
