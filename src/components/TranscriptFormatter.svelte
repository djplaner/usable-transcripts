<script lang="ts">
  import { onMount } from "svelte/internal";

  import ClipBoard from "svelte-clipboard";

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

  phrases = parseCaptions(captions);
  transcript = convertToTranscript(phrases);

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
</script>

<sl-dialog label="transcript" class="transcript-overview">
  {@html transcript}

  <h1>Captions</h1>
  {captions}

  <ClipBoard
    slot="footer"
    text={transcript}
    let:copy
    on:copy={() => {
      alert("Copied to clipboard!");
    }}
  >
    <sl-button
      on:click|stopPropagation={copy}
      on:keydown|stopPropagation={copy}
      >HTML &gt; clipboard
    </sl-button>
  </ClipBoard>

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
