import bcrypt from "bcryptjs";



const data ={
    users: [
        {
          name: 'John',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'Jane',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        }
      ],

    products:[
        {
            name:'Chicken',
            category:'Beef',
            image:'/Images/deshi.jpg',
            price:350,
            type:'Deshi Chicken',
            numReviews:10,
            countInStock:20,
            id:1,
            slug:'desi-chicken',
            brand:'deshi',
            description:'Fresh local chicken'
        },
        {
            name:'Cow Meat',
            category:'Beef',
            image:'/Images/cow.jpg',
            price:500,
            slug:'cow-meat',
            id:2,
            brand:'deshi',
            type:'Deshi Chicken',
            numReviews:12,
            countInStock:10,
            description:'Fresh local cow Meet'
        },
        {
            name:'Goat',
            category:'Beef',
            image:'/Images/goat.png',
            price:800,
            slug:'goat-meat',
            type:'Black bengal',
            numReviews:15,
            brand:'deshi',
            countInStock:10,
            id:3,
            description:'Deshi local goat meat'
        },
        {
            name:'Pakistani Chicken',
            category:'Beef',
            image:'/Images/pakistani.jpg',
            price:239,
            slug:'pakistani-chicken',
            id:4,
            brand:'deshi',
            type:'Pakistani Chicken',
            numReviews:8,
            countInStock:80,
            description:'Imported chicken from pakistan'
        },
        {
            name:'Duck local',
            category:'Beef',
            image:'/Images/duck.jpg',
            price:200,
            slug:'local-duck',
            id:5,
            brand:'deshi',
            type:'Deshi local duck',
            numReviews:22,
            countInStock:5,
            description:'Local popular duck'
        },
        {
            name:'Duck',
            category:'Beef',
            image:'/Images/importedDuck.jpg',
            price:110,
            brand:'deshi',
            slug:'imported-duck',
            id:6,
            type:'Imported Duck',
            numReviews:13,
            countInStock:50,
            description:'Imported duck'
        }
    ]
}


export default data;