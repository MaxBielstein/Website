export const fetchData = () => {
    fetch('/api/hello').then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error(error));
};

export const fetchResume = async () => {

    try {
        const response = await fetch('/api/resume');
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        return url;
    } catch (error) {
        console.error(error);
        return null;
    }
};
