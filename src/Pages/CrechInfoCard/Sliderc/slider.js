
import React, {useState} from 'react'
import './slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataslider'

export default function Slider({creche}) {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== creche.images.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === creche.images.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(creche.images.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    let leng= 0 ; 
    let indexid = (creche.numid)-1 ; 
    
    return (
        <div className="container-slider">
            {(creche.images).map((obj, index) => {
                return (
                    <div
                   
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                       
                        <img 
                        src={process.env.PUBLIC_URL + `/image1/img${(index + 1)+ (indexid) *4}.jpg`}
                        />
                      
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: creche.images.length}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}