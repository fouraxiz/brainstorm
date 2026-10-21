export const site = {
  name: "Brainstorm Communications",
  tagline: "Think Ahead, Act Smart.",
  founded: 2013,
  url: "https://brainstormbd.com",
  webmailUrl: "https://hostinger.titan.email/login/",
  email: "imran@brainstormbd.com",
  altEmail: "brainstormdhaka@gmail.com",
  phones: ["+880 1715 373159", "+880 1975 373159"],
  address: {
    line1: "191, KY Plaza, Fakirapool",
    line2: "Motijheel C/A, Dhaka 1000",
    country: "Bangladesh",
  },
  mapQuery: "KY Plaza, Fakirapool, Motijheel, Dhaka 1000, Bangladesh",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  items: string[];
  image: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "woven-labels",
    title: "Woven Labels",
    short: "Quality woven into every detail.",
    description:
      "Woven label manufacturing is one of our core strengths. We deliver premium labels with precise detailing, excellent colour consistency and durable finishing, with ultrasonic, laser and heat cutting for smooth, sealed, fray-free edges.",
    items: [
      "Damask & Taffeta Labels",
      "Satin Woven Labels",
      "Golden & Silver Lurex",
      "Embroidery Woven Labels",
      "Puff Labels",
      "Mid & Meter Folding",
    ],
    image: "/images/woven-labels.jpg",
    icon: "Tag",
  },
  {
    slug: "printed-care-labels",
    title: "Printed & Care Labels",
    short: "Clear care, composition & brand information.",
    description:
      "High-speed multicolour printing on polyester, paper, cotton, canvas and Tyvek. Care labels that combine functionality and durability, from clear care and composition information to barcode and size labels.",
    items: [
      "Care & Composition Labels",
      "Barcode & Size Labels",
      "Satin / Polyester Ribbon",
      "Twill & Cotton Tape",
      "Canvas Fabric Labels",
      "Paper Ribbon",
    ],
    image: "/images/care-labels.jpg",
    icon: "Printer",
  },
  {
    slug: "hang-tags-offset",
    title: "Hang Tags & Offset Printing",
    short: "Tags and tickets that tell your brand story.",
    description:
      "Heidelberg, Fuji and Konica Minolta offset printing with CTP plate making and X-Rite colour matching for hang tags, price tickets, stickers and every paper item a garment needs.",
    items: [
      "Hang Tags & Price Tickets",
      "Hot Stamping & Deboss Tags",
      "PVC & Silicon Hang Tags",
      "Laser-cut Tags",
      "Adhesive Stickers",
      "Paper Hangers & Back Boards",
    ],
    image: "/images/production-items.jpg",
    icon: "Layers",
  },
  {
    slug: "heat-transfer",
    title: "Heat Transfer & Heat Seals",
    short: "Tagless comfort, vibrant finish.",
    description:
      "Premium heat transfer labels applied directly onto fabric for a smooth, tagless experience. Azo and phthalate free, eco-friendly and fully compliant with EU and USA standards. Water-based and solvent-based options available.",
    items: [
      "Screen-printed Transfers",
      "Silicon Heat Transfers",
      "Hologram & Metallic",
      "DTF Heat Transfers",
      "3D High Density Prints",
      "Reflective Heat Seals",
    ],
    image: "/images/al-heat-transfer.jpg",
    icon: "Flame",
  },
  {
    slug: "patches",
    title: "Leather, PU & Silicon Patches",
    short: "Precision craftsmanship for denim and beyond.",
    description:
      "Genuine leather, PU/faux, suede and Jacron patches, embossed, debossed, laser-cut or hot-stamped, plus 2D/3D silicon and PVC patches, crafted to meet EU and USA quality standards.",
    items: [
      "Genuine & PU Leather",
      "Suede / Nubuck",
      "Emboss & Deboss",
      "Jacron Patches",
      "3D Silicon Patches",
      "PVC Rubber Patches",
    ],
    image: "/images/al-leather.jpg",
    icon: "BadgeCheck",
  },
  {
    slug: "packaging",
    title: "Printing & Packaging",
    short: "Packaging that protects and presents.",
    description:
      "Complete packaging support for apparel: printed and plain poly bags (LDPE, PP, HDPE), biodegradable bags, zipper and hanger bags, printed tissue paper, belly bands, gum tape and thermal barcode stickers.",
    items: [
      "Printed Poly Bags",
      "Biodegradable Poly Bags",
      "Zipper & Hanger Bags",
      "Printed Tissue Paper",
      "Gum Tape",
      "Belly Bands & Stickers",
    ],
    image: "/images/al-polybag.jpg",
    icon: "Package",
  },
  {
    slug: "narrow-fabrics",
    title: "Narrow Fabrics & Trims",
    short: "Elastic, cords, tapes and lock strings.",
    description:
      "Drawcord machines (16, 32 & 48 spindle), twill tape, canvas tape and tipping machines produce the trims that finish a garment, alongside premium nylon, polyester and cotton lock strings.",
    items: [
      "Elastic",
      "Drawstring & Drawcord",
      "Twill / Herringbone Tape",
      "Grosgrain Tape",
      "Tipping Cord",
      "Lock Strings & Lock Pins",
    ],
    image: "/images/al-narrow.jpg",
    icon: "Spline",
  },
  {
    slug: "brand-identity",
    title: "Brand Identity & Promotion",
    short: "From your design brief to the finished piece.",
    description:
      "We offer the complete package: initial visuals produced from your design brief through to finished products. Brand identity design and printing, corporate stationery and promotional items for corporate, industrial and apparel clients.",
    items: [
      "Brand Identity Design",
      "Corporate Stationery",
      "Promotional Items",
      "Catalogues & Brochures",
      "Packaging Design",
      "Artwork & Pre-press",
    ],
    image: "/images/letterpress.jpg",
    icon: "Lightbulb",
  },
];

export const team = [
  {
    name: "Shekh Imran Hosen",
    role: "Managing Director",
    note: "Founder whose passion for garments accessories laid the foundation for Brainstorm's journey.",
  },
  {
    name: "Mahida Islam Soma",
    role: "Chairman",
    note: "Leads with a belief in long-term relationships and value delivered on time.",
  },
  {
    name: "Ahmed Badal",
    role: "Chief Creative Consultant",
    note: "Turns brand briefs into labels, tags and packaging that stand out.",
  },
  {
    name: "Atanu Sarma",
    role: "Creative Consultant",
    note: "Brings design know-how across diverse national and overseas categories.",
  },
];

export const clients = [
  "Generation Next Fashions",
  "Auko-Tex Group",
  "Karim Group",
  "Amantex",
  "KSRM",
  "Marp Knit Composite",
  "Holcim",
  "Hawar IT",
  "Nipro JMI",
  "Sahara",
  "Mir Group",
  "Union",
  "Premier Bank",
  "Modern",
  "Fresh",
];

export const brands = [
  "ZARA",
  "PRIMARK",
  "Pull&Bear",
  "Bershka",
  "Lefties",
  "Lidl",
  "Esmara",
  "Livergy",
  "Lupilu",
  "Joma",
  "Kenneth Cole",
  "DKNY",
  "TK Maxx",
  "Ben Sherman",
  "C&A",
  "Li & Fung",
  "Coppel",
  "Ross",
  "Giordano",
  "Takko",
  "NKD",
  "Alcott",
];

export const stats = [
  { value: 13, suffix: "+", label: "Years of experience" },
  { value: 20, suffix: "+", label: "Global brands served" },
  { value: 400, suffix: "+", label: "Skilled workforce*" },
  { value: 7, suffix: "M+", label: "Pieces per day capacity*" },
];
