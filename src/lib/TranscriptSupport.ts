import { parseSubs } from "frazy-parser";

import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

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

export function parseCaptions(captions) {
  let phrases = parseSubs(captions);
  calculatePauseDurations(phrases);
  return phrases;
}

/**
 * @function convertToTranscript
 * @param {Array} phrases - array of phrases from the captions file
 * @returns {String} transcript - HTML version of transcript with paragraphs given by pauses
 * phrase objects now contain pause
 */

export function convertToTranscript(phrases, paragraphPause = 0) {
  let transcript = "<p>";

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
  return transcript;
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
export function downloadWordDoc(fileName, transcript) {
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
  console.log("--------- document");
  console.log(doc);

  saveDocumentToFile(doc, fileName);
}

async function saveDocumentToFile(doc, fileName) {
  // Create new instance of Packer for the docx module
  /*  const packer = new Packer();
  console.log(packer);
  let getMethods = (obj) =>
    Object.getOwnPropertyNames(obj).filter(
      (item) => typeof obj[item] === "function"
    );
  console.log(getMethods(packer)); */
  // Create a mime type that will associate the new file with Microsoft Word
  const mimeType =
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  // Create a Blob containing the Document instance and the mimeType
  //Packer.toBlob(doc)

  const docblob = await Packer.toBlob(doc);
  console.log("blob generated")
  console.log(docblob);
/*  Packer.toBase64String(doc)
    .then((blob) => {
      console.log("generated blob");
      const docblob = blob.slice(0, blob.size, mimeType);
      // Save the file using saveAs from the file-saver package
      //saveAs(docblob, fileName);
      console.log(docblob);
    })
    .catch((err) => {
      console.log(`some error - ${err}`);
    }); */
	console.log("Packaer has been called")
}
