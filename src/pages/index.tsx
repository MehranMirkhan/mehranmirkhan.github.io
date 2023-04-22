import React from "react";

import { MainLayout } from "src/components/Layout";
import Element from "src/components/Element";

export default () => (
  <MainLayout>
    <Element.Segment title="Contact">
      <div className="grid gap-x-10 gap-y-4 lg:grid-cols-2 md:grid-cols-1">
        <Element.LabeledInfo label="Email">
          <a href="mailto:mehran.mirkhan@gmail.com">mehran.mirkhan@gmail.com</a>
        </Element.LabeledInfo>
        <Element.LabeledInfo label="LinkedIn">
          <a href="https://www.linkedin.com/in/mehran-mirkhan/">
            https://www.linkedin.com/in/mehran-mirkhan/
          </a>
        </Element.LabeledInfo>
        <Element.LabeledInfo label="Github">
          <a href="https://github.com/MehranMirkhan/">
            https://github.com/MehranMirkhan/
          </a>
        </Element.LabeledInfo>
      </div>
    </Element.Segment>
  </MainLayout>
);
