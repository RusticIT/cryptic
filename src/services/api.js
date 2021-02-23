const url = "https://api.coincap.io/v2";

async function getAssets(limit = 100, offset = 0) {
  try {
    const response = await fetch(
      `${url}/assets?limit=${limit}&offset=${offset}`
    );
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function getAsset(coin) {
  try {
    const response = await fetch(`${url}/assets/${coin}`);
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function getAssetHistory(coin) {
  try {
    const milisInADay = 24 * 60 * 60 * 1000;
    const now = new Date();
    const end = now.getTime();
    const start = now.getTime() - milisInADay;

    const response = await fetch(
      `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
    );
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function getMarkets(coin, limit = 5) {
  let res = await fetch(`${url}/assets/${coin}/markets?limit=${limit}`);
  const { data } = await res.json();
  return data;
}

async function getExchange(id) {
  let res = await fetch(`${url}/exchanges/${id}`);
  const { data } = await res.json();

  return data;
}

export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
  getAssetHistory
};
