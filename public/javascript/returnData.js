fetch('https://su0jijc0e6.execute-api.us-east-1.amazonaws.com/dev/search')
.then(response => response.json())
.then(data => {
    tempArray = JSON.parse(data.body).rows;
    console.log(tempArray);
});