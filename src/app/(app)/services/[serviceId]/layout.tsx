
export default async function ServicePage({
    params,
  }: {
    params: { serviceId: string }
  }) {
    const { serviceId } = await params;
    return (
      <section className="max-w-6xl mx-auto px-0 py-12">
        <header className="">
          <h1 className="text-5xl font-bold mb-4">Servicio: {serviceId}</h1>
        </header>
  
      </section>
    );
  }
  