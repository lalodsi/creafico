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
            className="carousel-card-image w-full h-full bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url("${card.image}")` }}
            />
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
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
  if (!carouselRef.current) return;

  const container = carouselRef.current;
  const firstChild = container.children[0] as HTMLElement;

  if (!firstChild) return;

  const gap = 16; // gap-4
  const itemWidth = firstChild.offsetWidth;
  const containerWidth = container.parentElement?.offsetWidth ?? 0;

  const newTranslate =
    -(activeIndex * (itemWidth + gap)) +
    (containerWidth / 2 - itemWidth / 2);

  setTranslate(newTranslate);
}, [activeIndex]);

  const childrenArray = Children.toArray(children);

  return (
    <>
      <div className="overflow-hidden w-full">
        <div
          ref={carouselRef}
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translate}px)` }}
        >
          {children}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        {childrenArray.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={clsx(
              "h-2 w-2 rounded-full",
              i !== childrenArray.length - 1 && "mr-2",
              activeIndex === i ? "bg-zinc-300" : "bg-zinc-600"
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
    <div
      className={clsx(
        // 👇 esto es lo importante
        "flex-shrink-0 basis-[80%] sm:basis-[60%] md:basis-[45%] lg:basis-[35%]",
        "h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px]"
      )}
    >
      <div
        className={clsx(
          "w-full h-full transition-all duration-500",
          !active && "scale-90 blur-[6px] opacity-40",
          active && "scale-100 opacity-100"
        )}
      >
        {children}
      </div>
    </div>
  );
};