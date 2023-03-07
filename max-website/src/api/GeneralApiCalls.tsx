export const fetchData = () => {
    fetch('/api/hello').then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error(error));
};
