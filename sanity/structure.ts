import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Singleton for Homepage
      S.listItem().title("Homepage").child(
        S.editor().id("homepage").schemaType("homepage").documentId("homepage") // Ensures this is a singleton
      ),
      // Add other document types here
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== "homepage"
      ),
    ]);
