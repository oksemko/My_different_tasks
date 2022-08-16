function getTodo() {
    const response = await fetch('https://jsonplaceholder.typicod.com/tools/1');
    const data = await response.json();
    return data;
}

getTodo().then(console.log);