const KEY = "894e183d11d7419395f235400231407";

const fetchData = async (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();

    return data;
};

export default fetchData;
