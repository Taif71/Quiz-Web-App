



// const fetchData = [
//     {
//         "userName": "Meem",
//         "score": 9,
//         "time": 200
//     },
//     {
//         "userName": "Nowshin",
//         "score": 8,
//         "time": 250
//     },
//     {
//         "userName": "Lamia",
//         "score": 8,
//         "time": 400
//     },
//     {
//         "userName": "Munira",
//         "score": 6,
//         "time": 200
//     },
//     {
//         "userName": "Munira",
//         "score": 6,
//         "time": 200
//     },
//     {
//         "userName": "Tabassum",
//         "score": 4,
//         "time": 100
//     },
//     {
//         "userName": "Tabassum",
//         "score": 4,
//         "time": 100
//     },
//     {
//         "userName": "Niloy",
//         "score": 3,
//         "time": 100
//     },
//     {
//         "userName": "Forhad",
//         "score": 1,
//         "time": 200
//     },
//     {
//         "userName": "Rakib",
//         "score": 1,
//         "time": 300
//     }
// ];

let fetchData = [];
fetch('/api/leadboard/ranks').then(result => {
    return result.json();
}).then(resp => {
    resp.forEach(item => {
        fetchData.push(item);
    });
}).catch(err => {
    console.log(err);
});

// async function callapi() {
//     const response = await fetch('/api/leadboard/ranks');
//     const body = await response.json();
//     if (response.status !== 200) throw Error(body.message);    
    

//     fetchData.push(body);
// }

//callapi();

export default fetchData;