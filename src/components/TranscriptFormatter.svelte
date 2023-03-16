<script lang="ts">
  import { onMount } from "svelte/internal";
  import { parseSubs } from "frazy-parser";

  import { Document, Packer as docxPacker, Paragraph, TextRun  } from "docx";
  import { saveAs } from "file-saver";

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

  let drawer = null;
  let phrases = null;
  let transcript = null;

  onMount(async () => {
    drawer = document.querySelector(".transcript-overview");
    drawer.show();
    const closeButton = drawer.querySelector('sl-button[variant="primary"]');
    if (closeButton) {
      closeButton.addEventListener("click", () => drawer.hide());
    }
    // Use frazy-parser to translate captions into phrases
    phrases = parseSubs(captions);
    convertToTranscript(phrases);
  });

  /**
   * @function convertToTranscript
   * @param {Array} phrases - array of phrases from the captions file
   * @returns {String} transcript - the transcript
   * @description Converts the phrases array to a transcript
   * At this stage a single joined string.
   *
   * Each phrase is an object with the following properties:
   * - start: number - the start time in seconds/milliseconds
   * - stop: number - the stop time in seconds/milliseconds
   * - body: Array - an array of dictionaries, each dictionary has the following properties:
   *  - text: string - the text of the phrase
   *
   */

  function convertToTranscript(phrases) {
    let durations = calculatePauseDurations(phrases);
    convertCaptionsToTranscript(phrases);
  }

  /**
   * @function convertCaptionsToTranscript
   * @param {Array} phrases - array of phrases from the captions file
   * @returns {String} transcript - HTML version of transcript with paragraphs given by pauses
   * phrase objects now contain pause
   */

  function convertCaptionsToTranscript(phrases, paragraphPause = 0) {
    transcript = "<p>";

    phrases.forEach((phrase) => {
      // loop thu any body elements
      let phraseText = "";
      phrase.body.forEach((body) => {
        // add the text to the transcript
        phraseText += body.text + " ";
      });
      if (phrase.pause > paragraphPause) {
        transcript += "</p><p>";
      }
      transcript += phraseText;
    });
  }

  /**
   * @function calculatePauseDurations
   * @param phrases
   * @description Add a pause property to each phrase that has a preceeding
   * phrase. Indicating how long a pause apparently between each
   *
   * TODO
   * - is there ever a situation when the body of the phrase has multiple entries?
   */
  function calculatePauseDurations(phrases) {
    // TODO pauseDurations largely used for debugging/dev - to be removed
    let pauseDurations = [];
    for (let i = 0; i < phrases.length; i++) {
      let phrase = phrases[i];
      let nextPhrase = phrases[i + 1];
      if (nextPhrase) {
        let pauseDuration = nextPhrase.start - phrase.end;
        pauseDurations.push(pauseDuration);
        nextPhrase.pause = pauseDuration;
      }
    }
    console.log(phrases);
    console.log(pauseDurations);
  }

  /**
   * @function downloadWordDoc
   * @description Download the transcript as a Word document
   */
  function downloadWordDoc() {
    let doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun("Hello World"),
                new TextRun({
                  text: "Foo Bar",
                  bold: true,
                }),
                new TextRun({
                  text: "\tGithub is the best",
                  bold: true,
                }),
              ],
            }),
          ],
        },
      ],
    });

    saveDocumentToFile(doc, "transcript.docx");
  }

  function saveDocumentToFile(doc, fileName) {
    // Create new instance of Packer for the docx module
    const packer = new docxPacker();
	console.log(packer)
	let getMethods = (obj) => Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function')
	console.log(getMethods(packer))
    // Create a mime type that will associate the new file with Microsoft Word
    const mimeType =
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    // Create a Blob containing the Document instance and the mimeType
    packer.toBlob(doc).then((blob) => {
      const docblob = blob.slice(0, blob.size, mimeType);
      // Save the file using saveAs from the file-saver package
      saveAs(docblob, fileName);
    });
  }
</script>

<sl-dialog label="transcript" class="transcript-overview">
  {@html transcript}

  <h1>Captions</h1>
  {captions}
  <sl-button
    slot="footer"
    on:keydown={downloadWordDoc()}
    on:click={downloadWordDoc()}>Word doc</sl-button
  >
  <sl-button
    slot="footer"
    variant="primary"
    on:keydown={drawer.hide()}
    on:click={drawer.hide()}>Close</sl-button
  >
</sl-dialog>

<style>
  .transcript-overview {
    --width: 75vw;
  }
</style>
