<script lang="ts">
  import { configStore } from "./stores";
  import { parseSubs } from "frazy-parser";

  import "@shoelace-style/shoelace/dist/themes/light.css";
  import "@shoelace-style/shoelace/dist/components/button/button.js";
  import "@shoelace-style/shoelace/dist/components/icon/icon.js";
  import "@shoelace-style/shoelace/dist/components/drawer/drawer.js";

  import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";
  setBasePath("../node_modules/@shoelace-style/shoelace/dist/");

  export let courseId: number;
  export let editMode: boolean;
  export let csrfToken: string;
  export let currentPage: string;

  $configStore = {
    courseId: courseId,
    editMode: editMode,
    csrfToken: csrfToken,
    currentPage: currentPage,
  };

  let files;
  let content;
  let phrases;
  let transcript;


  /**
   * @function processFiles
   * @description Called when a file is selected, assumes a captions file and parses it
   * @todo 
   * - Check if file is actually captions and handle it
   * - provide mechanism to modify paragraph space
   * - export to word doc or some such?
   */
  function processFiles() {
    for (const file of files) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        let fileContent = reader.result;
        // set phrases to the parsed subs data structure
        phrases = parseSubs(fileContent);
        transcript = convertToTranscript(phrases);
        content = transcript;
      };
    }
    const drawer = document.querySelector(".drawer-overview");
    drawer.show();
    const closeButton = drawer.querySelector('sl-button[variant="primary"]');

    closeButton.addEventListener("click", () => drawer.hide());
  }

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
    let transcript = "";
    phrases.forEach((phrase) => {
      // loop thu any body elements
      phrase.body.forEach((body) => {
        // add the text to the transcript
        transcript += body.text + " ";
      });
    });
    return transcript;
  }
</script>

<div class="usable-file">
  <input
    type="file"
    class="usable-file-selector"
    id="subsFile"
    accept=".vtt, .srt"
    bind:files
    on:change={processFiles}
  />
  <label for="subsFile">🇨‌🇨‌ &gt; transcript</label>
</div>

<sl-drawer label="transcript" class="drawer-overview">
  {content}
  <sl-button slot="footer" variant="primary">Close</sl-button>
</sl-drawer>


<style>
  .usable-file-selector {
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
    position: absolute;
  }

  .usable-file label {
    display: inline-block;
    padding: 8px 14px;
    color: #2d3b45;
    background-color: #f5f5f5;
    border-color: #c7cdd1;
    /*border: 1px solid; */
    border-radius: 3px;
    cursor: pointer;
    line-height:20px;
    text-align:center;
    vertical-align: middle;
    margin-bottom: 0;
  }
</style>
