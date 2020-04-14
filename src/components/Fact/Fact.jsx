import React from "react";
import {
  Card,
  CardActions,
  CardMenu,
  CardText,
  CardTitle,
  Button,
  IconButton,
} from "react-mdl";

const Fact = () => {
  return (

    <div>
    <Card shadow={0} style={{ width: "auto", margin: "auto" }}>
      <CardTitle
        style={{
          color: "#fff",
          height: "500px",
          background:
            "url(https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2020/2/26/95d3056d580c43bdb53c4f328155a590_18.jpg) center / cover",
        }}
      >
        Facts
      </CardTitle>
      <CardText>
        <b>The 2019–20 coronavirus pandemic is an ongoing pandemic of coronavirus disease 2019 (COVID-19), 
            caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2)</b><br/><br/>
        <p>The virus is usually spread from one to another via small drops made when coughing or sneezing.
            It mostly spreads when people are close to each other. However, it can also spread when people touch a surface with the virus, and then coninue their face. 
            Common symptoms include fever, cough, and shortness of breath. <br/><br/> Complications may include pneumonia and acute respiratory distress syndrome. 
            There is currently no vaccine or specific antiviral medicine for COVID-19.</p>
      </CardText>
      <CardMenu style={{ color: "#fff" }}>
        <IconButton name="share" />
      </CardMenu>
    </Card>
    </div>
  );
};

export default Fact;

{/* <div class="card" style={{width: "25rem"}}>
        <img
          class="card-img-top"
          src="https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2020/2/26/95d3056d580c43bdb53c4f328155a590_18.jpg"
          alt=""
        />
        <div class="card-body">
        <h4 class="card-title">Fact</h4>
          <p class="card-text">
            <b>
              This website is built to collect the data about Corana Virus
              Disease
              <br />
              Provided the data of: Infected, Recorevered and Deaths
            </b>
          </p>
        </div>
      </div> */}