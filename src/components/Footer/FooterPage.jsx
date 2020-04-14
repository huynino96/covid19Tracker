import React from "react";
import {
  Footer,
  FooterSection,
  FooterLinkList
} from "react-mdl";

const FooterPage = () => {
  return (
    <Footer size="mini">
    <FooterSection type="left" logo="">
        <FooterLinkList>
            <p>@Collected by Huy Ho</p>
        </FooterLinkList>
    </FooterSection>
</Footer>
  );
};

export default FooterPage;
