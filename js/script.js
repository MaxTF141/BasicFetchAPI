// fetch ('../data/data.json')
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     let results = data.results;
//     let record = results.filter((item)=>{
//         return item.id == 2;
//     })
//     console.table(record);
// })
// .catch(()=>{
//     console.log('Please try again later');
// });

// let data = [8, 9, 12, 'Max'];
// data.push(20);
// data.pop();
// data.shift();
// data.unshift('Maxwill');
// console.log(data);
// console.log(data.filter(Number));

// let onlyNumbers = data.filter(typeof Number);
// let sortedValue = onlyNumbers.sort((a,b)=> a-b);
// console.log(sortedValue);

// let first = data.slice(2, 0);
// let second = data.slice(3);
// let finalResult = [...first, ...second];
// console.log(finalResult);

// //splice
// let newData = data.splice(0, 0, 'max');
// console.log(newData);

// (async function fetchData(){
//     let res = await fetch('../data/data.json');
//     let data = await res.json();
//     console.table(data.results);
// })()


let wrapper = document.querySelector('.wrapper');


async function fetchData() {
    let res = await fetch("https://randomuser.me/api?results=100");
    let data = await res.json();
    return data.results;
};
(async function display(){
    let data = await fetchData();
    data.forEach((item)=>{
        console.log(item);
        wrapper.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${item.picture.large}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name.first} ${item.name.last}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`
    })
})();