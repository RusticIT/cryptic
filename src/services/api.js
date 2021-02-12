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

export default {
  getAssets
};
