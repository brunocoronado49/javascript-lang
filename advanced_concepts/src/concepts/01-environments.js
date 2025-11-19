/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentComponent = (element) => {
  console.log(import.meta.env);
  const html = `
    Variables:
  `;
  element.innerHTML = html;
}
