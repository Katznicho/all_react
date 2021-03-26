import React, {useState, useEffect} from 'react';
import './Home.css';
import Product from './Product';
const slides = [
    { id: 1, url:'https://images.unsplash.com/photo-1533417479565-6e21cba3fadb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 2, url: 'https://images.unsplash.com/photo-1557899563-1940fc95709c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' },
    { id: 3, url: 'https://image.shutterstock.com/image-photo/february-1-2018-east-palo-260nw-1015276222.jpg' },
    { id: 4, url: 'https://image.shutterstock.com/image-photo/honolulu-january-12-2017-amazon-600w-655556107.jpg' },
    { id: 5, url: 'https://image.shutterstock.com/image-photo/szczecin-polandnovember-2018-amazon-logistics-600w-1247288113.jpg' },
    {id:6,url:"https://image.shutterstock.com/image-photo/may-3-2018-sunnyvale-ca-260nw-1083512990.jpg"}
  ]
function Home() {
    const [index, set] = useState(0)
    const [image, setImage] = useState(slides[0].url)
    
    useEffect(() => {
         setTimeout(() => {
            if (index < slides.length-1) {
                set(index+1)
            }
            else {
                set(0)
            }
        }, 20000)

        setImage(slides[index].url)
    }, [index])
    console.log(image)
    return (
        <div className="home">
        
                 <img
                className="home__image"
                src={image}
                alt="not found"
            ></img>        
            <div className="home__row">
                <Product
                id={12334}
                title='This is the product'
                rating={5}
                price={12}
                image = "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <Product
            id={12335}
            title='This is the product'
            rating={5}
            price={12}
            image = "https://image.shutterstock.com/image-photo/jeans-on-background-blue-lie-600w-1189112893.jpg"
        />
            </div>
            <div className="home__row">
                <Product
                id={12336}
                title='This is the product'
                rating={5}
                price={12}
                image = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />

                <Product
                id={12338}
                title='This is the product'
                rating={5}
                price={12}
                image = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            </div>
            <div className="home__row">
                <Product
                id={12339}
                title='About this shoe'
                rating={4}
                price={17}
                image = "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <Product
                id={12337}
                title='This is the product'
                rating={5}
                price={12}
                image = "https://image.shutterstock.com/image-photo/jeans-on-background-blue-lie-600w-1189112893.jpg"
                    />
            </div>
           
        </div>
    )
}

export default Home
