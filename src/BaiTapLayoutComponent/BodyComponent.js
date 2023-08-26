import React, { Component } from "react";
import BannerComponent from "./BannerComponent";
import ItemComponent from "./ItemComponent";

export default class BodyComponent extends Component {
  render() {
    return (
      <div>
        <section className="banner py-5">
          <BannerComponent />
        </section>
        <section className="item pt-4">
          <div className="container px-lg-5">
            <div className="row gx-lg-5">
              <ItemComponent />
              <ItemComponent />
              <ItemComponent />
              <ItemComponent />
              <ItemComponent />
              <ItemComponent />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
