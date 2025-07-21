import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

const BannerTwo = () => {
  return (
    <>
    <div className="my-[50px]">
        <Container>
            <Flex>
                <div className="bg-[url(/src/assets/banner_1.jpg)] bg-center bg-cover bg-no-repeat pt-[240px] pb-[40px]">

                </div>
                <div className="bg-[url(/src/assets/banner_1.jpg)] bg-center bg-cover bg-no-repeat pt-[240px] pb-[40px]"></div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default BannerTwo