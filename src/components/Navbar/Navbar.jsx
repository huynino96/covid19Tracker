import React from "react";
import { Layout, Header, Drawer, Navigation, Content } from "react-mdl";

const Navbar = () => {
  return (
    <div>
      <div style={{ height: "500px", position: "relative" }}>
        <Layout
          style={{
            background:
              "url(https://www.parismou.org/sites/default/files/corona_0.jpeg) center / cover",
          }}
        >
          <Header transparent title="Covid-19 Data" style={{ color: "white" }}>
            <Navigation>
              
            </Navigation>
          </Header>
          <Drawer title="Covid-19">
            <Navigation>
              
            </Navigation>
          </Drawer>
          <Content />
        </Layout>
      </div>
    </div>
  );
};

export default Navbar;
