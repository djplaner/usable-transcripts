<script lang="ts">
  import { configStore } from "./stores";
  import { parseSubs } from "frazy-parser";

  import "@shoelace-style/shoelace/dist/themes/light.css";
  import "@shoelace-style/shoelace/dist/components/button/button.js";
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

  function processFiles() {
    console.log("---- hello");
    for (const file of files) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        content = reader.result;
        phrases = parseSubs(content);
        console.log(phrases);
      };
    }
    const drawer = document.querySelector(".drawer-overview");
    drawer.show();
    const closeButton = drawer.querySelector('sl-button[variant="primary"]');

    closeButton.addEventListener("click", () => drawer.hide());
  }
</script>

<label for="subFile">Upload Subtitles</label>
<input
  type="file"
  id="subsFile"
  accept=".vtt"
  bind:files
  on:change={processFiles}
/>

  <sl-drawer label="transcript" class="drawer-overview">
    {content}
    <sl-button slot="footer" variant="primary">Close</sl-button>
  </sl-drawer>

<style>
</style>
