

export const exchangeRates = async () => {
  try {
    const response = await fetch("https://dolarapi.com/v1/dolares");
    const data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
  }
};
