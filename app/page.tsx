import Section from "@/components/common/Section"
import Cta from "@/components/pages/Home/Cta/Cta"
import Feature from "@/components/pages/Home/Feature/Feature"
import Hero from "@/components/pages/Home/Hero/Hero"
import Setup from "@/components/pages/Home/Setup/Setup"
import TrustedCompany from "@/components/pages/Home/TrustedCompany/TrustedCompany"

export default function Page() {
  return (
    <div className="min-h-svh">
      <Hero />
      <Section>
        <TrustedCompany />
      </Section>
      <Section>
        <Feature />
      </Section>
      <Section>
        <Setup />
      </Section>
      <Section>
        <Cta />
      </Section>
    </div>
  )
}
