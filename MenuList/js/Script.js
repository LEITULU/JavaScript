const menu = document.querySelector('#menu');

const lists = [
    {
        name: 'itigo',
        img: '../images/800x600.ping.png',
        price: 400,
    },
    {
        name: 'banana',
        img: '../images/800x600.ping.png',
        price: 300,
    },
    {
        name: 'mango',
        img: '../images/800x600.ping.png',
        price: 100,
    },
    {
        name: 'remon',
        img: '../images/800x600.ping.png',
        price: 700,
    },
    {
        name: 'itijiku',
        img: '../images/800x600.ping.png',
        price: 500,
    },
    {
        name: 'ringo',
        img: '../images/800x600.ping.png',
        price: 550,
    },
];

for ( let i = 0; i < lists.length; i++ ) {
    const { name, img, price } = lists[i];
    const content = ` <div><img src="images/${img}" alt="photo" ><h2>${name}</h2><p>${price}円</p></div> `;
    menu.insertAdjacentHTML('beforeend', content);
}