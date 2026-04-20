"use client"
import clsx from "clsx";
import { Card, Home as Carousel } from "components/ui/Carousel";
import Image from "next/image";
import { SubItem, services } from "types/services";
import { useState } from "react";

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

const SectionHoverExpand = (props: SubItem & { i: number }) => {
  const items = props.images ?? [];

  return (
    <div className="px-2 md:px-0" key={props.i}>
      <h3 className="text-xl md:text-2xl font-bold mb-4 pl-2 md:pl-4">
        {props.title}
      </h3>

      <p className="text-sm md:text-base pl-2 md:pl-4 mb-6">
        {props.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((img, i) => (
          <div
            key={i}
            className="group relative h-[180px] md:h-[220px] overflow-hidden rounded-xl cursor-pointer"
          >
            {/* imagen */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${img.url})` }}
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60" />

            {/* contenido */}
            <div className="absolute bottom-0 p-4 text-white transform transition-all duration-500 group-hover:-translate-y-2">
              <h4 className="font-bold text-lg">{img.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SectionMasonry = (props: SubItem & { i: number }) => {
  const items = props.images ?? [];

  return (
    <div className="px-2 md:px-0" key={props.i}>
      <h3 className="text-xl md:text-2xl font-bold mb-4 pl-2 md:pl-4">
        {props.title}
      </h3>

      <p className="text-sm md:text-base pl-2 md:pl-4 mb-6">
        {props.description}
      </p>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {items.map((img, i) => (
          <div
            key={i}
            className="break-inside-avoid rounded-xl overflow-hidden"
          >
            <div
              className="w-full h-[200px] md:h-[250px] bg-cover bg-center hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${img.url})` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const SectionGrid = (props: SubItem & { i: number }) => {
  const items = props.images ?? [];

  return (
    <div className="px-2 md:px-0" key={props.i}>
      <h3 className="text-xl md:text-2xl font-bold mb-4 pl-2 md:pl-4">
        {props.title}
      </h3>

      <p className="text-sm md:text-base pl-2 md:pl-4 mb-6">
        {props.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((img, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden bg-zinc-900/5 hover:bg-zinc-900/10 transition-colors duration-300"
          >
            <div
              className="w-full h-[180px] md:h-[200px] bg-cover bg-center"
              style={{ backgroundImage: `url(${img.url})` }}
            />

            <div className="p-4">
              <h4 className="font-semibold text-base md:text-lg mb-2">
                {img.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SectionTabs = (props: SubItem & { i: number }) => {
  const items = props.images ?? [];
  const [active, setActive] = useState(0);

  return (
    <div className="px-2 md:px-0" key={props.i}>
      <h3 className="text-xl md:text-2xl font-bold mb-4 pl-2 md:pl-4">
        {props.title}
      </h3>

      <p className="text-sm md:text-base pl-2 md:pl-4 mb-6">
        {props.description}
      </p>

      {/* tabs */}
      <div className="flex overflow-x-auto gap-2 mb-6 px-2 md:px-4">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={clsx(
              "whitespace-nowrap px-4 py-2 rounded-full text-sm transition",
              active === i
                ? "bg-black text-white"
                : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300"
            )}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* contenido */}
      {items[active] && (
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="w-full md:w-1/2">
            <div
              className="w-full h-[220px] md:h-[300px] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${items[active].url})` }}
            />
          </div>

          <div className="w-full md:w-1/2">
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              {items[active].name}
            </h4>
            <p className="text-sm md:text-base text-zinc-600">
              {/* puedes extender tu modelo para meter descripción aquí */}
              Información del servicio seleccionado.
            </p>
          </div>
        </div>
      )}
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
                if (subservice.layoutType === "Carousel") {
                  return <SectionCarousel {...subservice} i={j} />;
                }
                if (subservice.layoutType === "HoverExpand") {
                  return <SectionHoverExpand {...subservice} i={j} />;
                }
                if (subservice.layoutType === "Masonry") {
                  return <SectionMasonry {...subservice} i={j} />;
                }
                if (subservice.layoutType === "Grid") {
                  return <SectionGrid {...subservice} i={j} />;
                }
                if (subservice.layoutType === "Tabs") {
                  return <SectionTabs {...subservice} i={j} />;
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
        if (service.layoutType === "HoverExpand") {
          return <SectionHoverExpand {...service} i={i} />;
        }
        if (service.layoutType === "Masonry") {
          return <SectionMasonry {...service} i={i} />;
        }
        if (service.layoutType === "Grid") {
          return <SectionGrid {...service} i={i} />;
        }
        if (service.layoutType === "Tabs") {
          return <SectionTabs {...service} i={i} />;
        }

        return null;
      })}
    </main>
  );
}