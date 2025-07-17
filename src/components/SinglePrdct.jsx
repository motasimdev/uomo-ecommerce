import React from 'react'
import Image from './Image'
import prdctOne from '/src/assets/product_1.jpg'

const SinglePrdct = ({imgSrc, imgAlt, imgClassName, SinglePrdctclassName}) => {
  return (
    <>
    <div className={`${SinglePrdctclassName}`}>
        {/* <Image src={`${imgSrc}`} alt={`${imgAlt}`} className={`${imgClassName}`}/> */}
        <Image src={prdctOne} alt={"product_1.jpg"}/>

    </div>
    </>
  )
}

export default SinglePrdct