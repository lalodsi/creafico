import { SubItem, services } from "types/services";

type ServicePageProps = {
    params: Promise<{
        serviceId: string
    }>
}

export async function generateStaticParams() {

    const servicesMapped = await services.map((service) => {
        return service.title
    })
    console.log("Servicios mapeados: ", servicesMapped);
    

    // hardcoded for avoid testing services mapped
    return [
        { serviceId: 'Luis' },
        { serviceId: '2' },
        { serviceId: '3' },
    ]

}

export default async function ServicePage({ params }: ServicePageProps) {
    const { serviceId } = await params;
    return (
        <div>
            <h1>Service Page : {serviceId}</h1>
        </div>
    )
}