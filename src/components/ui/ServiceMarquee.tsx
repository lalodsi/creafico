"use client";

import Image from "next/image";
import { services } from "types/services";
import type { Service, SubItem } from "types/services";

export function ServicesMarquee() {
  return (
    <div className="grid grid-cols-2 gap-8 h-[700px] overflow-hidden">
      <MarqueeColumn
        services={services}
        direction="down"
      />

      <MarqueeColumn
        services={services}
        direction="up"
      />
    </div>
  );
}

type ColumnProps = {
  services: Service[];
  direction: "up" | "down";
};

function MarqueeColumn({
  services,
  direction,
}: ColumnProps) {
  return (
    <div className="overflow-hidden group">
      <div
        key={1}
        className={`
          flex flex-col gap-10
          ${
            direction === "up"
              ? "animate-marquee-up"
              : "animate-marquee-down"
          }
          group-hover:[animation-duration:30s]
        `}
      >
        {[...services, ...services].map(
          (service, index) => {
            if (service.subItems && service.subItems.length) {
                return (
                    <div key={index}>
                    {
                        service.subItems.map((subservice, subIndex) => {
                            if (subservice.images && subservice.images.length) {
                                return (
                                    <ServiceCard
                                        key={`${subservice.title}-${subIndex}`}
                                        {...subservice}
                                    />
                                )
                            }
                        })
                    }
                    </div>
                )
            }
            if (service.images && service.images?.length) {
                return (
                    <ServiceCard
                        key={`${service.title}-${index}`}
                        {...service}
                    />
                )
            }
          }
        )}
      </div>
    </div>
  );
}

function ServiceCard({
  title,
  images,
}: Service | SubItem) {
    const image = images![0]!.url
  return (
    <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg">
    <div className="flex flex-col gap-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-center text-lg">
        {title}
        Luis
      </h3>
    </div>
  );
}