import Container from "@/components/common/Container"
import SectionHeader from "@/components/common/SectionHeader"
import FeatureGrid from "./FeatureGrid"

const Feature = () => {
  return (
    <div className="">
      <Container>
        <div className="py-24">
          <SectionHeader
            subTitle="Why teams switch"
            title="One knowledge base. Every answer."
            desc="Stop maintaining a macro library. Upload what you already have and let it do the talking."
          />
          <div className="mt-14">
            <FeatureGrid />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Feature
