"use client"
import clsx from "clsx";
import { Card, Home as Carousel } from "components/ui/Carousel";
import Image from "next/image";
import { SubItem, services } from "types/services";

const SectionRight = (props: SubItem & { i: number }) => {
  const randomNumber = Math.random();
  const randomColor = randomNumber > 0.5 ? "bg-yellow text-in-yellow-bg" : "bg-purple text-in-purple-bg";

  return (
    <div key={props.i} className="p-4 flex flex-col md:flex-row gap-4">
      {props.images && (
        <div className="w-full md:w-auto">
          <Image
            src={props.images[0].url}
            alt={props.images[0].name}
            width={250}
            height={220}
            className="object-cover w-full h-auto md:w-[250px] md:h-[220px]"
            priority
          />
        </div>
      )}
      <div className={clsx(randomColor, props.images && "w-full md:w-[60%]")}>
        <h3 className="text-xl md:text-2xl font-bold mb-4 pl-4">{props.title}</h3>
        <p className="pl-4 text-sm md:text-base">{props.description}</p>
      </div>
    </div>
  );
};

const SectionLeft = (props: SubItem & { i: number }) => {
  const randomNumber = Math.random();
  const randomColor = randomNumber > 0.5 ? "bg-yellow" : "bg-purple";

  return (
    <div key={props.i} className="p-4 flex flex-col md:flex-row gap-4">
      <div className={clsx(randomColor, props.images && "w-full md:w-[60%]")}>
        <h3 className="text-xl md:text-2xl font-bold mb-4 pl-4">{props.title}</h3>
        <p className="pl-4 text-sm md:text-base">{props.description}</p>
      </div>
      {props.images && (
        <div className="w-full md:w-auto">
          <Image
            src={props.images[0].url}
            alt={props.images[0].name}
            width={250}
            height={220}
            className="object-cover w-full h-auto md:w-[250px] md:h-[220px]"
            priority
          />
        </div>
      )}
    </div>
  );
};

const SectionCarousel = (props: SubItem & { i: number }) => {
  const cards: Card[] =
    props.images?.map((image, i) => ({
      id: i,
      title: image.name,
      image: image.url,
    })) ?? [];

  return (
    <div className="overflow-hidden px-2 md:px-0" key={props.i}>
      <div className={clsx(props.images && "w-full")}>
        <h3 className="text-xl md:text-2xl font-bold mb-4 pl-2 md:pl-4">
          {props.title}
        </h3>
        <p className="text-sm md:text-base pl-2 md:pl-4 text-justify">
          {props.description}
        </p>
      </div>

      {/* viewport del carousel */}
      <div className="mt-6 w-full max-w-full md:max-w-3xl mx-auto overflow-hidden">
        <Carousel data={cards} />
      </div>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto py-8 md:py-12 px-4 md:px-16 space-y-16 md:space-y-32">
      {services.map((service, i) => {
        if ("subItems" in service && service.subItems?.length) {
          return (
            <section key={i} id={`service${i}`}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {service.title}
              </h2>
              {service.subItems.map((subservice, j) => {
                if (subservice.layoutType === "Right") {
                  return <SectionRight {...subservice} i={j} />;
                }
                if (subservice.layoutType === "Left") {
                  return <SectionLeft {...subservice} i={j} />;
                }
                return null;
              })}
            </section>
          );
        }

        if (service.layoutType === "Right") {
          return <SectionRight {...service} i={i} />;
        }
        if (service.layoutType === "Left") {
          return <SectionLeft {...service} i={i} />;
        }
        if (service.layoutType === "Carousel") {
          return <SectionCarousel {...service} i={i} />;
        }

        return null;
      })}
    </main>
  );
}