<script lang="ts">
  import { onMount } from "svelte/internal";

  //  import PhraseSelector from "./PhraseSelector.svelte";

  import {
    parseCaptions,
    convertToTranscript,
    //downloadWordDoc,
  } from "../lib/TranscriptSupport";
  /*  import { parseSubs } from "frazy-parser";

  import { Document, Packer as docxPacker, Paragraph, TextRun } from "docx";
  import { saveAs } from "file-saver"; */

  import "@shoelace-style/shoelace/dist/themes/light.css";
  import "@shoelace-style/shoelace/dist/components/button/button.js";
  import "@shoelace-style/shoelace/dist/components/icon/icon.js";
  import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";
  import "@shoelace-style/shoelace/dist/components/range/range.js";

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
  let fullstop: boolean = true;
  let pauseDuration = 0;
  let uniqueDurations = null;
  let pauseDurations = null;
  let maxPause = 0;
  let whichPause = 1;

  phrases = parseCaptions(captions);
  // create array of dicts { pause: length, phraseCount: count}
  uniqueDurations = calculateDurations(phrases);
  // get pauseDurations from the keys of the uniqueDurations
  pauseDurations = Object.keys(uniqueDurations);
  // sort pauseDurations into ascending order
  pauseDurations.sort((a, b) => a - b);
  maxPause = Math.max.apply(null, pauseDurations);
  transcript = convertToTranscript(phrases, pauseDuration, fullstop);

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
    // add the formatter for the range
    const pauseRange = document.querySelector(".transcript-range");
    pauseRange.tooltipFormatter = (value) => rangeTooltipFormat(value);
  });

  function rangeTooltipFormat(value) {
    const duration = pauseDurations[value];

    if (uniqueDurations.hasOwnProperty(duration)) {
      return `Pause: ${duration} # phrases: ${uniqueDurations[duration]}`;
    } else {
      console.log(`no key ${duration} in uniqueDurations`);
    }
  }
  function closeTranscript() {
    console.log("Close button hit");
    captions = "";
  }

  function wordDoc() {
    console.log("Word doc button hit");
    //downloadWordDoc("someFile.docx", transcript);
  }

  function copyToClipBoard() {
    const copyText = document.getElementById("usable-transcript");
    navigator.clipboard.writeText(copyText.innerText);
    alert(`Copied ${copyText.innerText.length} characters to clipboard`);
  }

  function calculateDurations(phrases) {
    let data = [];
    let pauseDurations = phrases.map((phrase) => phrase.pause);

    let uniqueDurations = [...new Set(pauseDurations)];
    let durations = {};
    uniqueDurations.forEach((duration: string) => {
      let phraseCount = pauseDurations.filter((d) => d === duration).length;
      data.push({ pause: duration, phraseCount: phraseCount });
      durations[duration] = phraseCount;
    });

    return durations;
    // sort uniquemaiDurations into ascending order on pause
    /*    data.sort((a, b) => a.pause - b.pause);
	return uniqueDurations; */
  }

  function changePauseDuration(e) {
    console.log(e);
    const value = e.target.value;
    console.log(`changePauseDuration called with ${value}`);
    pauseDuration = pauseDurations[value];
    transcript = convertToTranscript(phrases, pauseDuration, fullstop);
  }
</script>

<sl-dialog label="cc &gt; transcript" class="transcript-overview">
  <div class="transcript-configuration">
    <div class="transcript-configuration-item">
      <input
        type="checkbox"
        id="fullstop-checkbox"
        bind:checked={fullstop}
        on:change={() =>
          (transcript = convertToTranscript(phrases, pauseDuration, fullstop))}
      />
      <label for="fullstop-checkbox">Paragraph ends with sentence end</label>
    </div>
    <div class="transcript-configuration-item">
      <label for="transcript-range">Pause Duration - {pauseDuration}</label>
      <sl-range
        id="transcript-range"
        class="transcript-range"
        min="0"
        max={pauseDurations.length}
        step="1"
        value={whichPause}
        on:sl-change={changePauseDuration}
        style="--track-color-active: black; --track-color-inactive: grey;"
      />
    </div>
  </div>

  <!-- <PhraseSelector phrases={phrases} />  -->

  <h1>Transcript</h1>

  <div id="usable-transcript">
    {@html transcript}
  </div>

  <!--  <h1>Captions</h1>

  {captions} -->

  <sl-button
    slot="footer"
    on:click|stopPropagation={copyToClipBoard}
    on:keydown|stopPropagation={copyToClipBoard}
    >HTML &gt; clipboard
  </sl-button>

  <!--
  <sl-button
    slot="footer"
    on:click|stopPropagation={wordDoc}
    on:keydown|stopPropagation={wordDoc}>Word doc</sl-button
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

  .transcript-range {
    width: 75%;
  }

  .transcript-configuration {
    background-color: #ffffff;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
</style>
