let initialState=[
    {
        id:1,
        name:'IP 7 plus',
        image:'https://cdn.muabannhanh.com/asset/frontend/img/gallery/2017/04/09/58e9b95f80483_1491712351.jpg',
        description:'SP do apple SX',
        price: 500,
        inventory:15,
        rating:3
    },
    {
        id:2,
        name:'IP 8 plus',
        image:'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600-400x400.jpg',
        description:'SP do apple SX',
        price: 200,
        inventory:15,
        rating:4
    },
    {
        id:3,
        name:'IP 10',
        image:'https://images.fpt.shop/unsafe/fit-in/465x465/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2017/12/8/636483223586180190_3.jpg',
        description:'SP do apple SX',
        price: 900,
        inventory:15,
        rating:5
    }
];

const products=(state=initialState,action)=>{
    switch(action.type){
        default: return [...state]
    }
}
export default products;