import React from "react";

const CallToAction = () => {
  return (
    <div class="my-5">
      <div class="p-5 text-center bg-body-tertiary">
        <div class="container py-5">
          <h1 class="text-body-emphasis">Full-width jumbotron</h1>
          <p class="col-lg-8 mx-auto lead">
            This takes the basic jumbotron above and makes its background
            edge-to-edge with a <code>.container</code> inside to align content.
            Similar to above, it's been recreated with built-in grid and utility
            classes.
          </p>
          <button class="btn btn-primary px-5 mb-5" type="button">
            Call to action
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
