import Section from "@/components/common/Section"
import Hero from "@/components/pages/Home/Hero/Hero"
import TrustedCompany from "@/components/pages/Home/TrustedCompany/TrustedCompany"

export default function Page() {
  return (
    <div className="min-h-svh">
      <Hero />
      <Section>
        <TrustedCompany />
      </Section>
    </div>
  )
}
