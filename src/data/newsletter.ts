export type NewsletterLink = {
  label: string;
  href: string;
};

export type NewsletterItem = {
  id: string;
  title: string;
  date?: string;
  snippet: string;
  image: string;
  imageAlt: string;
  links: NewsletterLink[];
};

export const newsletterItems: NewsletterItem[] = [
  {
    id: "iso-certification",
    title: "ABI Manufacturing Achieves ISO 9001 & 14001 Certification",
    snippet:
      "ABI Manufacturing Int Co., Ltd. has been certified by Bureau Veritas to ISO 9001:2015 and ISO 14001:2015. The certifications cover manufacturing and trading of precious metal alloys and master alloys for the jewelry industry.",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1766271400/abimetals/logo/partners/iso-logo.png",
    imageAlt: "Bureau Veritas ISO 9001 and ISO 14001 certification logo",
    links: [
      {
        label: "ISO 9001",
        href: "https://drive.google.com/file/d/19omyi55izQX_BNAiWTL7DeBDSovsZOS6/view?usp=sharing",
      },
      {
        label: "ISO 14001",
        href: "https://drive.google.com/file/d/19eFnnW4b-1AF6ywPRqB9OBG7BJdYsAYE/view?usp=sharing",
      },
    ],
  },
  {
    id: "progold-acquires-abi",
    title: "Progold acquires ABI Manufacturing International Ltd",
    date: "May 2025",
    snippet:
      "ABI Manufacturing International Ltd becomes part of Progold S.p.A. ABI Manufacturing International Ltd is now part of Progold S.p.A., an Italian company internationally recognised for its leadership in precious metal alloys and advanced additive technologies for the jewellery industry...",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1748515356/abimetals/newsletter/progold-abi.jpg",
    imageAlt: "Progold and ABI Manufacturing partnership",
    links: [
      {
        label: "Read More",
        href: "/progold-acquires-abi-manufacturing-international-ltd",
      },
    ],
  },
  {
    id: "innovative-jewelry-alloy-products",
    title: "Innovative Jewelry Alloy Products",
    date: "February 2025",
    snippet:
      "ABI offers brass/bronze alloys for affordable jewelry, including new 696 brass. Try our de-ox sterling alloys for superior casting and tarnish resistance. Discover Allura Gold—low-cost blends with platinum, palladium & silver. Recycle clean scrap with ABI’s program. RJC-certified green production.",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/c_crop,w_630,h_400/r_30/v1716405041/abimetals/logo/logo-emblem-large.png",
    imageAlt: "ABI Manufacturing logo emblem",
    links: [
      {
        label: "Read more",
        href: "/innovative-jewelry-alloy-products-february-2025",
      },
    ],
  },
  {
    id: "corporate-social-responsibility",
    title: "Coporate Social Responsibility",
    date: "June 2023",
    snippet:
      "ABI Manufacturing International's business principle focuses on sustainable growth by benefiting Thai society. Through projects like \"For Younger Brothers and Sisters,\" the company enhances local schools with improvements and donations, fostering community care and social responsibility among employees",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/r_30/v1716405041/samples/people/School_fsjwhb.jpg",
    imageAlt: "ABI corporate social responsibility school project",
    links: [
      {
        label: "Download PDF",
        href: "https://drive.google.com/file/d/1LVu3tS_AaK4k1EB5SU1zN7U-CRFz0byr/view?usp=share_link",
      },
    ],
  },
  {
    id: "abi-newsletter-spring-2023",
    title: "ABI Newsletter",
    date: "Spring 2023",
    snippet:
      "Discover ABI Metals' high-quality jewelry alloy products at the 68th Bangkok Gems Jewelry Fair from September 6-10, 2023, Booth VV44. The newsletter highlights ABI's superior technical support, emphasizing proper casting techniques. Featured alloys include Brass/Bronze, Sterling De-Ox, Platinum Sterling, and a new Nickel-Free White Gold Alloy (#850). ABI introduces a Clean Scrap Recycling Program for cost-effective metal recycling.",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1701213783/abimetals/manufacturing/allura-metals-inc-newsletter.jpg",
    imageAlt: "ABI Metals newsletter feature image",
    links: [
      {
        label: "Download PDF",
        href: "https://drive.google.com/file/d/1ivLMVO4dCrJzTl1Jzu-Gz9E8B-TcBNz1/view?usp=share_link",
      },
    ],
  },
  {
    id: "alternative-metals-leader-2019",
    title: "THE ALTERNATIVE METALS LEADER",
    date: "2019",
    snippet:
      "ABI Technical Support Team invites you to visit their booth at the Bangkok Gem and Jewelry Show from February 20-24, 2019, to explore their innovative brass/bronze alloys, patented Alluragold, colored silver options, and advanced sterling wire and platinum sterling products. ABI offers a variety of high-quality, cost-effective metal solutions designed to meet the evolving needs of jewelry manufacturers worldwide.",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/c_crop,w_450,h_550,g_south/v1748452294/abimetals/team/about-abi-manufacturing-int-nop.jpg",
    imageAlt: "ABI Manufacturing International team member",
    links: [
      {
        label: "Download PDF",
        href: "https://drive.google.com/file/d/1cVIw7XSbudsrrCHpJhhKDMR3Wep3S8Lh/view",
      },
    ],
  },
];
