import React, {
  useRef,
  useState,
  useEffect,
  ReactNode,
  Children,
} from 'react';
import clsx from 'clsx';

type CarouselProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  children: ReactNode;
};

export type Card = {
  id: string | number;
  title: string;
  image: string;
};

type HomeProps = {
  data: Card[];
};

export const Home: React.FC<HomeProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div>
      <Carousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        {data.map((card, i) => (
          <CarouselCard key={card.id} active={activeIndex === i}>
            <div
              className="carousel-card-image relative w-full h-full bg-contain bg-no-repeat bg-center transition-all duration-800 ease-in-out"
              style={{ backgroundImage: `url("${card.image}")` }}
            >
            </div>
          </CarouselCard>
        ))}
      </Carousel>

      <div className="flex justify-center mt-[30px]">
        <button
          type="button"
          disabled={activeIndex === 0}
          onClick={() => setActiveIndex(activeIndex - 1)}
          className="h-8 w-[77px] bg-[#060606] text-[#e5e5e5] disabled:opacity-50 hover:cursor-pointer mr-5"
        >
          Prev
        </button>

        <button
          type="button"
          disabled={activeIndex === data.length - 1}
          onClick={() => setActiveIndex(activeIndex + 1)}
          className="h-8 w-[77px] bg-[#060606] text-[#e5e5e5] disabled:opacity-50 hover:cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const Carousel: React.FC<CarouselProps> = ({
  activeIndex,
  setActiveIndex,
  children,
}) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [carouselTranslate, setCarouselTranslate] = useState<number>(0);

  useEffect(() => {
    if (!carouselRef.current) return;

    const initialTranslateVal = carouselRef.current.offsetWidth / 4;
    const diffAmount = initialTranslateVal * 2;

    const translate =
      activeIndex === 0
        ? initialTranslateVal
        : initialTranslateVal - activeIndex * diffAmount;

    setCarouselTranslate(translate);
  }, [activeIndex]);

  const childrenArray = Children.toArray(children);

  return (
    <>
      <div
        className="flex w-full transition-all duration-[350ms] ease-in-out"
        ref={carouselRef}
        style={{ transform: `translateX(${carouselTranslate}px)` }}
      >
        {children}
      </div>

      <div className="flex justify-center mt-[40px]">
        {childrenArray.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={clsx(
              'h-[7px] w-[7px] rounded-full border-none p-0 hover:cursor-pointer',
              i !== childrenArray.length - 1 && 'mr-[10px]',
              activeIndex === i ? 'bg-[#c9c9c9]' : 'bg-[#545454]'
            )}
          />
        ))}
      </div>
    </>
  );
};

type CarouselCardProps = {
  active?: boolean;
  children: ReactNode;
};

export const CarouselCard: React.FC<CarouselCardProps> = ({
  active = false,
  children,
}) => {
  return (
    <div className="min-w-[50%] w-[200px] h-[250px]">
      <div
        className={clsx(
          'w-full h-full',
          !active && 'scale-80 blur-[10px] [&_.carousel-card-image]:opacity-30',
          active
            && '[&_.carousel-card-image]:opacity-100'
          )}
      >
        {children}
      </div>
    </div>
  );
};