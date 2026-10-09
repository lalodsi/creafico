import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { assetUrl } from "types/assets";
import { findServicePage, listServicePages } from "types/services";

type ServicePageProps = {
  params: Promise<{
    serviceId: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return listServicePages().map(({ slug }) => ({
    serviceId: slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { serviceId } = await params;
  const page = findServicePage(serviceId);
  const title = page?.subItem?.title ?? page?.service.title ?? "Servicio";

  return {
    title,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceId } = await params;
  const page = findServicePage(serviceId);

  if (!page) {
    notFound();
  }

  const content = page.subItem ?? page.service;
  const images = content.images ?? [];
  const description = content.description?.trim();

  return (
    <article className="py-8 md:py-12 space-y-8">
      <Link
        href="/services"
        className="inline-block text-sm font-semibold underline underline-offset-4"
      >
        Volver a servicios
      </Link>

      <header className="space-y-4 max-w-3xl">
        {page.subItem && (
          <p className="text-sm font-semibold uppercase tracking-widest">
            {page.service.title}
          </p>
        )}
        <h2 className="text-4xl md:text-5xl font-bold">{content.title}</h2>
        {content.shortDescription && (
          <p className="text-lg leading-8">{content.shortDescription}</p>
        )}
      </header>

      {description && (
        <p className="max-w-3xl text-base md:text-lg leading-8">{description}</p>
      )}

      {images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <figure
              key={`${image.url}-${index}`}
              className="overflow-hidden border-8 border-zinc-300 bg-transparent hover:border-purple transition-all duration-300 flex items-center justify-center"
            >
              <Image
                src={assetUrl(image.url)}
                alt={image.name}
                width={640}
                height={480}
                className="w-full h-auto object-contain hover:scale-105 transition-all duration-300"
                style={{ width: "100%", height: "auto" }}
              />
            </figure>
          ))}
        </div>
      )}
    </article>
  );
}
