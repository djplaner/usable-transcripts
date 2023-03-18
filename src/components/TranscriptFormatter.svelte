<script lang="ts">
  import { onMount } from "svelte/internal";

  import PhraseSelector from "./PhraseSelector.svelte";

  import {
    parseCaptions,
    convertToTranscript,
    downloadWordDoc,
  } from "../lib/TranscriptSupport";
  /*  import { parseSubs } from "frazy-parser";

  import { Document, Packer as docxPacker, Paragraph, TextRun } from "docx";
  import { saveAs } from "file-saver"; */

  import "@shoelace-style/shoelace/dist/themes/light.css";
  import "@shoelace-style/shoelace/dist/components/button/button.js";
  import "@shoelace-style/shoelace/dist/components/icon/icon.js";
  import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";

  import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";
  setBasePath("../node_modules/@shoelace-style/shoelace/dist/");

  /**
   * @file TranscriptFormatter.svelte
   * @description Svelte component providing interface for formatting a transcript
   * @property {Array} phrases - array of phrases from the captions file
   */

  export let captions;

  let transcriptDialog = null;
  let phrases = null;
  let transcript = null;
  let fullstop : boolean = true;
  let pause = 0;

  let data = [
    { country: "China", population: 1439324 },
    { country: "India", population: 1380004 },
    { country: "United States of America", population: 331003 },
    { country: "Indonesia", population: 273524 },
    { country: "Pakistan", population: 220892 },
    { country: "Brazil", population: 212559 },
    { country: "Nigeria", population: 206140 },
    { country: "Bangladesh", population: 164689 },
    { country: "Russian Federation", population: 145934 },
    { country: "Mexico", population: 128933 },
  ];

  phrases = parseCaptions(captions);
  transcript = convertToTranscript(phrases, pause, fullstop);

  onMount(async () => {
    transcriptDialog = document.querySelector(".transcript-overview");
    if (transcriptDialog) {
      console.log("found transcript dialog");
      transcriptDialog.show();
    } else {
      console.log("no transcript dialog");
    }
    const closeButton = transcriptDialog.querySelector(
      'sl-button[variant="primary"]'
    );
    /*    if (closeButton) {
      closeButton.addEventListener("click", () => transcriptDialog.hide());
    } */
    // Use frazy-parser to translate captions into phrases
  });

  function closeTranscript() {
    console.log("Close button hit");
    captions = "";
  }

  function wordDoc() {
    console.log("Word doc button hit");
    downloadWordDoc("someFile.docx", transcript);
  }

  function copyToClipBoard() {
    const copyText = document.getElementById("usable-transcript");
    navigator.clipboard.writeText(copyText.innerText);
    alert(`Copied ${copyText.innerText.length} characters to clipboard`);
  }
</script>

<sl-dialog label="transcript" class="transcript-overview">

  <input type=checkbox id="fullstop-checkbox" 
      bind:checked={fullstop}
	  on:change={() => transcript = convertToTranscript(phrases, pause, fullstop)}
  />
  <label for="fullstop-checkbox">Paragraph ends with sentence end</label> 

<PhraseSelector phrases={phrases} /> 

  <h1>Transcript</h1>

  <div id="usable-transcript">
    {@html transcript}
  </div>

  <h1>Captions</h1>

  {captions}
  <sl-button
    slot="footer"
    on:click|stopPropagation={copyToClipBoard}
    on:keydown|stopPropagation={copyToClipBoard}
    >HTML &gt; clipboard
  </sl-button>

  <!--
	  <sl-button
    slot="footer"
	on:click|stopPropagation={() => wordDoc()}
	on:keydown|stopPropagation={() => wordDoc()}
    >Word doc</sl-button
  >
-->
  <!--</sl-button>    on:keydown|stopPropagation={() => downloadWordDoc("someFile.docx", transcript)}
    on:keydown|stopPropagation={() => downloadWordDoc("someFile.docx", transcript)} -->
  <sl-button
    slot="footer"
    variant="primary"
    on:keydown|stopPropagation={() => closeTranscript()}
    on:click|stopPropagation={() => closeTranscript()}>Close</sl-button
  >
</sl-dialog>

<style>
  .transcript-overview {
    --width: 75vw;
  }
</style>
