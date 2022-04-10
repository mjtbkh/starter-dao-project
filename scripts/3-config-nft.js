import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x9d0ce70e8F32120b3B1cb47da738cfcB861fe536");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "ConsensusDao Membership",
        description: "This NFT will give you access to ConsensusDAO!",
        image: readFileSync("scripts/assets/consensusdao.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
