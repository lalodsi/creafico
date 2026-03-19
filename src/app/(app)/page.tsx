import { Section } from 'components/ui/Section'
import React from 'react'
import Image from 'next/image'
import { Container } from 'components/ui/Container'
import { TitleBlock } from 'components/ui/TitleBlock'


const Home = () => {
  return (
    <section className='max-w-3xl sl:px-16 sm:px-8 sl:py-12 sm:py-8 mx-auto'>
      <Section>
        <div className='flex'>
          <div className='w-[50%] h-[300px] relative'>
            <Image
              src='/Logo.png'
              alt=''
              fill
            />
          </div>
          <div className='w-[50%]'>
            <Container
              className='w-[300px] h-[250px] relative top-[50px]'
            >
              <TitleBlock
                title='Nuestra Experiencia'
                subtitle='Más de 34 años en el mundo de la publicidad'
              />
            </Container>
          </div>
        </div>
      </Section>
    </section>
  )
}

export default Home