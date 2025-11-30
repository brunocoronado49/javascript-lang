/**
 * @returns {Promise<Object>} quoteData
 */
const fetchQuote = async () => {
  const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
  const [data] = await response.json();
  return data;
}

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingBadApp = async (element) => {
  document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
  element.innerHTML = 'Loading...';
  const {quote, author} = await fetchQuote();

  element.innerHTML = `
    <h1>${quote}</h1>
    <h2>${author}</h2></br>
    `;
}
