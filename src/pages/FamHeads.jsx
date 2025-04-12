// DIFFICULTY: Medium

// Developer: Harrison Tran
// Date Start: 03/27/25
// Date End: [MM/DD/YYYY]

/*
 TODO: Create the famheads section for the Luma Fam website.
git 
 Please put images in the assets folder for organization.
 The title is Fam Heads, and there should be an image and text below it.
 Each item in the carousel has this format:

                            IMAGE
                           SUBTITLE
                          DESCRIPTION

*/
import { useState } from "react";
import { Carousel } from "flowbite-react";
import cayz_pfp from "../assets/FamHeads/cayz_pfp.png"
import hailey_pfp from "../assets/FamHeads/hailey_pfp.png"
import janice_pfp from "../assets/FamHeads/janice_pfp.png"
import jerome_pfp from "../assets/FamHeads/jerome_pfp.png"

export default function FamHeads() {
    var subtitle_array = {}
    subtitle_array[0] = "Cayz Paclibar";
    subtitle_array[1] = "Hailey Guman";
    subtitle_array[2] = "Janice Ho";
    subtitle_array[3] = "Jerome Manarang";

    var desc_array = {}
    desc_array[0] = "Cayz Description";
    desc_array[1] = "Hailey Description";
    desc_array[2] = "Janice Description";
    desc_array[3] = "Jerome Description";

    const [currentIndex, setCurrentIndex] = useState(0);
    return (
      <div className="h-56 w-56 m-auto text-yellow-400 font-bold">
            <div className="text-2xl">
              Fam Heads
            </div>
            <Carousel onSlideChange={(index) => setCurrentIndex(index)} className="mt-6">
              <img src={cayz_pfp} alt="..." />
              <img src={hailey_pfp} alt="..." />
              <img src={janice_pfp} alt="..." />
              <img src={jerome_pfp} alt="..." />
            </Carousel>
            
            <div id="subtitle" className="mt-6">{subtitle_array[currentIndex]}</div>
            <div id="description">{desc_array[currentIndex]}</div>
          </div>
    );
  }
  