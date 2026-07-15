export type TechTip = {
  slug: string;
  title: string;
  subheading: string;
  snippet: string;
  image: string;
  imageAlt: string;
  download?: {
    label: string;
    href: string;
  };
  phone?: string;
  videoUrl?: string;
  content: string;
  contentImage?: {
    src: string;
    alt: string;
  };
};

export const techTips: TechTip[] = [
  {
    slug: "casting-stones-in-place",
    title: "Casting Stones In Place",
    subheading: "Tech Tips",
    snippet: "Method for casting stones using Boric Acid",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/c_crop,w_630,h_400/r_30/v1716405041/abimetals/logo/logo-emblem-large.png",
    imageAlt: "ABI Manufacturing emblem",
    download: {
      label: "Method for casting stones using Boric Acid",
      href: "https://drive.google.com/file/d/1APYBkfdTBhOdCk4sBObjSsosToamybpH/view?usp=share_link",
    },
    content:
      "Learn ABI’s method for casting stones in place using Boric Acid. Download the tech tip PDF for the full process and recommendations.",
  },
  {
    slug: "brass-and-bronze-alloy-casting",
    title: "Brass and Bronze Alloy Casting",
    subheading: "Brass and Bronze Alloy Casting",
    snippet:
      "Brass and Bronze alloys are a great low cost alternative to create more affordable jewelry designs, but your manufacturing process must be modified to achieve good results.",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700298583/abimetals/products/Brass-Bronze-Alloys-Allura-Metals-Inc-new.jpg",
    imageAlt: "Brass and bronze alloy casting grain",
    download: {
      label: "Brass and Bronze Alloy Casting",
      href: "https://drive.google.com/file/d/1v5nUq8qnaY29ZU2V6lZ5_8HF5RyvbnHW/view?usp=sharing",
    },
    content:
      "Brass and Bronze alloys are a great low cost alternative to create more affordable jewelry designs, but your manufacturing process must be modified to achieve good results.\n\nDownload the tech tip for guidance on adjusting your casting process for brass and bronze alloys.",
  },
  {
    slug: "contamination-in-metals",
    title: "Contamination In Metals",
    subheading: "Do you have contamination problems in your metals?",
    snippet:
      "One of the most frustrating problems working with sterling and De-Ox sterling silvers is hard spots and/or micro inclusions in cast pieces of jewelry.\n\nSo how do we find the root of these problems?",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1700249519/abimetals/products/Sterilite-De-Ox-Sterling-Allura-Metals-Inc-New.jpg",
    imageAlt: "Sterilite De-Ox Sterling silver casting quality",
    download: {
      label: "Contamination in Metals",
      href: "https://drive.google.com/file/d/1v5SumSjCrrJj886OPAPNjQxNOCwA5n6m/view?usp=share_link",
    },
    content:
      "Do you have contamination problems in your metals?\n\nOne of the most frustrating problems working with sterling and De-Ox sterling silvers is hard spots and/or micro inclusions in cast pieces of jewelry.\n\nSo how do we find the root of these problems?\n\nDownload the tech tip to learn how to identify and address contamination issues in your metals.",
  },
  {
    slug: "metal-casting-tutorial",
    title: "Metal Casting Tutorial",
    subheading: "Tech Tips",
    snippet:
      "If you need help casting any of our products, we’re happy to help. Give us a call at 662-150-6711.",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1715006977/abimetals/manufacturing/ABI-Metals-Int-Ltd-Innovative-Alloy-Silver-Brass-Bronze-Gold-Sterling-Platinum-Palladium-Manufacturing.jpg",
    imageAlt: "ABI alloy manufacturing and casting",
    phone: "662-150-6711",
    videoUrl: "https://www.youtube.com/embed/cXFw1DF6IbI?rel=0",
    content:
      "If you need help casting any of our products, we’re happy to help. Give us a call at 662-150-6711.\n\nWatch the metal casting tutorial below for a visual overview of the process.",
  },
];

export function getTechTip(slug: string) {
  return techTips.find((tip) => tip.slug === slug);
}
