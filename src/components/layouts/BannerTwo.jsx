import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

const BannerTwo = () => {
  return (
    <>
    <div className="my-[50px]">
        <Container>
            <Flex className={"justify-between"}>
                <div className="w-[49%] bg-[url(/src/assets/banner_1.jpg)] bg-center bg-cover bg-no-repeat pt-[240px] pb-[40px]">
                    <p>afgasg</p>
                </div>
                <div className="w-[49%] bg-[url(/src/assets/banner_1.jpg)] bg-center bg-cover bg-no-repeat pt-[240px] pb-[40px]"></div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default BannerTwo