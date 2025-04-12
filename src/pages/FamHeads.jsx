// DIFFICULTY: Medium
// Developer: Harrison Tran
// Date Start: 03/27/25
// Date End: [MM/DD/YYYY]

/*
 TODO: Create the FamHeads section for the Luma Fam website.
 Please put images in the assets folder for organization.
 The title is Fam Heads, and there should be an image and text below it.
 Each item in the carousel has this format:

                            IMAGE
                           SUBTITLE
                          DESCRIPTION
*/

import { useState } from "react";
import { Carousel } from "flowbite-react";

import cayz_pfp from "../assets/FamHeads/cayz_pfp.png";
import hailey_pfp from "../assets/FamHeads/hailey_pfp.png";
import janice_pfp from "../assets/FamHeads/janice_pfp.png";
import jerome_pfp from "../assets/FamHeads/jerome_pfp.png";

// Update descriptions later ! and use less pixely images
const famHeadsData = [
  {
    image: cayz_pfp,
    subtitle: "Cayz Paclibar",
    description: "Cayz Description",
  },
  {
    image: hailey_pfp,
    subtitle: "Hailey Guman",
    description: "Hailey Description",
  },
  {
    image: janice_pfp,
    subtitle: "Janice Ho",
    description: "Janice Description",
  },
  {
    image: jerome_pfp,
    subtitle: "Jerome Manarang",
    description: "Jerome Description",
  },
];

export default function FamHeads() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentItem = famHeadsData[currentIndex];

  return (
    <div className="flex flex-col min-h-screen w-full m-auto text-yellow-400 font-bold items-center justify-center">
      <div className="text-2xl mt-4">Meet your Fam Heads!</div>

      <Carousel
        onSlideChange={(index) => setCurrentIndex(index)}
        className="h-100 w-100 mt-6 "
      >
        {famHeadsData.map((item, index) => (
          <img key={index} src={item.image} alt={item.subtitle} />
        ))}
      </Carousel>

      <div className="mt-6 text-lg">{currentItem.subtitle}</div>
      <div className="text-sm text-yellow-300 font-normal">{currentItem.description}</div>
    </div>
  );
}
