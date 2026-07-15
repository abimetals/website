export type ProductLink = {
  label: string;
  href: string;
};

export type NewProduct = {
  slug: string;
  title: string;
  listingSubheading: string;
  snippet: string;
  image: string;
  links: ProductLink[];
  content: string;
};

export const newProducts: NewProduct[] = [
  {
    slug: "sterilite-spring-hard-de-ox-sterling",
    title: "Sterilite Spring Hard De-Ox Sterling",
    listingSubheading: "New Products",
    snippet: "For more information, click the links below:",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1701195931/abimetals/products/Spring-Hard-De-Ox-375-275.jpg",
    links: [
      {
        label: "Hard De-Ox Sterling",
        href: "https://drive.google.com/file/d/1L-2cPyNS-UtExeM_kE56ljntj4YNJcjX/view",
      },
      {
        label: "Casting Tips",
        href: "https://drive.google.com/file/d/1_RgjKz4mfco-4VE1b8t1o4IjBJnKpn89/view?usp=share_link",
      },
    ],
    content: `ABI Manufacturing International’s Spring Hard De-Ox Sterling has extreme hardness/spring properties. It’s suitable for casting, sheet, wire, and tubing applications. Browse technical data on all of our Sterilite De-Ox Sterling products.
For more information on our Sterilite Spring Hard De-Ox Sterling.

Phone: 662-150-6711`,
  },
  {
    slug: "nickel-free-white-bronze",
    title: "Nickel Free White Bronze",
    listingSubheading: "New Products",
    snippet: "For technical data, click the links below:",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/v1701197467/abimetals/products/Nickel-Free-White-Bronze-375-275.jpg",
    links: [
      {
        label: "Nickle Free White Bronze",
        href: "https://drive.google.com/file/d/1g4iaMcH6awEdpoQplr3MfNFqhohfIaSv/view?usp=share_link",
      },
      {
        label: "Brass and Bronze Products",
        href: "/products/premium-brass-bronze",
      },
    ],
    content: `Nickel Free White Bronze, a compelling and cost-effective alternative to traditional Sterling silver, meticulously crafted to meet the highest standards. This nickel-free alloy not only provides an affordable option but also boasts distinctive casting properties that set it apart from conventional Sterling. This innovation caters to the discerning preferences of retailers seeking to steer clear of nickel products, offering a brilliant white color that seamlessly aligns with the latest market trends. Elevate your jewelry creations with the unique charm and unmatched versatility of our White Bronze, where affordability meets exceptional quality.
For more information on our Nickel Free White Bronze.

Phone: 662-150-6711`,
  },
  {
    slug: "elite-silver-white-gold-alternative",
    title: "Elite Silver White Gold Alternative",
    listingSubheading: "New Products",
    snippet: "For more information, click the links below:",
    image:
      "https://res.cloudinary.com/dkbf7tvcx/image/upload/w_375,h_275/v1701186472/abimetals/products/950-bracelet-black2.jpg",
    links: [
      {
        label: "950 Elite Silve Pricing",
        href: "https://drive.google.com/file/d/1EXmvohaSj0Cj3tW27igA-rIhQwWCyyU1/view",
      },
      {
        label: "950 Elite Technical Data",
        href: "https://drive.google.com/file/d/1q3OUGebzCQZS829IqAn0jN0EFV1DWT3j/view",
      },
    ],
    content: `This cutting-edge patent-pending 95% Silver alloy stands out with its brilliant white hue, expertly enriched with Palladium and Gold. The infusion of these premium elements not only elevates its aesthetic appeal but also imparts remarkable tarnish-resistant properties akin to those found in 10K Gold. Experience the allure of this meticulously crafted Sterling Silver alloy, where innovation meets timeless elegance.
For more information on our Elite Silver White Gold Alternative.

Phone: 662-1506-711`,
  },
];

export function getNewProduct(slug: string) {
  return newProducts.find((product) => product.slug === slug);
}
