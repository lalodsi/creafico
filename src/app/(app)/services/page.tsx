import Image from "next/image";
import Link from "next/link";
import { TitleBlock } from "components/ui/TitleBlock";
import { assetUrl } from "types/assets";
import { servicePath, services } from "types/services";

export default function ServicesPage() {
  return (
    <main className="py-8 md:py-12 space-y-20">
      {services.map((service) => {
        const items = service.subItems?.length
          ? service.subItems.map((subservice) => ({
              id: subservice.id,
              title: subservice.title,
              description: subservice.shortDescription,
              image: subservice.images?.[0],
              href: servicePath(service.id, subservice.id),
            }))
          : [
              {
                id: service.id,
                title: service.title,
                description: service.shortDescription,
                image: service.images?.[0],
                href: servicePath(service.id),
              },
            ];

        return (
          <section key={service.id} id={service.id} className="space-y-8">
            <TitleBlock title={service.title} type="services" />
            <ul
              className={
                items.length > 1 ? "grid gap-6 md:grid-cols-2" : "grid gap-6"
              }
            >
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col overflow-hidden border-4 border-purple bg-white"
                >
                  {item.image && (
                    <div className="relative h-56 bg-transparent">
                      <Image
                        src={assetUrl(item.image.url)}
                        alt={item.image.name}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-4 p-5">
                    {item.title !== service.title && (
                      <h3 className="text-xl md:text-2xl font-bold">
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <p className="text-sm md:text-base leading-7 line-clamp-4">
                        {item.description}
                      </p>
                    )}
                    <Link
                      href={item.href}
                      className="mt-auto inline-block w-fit border border-current px-8 py-3 text-sm font-semibold hover:bg-black hover:text-white hover:border-black transition"
                    >
                      Ver más
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </main>
  );
}
