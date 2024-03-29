/**
 * Entry point for usable-transcript
 */

/// <reference path="../node_modules/svelte/types/runtime/index.d.ts" />

import UsableTranscript from "./UsableTranscript.svelte";
import { checkContext } from "./lib/CanvasSetup";

// extract some useful context from the URL and the DOM
const context = checkContext();
let app = null;


// should the app be added to the current page?
const SHOW_OBJECTS = ["pages", "modules"];
if (SHOW_OBJECTS.includes(context["currentObject"])) {
  // Insert the app somewhere on the page

  // insert the app as the first content of div.right-of-crumbs
  const rightOfCrumbs = document.querySelector(".right-of-crumbs");
  if (!rightOfCrumbs) {
    throw new Error("div.right-of-crumbs not found");
  }

  // Figure out where on the page you want the app to appear
  const div = document.createElement("div");
  div.className = "usable-transcript";
  div.style.display = "flex";
  rightOfCrumbs.appendChild(div);


  app = new UsableTranscript({
    target: div,
    props: { 
      editMode: context["editMode"],
      courseId: context["courseId"],
      currentObject: context["currentObject"],
      currentDetail: context["currentDetail"],
      csrfToken: context["csrfToken"]
    },
  });

  // make sure we tidy up
  addEventListener("beforeunload", (event) => {
    app.$destroy();
  });
}


export default app;
