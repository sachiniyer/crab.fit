import { Suspense } from "react"

import Content from "/src/components/Content/Content"
import CreateForm from "/src/components/CreateForm/CreateForm"
import Footer from "/src/components/Footer/Footer"
import Header from "/src/components/Header/Header"
import Recents from "/src/components/Recents/Recents"
import Section from "/src/components/Section/Section"
import Stats from "/src/components/Stats/Stats"

const Page = async () => {
  return (
    <>
      <Content>
        <Header isFull />
      </Content>

      <Recents />

      <Content>
        <CreateForm />
      </Content>

      <Section id="about">
        <Content>
          <h2>{"Statistics"}</h2>

          <Suspense>
            <Stats />
          </Suspense>
        </Content>
      </Section>

      <Footer />
    </>
  )
}

export default Page
