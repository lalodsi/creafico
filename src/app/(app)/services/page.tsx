import clsx from "clsx";
import Image from "next/image";
import { SubItem, services } from "types/services";

const SectionRight = (props: SubItem & { i: number }) => {
  const randomNumber = Math.random();
  const randomColor = randomNumber > 0.5 ? "bg-yellow text-in-yellow-bg" : "bg-purple text-in-purple-bg";

  return (
    <div key={props.i} className={clsx("p-4 flex gap-4")}>
      {props.images && (
        <div>
          <Image
            src={props.images[0].url}
            alt={props.images[0].name}
            width={250}
            height={220}
            className="object-cover -z-10"
            priority
          />
        </div>
      )}
      <div className={clsx(randomColor, props.images && "w-[60%]")}>
        <h3 className="text-2xl font-bold mb-4 pl-4">{props.title}</h3>
        <p className="pl-4">{props.description}</p>
      </div>
    </div>
  );
};

const SectionLeft = (props: SubItem & { i: number }) => {
  const randomNumber = Math.random();
  const randomColor = randomNumber > 0.5 ? "bg-yellow" : "bg-purple";

  return (
    <div key={props.i} className={clsx("p-4 flex gap-4")}>
      <div className={clsx(randomColor, props.images && "w-[60%]")}>
        <h3 className="text-2xl font-bold mb-4 pl-4">{props.title}</h3>
        <p className="pl-4">{props.description}</p>
      </div>
      {props.images && (
        <div>
          <Image
            src={props.images[0].url}
            alt={props.images[0].name}
            width={250}
            height={220}
            className="object-cover -z-10"
            priority
          />
        </div>
      )}
    </div>
  );
};

export default function ServicesPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-16 space-y-32">
      {services.map((service, i) => {
        if ("subItems" in service && service.subItems?.length) {
          return (
            <section key={i} id={`service${i}`}>
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              {service.subItems.map((subservice, j) => {
                if (subservice.layoutType === "Right") {
                  return <SectionRight {...subservice} i={j} />;
                }
                if (subservice.layoutType === "Left") {
                  return <SectionLeft {...subservice} i={j} />;
                }
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
      })}
    </main>
  );
}
