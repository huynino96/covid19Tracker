import React from "react";
import {
  Hero,
  Heading,
  Subhead,
  Flex,
  CallToAction,
  ScrollDownIndicator,
} from "react-landing-page";

const HeroPage = () => {
  return (
    <Hero
      color="white"
      backgroundImage="https://www.puertodeportivomarinainternacional.com/wp-content/uploads/2020/03/el-covid-19-frente-a-la-gripe-y-otros-coronavirus-ojo-a-las-comorbilidades-8526.jpg"
      bg="black"
      bgOpacity={0.5}
    >
      <Heading>Covid-19 Data Collector</Heading>
      <br/><br/>
      <Subhead fontSize={[2, 3]}>Collecting Data of Covid-19</Subhead>
      {/* <Flex mt={3}>
        <CallToAction bg="grey" mr={3}>
          Secondary Action
        </CallToAction>
        <CallToAction>Primary Action</CallToAction>
      </Flex> */}
      <ScrollDownIndicator />
    </Hero>
  );
};

export default HeroPage;
