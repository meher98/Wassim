import React , {useEffect, useState} from 'react'
import Slider from "react-slick";
import Item from './Item';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios"
export default function Chiffre() {
    const [data, setData] = useState([])
    const [time, setTime] = useState()
    const getFile = ()=>{
        axios.get("http://www.richmondanalytica.com/prices/file")
        .then(data=>{
            setData(Object.values(data.data))
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const getData = ()=>{
        axios.get("http://www.richmondanalytica.com/prices")
        .then(data=>{
            setData(Object.values(data.data))
            setTimeout(() => {
                setTime(Math.random())
            }, 30000);
            
        })
        .catch(error=>{
            setTime(Math.random())
        })
    }

    useEffect(() => {
        getFile()
    }, [])

    useEffect(() => {
        getData()
    },[time])
    
    const settings = {
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 0,
        autoplay: true,
        className: `chiffres-container`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5
                }
            },
           
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 330,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    }
    return (
        <div >
            <div>
                <div className="row">
                    <div className="chiffres-container"  style={{backgroundColor:"black"}}>
                        <Slider {...settings}>
                            {
                                data.map((item,index) => (
                                    <Item key={index} symbole={item.split(" ")[2]} value={item.split(" ")[0]} counter={parseFloat(item.split(" ")[1]).toFixed(4)} fleche={item.split(" ")[3]}/>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
