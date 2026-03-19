import {Container} from "components/ui/Container"
import {Section} from "components/ui/Section"
import {TitleBlock} from "components/ui/TitleBlock"
import {Card} from "components/ui/Card"

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto py-32 px-16">
      <Section>

      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <TitleBlock title="Contacto" />
      <Container >

      <Card>

      <p>Email, formulario, redes, etc.</p>
      </Card>
      </Container>
      </Section>
    </main>
  );
}
