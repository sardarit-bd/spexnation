async function convertUrlsToBase64(urls) {
    const urlToBase64 = async (url) => {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    };

    const base64Array = await Promise.all(urls.map(url => urlToBase64(url)));
    return base64Array;
}

export default convertUrlsToBase64;