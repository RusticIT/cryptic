const url = "https://api.coincap.io/v2";

async function getAssets() {
  try {
    const response = await fetch(`${url}/assets?limit=20`);
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

export default {
  getAssets,
  getAsset,
  getAssetHistory,
};
