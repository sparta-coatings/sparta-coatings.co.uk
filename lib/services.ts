export interface PricingRow {
  label: string;
  price: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  category: 'residential' | 'commercial';
  heroTagline: string;
  intro: string;
  suitableFor: string[];
  pricing: PricingRow[];
  pricingNote: string;
  whySpray: string[];
  products: string;
  process: ProcessStep[];
  popularColours: string[];
  faqs: FAQ[];
  relatedSlugs: string[];
}

const services: Service[] = [
  {
    slug: 'kitchen-cabinet-spraying',
    name: 'Kitchen Cabinet Spraying',
    shortName: 'Kitchens',
    metaTitle: 'Kitchen Cabinet Spraying From £975 | Sparta Coatings',
    metaDescription:
      'Transform your kitchen from just £975 with professional cabinet spraying. Tikkurila Helmi & Morrells systems, colour matching & minimal disruption. Free UK quote.',
    category: 'residential',
    heroTagline: 'Transform Your Kitchen From Just £975 — Without the Cost of a Full Replacement',
    intro:
      'Sparta Coatings deliver professional kitchen cabinet spraying services across the South of England and the wider UK. Starting from just £975, our expert team can completely transform tired, faded, or dated kitchen units with a flawless, factory-quality finish — using only professional, kitchen-specific coating systems from the UK\'s most trusted manufacturers.',
    suitableFor: [
      'Solid wood and hardwood kitchens',
      'MDF and painted kitchens',
      'Veneer and laminate kitchens',
      'Melamine-faced and foil-wrapped doors',
      'Shaker-style, handleless, and in-frame kitchens',
      'IKEA and flat-pack kitchens',
    ],
    pricing: [
      { label: 'Small kitchen (up to 10 doors)', price: 'From £975' },
      { label: 'Medium kitchen (10–20 doors)', price: 'From £1,400' },
      { label: 'Large kitchen (20–30 doors)', price: 'From £1,900+' },
      { label: 'Full kitchen inc. frames & end panels', price: 'POA — free survey' },
    ],
    pricingNote:
      'All pricing includes full preparation, priming, spraying, and a quality inspection. Contact us for a free, no-obligation survey and tailored quote.',
    whySpray: [
      'Cost-effective — From just £975, a fraction of full kitchen replacement',
      'Fast turnaround — Most kitchens completed in 1–3 days',
      'Any colour — Farrow & Ball, RAL, Little Greene, Dulux, or bespoke matching',
      'Durable finish — Heat, moisture, grease, and chip-resistant kitchen-specific coatings',
      'Repairs included — Chips, scratches, and surface damage repaired before spraying',
      'Eco-friendly — Significantly reduces waste versus full replacement',
    ],
    products:
      'Tikkurila Helmi 30 / Helmi 10, Morrells Italian Waterborne Lacquers, Morrells 600-Series Acid Catalyst (MDF). Primer selected by substrate — Helmi Wood Primer (solid wood), Otex Akva (laminate/melamine), Morrells 600/619 (MDF).',
    process: [
      {
        title: 'Free Survey & Consultation',
        description:
          'We visit your home, assess your kitchen\'s condition, material type, and current finish. We discuss colour options and recommend the correct primer and topcoat system.',
      },
      {
        title: 'Door & Drawer Removal',
        description:
          'All cabinet doors and drawer fronts are removed and laid flat for priming and spraying — achieving a far superior finish than coating doors in situ.',
      },
      {
        title: 'Surface Preparation & Filling',
        description:
          'All surfaces are cleaned with professional degreaser. Chips and imperfections are filled with Helmi Furniture Filler, sanded smooth, and keyed for the primer.',
      },
      {
        title: 'Masking & Protection',
        description:
          'All worktops, appliances, walls, and flooring are fully protected using masking film and professional tape before spraying begins.',
      },
      {
        title: 'Primer Application',
        description:
          'The correct primer system is applied by HVLP spray — Helmi Wood Primer for solid wood, Otex Akva for laminates and melamine, or Morrells 600/619 for MDF.',
      },
      {
        title: 'Inter-Coat Sanding',
        description:
          'After the primer coat has fully dried, all surfaces are lightly sanded to remove raised grain and dust nibs before the topcoat is applied.',
      },
      {
        title: 'Topcoat Application — Minimum Two Coats',
        description:
          'Two full coats of the specified Helmi, Morrells, or 2K system are applied by HVLP spray with adequate drying time between coats.',
      },
      {
        title: 'Reassembly & Final Inspection',
        description:
          'Once fully cured, doors and drawers are refitted. We carry out a full quality inspection before leaving.',
      },
    ],
    popularColours: [
      'Pavilion Gray (Farrow & Ball)',
      'Mole\'s Breath (Farrow & Ball)',
      'Elephant\'s Breath (Farrow & Ball)',
      'Down Pipe (Farrow & Ball)',
      'Shaded White (Farrow & Ball)',
      'Any RAL Classic colour',
    ],
    faqs: [
      {
        q: 'How much does kitchen cabinet spraying cost?',
        a: 'Kitchen cabinet spraying at Sparta Coatings starts from just £975 for a standard domestic kitchen. Larger kitchens and full frame spraying are priced on a free site survey.',
      },
      {
        q: 'What paint do you use for kitchen cabinet spraying?',
        a: 'We use only professional, kitchen-specific coating systems — Tikkurila Helmi 30 or Helmi 10 waterborne furniture lacquer as our primary topcoat, with Morrells Italian Waterborne Lacquers and Morrells Acid Catalyst systems for MDF kitchens.',
      },
      {
        q: 'Can you spray laminate and melamine kitchen doors?',
        a: 'Yes. For laminate, veneer, and melamine kitchen doors we use Tikkurila Otex Akva adhesion primer — the manufacturer-recommended solution for promoting adhesion on these difficult, non-porous surfaces.',
      },
      {
        q: 'How long does a resprayed kitchen last?',
        a: 'Tikkurila Helmi lacquers and Morrells kitchen coating systems are specifically engineered for heat, moisture, and grease resistance. A professionally applied and maintained resprayed kitchen can look pristine for 10 years or more.',
      },
      {
        q: 'Can you match Farrow & Ball colours on kitchen cabinets?',
        a: 'Yes. We offer full colour matching across Farrow & Ball, RAL Classic, Little Greene, Dulux Trade, and bespoke custom shades — all tinted into the Tikkurila Helmi or Morrells system.',
      },
      {
        q: 'How long does kitchen cabinet spraying take?',
        a: 'Most standard domestic kitchens are completed in 1–3 days. Helmi 30 is dust-dry after 1 hour and recoatable after 4 hours — meaning doors can be refitted and the kitchen returned to use within 2–3 days of the final coat.',
      },
    ],
    relatedSlugs: ['upvc-window-spraying', 'upvc-door-spraying', 'ceiling-spraying'],
  },

  {
    slug: 'upvc-window-spraying',
    name: 'UPVC Window Spraying',
    shortName: 'Windows',
    metaTitle: 'UPVC Window Spraying From £275 | Sparta Coatings',
    metaDescription:
      'Kolorbond-approved UPVC window spraying from just £275. Chemically bonded finish, 5,000+ colours & 10-year guarantee. Covering South England & UK. Free quote today.',
    category: 'residential',
    heroTagline: 'Transform Your Windows From Just £275 — Kolorbond Approved Applicators',
    intro:
      'Sparta Coatings provide professional UPVC window spraying services across the South of England and the wider UK. Using only the Kolorbond professional coating range — the UK\'s market-leading UPVC coating system — our trained applicators deliver a chemically bonded, factory-quality finish in any colour, starting from just £275.',
    suitableFor: [
      'Casement windows',
      'Sash windows',
      'Bay and bow windows',
      'Tilt-and-turn windows',
      'Fixed-light windows',
      'Bi-fold and sliding windows',
    ],
    pricing: [
      { label: 'Small / single window', price: 'From £275' },
      { label: 'Bay or bow window', price: 'From £375' },
      { label: 'Standard house (all windows)', price: 'POA — free survey' },
      { label: 'Commercial / multiple units', price: 'POA' },
    ],
    pricingNote:
      'All pricing includes full preparation, degreasing, masking, minimum three-coat Kolorbond application, and silicone resealing.',
    whySpray: [
      'Up to 80% cheaper than full window replacement',
      'Any colour — 5,000+ colours including all RAL shades and Farrow & Ball',
      'Chemically bonded — Kolorbond bonds to UPVC at a molecular level',
      'UV stable — Kolorbond\'s UV-resistant pigments prevent colour fade for over a decade',
      '10-year adhesion guarantee — Manufacturer-backed by Kolorbond',
      'Fast — Most homes completed in a single day',
      'Silicone resealing included — All silicone replaced in your chosen colour',
    ],
    products:
      'Kolorbond WindowPrep (preparation) + Kolorbond Original / Aquatek / DecoProt depending on project. No separate primer required on correctly prepared UPVC. 10-year manufacturer adhesion guarantee.',
    process: [
      {
        title: 'Free Site Survey & Colour Consultation',
        description:
          'We assess your window frame condition, material, and advise on the correct Kolorbond product for your project and discuss your chosen colour.',
      },
      {
        title: 'Silicone Removal',
        description:
          'All existing silicone beads around the window frames are carefully removed before preparation begins — critical for achieving a clean, precise edge line.',
      },
      {
        title: 'Kolorbond WindowPrep Application',
        description:
          'All UPVC frame surfaces are wiped thoroughly with Kolorbond WindowPrep, removing all grease, silicone residue, oxidisation, and contamination.',
      },
      {
        title: 'Mechanical Abrading',
        description:
          'All prepared surfaces are lightly abraded with Mirka Mirlon red scotch-brite pads to create a consistent mechanical key across all frame profiles.',
      },
      {
        title: 'Masking & Protection',
        description:
          'All glazing, brickwork, sills, and surrounding surfaces are fully protected with masking paper and professional tape.',
      },
      {
        title: 'Mist Coat',
        description:
          'A fine, diluted mist coat of Kolorbond is applied first — providing an initial adhesion layer and revealing any remaining surface contamination.',
      },
      {
        title: 'Full Coat Application (Minimum 3 Coats)',
        description:
          'A minimum of three full coats of the specified Kolorbond product are applied using professional HVLP spray equipment.',
      },
      {
        title: 'Silicone Resealing & Final Inspection',
        description:
          'Fresh silicone is applied in your chosen RAL-matched colour. All masking is removed and a full quality inspection completed.',
      },
    ],
    popularColours: [
      'Anthracite Grey (RAL 7016) — The UK\'s number-one UPVC window colour',
      'Chartwell Green (RAL 6021)',
      'Slate Grey (RAL 7015)',
      'Cream (RAL 9001)',
      'Jet Black (RAL 9005)',
      'Down Pipe (Farrow & Ball)',
    ],
    faqs: [
      {
        q: 'How much does UPVC window spraying cost?',
        a: 'UPVC window spraying at Sparta Coatings starts from £275 per window. Full house packages are also available — contact us for a free, no-obligation site survey and tailored quote.',
      },
      {
        q: 'What paint do you use for UPVC window spraying?',
        a: 'We use the Kolorbond professional coating range exclusively for all UPVC window spraying — the UK\'s market-leading UPVC coating system. Surfaces are prepared with Kolorbond WindowPrep and abraded before application of Kolorbond Original, Aquatek, DecoProt, or K2.',
      },
      {
        q: 'Do you need a primer for UPVC window spraying?',
        a: 'No — one of the key advantages of the Kolorbond system is that no separate primer is required on correctly prepared UPVC. Following thorough WindowPrep cleaning and mechanical abrading, Kolorbond bonds chemically and mechanically directly to the surface.',
      },
      {
        q: 'Will the Kolorbond coating peel off UPVC windows?',
        a: 'No. Kolorbond is specifically engineered to chemically bond to UPVC and PVCu at a molecular level. When applied following the correct WindowPrep preparation process, the coating will not peel, crack, or flake — and is backed by a 10-year manufacturer adhesion guarantee.',
      },
      {
        q: 'How long does UPVC window spraying last?',
        a: 'The Kolorbond coating system carries a 10-year manufacturer guarantee for adhesion and colour stability. With correct preparation and application, professionally resprayed UPVC windows can look excellent for well over a decade.',
      },
      {
        q: 'Can you spray UPVC windows any colour?',
        a: 'Yes. Kolorbond is available in over 5,000 colours including the full RAL Classic system, Farrow & Ball, Little Greene, and bespoke custom matching.',
      },
    ],
    relatedSlugs: ['upvc-door-spraying', 'conservatory-spraying', 'fascia-soffit-spraying'],
  },

  {
    slug: 'upvc-door-spraying',
    name: 'UPVC Door Spraying',
    shortName: 'Doors',
    metaTitle: 'UPVC Door Spraying From £375 | Sparta Coatings',
    metaDescription:
      'Professional UPVC door spraying from just £375. Kolorbond-approved system, 5,000+ colours, 10-year adhesion guarantee. South England & UK. Get a free quote today.',
    category: 'residential',
    heroTagline: 'Transform Your Front Door From Just £375 — Kolorbond Approved Applicators',
    intro:
      'Sparta Coatings provide professional UPVC door spraying services across the South of England and the wider UK. Using only the Kolorbond professional coating range, our trained applicators deliver a chemically bonded, factory-quality finish in any colour — starting from just £375 for a single front or back door.',
    suitableFor: [
      'Front and back UPVC doors',
      'French and bifold UPVC doors',
      'Composite door frames and surrounds',
      'UPVC patio doors',
      'Side gates and panel doors',
      'Communal building entrance doors',
    ],
    pricing: [
      { label: 'Front or back door (single)', price: 'From £375' },
      { label: 'Full house (all external doors)', price: 'From £850' },
      { label: 'French or bifold doors', price: 'POA — free survey' },
    ],
    pricingNote:
      'All pricing includes full preparation, masking, minimum three-coat Kolorbond application, and silicone resealing in matched colour.',
    whySpray: [
      'Up to 85% cheaper than full door replacement',
      'Any colour — 5,000+ colours including all RAL shades and Farrow & Ball',
      'Chemically bonded — Kolorbond bonds to UPVC and PVCu at a molecular level',
      '10-year adhesion guarantee — Manufacturer-backed by Kolorbond',
      'Fast — Most single doors completed in under a day',
      'Silicone resealing included — All silicone replaced in matched colour',
      'Coordinate with windows — Match door to freshly resprayed windows and fascias',
    ],
    products:
      'Kolorbond WindowPrep preparation + Kolorbond Original / DecoProt. No separate primer required on correctly prepared UPVC. 10-year manufacturer adhesion guarantee.',
    process: [
      {
        title: 'Free Site Survey & Colour Consultation',
        description:
          'We assess your door\'s condition, material, and profile. We discuss your colour choice and confirm the most appropriate Kolorbond product.',
      },
      {
        title: 'Silicone Removal',
        description:
          'All existing silicone beads around the door frame are carefully removed before preparation begins.',
      },
      {
        title: 'Kolorbond WindowPrep Application',
        description:
          'All UPVC surfaces are wiped thoroughly with Kolorbond WindowPrep, removing all grease, silicone residue, oxidisation, and contamination.',
      },
      {
        title: 'Mechanical Abrading',
        description:
          'All prepared surfaces are lightly abraded with Mirka Mirlon red scotch-brite pads to create a consistent mechanical key.',
      },
      {
        title: 'Masking & Protection',
        description:
          'All glazing, brickwork, thresholds, and surrounding surfaces are fully protected with masking paper and professional tape.',
      },
      {
        title: 'Mist Coat',
        description:
          'A fine, diluted mist coat of Kolorbond is applied first, providing an initial adhesion layer and revealing any remaining contamination.',
      },
      {
        title: 'Full Coat Application (Minimum 3 Coats)',
        description:
          'A minimum of three full coats of the specified Kolorbond product are applied using professional HVLP spray equipment.',
      },
      {
        title: 'Silicone Resealing & Final Inspection',
        description:
          'Fresh silicone is applied in your chosen RAL-matched colour. All masking is removed and a full quality inspection completed.',
      },
    ],
    popularColours: [
      'Anthracite Grey (RAL 7016)',
      'Jet Black (RAL 9005)',
      'Chartwell Green (RAL 6021)',
      'Slate Grey (RAL 7015)',
      'Cream (RAL 9001)',
      'Down Pipe (Farrow & Ball)',
    ],
    faqs: [
      {
        q: 'How much does UPVC door spraying cost?',
        a: 'UPVC door spraying at Sparta Coatings starts from £375 for a single front or back door. Full house packages covering all external doors start from £850. Contact us for a free, no-obligation quote.',
      },
      {
        q: 'What paint do you use for UPVC door spraying?',
        a: 'We use the Kolorbond professional coating range exclusively — the UK\'s market-leading UPVC coating system. Surfaces are prepared with Kolorbond WindowPrep and abraded before application of Kolorbond Original or DecoProt 2K.',
      },
      {
        q: 'Will the coating peel off my UPVC door?',
        a: 'No. Kolorbond is specifically engineered to chemically bond to UPVC and PVCu. When applied following the correct WindowPrep preparation process, it will not peel, crack, or flake — and is backed by a 10-year manufacturer adhesion guarantee.',
      },
      {
        q: 'Can you match my door colour to my windows?',
        a: 'Yes. All Kolorbond products are tintable to 5,000+ colours, so we can perfectly coordinate your door with your windows, fascias, and guttering for a fully cohesive exterior.',
      },
      {
        q: 'How long does UPVC door spraying take?',
        a: 'Most single UPVC doors can be fully prepared and coated within a single visit. The door can be returned to use within a few hours once the final coat has dried.',
      },
      {
        q: 'Can you spray composite door frames?',
        a: 'Yes. We can spray UPVC frames, surrounds, and side panels on composite door installations — ensuring the full door assembly has a consistent, colour-matched finish.',
      },
    ],
    relatedSlugs: ['upvc-window-spraying', 'conservatory-spraying', 'garage-door-spraying'],
  },

  {
    slug: 'conservatory-spraying',
    name: 'Conservatory Spraying',
    shortName: 'Conservatories',
    metaTitle: 'Conservatory Spraying From £1,199 | Sparta Coatings',
    metaDescription:
      'Professional conservatory spraying from £1,199. Transform UPVC & aluminium frames in 1–3 days with no replacement needed. 5,000+ colours. South England & UK. Free quote.',
    category: 'residential',
    heroTagline: 'Transform Your Conservatory From Just £1,199 — Without the Cost of Replacement',
    intro:
      'Sparta Coatings deliver professional conservatory spraying services across the South of England and the wider UK. If your conservatory frames, roof beams, or guttering are faded, yellowed, stained, or simply the wrong colour, our specialist UPVC and aluminium spraying service can completely transform it — starting from just £1,199 — with no building work, no disruption, and no skip.',
    suitableFor: [
      'Edwardian and Victorian conservatories',
      'Lean-to and P-shaped conservatories',
      'Gable-end conservatories',
      'Orangeries and garden rooms',
      'Aluminium-framed conservatories',
      'Polycarbonate and glass-roofed conservatories',
    ],
    pricing: [
      { label: 'Small lean-to conservatory', price: 'From £1,199' },
      { label: 'Standard Edwardian or Victorian', price: 'From £1,499' },
      { label: 'Large or P-shaped conservatory', price: 'From £1,899+' },
      { label: 'Orangery or aluminium-framed', price: 'POA — free survey' },
    ],
    pricingNote:
      'All pricing includes full preparation, degreasing, masking, multi-coat application, and a final quality inspection. Contact us for a tailored, no-obligation quote.',
    whySpray: [
      'Up to 90% cheaper than full conservatory replacement',
      '1–3 day turnaround — No weeks of building work or scaffolding',
      'Any colour — 5,000+ colour options across RAL, Farrow & Ball, and bespoke matching',
      'Chemically bonded finish — Bonds to UPVC, aluminium, and GRP',
      'UV and weather resistant — Engineered for the full range of UK weather conditions',
      'Full frame coverage — Frames, roof bars, ridge, guttering, and doors all included',
    ],
    products:
      'Kolorbond WindowPrep preparation. Kolorbond Original or Aquatek topcoat for UPVC. Kolorbond DecoProt 2K for aluminium-framed conservatories and orangeries. UV-resistant clear protective mist coat applied to seal the finish.',
    process: [
      {
        title: 'Free Site Survey & Consultation',
        description:
          'We visit your property to assess the conservatory type, frame material, condition, and surface contamination levels.',
      },
      {
        title: 'Deep Clean & Degreasing',
        description:
          'All surfaces are washed down with soap and water, followed by treatment with Kolorbond WindowPrep to remove all grease, oxidisation, and biological deposits.',
      },
      {
        title: 'Abrading & Keying',
        description:
          'All UPVC and aluminium surfaces — including roof bars, ridge bars, hip bars, frames, and guttering — are abraded with Mirka Mirlon red scotch pads.',
      },
      {
        title: 'Full Masking & Protection',
        description:
          'All glazing panels, rubber seals, brickwork, and surrounding paving are fully protected using static masking film and professional masking tape.',
      },
      {
        title: 'Dust Coat (Test Coat)',
        description:
          'A very light initial dust coat is applied across all surfaces. This critical step reveals any remaining contaminants before proceeding.',
      },
      {
        title: 'Full Coat Application',
        description:
          'A minimum of two further full coats are applied using professional HVLP spray equipment, achieving an even, consistent colour across every frame, bar, and profile.',
      },
      {
        title: 'Protective Clear Coat',
        description:
          'A UV-resistant protective mist coat is applied over the entire surface for additional durability and finish depth.',
      },
      {
        title: 'De-mask, Inspect & Sign Off',
        description:
          'All masking is carefully removed. We carry out a thorough quality inspection with you on completion.',
      },
    ],
    popularColours: [
      'Anthracite Grey (RAL 7016)',
      'Slate Grey (RAL 7015)',
      'Jet Black (RAL 9005)',
      'Chartwell Green (RAL 6021)',
      'Cream (RAL 9001)',
      'Pavilion Grey (Farrow & Ball)',
    ],
    faqs: [
      {
        q: 'How much does conservatory spraying cost?',
        a: 'Conservatory spraying at Sparta Coatings starts from just £1,199 for a small lean-to conservatory. Larger and more complex conservatories are priced on survey.',
      },
      {
        q: 'How long does conservatory spraying take?',
        a: 'Most conservatories are completed within 1–3 days, depending on size and complexity. There is no building work, scaffolding, or heavy disruption involved.',
      },
      {
        q: 'Can you spray both UPVC and aluminium conservatories?',
        a: 'Yes. We use specialist coatings formulated to chemically bond to UPVC, PVCu, and powder-coated aluminium — covering all standard conservatory frame types.',
      },
      {
        q: 'Will the paint peel or fade on a conservatory?',
        a: 'No. Our professional Kolorbond coating systems are chemically bonded to the surface and include UV-stable pigments to prevent colour fade. A protective clear topcoat is also applied for additional durability.',
      },
      {
        q: 'What colours can you spray a conservatory?',
        a: 'We offer over 5,000 colours including all RAL Classic shades, Farrow & Ball, Little Greene, and bespoke matching.',
      },
      {
        q: 'Is conservatory spraying worth it compared to replacement?',
        a: 'Absolutely. A full conservatory replacement can cost £5,000–£30,000+. Our professional spraying service starts from just £1,199, delivers the same visual transformation, and is completed in days rather than weeks.',
      },
    ],
    relatedSlugs: ['upvc-window-spraying', 'upvc-door-spraying', 'fascia-soffit-spraying'],
  },

  {
    slug: 'garage-door-spraying',
    name: 'Garage Door Spraying',
    shortName: 'Garage Doors',
    metaTitle: 'Garage Door Spraying From £850 | Sparta Coatings',
    metaDescription:
      'Professional garage door spraying from just £850. Steel, UPVC, aluminium & GRP doors transformed in a day. 5,000+ colours, rust treatment included. Free UK quote.',
    category: 'residential',
    heroTagline: 'Transform Your Garage Door From Just £850 — Any Colour, Any Material',
    intro:
      'Sparta Coatings provide professional garage door spraying services across the South of England and the wider UK. Whether your garage door is steel, UPVC, aluminium, GRP, or timber — and whether it\'s faded, rusted, chipped, or simply the wrong colour — our specialist spraying service delivers a flawless, factory-quality finish starting from just £850.',
    suitableFor: [
      'Up-and-over steel garage doors',
      'Roller shutter doors (domestic and commercial)',
      'Side-hinged garage doors',
      'Sectional garage doors',
      'UPVC and aluminium garage doors',
      'GRP and fibreglass garage doors',
      'Timber and hardwood garage doors',
    ],
    pricing: [
      { label: 'Standard up-and-over (single)', price: 'From £850' },
      { label: 'Double garage door', price: 'From £1,100' },
      { label: 'Roller shutter door (domestic)', price: 'From £850' },
      { label: 'Side-hinged pair', price: 'From £950' },
      { label: 'Roller shutter door (commercial)', price: 'POA' },
    ],
    pricingNote:
      'All pricing includes full preparation, masking, priming (where required), coating application, and final inspection. Contact us for a tailored free quote.',
    whySpray: [
      'Up to 80% cheaper than full garage door replacement',
      'Same-day completion — Most single doors finished in one visit',
      'Any colour — 5,000+ RAL, Farrow & Ball, and bespoke colour options',
      'Rust treatment included — Surface rust treated before coating application',
      'Corrosion protection — Specialist coatings engineered to resist rust and oxidisation',
      'UV and weather resistant — Withstands the full range of UK outdoor conditions',
      '10-year guarantee — Manufacturer-backed colour and adhesion warranties available',
    ],
    products:
      'Kolorbond Original (UPVC/GRP), Rust-Oleum Hard Hat 2K PU or CombiColor (steel), 2K Etch Primer (powder-coated). Rust converter applied to all corroded surfaces before priming.',
    process: [
      {
        title: 'Free Survey & Colour Consultation',
        description:
          'We assess your garage door type, material, and condition — checking for rust, corrosion, and surface damage.',
      },
      {
        title: 'Cleaning & Degreasing',
        description:
          'The door is thoroughly cleaned. UPVC surfaces are treated with Kolorbond WindowPrep; metal surfaces are degreased with a specialist solvent degreaser.',
      },
      {
        title: 'Rust Treatment & Surface Repair',
        description:
          'Any surface rust on steel doors is treated with a rust converter. Dents, scratches, and holes are filled and feathered.',
      },
      {
        title: 'Abrading & Keying',
        description:
          'All surfaces are lightly sanded or abraded to create the optimal mechanical key for the primer and topcoat.',
      },
      {
        title: 'Masking & Protection',
        description:
          'The garage floor, brickwork, surrounding fascia, and driveway are fully protected with static masking film and professional masking tape.',
      },
      {
        title: 'Priming',
        description:
          'The appropriate primer system is applied by spray — etch primer for bare metal, Kolorbond preparation for UPVC/aluminium.',
      },
      {
        title: 'Topcoat Application',
        description:
          'A minimum of two full topcoats are applied using professional HVLP or airless spray equipment, achieving an even, consistent finish.',
      },
      {
        title: 'De-mask, Inspect & Handover',
        description:
          'All masking is removed. We carry out a full quality inspection covering every panel and profile before handover.',
      },
    ],
    popularColours: [
      'Anthracite Grey (RAL 7016)',
      'Jet Black (RAL 9005)',
      'Slate Grey (RAL 7015)',
      'Chartwell Green (RAL 6021)',
      'Cream (RAL 9001)',
      'Signal White (RAL 9003)',
    ],
    faqs: [
      {
        q: 'How much does garage door spraying cost?',
        a: 'Garage door spraying at Sparta Coatings starts from just £850 for a standard single up-and-over or roller shutter door. Double doors and commercial roller shutters are priced on survey.',
      },
      {
        q: 'Can you spray a rusty garage door?',
        a: 'Yes. Surface rust is treated with a rust converter or remover before priming to chemically neutralise corrosion. We then apply an etch primer and specialist topcoat to protect the door from further rust.',
      },
      {
        q: 'What types of garage door can be sprayed?',
        a: 'We spray all garage door types including steel up-and-over doors, roller shutters (domestic and commercial), side-hinged doors, sectional doors, UPVC, aluminium, GRP fibreglass, and timber.',
      },
      {
        q: 'How long does garage door spraying take?',
        a: 'Most single garage doors are completed within a single day. Double doors or commercial roller shutters may require an additional day.',
      },
      {
        q: 'How long will a resprayed garage door last?',
        a: 'Our professional coating systems are backed by manufacturer warranties of up to 10 years. With correct preparation, a resprayed garage door can look excellent for a decade or more.',
      },
      {
        q: 'Can you match my garage door to my windows or front door?',
        a: 'Absolutely. We offer full colour matching across the RAL Classic system, Farrow & Ball, Little Greene, and bespoke shades — so your garage door can be perfectly coordinated with your windows and front door.',
      },
    ],
    relatedSlugs: ['upvc-door-spraying', 'upvc-window-spraying', 'fence-gate-spraying'],
  },

  {
    slug: 'fascia-soffit-spraying',
    name: 'Fascia & Soffit Spraying',
    shortName: 'Fascias & Soffits',
    metaTitle: 'Fascia & Soffit Spraying From £75/m² | Sparta Coatings',
    metaDescription:
      'Professional fascia & soffit spraying from £75/m². Transform your roofline without replacement. 5,000+ colours, UV-resistant finish. South England & UK. Free quote.',
    category: 'residential',
    heroTagline: 'Refresh Your Roofline From Just £75/m² — Any Colour, Any Finish',
    intro:
      'Sparta Coatings provide professional fascia and soffit spraying services across the South of England and the wider UK. If your roofline is yellowing, faded, chalky, or clashing with your newly resprayed windows and doors, our specialist UPVC and timber coating service delivers a crisp, long-lasting finish — starting from just £75 per m².',
    suitableFor: [
      'UPVC fascia and soffit boards',
      'Timber / painted wood fascias and soffits',
      'Aluminium and powder-coated roofline products',
      'Bargeboards and verge trims',
      'Roofline T-profiles, corners, and joint trims',
      'Downpipes and guttering',
    ],
    pricing: [
      { label: 'Fascia and soffit (per m²)', price: 'From £75/m²' },
      { label: 'Full detached house fascia & soffit', price: 'POA — free survey' },
      { label: 'Combined fascia, soffit & gutter package', price: 'Best value — ask for package quote' },
    ],
    pricingNote:
      'All pricing includes preparation, cleaning, masking, coating application, and a full quality inspection.',
    whySpray: [
      'Up to 80% cheaper than full fascia and soffit replacement',
      'Single-day completion — Most standard properties done in one visit',
      'Any colour — 5,000+ RAL, Farrow & Ball, and bespoke matching',
      'UV and weather resistant — Professional coatings engineered for full exterior exposure',
      'Covers yellowing and staining — Hides years of discolouration, algae, and chalking',
      '5–10 year guarantees — Manufacturer-backed against fading and peeling',
      'Coordinates your roofline — Match fascias to windows, doors, and guttering',
    ],
    products:
      'Kolorbond Original (UPVC fascia/soffit). Kolorbond Aquatek for residential low-odour projects. Zinsser BullsEye 1-2-3 primer for timber. Biocidal wash applied first to all surfaces.',
    process: [
      {
        title: 'Free Survey & Colour Consultation',
        description:
          'We assess the condition, material, and extent of your fascia and soffit boards — identifying any biological growth, delamination, or damage.',
      },
      {
        title: 'Biocidal Treatment',
        description:
          'A fungicidal wash is applied to all surfaces and left to dwell, killing all biological growth before preparation begins.',
      },
      {
        title: 'Cleaning & Degreasing',
        description:
          'All boards are cleaned with soap and water, then treated with Kolorbond WindowPrep to remove all grease and contaminants.',
      },
      {
        title: 'Abrading & Keying',
        description:
          'UPVC surfaces are lightly abraded with Mirka red scotch-brite pads. Timber surfaces are sanded to a sound existing coating.',
      },
      {
        title: 'Masking & Protection',
        description:
          'Roof tiles, brickwork, guttering, windows, and surrounding areas are all fully masked using professional tape and static masking film.',
      },
      {
        title: 'Priming (Where Required)',
        description:
          'Timber fascias and soffits are primed with Zinsser BullsEye 1-2-3. UPVC is coated directly with Kolorbond following preparation.',
      },
      {
        title: 'Topcoat Application',
        description:
          'A minimum of two full coats are applied using professional HVLP spray equipment, achieving full, even coverage across all fascia profiles and soffit panels.',
      },
      {
        title: 'De-mask, Inspect & Handover',
        description:
          'All masking is carefully removed, edges are checked for accuracy, and a full quality inspection is completed.',
      },
    ],
    popularColours: [
      'Brilliant White (RAL 9010)',
      'Anthracite Grey (RAL 7016)',
      'Black (RAL 9005)',
      'Cream (RAL 9001)',
      'Chartwell Green (RAL 6021)',
      'Rosewood',
    ],
    faqs: [
      {
        q: 'How much does fascia and soffit spraying cost?',
        a: 'Fascia and soffit spraying at Sparta Coatings starts from £75 per m². The total cost depends on the size of your property and the extent of roofline coverage required.',
      },
      {
        q: 'Is it better to spray or replace fascias and soffits?',
        a: 'Spraying is significantly cheaper — up to 80% less than full fascia and soffit replacement. For boards that are structurally sound but visually tired, spraying delivers the same result at a fraction of the cost.',
      },
      {
        q: 'Can you spray both UPVC and timber fascias?',
        a: 'Yes. We use specialist UPVC coatings such as Kolorbond Original for plastic boards and primer-and-topcoat systems for timber fascias and soffits.',
      },
      {
        q: 'How long does fascia and soffit spraying last?',
        a: 'Our professional coating systems are backed by manufacturer guarantees of 5–10 years against fading and peeling.',
      },
      {
        q: 'Can you spray fascias, soffits, and gutters together?',
        a: 'Yes — and we\'d recommend it. Combining fascia, soffit, and gutter spraying in a single visit is the most cost-effective option and ensures a perfectly colour-coordinated roofline.',
      },
    ],
    relatedSlugs: ['gutter-spraying', 'upvc-window-spraying', 'house-exterior-spraying'],
  },

  {
    slug: 'gutter-spraying',
    name: 'Gutter Spraying',
    shortName: 'Gutters',
    metaTitle: 'Gutter Spraying From £69.99/m | Sparta Coatings',
    metaDescription:
      'Professional gutter spraying from £69.99 per metre. UPVC & aluminium gutters restored without replacement. 5,000+ colours, UV-resistant finish. South England & UK. Free quote.',
    category: 'residential',
    heroTagline: 'Restore Your Guttering From Just £69.99/m — No Replacement Required',
    intro:
      'Sparta Coatings provide professional gutter spraying services across the South of England and the wider UK. Whether your gutters are faded, stained, algae-covered, or simply the wrong colour to match your freshly resprayed roofline, our specialist UPVC and aluminium gutter coating service transforms them at just £69.99 per metre.',
    suitableFor: [
      'UPVC gutters and downpipes',
      'Aluminium gutters and hoppers',
      'Cast-iron style guttering (GRP or UPVC)',
      'Ogee, half-round, and square-line profiles',
      'Rainwater heads and fittings',
    ],
    pricing: [
      { label: 'Gutter spraying (per metre run)', price: 'From £69.99/m' },
      { label: 'Downpipes (per pipe)', price: 'Included in package' },
      { label: 'Full roofline package (fascia, soffit & gutters)', price: 'Best value — ask for package quote' },
    ],
    pricingNote: 'Contact us for a free, no-obligation site survey and tailored quotation.',
    whySpray: [
      'Dramatically cheaper than full gutter replacement',
      'Matches your roofline — Coordinate gutters with fascias, soffits, and windows',
      'UV and weather resistant — Engineered for permanent exterior exposure',
      'Covers staining and algae — Hides years of green staining and discolouration',
      'Chemically bonded — Won\'t peel or flake from correctly prepared UPVC',
      'Same-day service — Completed alongside fascia and soffit work for efficiency',
    ],
    products:
      'Biocidal fungicidal wash applied first. Kolorbond WindowPrep for degreasing. Kolorbond Original (UPVC), Kolorbond Aquatek (residential low-odour), Kolorbond DecoProt 2K (aluminium). No primer required on correctly prepared UPVC.',
    process: [
      {
        title: 'Biocidal Treatment',
        description: 'Fungicidal wash applied and left to dwell on all gutter surfaces.',
      },
      {
        title: 'Cleaning & Degreasing',
        description: 'Gutters cleaned and treated with Kolorbond WindowPrep to remove all grease and contamination.',
      },
      {
        title: 'Abrading',
        description: 'Lightly keyed with scotch-brite pads for maximum adhesion.',
      },
      {
        title: 'Masking',
        description: 'Brickwork, fascias, and soffits fully masked with professional tape and film.',
      },
      {
        title: 'Dust Coat',
        description: 'Initial fine mist coat applied and checked for any surface contamination.',
      },
      {
        title: 'Full Coat Application',
        description: 'Minimum two full coats applied by HVLP spray equipment.',
      },
      {
        title: 'De-mask & Inspect',
        description: 'All masking removed, full quality check completed.',
      },
    ],
    popularColours: [
      'Black (RAL 9005)',
      'Anthracite Grey (RAL 7016)',
      'Brilliant White (RAL 9010)',
      'Cream (RAL 9001)',
      'Chartwell Green (RAL 6021)',
      'Any colour to match your roofline',
    ],
    faqs: [
      {
        q: 'How much does gutter spraying cost?',
        a: 'Gutter spraying at Sparta Coatings starts from £69.99 per metre run. Downpipes are included as part of a roofline package. Contact us for a free, no-obligation quote tailored to your property.',
      },
      {
        q: 'Can you spray UPVC and aluminium gutters?',
        a: 'Yes. We use specialist coatings including Kolorbond Original for UPVC guttering and Kolorbond DecoProt 2K for aluminium gutters.',
      },
      {
        q: 'Can gutters be sprayed the same colour as my fascias and windows?',
        a: 'Absolutely. We offer full colour matching across 5,000+ shades — so your guttering can be perfectly coordinated with your fascias, soffits, windows, and doors.',
      },
    ],
    relatedSlugs: ['fascia-soffit-spraying', 'upvc-window-spraying', 'house-exterior-spraying'],
  },

  {
    slug: 'house-exterior-spraying',
    name: 'House Exterior Spraying',
    shortName: 'House Exterior',
    metaTitle: 'House Exterior Spraying From £50/m² | Sparta Coatings',
    metaDescription:
      'Professional house exterior spraying from £50/m². Masonry, render & pebbledash coatings with 10–15 year life expectancy. South England & UK. Get a free quote today.',
    category: 'residential',
    heroTagline: 'Transform Your Home\'s Exterior From Just £50/m² — No Scaffolding, No Mess',
    intro:
      'Sparta Coatings provide professional house exterior spraying services across the South of England and the wider UK. Whether your home has rendered walls, pebbledash, brick, or a mixed exterior — our specialist exterior coating service delivers a dramatic, long-lasting transformation starting from just £50 per m².',
    suitableFor: [
      'Smooth and textured sand-and-cement render',
      'Pebbledash and roughcast',
      'K-Rend, monocouche, and thin-coat render',
      'Brick and block',
      'Storm dash and tyrolean finish',
      'Mixed substrate properties (brick, render and cladding combined)',
    ],
    pricing: [
      { label: 'Terraced house', price: 'From £50/m²' },
      { label: '3-bed semi-detached', price: 'POA — free survey' },
      { label: '4-bed detached', price: 'POA — free survey' },
      { label: 'Bungalow', price: 'POA — free survey' },
      { label: 'Commercial premises', price: 'POA' },
    ],
    pricingNote:
      'All pricing includes preparation, surface treatment, masking, primer (where required), and multi-coat application.',
    whySpray: [
      'Dramatic transformation — Completely refresh the look of your property in days',
      'Deep penetrating coverage — Airless spray forces coatings into every pore',
      'Weatherproofing — Creates a breathable, water-repellent barrier against driving rain and frost',
      'UV resistant — Colour-stable pigments prevent fading and chalking for years',
      'Crack-bridging — Elastomeric coatings flex with the substrate, bridging hairline cracks',
      'Biocidal protection — Anti-fungal additives prevent moss and algae regrowth',
      '10–15 year life expectancy — Professional systems dramatically outlast DIY applications',
    ],
    products:
      'Dulux Trade Weathershield Smooth Masonry, Sandtex Trade Fine Textured Masonry, Johnstone\'s Trade Stormshield. Biocidal masonry wash applied first. Stabilising primer / alkali-resistant primer where required.',
    process: [
      {
        title: 'Free Survey & Assessment',
        description:
          'We carry out a full site survey — assessing wall type, substrate condition, existing coating adhesion, biological growth, and cracking.',
      },
      {
        title: 'Biocidal Treatment',
        description:
          'A professional fungicidal masonry wash is applied across all elevations and left to dwell, killing all biological growth.',
      },
      {
        title: 'Repairs & Preparation',
        description:
          'All loose mortar, crumbling render, and delaminating coatings are raked back and removed. Cracks and damaged areas are repaired.',
      },
      {
        title: 'Priming',
        description:
          'The appropriate primer is applied — stabilising primer for chalky surfaces, alkali-resistant for fresh repairs, or Peel Stop for delaminating areas.',
      },
      {
        title: 'Masking & Protection',
        description:
          'All windows, doors, fascias, soffits, driveway, paths, and landscaping are fully protected using heavy-duty masking film.',
      },
      {
        title: 'Topcoat Application — Pass 1',
        description:
          'The first full coat of the specified masonry topcoat is applied by professional airless spray across the entire elevation.',
      },
      {
        title: 'Topcoat Application — Pass 2',
        description:
          'Once the first coat has dried, a second (and sometimes third) full coat is applied to achieve the specified dry film thickness and opacity.',
      },
      {
        title: 'De-mask, Inspect & Handover',
        description:
          'All masking is carefully removed. A full quality inspection is completed before handover.',
      },
    ],
    popularColours: [
      'Brilliant White (RAL 9010)',
      'Anthracite Grey (RAL 7016)',
      'Cream (RAL 9001)',
      'Slate Grey (RAL 7015)',
      'Elephant\'s Breath (Farrow & Ball)',
      'Pavilion Grey (Farrow & Ball)',
    ],
    faqs: [
      {
        q: 'How much does house exterior spraying cost?',
        a: 'House exterior spraying at Sparta Coatings starts from £50 per m². Total cost depends on property size, wall type, substrate condition, and the coating system required.',
      },
      {
        q: 'How long does exterior house spraying last?',
        a: 'Professional exterior masonry coatings applied by Sparta Coatings have a typical life expectancy of 10–15 years. KEIM mineral coatings can last significantly longer.',
      },
      {
        q: 'Can you spray pebbledash and textured render?',
        a: 'Yes. We use high-build, fine or medium-textured masonry coatings such as Sandtex Trade Fine Textured Masonry, which penetrate and fill the textured surface.',
      },
      {
        q: 'Is exterior house spraying better than roller painting?',
        a: 'Yes. Airless spray forces coatings into every pore and crevice of the substrate, providing superior penetration, coverage, and protection compared to roller or brush application.',
      },
      {
        q: 'Can you spray a listed or heritage building?',
        a: 'Yes. For listed buildings and heritage properties, we use KEIM silicate mineral paints — permanently breathable coatings that mineralise into the substrate and are widely approved for use on historic buildings.',
      },
      {
        q: 'What colours can you spray a house exterior?',
        a: 'We offer a vast colour range including tintable versions of Dulux Weathershield, Sandtex Trade, and Johnstone\'s Stormshield — covering all RAL shades, Farrow & Ball colours, and bespoke custom matching.',
      },
    ],
    relatedSlugs: ['fascia-soffit-spraying', 'gutter-spraying', 'fence-gate-spraying'],
  },

  {
    slug: 'fence-gate-spraying',
    name: 'Fence & Gate Spraying',
    shortName: 'Fences & Gates',
    metaTitle: 'Fence & Gate Spraying From £69.99/m² | Sparta Coatings',
    metaDescription:
      'Professional fence & gate spraying from £69.99/m². Rust treatment, anti-corrosion primers & durable topcoats for all metal types. South England & UK. Free quote today.',
    category: 'residential',
    heroTagline: 'Restore & Protect Your Fences and Gates From Just £69.99/m² — Any Metal, Any Colour',
    intro:
      'Sparta Coatings provide professional fence and gate spraying services for residential, commercial, and industrial properties across the South of England and the wider UK. Whether your metal fencing, railings, or gates are rusting, flaking, faded, or simply in need of a refresh — our specialist on-site spraying service delivers a durable, factory-quality finish starting from just £69.99 per m².',
    suitableFor: [
      'Wrought iron gates and railings',
      'Mild steel fencing and gate frames',
      'Galvanised steel palisade fencing',
      'Powder-coated metal fencing and gates',
      'Bow-top and flat-top railings',
      'Decorative metal estate fencing',
      'Automated gate systems',
      'Timber fencing and panel systems',
    ],
    pricing: [
      { label: 'Metal fencing and railings', price: 'From £69.99/m²' },
      { label: 'Metal gates (domestic)', price: 'From £299' },
      { label: 'Metal gates (commercial / industrial)', price: 'POA — free survey' },
    ],
    pricingNote:
      'All pricing includes full preparation, rust treatment, priming, topcoat application, and a quality inspection.',
    whySpray: [
      'Up to 80% cheaper than full fence and gate replacement',
      'No removal required — All work completed in-situ on your property',
      'Rust treatment included — Surface rust neutralised before any coating is applied',
      'Any colour — Full RAL, BS, and bespoke colour matching',
      'Anti-corrosion primers engineered to halt and prevent rust',
      'UV and weather resistant — Professional topcoats withstand all UK outdoor conditions',
      'Even coverage on complex ironwork — HVLP spray reaches every bar, spindle, and joint',
    ],
    products:
      'HMG Ferrozinc rust neutraliser. Manor ZP24 Zinc Phosphate Primer. Rust-Oleum CombiColor Original (direct-to-metal). Manor Fast Enamel topcoat. Rust-Oleum Hard Hat 2K PU for maximum durability.',
    process: [
      {
        title: 'Free Survey & Condition Assessment',
        description:
          'We assess the extent of your fencing and gates, identify substrate type and condition, and check for active rust and failed coatings.',
      },
      {
        title: 'Mechanical Preparation',
        description:
          'All loose rust, flaking paint, and failed coatings are removed by wire brush, angle grinder, or Mirka abrasive disc.',
      },
      {
        title: 'Rust Treatment',
        description:
          'Active rust is treated with HMG Ferrozinc rust neutraliser, chemically converting and stabilising corrosion.',
      },
      {
        title: 'Degreasing',
        description: 'All surfaces are degreased with solvent or IPA wipe-down to remove all oils and contamination.',
      },
      {
        title: 'Masking & Protection',
        description:
          'Surrounding surfaces — paths, driveways, brickwork, and adjacent walls — are fully protected.',
      },
      {
        title: 'Primer Application',
        description:
          'The appropriate zinc phosphate, etch, or rust-inhibiting primer is applied by HVLP spray across all bars, spindles, frames, and fixings.',
      },
      {
        title: 'Topcoat Application',
        description:
          'A minimum of two full coats of the specified topcoat are applied by HVLP spray, achieving even, consistent coverage across the entire fence, gate, and railing system.',
      },
      {
        title: 'De-mask, Inspect & Handover',
        description:
          'All masking is removed, gates and mechanisms are checked for free movement, and a full quality inspection is completed.',
      },
    ],
    popularColours: [
      'Gloss Black (RAL 9005)',
      'Anthracite Grey (RAL 7016)',
      'Satin Black',
      'Forest Green (RAL 6005)',
      'Slate Grey (RAL 7015)',
      'Signal White (RAL 9003)',
    ],
    faqs: [
      {
        q: 'How much does fence and gate spraying cost?',
        a: 'Fence and gate spraying starts from £69.99 per m² for metal fencing and railings. Domestic metal gates start from £299. Contact us for a free, no-obligation site survey.',
      },
      {
        q: 'Can you spray rusty gates and railings?',
        a: 'Yes. All active rust is treated with a specialist rust neutraliser such as HMG Ferrozinc before priming, chemically converting and stabilising corrosion at the surface.',
      },
      {
        q: 'Can you spray galvanised steel fencing?',
        a: 'Yes. Galvanised steel requires specialist preparation including mechanical abrading and a two-component etch primer to chemically key the surface before the topcoat.',
      },
      {
        q: 'Do you spray fences and gates on-site or do they need to be removed?',
        a: 'All our fence and gate spraying is carried out in-situ on your property — no removal, no off-site powder coating, and no reinstallation required.',
      },
      {
        q: 'How long does fence and gate spraying last?',
        a: 'Our professional anti-corrosion coating systems are backed by manufacturer warranties of up to 10 years.',
      },
      {
        q: 'What colours can you spray fences and gates?',
        a: 'We offer full colour matching across the RAL Classic system, BS 4800 British Standard colours, and bespoke custom shades.',
      },
    ],
    relatedSlugs: ['garage-door-spraying', 'house-exterior-spraying', 'steelwork-spraying'],
  },

  {
    slug: 'ceiling-spraying',
    name: 'Ceiling Spraying',
    shortName: 'Ceilings',
    metaTitle: 'Ceiling Spraying From £150 | Sparta Coatings',
    metaDescription:
      'Professional ceiling spraying from just £150. Domestic, commercial & industrial ceilings coated with a flawless, streak-free finish. South England & UK. Free quote today.',
    category: 'residential',
    heroTagline: 'Professional Ceiling Spraying From Just £150 — Domestic, Commercial & Industrial',
    intro:
      'Sparta Coatings provide professional ceiling spraying services for domestic, commercial, and industrial properties across the South of England and the wider UK. Whether it\'s a domestic home, a commercial office, a retail unit, or an industrial warehouse ceiling — our specialist airless and HVLP spray service delivers a flawless, streak-free finish far faster and more effectively than any roller or brush. Starting from just £150.',
    suitableFor: [
      'Domestic plaster ceilings (smooth and textured)',
      'Commercial office and retail ceilings',
      'Suspended ceiling tiles and grids',
      'Exposed concrete soffits',
      'Industrial warehouse and factory ceilings',
      'Artex and textured ceiling coatings',
      'Fire-rated ceiling systems',
    ],
    pricing: [
      { label: 'Standard domestic ceiling', price: 'From £150' },
      { label: 'Commercial office / retail ceiling', price: 'From £50/m²' },
      { label: 'Industrial / warehouse ceiling', price: 'POA — free survey' },
    ],
    pricingNote: 'All pricing includes masking, preparation, and full coat application.',
    whySpray: [
      'Streak-free, flawless finish — No roller marks, no lap lines, no brush strokes',
      'Speed — Covers significantly more ceiling per hour than roller application',
      'Even coverage on textured ceilings — Spray penetrates Artex and stipple coatings',
      'Reaches difficult areas — Ceiling voids, exposed services, purlins, and rafters',
      'Out-of-hours working — Available for commercial clients to avoid business disruption',
      'Fire-retardant coatings available — Intumescent ceiling coatings applied where required',
    ],
    products:
      'Dulux Trade Diamond Matt, Johnstone\'s Trade Covaplus Vinyl Matt, Tikkurila Luja 7. Zinsser BullsEye 1-2-3 for stain blocking. Zinsser Gardz for textured/Artex ceilings. Zinsser Perma-White for damp/bathroom ceilings.',
    process: [
      {
        title: 'Survey & Preparation Assessment',
        description:
          'We assess the ceiling type, area, height, condition, and any staining issues. We confirm the coating system and agree the working schedule.',
      },
      {
        title: 'Masking & Full Protection',
        description:
          'All walls, floors, furniture, fittings, and light fittings are protected with heavy-duty polythene sheeting and masking film.',
      },
      {
        title: 'Surface Preparation & Priming',
        description:
          'Stains and watermarks are spot-treated with Zinsser BullsEye 1-2-3 or Gardz sealer. Textured ceilings are consolidated before topcoat.',
      },
      {
        title: 'Mist Coat Application',
        description:
          'A fine diluted mist coat is applied first, allowing the ceiling to accept the full-strength topcoat without absorption problems.',
      },
      {
        title: 'Full Coat Application',
        description:
          'A minimum of two full coats of the specified topcoat are applied by airless or HVLP spray — achieving a perfectly smooth, streak-free finish.',
      },
      {
        title: 'De-mask, Inspect & Handover',
        description:
          'All masking is carefully removed. Walls, coving, and edges are checked for overspray. A full quality inspection is completed.',
      },
    ],
    popularColours: [
      'Brilliant White',
      'Any tinted colour to match your interior scheme',
      'RAL Classic colours',
      'Farrow & Ball whites and off-whites',
    ],
    faqs: [
      {
        q: 'How much does ceiling spraying cost?',
        a: 'Ceiling spraying at Sparta Coatings starts from just £150 for a standard domestic ceiling. Commercial and industrial ceilings start from £50/m².',
      },
      {
        q: 'Is ceiling spraying better than roller painting?',
        a: 'Yes. Airless spray atomises paint into a fine mist, delivering a perfectly even, streak-free finish with no roller marks or lap lines.',
      },
      {
        q: 'Can you spray Artex and textured ceilings?',
        a: 'Yes. We treat textured and Artex ceilings with Zinsser Gardz Problem Surface Sealer to consolidate the surface before spray-applying a full coverage topcoat.',
      },
      {
        q: 'Can you spray warehouse and industrial ceilings?',
        a: 'Yes. We spray all industrial ceiling types including exposed concrete soffits, ceiling voids with exposed services, structural steel and purlins, and suspended tile systems.',
      },
      {
        q: 'Do you offer mould-resistant ceiling coatings?',
        a: 'Yes. For bathroom, kitchen, and utility ceilings, we use Zinsser Perma-White — a mould-resistant, moisture-blocking ceiling coating.',
      },
      {
        q: 'Can ceiling spraying be done out of hours in commercial premises?',
        a: 'Yes. Out-of-hours and overnight working is available as standard on all commercial ceiling projects.',
      },
    ],
    relatedSlugs: ['warehouse-industrial-spraying', 'shop-front-spraying', 'kitchen-cabinet-spraying'],
  },

  {
    slug: 'cladding-spraying',
    name: 'Cladding Spraying',
    shortName: 'Cladding',
    metaTitle: 'Cladding Spraying Services UK | Sparta Coatings',
    metaDescription:
      'Approved applicators for HD Sharmans, Giromax & Liquisil cladding systems. Professional metal cladding spraying from £50/m². 10–25 year warranties. Free UK quote.',
    category: 'commercial',
    heroTagline: 'The UK\'s Leading Experts in Commercial & Industrial Metal Cladding Spraying',
    intro:
      'Sparta Coatings are specialist cladding spraying contractors with over 10 years of experience delivering professional metal cladding coating systems to commercial and industrial buildings across the South of England and the wider UK. As approved applicators for the UK\'s leading cladding coating manufacturers — including HD Sharmans, Giromax, Liquisil, PPG, AkzoNobel, and Rustoleum — every project we deliver is backed by a manufacturer-issued warranty.',
    suitableFor: [
      'Commercial office buildings and business parks',
      'Industrial warehouses and distribution centres',
      'Factories and manufacturing plants',
      'Retail units and shop fronts',
      'Agricultural buildings and farm stores',
      'Self-storage facilities',
      'Educational and public sector buildings',
    ],
    pricing: [
      { label: 'Metal / steel wall cladding', price: 'From £50/m²' },
      { label: 'Plastisol / PVF2 cladding (specialist system)', price: 'POA — free survey' },
      { label: 'Composite insulated panel system', price: 'POA — free survey' },
      { label: 'Full building elevation package', price: 'POA — free survey' },
    ],
    pricingNote:
      'All pricing includes full condition survey, biocidal treatment, surface preparation, cut-edge treatment, priming, topcoat application, project audit, and manufacturer warranty sign-off.',
    whySpray: [
      'Typically 60–80% less than full cladding replacement',
      '10–20 year manufacturer warranties — Issued by the approved coating supplier',
      'Cut-edge corrosion treatment included — The most critical failure point properly treated',
      'Unique colour matching — Any RAL or BS colour, including exact pre-existing colour matching',
      'Minimal operational disruption — Out-of-hours and phased working available',
      'In-situ repairs — Dents, holes, and scratches repaired before coating',
      'Manufacturer-audited process — Every stage signed off by the approved paint supplier',
    ],
    products:
      'HD Sharmans Temadur 20 / 50 (2K PU). Giromax Roofcoat (20-year guarantee). Liquisil Metalseal (25-year guarantee). Temabond ST200 cut-edge stripe coat. Approved applicators for HD Sharmans, Giromax, Liquisil, Rustoleum, PPG, AkzoNobel, and Tor Coatings.',
    process: [
      {
        title: 'Free Site Survey & Written Specification',
        description:
          'Full condition survey — assessing cladding type, substrate condition, extent of cut-edge corrosion, and confirming the correct coating system and warranty option.',
      },
      {
        title: 'Method Statement & Risk Assessment',
        description:
          'All cladding projects supported by a full COSHH assessment, risk assessment, method statement, and proof of liability insurance.',
      },
      {
        title: 'HSE-Compliant Safe Access',
        description:
          'All work at height carried out in full compliance with the Work at Height Regulations 2005, using MEWP, scaffold, or rope access.',
      },
      {
        title: 'Biocidal Treatment & Pressure Washing',
        description:
          'Fungicidal wash applied and left to dwell. The entire elevation is then pressure washed at up to 3,000 PSI.',
      },
      {
        title: 'Surface Preparation to ISO 12944-4',
        description:
          'All contamination, corrosion salts, and residual plasticiser removed. Galvanised sections treated with T-Wash.',
      },
      {
        title: 'Cut-Edge Treatment & Temabond Stripe Coat',
        description:
          'All cut edges, bolt heads, fixings, and overlaps stripe-coated with Temabond ST200 at 100 microns DFT.',
      },
      {
        title: 'Primer Application',
        description:
          'The specified primer applied by airless spray to all prepared surfaces, achieving the required DFT.',
      },
      {
        title: 'Topcoat Application — Pass 1 & Pass 2',
        description:
          'Minimum two full coats of the specified topcoat applied by professional airless spray — achieving a total minimum DFT of 200 microns.',
      },
      {
        title: 'Stage-by-Stage Audit & Manufacturer Sign-Off',
        description:
          'A full project audit accompanies every stage. On completion, the system is signed off by the approved coating manufacturer.',
      },
    ],
    popularColours: [
      'Any RAL Classic colour',
      'Any BS 4800 British Standard colour',
      'Pre-existing colour matched precisely',
      'Corporate colours to specification',
    ],
    faqs: [
      {
        q: 'What is cladding spraying?',
        a: 'Cladding spraying is the professional on-site application of specialist coating systems to existing metal, steel, aluminium, Plastisol, and PVF2 wall cladding — restoring appearance and protection without the cost of full cladding replacement.',
      },
      {
        q: 'How much does cladding spraying cost?',
        a: 'Cladding spraying at Sparta Coatings starts from £50 per m² for standard metal and steel cladding. Specialist Plastisol and PVDF systems are priced on survey.',
      },
      {
        q: 'How long does cladding spraying last?',
        a: 'Our cladding systems carry manufacturer warranties of 10–25 years. Temadur carries 10 years, Giromax 20 years, and Liquisil Metalseal 25 years.',
      },
      {
        q: 'Can you treat cut-edge corrosion on cladding?',
        a: 'Yes. Cut-edge corrosion is treated as a dedicated stage using Temabond ST200 stripe coat applied at 100 microns DFT to all sheet edges, bolt heads, and fixings.',
      },
      {
        q: 'Can you spray Plastisol and PVF2 cladding?',
        a: 'Yes — but both require specialist preparation. Plastisol cladding requires solvent thinned wipe-down to remove residual plasticiser. PVDF requires a PVDF-specific adhesion primer.',
      },
      {
        q: 'Are you approved applicators for HD Sharmans and Giromax?',
        a: 'Yes. Sparta Coatings are approved applicators for HD Sharmans (Temadur 20/50 and Seamsil cut-edge systems), Giromax (polymer hybrid cladding coatings), Liquisil (silicone metal coatings), and several other leading manufacturers.',
      },
    ],
    relatedSlugs: ['metal-roof-coating', 'warehouse-industrial-spraying', 'steelwork-spraying'],
  },

  {
    slug: 'metal-roof-coating',
    name: 'Metal Roof Coating',
    shortName: 'Metal Roofs',
    metaTitle: 'Metal Roof Coating From £99/m² | Sparta Coatings',
    metaDescription:
      'Professional metal roof coating & spraying from £99/m². Stops leaks, treats corrosion & extends roof life. 20-year warranties available. South England & UK. Free quote.',
    category: 'commercial',
    heroTagline: 'Protect & Restore Your Metal Roof From Just £99/m² — No Replacement Required',
    intro:
      'Sparta Coatings provide professional metal roof coating and spraying services for commercial and industrial properties across the South of England and the wider UK. If your metal or corrugated steel roof is rusting, leaking, faded, or failing — our specialist coating systems can fully restore, waterproof, and protect it for years to come, starting from just £99 per m².',
    suitableFor: [
      'Corrugated steel and profiled metal sheet roofs',
      'Box profile steel roofing (Trisomet, Kingspan, Corus)',
      'Standing seam metal roofs',
      'Plastisol-coated steel cladding roofs',
      'Galvanised steel roofs',
      'Aluminium sheet roofs',
      'Composite insulated panel roofs',
    ],
    pricing: [
      { label: 'Metal / corrugated steel roof', price: 'From £99/m²' },
      { label: 'Box profile / composite roof', price: 'From £99/m²' },
      { label: 'Standing seam aluminium roof', price: 'POA — free survey' },
      { label: 'Asbestos encapsulation', price: 'POA — specialist assessment required' },
    ],
    pricingNote:
      'All pricing includes full inspection, biocidal wash, rust and corrosion treatment, priming, seam sealing, topcoat application, and project sign-off.',
    whySpray: [
      'Up to 70% cheaper than full metal roof replacement',
      '2–5 day completion — No weeks of structural work',
      'Stops leaks — Seals all seams, joints, overlaps, and bolt heads watertight',
      'Cut-edge corrosion treatment — The most critical failure point treated and sealed',
      'Full corrosion protection — Rust-inhibiting primer systems applied to all surfaces',
      'Elastomeric coatings — Flexible films accommodate roof movement without cracking',
      '20-year warranties available — Manufacturer-backed performance guarantees',
    ],
    products:
      'Rust-Oleum Mathys Noxyde (elastomeric anti-corrosion). Permagard Metal Roof Coating (20-year transferable warranty). Sikalastic 2K metal primer. HD Sharmans Seamsil cut-edge system. Polyurethane mastic + reinforcing scrim tape at all seams.',
    process: [
      {
        title: 'Free Roof Survey & Condition Report',
        description:
          'Full roof inspection — assessing substrate condition, extent of corrosion, cut-edge failure, seam integrity, and existing coating adhesion.',
      },
      {
        title: 'HSE-Compliant Safe Access',
        description:
          'All roof work carried out in full compliance with HSE Working at Height Regulations, with appropriate edge protection in place.',
      },
      {
        title: 'Biocidal Wash & Industrial Cleaning',
        description:
          'Fungicidal wash applied across the entire roof surface and left to dwell. Then pressure washed at up to 3,000 PSI.',
      },
      {
        title: 'Rust & Corrosion Treatment',
        description:
          'All rusted areas and cut edges treated with rust converter and cold galvanising compound.',
      },
      {
        title: 'Seam Sealing & Scrim Reinforcement',
        description:
          'All seams, laps, bolt heads, penetrations, and roof lights sealed with polyurethane mastic and reinforced with polyester scrim tape.',
      },
      {
        title: 'Primer Application',
        description:
          'The appropriate primer system applied by airless spray across all roof surfaces.',
      },
      {
        title: 'Elastomeric Topcoat — Pass 1',
        description:
          'First full coat of the specified elastomeric roof coating applied by professional airless spray.',
      },
      {
        title: 'Elastomeric Topcoat — Pass 2',
        description:
          'Second full coat applied once the first has cured, building to 200–400 microns DFT for a fully seamless waterproof membrane.',
      },
      {
        title: 'Inspection, Audit & Warranty Sign-Off',
        description:
          'Full project audit and quality inspection. Where manufacturer warranties are issued, the system is signed off by the approved coating supplier.',
      },
    ],
    popularColours: [
      'Anthracite Grey',
      'Terracotta',
      'Tile Red',
      'Dark Green',
      'Custom shades available',
    ],
    faqs: [
      {
        q: 'How much does metal roof coating cost?',
        a: 'Metal roof coating at Sparta Coatings starts from £99 per m². Total cost depends on roof size, substrate condition, extent of corrosion treatment, and the coating system specified.',
      },
      {
        q: 'Can metal roof coating stop leaks?',
        a: 'Yes. Our process includes full seam sealing with polyurethane mastic and reinforcing scrim tape at all joints, laps, bolt heads, and penetrations — creating a fully waterproof detail at every vulnerable point.',
      },
      {
        q: 'What is cut-edge corrosion and can you treat it?',
        a: 'Cut-edge corrosion is the most common failure mode on profiled steel roofs in the UK. We treat all cut edges with rust converter, cold galvanising primer, mastic sealant, and reinforcing tape before applying the full elastomeric coating system.',
      },
      {
        q: 'How long does metal roof coating last?',
        a: 'Our professional metal roof coating systems carry manufacturer warranties of up to 20 years. The Permagard metal roof coating system offers a 20-year transferable and renewable warranty.',
      },
      {
        q: 'Is metal roof coating cheaper than replacement?',
        a: 'Significantly. Full metal roof replacement can cost tens of thousands of pounds and cause weeks of operational disruption. Our professional coating service starts from £99/m² and is typically completed in 2–5 days.',
      },
      {
        q: 'Can you coat asbestos cement roofs?',
        a: 'Yes — through an encapsulation process using specialist coatings that bind and seal asbestos cement fibres, preventing fibre release and water penetration. This requires a specialist survey and assessment.',
      },
    ],
    relatedSlugs: ['cladding-spraying', 'warehouse-industrial-spraying', 'steelwork-spraying'],
  },

  {
    slug: 'warehouse-industrial-spraying',
    name: 'Warehouse & Industrial Spraying',
    shortName: 'Warehouses',
    metaTitle: 'Warehouse & Industrial Spraying From £75/m² | Sparta Coatings',
    metaDescription:
      'Professional warehouse & industrial unit spraying from £75/m². Anti-corrosion coating systems for steel cladding, steelwork & masonry. UK-wide. Get a free quote today.',
    category: 'commercial',
    heroTagline: 'Professional Industrial Exterior Spraying From Just £75/m²',
    intro:
      'Sparta Coatings provide specialist warehouse and industrial unit spraying services for commercial and industrial properties across the South of England and the wider UK. Whether you manage a distribution centre, factory, logistics hub, or industrial estate — our professional coating service delivers a dramatic, durable transformation starting from just £75 per m².',
    suitableFor: [
      'Exterior metal cladding and profiled steel wall panels',
      'Steelwork, columns, and structural frame painting',
      'Roller shutter doors and loading bay doors',
      'Masonry and concrete block industrial elevations',
      'Composite and insulated panel systems',
      'Internal steelwork and mezzanine structures',
    ],
    pricing: [
      { label: 'Exterior cladding / steel wall panels', price: 'From £75/m²' },
      { label: 'Masonry / block exterior elevations', price: 'From £50/m²' },
      { label: 'Structural steelwork', price: 'From £75/m²' },
      { label: 'Roller shutter doors', price: 'From £850 per door' },
      { label: 'Full building exterior package', price: 'POA — free survey' },
    ],
    pricingNote:
      'All pricing includes full condition survey, preparation, priming, coating application, and project sign-off.',
    whySpray: [
      'Protects asset value — A well-maintained industrial building retains far greater commercial value',
      'Prevents corrosion — Industrial-grade anti-corrosion primers inhibit rust on all steel surfaces',
      'UV and chemical resistance — Specialist topcoats resist UV degradation and industrial pollutants',
      'Dramatically cheaper than cladding replacement — Typically 60–80% cheaper',
      'Minimal operational disruption — Out-of-hours and phased working available',
      'ISO 12944-compliant systems — Correct corrosivity category for your environment',
      '10–20 year manufacturer warranties available',
    ],
    products:
      'Rust-Oleum CombiColor Original (direct-to-metal). Sherwin-Williams Dura-Plate 235 (2K Epoxy primer). Jotun Penguard Express ZP (epoxy zinc phosphate). Sherwin-Williams Hi-Build 2K Aliphatic PU topcoat. ISO 12944-compliant.',
    process: [
      {
        title: 'Free Site Survey & Coating Specification',
        description:
          'Full condition survey of all external surfaces — assessing substrate type, corrosion category, existing coating adhesion, and repair requirements.',
      },
      {
        title: 'Method Statement & Risk Assessment',
        description:
          'All industrial projects supported by a full COSHH assessment, risk assessment, and method statement.',
      },
      {
        title: 'HSE-Compliant Access',
        description:
          'All working-at-height operations carried out in full compliance with the Work at Height Regulations 2005.',
      },
      {
        title: 'Industrial Surface Preparation',
        description:
          'Surfaces degreased, pressure-washed, and mechanically prepared to the specified standard. All rust, failed coatings, and contamination removed.',
      },
      {
        title: 'Primer Application',
        description:
          'The specified anticorrosive primer applied by professional airless spray to full dry film thickness. DFT readings taken throughout.',
      },
      {
        title: 'Intermediate Coat (Where Specified)',
        description:
          'High-build epoxy intermediate coat applied between primer and topcoat on C4–C5 environments.',
      },
      {
        title: 'Topcoat Application',
        description:
          'Final colour coat applied in a minimum of two passes by professional airless spray.',
      },
      {
        title: 'DFT Verification, Audit & Warranty Sign-Off',
        description:
          'DFT readings taken at specified intervals. Full quality audit completed. Manufacturer warranties issued.',
      },
    ],
    popularColours: [
      'Any RAL Classic colour',
      'Corporate colours to specification',
      'Matching existing building colours',
    ],
    faqs: [
      {
        q: 'How much does warehouse exterior spraying cost?',
        a: 'Warehouse and industrial unit exterior spraying starts from £75 per m² for metal cladding and steelwork, and from £50 per m² for masonry. Full building packages are priced on a free site survey.',
      },
      {
        q: 'What coating systems do you use on industrial buildings?',
        a: 'We use professional industrial coating systems including Rust-Oleum CombiColor, Sherwin-Williams Dura-Plate 2K epoxy primers, Jotun Penguard epoxy zinc phosphate primers, and Sherwin-Williams aliphatic polyurethane topcoats — specified to the correct ISO 12944 corrosivity category.',
      },
      {
        q: 'Can you spray warehouses without disrupting operations?',
        a: 'Yes. We offer phased working, out-of-hours scheduling, and weekend working to ensure your operation continues throughout the project.',
      },
      {
        q: 'Do you offer fire protection coatings for structural steel?',
        a: 'Yes. We apply Sherwin-Williams Firetex FX6000 intumescent coatings for structural steel requiring passive fire protection, providing certified fire resistance up to 120 minutes.',
      },
      {
        q: 'How long do industrial coatings last?',
        a: 'Industrial coating systems applied by Sparta Coatings are backed by manufacturer warranties of 10–20 years depending on the system specified.',
      },
    ],
    relatedSlugs: ['cladding-spraying', 'steelwork-spraying', 'metal-roof-coating'],
  },

  {
    slug: 'shop-front-spraying',
    name: 'Shop Front Spraying',
    shortName: 'Shop Fronts',
    metaTitle: 'Shop Front Spraying Services | Sparta Coatings',
    metaDescription:
      'Professional shop front spraying for retail & commercial premises. Aluminium, UPVC & steel. Out-of-hours working available. South England & UK. Get a free quote today.',
    category: 'commercial',
    heroTagline: 'Revitalise Your Business\'s First Impression — Professional Shop Front Spraying Nationwide',
    intro:
      'Sparta Coatings provide specialist shop front spraying services for retail, hospitality, and commercial premises across the South of England and the wider UK. Whether your shop front is aluminium, powder-coated, anodised, UPVC, or steel — our professional on-site spraying service delivers a flawless, factory-quality transformation with minimal disruption to your trading hours.',
    suitableFor: [
      'Aluminium shop fronts (powder-coated, bronze anodised, satin anodised)',
      'UPVC shop front frames and doors',
      'Stainless steel shop fronts and cladding panels',
      'Steel and mild steel shop front sections',
      'Composite and mixed-material facades',
      'Timber shop fronts and fascias',
      'Roller shutters and security grilles',
      'Canopies and entrance canopy frames',
    ],
    pricing: [
      { label: 'Single retail unit (standard shop front)', price: 'POA — free survey' },
      { label: 'Multiple unit retail parade', price: 'POA — free survey' },
      { label: 'Roller shutter included', price: 'From £850 per shutter' },
    ],
    pricingNote:
      'Shop front projects vary significantly in size, material, and complexity. Contact us for a free, no-obligation site survey and tailored quotation — we work around your trading hours.',
    whySpray: [
      'Up to 85% cheaper than full shop front replacement',
      'Trade while we work — Out-of-hours and overnight working available as standard',
      'Rebranding made easy — Change to match new branding, signage, or corporate guidelines',
      'Any colour, any RAL — Precise corporate colour matching from any BS, RAL, NCS, or Pantone reference',
      'Chemically bonded finish — Specialist coatings bond to powder coat, anodised aluminium, UPVC, and steel',
      'UV and weatherproof — Resist UV fading, acid rain, and pollution',
      '10-year guarantees — Manufacturer-backed adhesion and colour guarantees available',
    ],
    products:
      '2K Etch Primer (aluminium/anodised). Rust-Oleum 3302 CombiPrimer (galvanised/stainless). Kolorbond Original (UPVC). Rust-Oleum Hard Hat 2K PU topcoat. Kolorbond DecoProt 2K for maximum durability. Corporate colour matching from RAL, NCS, BS, and Pantone.',
    process: [
      {
        title: 'Free Site Survey & Brand Colour Consultation',
        description:
          'We assess your shop front material, condition, and extent — advising on the correct coating system and discussing your brand colour reference.',
      },
      {
        title: 'Out-of-Hours Scheduling',
        description:
          'We work around your business. For retail clients, we typically begin work after closing and aim to have surfaces ready before opening the following morning.',
      },
      {
        title: 'Masking & Protection',
        description:
          'All glazing, signage, and adjacent surfaces are fully masked with professional tape, static masking film, and plastic sheeting.',
      },
      {
        title: 'Cleaning & Degreasing',
        description:
          'All shop front profiles are thoroughly cleaned and degreased with IPA wipe-down.',
      },
      {
        title: 'Mechanical Keying / Abrading',
        description:
          'UPVC surfaces abraded with scotch-brite pads. Aluminium and metal surfaces keyed with 400-grit wet-and-dry paper.',
      },
      {
        title: 'In-Situ Repairs',
        description:
          'Scratches, chips, dents, and damaged profiles are filled and feathered before priming.',
      },
      {
        title: 'Primer Application',
        description:
          'The appropriate 2K etch primer or adhesion primer applied by HVLP spray.',
      },
      {
        title: 'Topcoat Application',
        description:
          'Minimum two full coats of the specified topcoat applied using professional HVLP spray equipment.',
      },
      {
        title: 'De-mask, Inspect & Sign-Off',
        description:
          'All masking carefully removed. Full quality inspection completed before handover.',
      },
    ],
    popularColours: [
      'Any RAL Classic colour',
      'NCS (Natural Colour System) for brand-matched retail',
      'Pantone to RAL conversion',
      'BS 4800 British Standard colours',
      'Bespoke spectrophotometer matching',
    ],
    faqs: [
      {
        q: 'Can you spray aluminium shop fronts?',
        a: 'Yes. We spray all aluminium shop front types including powder-coated, bronze anodised, and satin anodised finishes, using a two-component etch primer followed by a professional 2K polyurethane topcoat.',
      },
      {
        q: 'Can you work outside trading hours to avoid disrupting my business?',
        a: 'Yes — this is standard practice for us. We regularly work evenings and overnight so that all spraying is complete and surfaces are dry before you open the following morning.',
      },
      {
        q: 'Can you match our corporate brand colour exactly?',
        a: 'Yes. We offer full corporate colour matching from RAL, BS, NCS, and Pantone references. We can also use a spectrophotometer to precisely match an existing colour on-site.',
      },
      {
        q: 'How long does shop front spraying take?',
        a: 'Most standard single-unit shop fronts can be fully prepared, primed, and topcoated in a single overnight shift. Larger retail parades may require two to three nights.',
      },
      {
        q: 'Is it worth respraying a shop front rather than replacing it?',
        a: 'Absolutely. Full shop front replacement costs £5,000–£30,000+ and requires shutting your business for days. Professional shop front spraying delivers the same transformation at a fraction of the cost, often completed overnight.',
      },
      {
        q: 'What types of shop front material can you spray?',
        a: 'We spray all common shop front materials including powder-coated aluminium, anodised aluminium, UPVC, mild steel, stainless steel, composite panels, and timber.',
      },
    ],
    relatedSlugs: ['cladding-spraying', 'lift-door-spraying', 'steelwork-spraying'],
  },

  {
    slug: 'steelwork-spraying',
    name: 'Steelwork Spraying',
    shortName: 'Steelwork',
    metaTitle: 'Steelwork Spraying From £75/m² | Sparta Coatings',
    metaDescription:
      'Professional structural steelwork spraying from £75/m². ISO 12944-compliant systems, fire protection coatings & DFT-verified application. South England & UK. Free quote.',
    category: 'commercial',
    heroTagline: 'Professional Structural & Architectural Steelwork Coating From Just £75/m²',
    intro:
      'Sparta Coatings provide specialist steelwork spraying and coating services for structural, architectural, and industrial steel across the South of England and the wider UK. Whether you need new structural steel primed and finished on-site, existing steelwork refurbished, or a full corrosion protection system specified to ISO 12944 — our trained applicators deliver compliant, durable, and visually exceptional results starting from just £75 per m².',
    suitableFor: [
      'Structural steel frames and columns (I-section, H-section, CHS, RHS)',
      'Mezzanine floors and industrial platforms',
      'Steel staircases, balustrades, and handrails',
      'Purlins, cleats, and secondary steelwork',
      'Canopies, canopy frames, and entrance structures',
      'Car park and multi-storey steel structures',
      'Bridges and footbridges',
      'New build primer and holding primer application',
    ],
    pricing: [
      { label: 'Structural steelwork (exterior)', price: 'From £75/m²' },
      { label: 'Internal structural steel (refurbishment)', price: 'From £65/m²' },
      { label: 'New build primer / holding primer', price: 'POA — free survey' },
      { label: 'Intumescent fire protection coating', price: 'POA — structural engineer\'s specification required' },
    ],
    pricingNote:
      'All pricing includes condition survey, surface preparation, primer, and topcoat application with DFT verification throughout.',
    whySpray: [
      'ISO 12944-compliant systems — Every project specified to the correct corrosivity category',
      'BS EN ISO 8501 surface preparation — All steel prepared to the defined cleanliness standard',
      'DFT-verified application — Dry film thickness readings taken throughout',
      'Up to 25-year service life — High-durability coating systems available',
      'On-site application — No disruption from removing steel off-site',
      'Intumescent fire protection available — Passive fire protection where required',
      'Full method statement and COSHH documentation — Provided on all projects',
    ],
    products:
      'Jotun Penguard Express (2K Epoxy ZP primer). Jotun Jotamastic 80 (surface-tolerant epoxy). Sherwin-Williams Dura-Plate 235 (2K Epoxy). Jotun Hardtop AX (2K Aliphatic PU topcoat). Sherwin-Williams Firetex FX6000 (intumescent fire protection).',
    process: [
      {
        title: 'Free Survey, Specification & Risk Assessment',
        description:
          'Full condition survey, corrosivity category determination, coating specification, and full method statement produced.',
      },
      {
        title: 'HSE-Compliant Safe Access',
        description:
          'All steelwork operations at height carried out in full compliance with the Work at Height Regulations 2005.',
      },
      {
        title: 'Surface Preparation',
        description:
          'Steel prepared to the specified ISO 8501 standard — Sa 2½ by abrasive blast cleaning or St 3 power tool cleaning for refurbishment.',
      },
      {
        title: 'Soluble Salt Testing (Where Specified)',
        description:
          'On high-specification projects, soluble salt levels tested before priming, ensuring compliance with ISO 8502-9.',
      },
      {
        title: 'Primer Application with DFT Verification',
        description:
          'The specified primer applied by professional airless spray. DFT readings taken using a calibrated gauge.',
      },
      {
        title: 'Intermediate Coat (Where Specified)',
        description:
          'High-build intermediate coats applied where the total system DFT requires additional build — typically on C4–C5 systems.',
      },
      {
        title: 'Topcoat Application',
        description:
          'Final colour coat applied in a minimum of two passes, achieving full coverage and specified gloss level.',
      },
      {
        title: 'Intumescent Fire Coat (Where Required)',
        description:
          'Intumescent topcoats applied at thickness determined by the structural engineer\'s fire engineering specification.',
      },
      {
        title: 'Full Project Audit, DFT Report & Sign-Off',
        description:
          'Complete DFT inspection report produced. Project signed off and all documentation issued to the client.',
      },
    ],
    popularColours: [
      'Any RAL Classic colour',
      'Gloss Black (RAL 9005)',
      'Anthracite Grey (RAL 7016)',
      'Signal White (RAL 9003)',
      'Corporate colours to specification',
    ],
    faqs: [
      {
        q: 'How much does steelwork spraying cost?',
        a: 'Steelwork spraying at Sparta Coatings starts from £75 per m² for exterior structural steel and from £65/m² for internal steel refurbishment. Intumescent fire protection is priced on the structural engineer\'s specification.',
      },
      {
        q: 'What is ISO 12944 and do you comply with it?',
        a: 'ISO 12944 is the international standard for corrosion protection of steel structures by protective paint systems. Sparta Coatings specify and apply all steelwork coating systems to the correct ISO 12944 category for your project\'s environment.',
      },
      {
        q: 'Can you apply fire protection coatings to structural steel?',
        a: 'Yes. We apply both water-based and solvent-based intumescent fire protection coatings including Jotun Steelmaster 600WF (up to 90 minutes) and Sherwin-Williams Firetex FX6000 (up to 120 minutes).',
      },
      {
        q: 'What surface preparation standard do you use for steelwork?',
        a: 'All steelwork is prepared to the specified ISO 8501 cleanliness standard — typically Sa 2½ by abrasive blast cleaning for new and heavily corroded steel, or St 3 for on-site refurbishment.',
      },
      {
        q: 'Do you verify the dry film thickness (DFT) of applied coatings?',
        a: 'Yes. DFT readings are taken throughout every steelwork project using a calibrated gauge. A full DFT inspection report is issued to the client on completion.',
      },
      {
        q: 'Can you spray existing corroded steelwork on-site?',
        a: 'Yes. For maintenance and refurbishment projects, we use surface-tolerant epoxy mastic systems such as Jotun Jotamastic 80 — which can be applied over tightly adherent rust and marginally prepared steel.',
      },
    ],
    relatedSlugs: ['cladding-spraying', 'warehouse-industrial-spraying', 'metal-roof-coating'],
  },

  {
    slug: 'lift-door-spraying',
    name: 'Lift Door Spraying',
    shortName: 'Lift Doors',
    metaTitle: 'Lift Door Spraying From £299 | Sparta Coatings',
    metaDescription:
      'Professional lift door spraying from just £299. Stainless steel, powder-coated & painted doors restored on-site. Out-of-hours service available. UK-wide. Free quote.',
    category: 'commercial',
    heroTagline: 'Restore Your Lift Doors From Just £299 — Any Surface, Any Colour',
    intro:
      'Sparta Coatings provide professional lift door spraying services for offices, hotels, retail premises, hospitals, residential blocks, and commercial buildings across the South of England and the wider UK. Our specialist on-site coating service completely restores lift doors and surrounds from just £299 per door set.',
    suitableFor: [
      'Stainless steel lift doors (brushed, satin, and mirror polished)',
      'Powder-coated steel lift doors',
      'Painted mild steel lift doors',
      'Aluminium lift doors and surrounds',
      'Lift surrounds, architraves, and threshold strips',
      'Passenger lifts, goods lifts, and platform lifts',
    ],
    pricing: [
      { label: 'Single lift door set (per floor)', price: 'From £299' },
      { label: 'Full lift refurbishment (all floors)', price: 'POA — free survey' },
      { label: 'Surround, architrave & threshold', price: 'Included in package' },
      { label: 'Out-of-hours / overnight service', price: 'Available — ask for details' },
    ],
    pricingNote:
      'All pricing includes surface preparation, masking, priming, topcoat application, and quality inspection.',
    whySpray: [
      'Dramatically cheaper than lift door panel replacement',
      'Out-of-hours working — Completed overnight or during low-footfall periods',
      'Stainless steel coatable — Specialist products bond to brushed and polished stainless',
      'Brand colour alignment — Change or match to any RAL, BS, or corporate colour reference',
      'In-situ repair — Dents, scratches, scuffs, and stains repaired before coating',
      'Hardwearing 2K finish — Two-pack acrylic or polyurethane topcoats resist daily wear',
      'Zero lift downtime — We work one door at a time to keep your lift operational',
    ],
    products:
      '2K Etch Primer for stainless steel and aluminium. Rust-Oleum 3302 CombiPrimer for powder-coated doors. PPG Selemix 2K Direct Gloss/Satin. Rust-Oleum Hard Hat 2K PU. Low-odour water-based 2K acrylic available for occupied buildings.',
    process: [
      {
        title: 'Free Survey & Colour Consultation',
        description:
          'We assess all lift doors across the building — recording surface material, condition, extent of damage, and number of floors. We agree an out-of-hours working schedule.',
      },
      {
        title: 'Out-of-Hours Scheduling',
        description:
          'Most lift door projects are scheduled overnight or during low-footfall periods. We agree the programme in advance with facilities management.',
      },
      {
        title: 'Masking & Protection',
        description:
          'All adjacent surfaces — walls, floor thresholds, call buttons, and door mechanisms — are fully masked.',
      },
      {
        title: 'Cleaning & Degreasing',
        description: 'All door surfaces thoroughly wiped down with IPA to remove all grease and contamination.',
      },
      {
        title: 'Abrading & Keying',
        description:
          'All surfaces mechanically keyed with appropriate abrasive pads — cutting through the oxide layer on stainless steel.',
      },
      {
        title: 'In-Situ Repair',
        description:
          'Dents, deep scratches, and scuffs filled with aluminium epoxy filler and feathered flat before priming.',
      },
      {
        title: 'Primer Application',
        description:
          'The appropriate etch primer or adhesion primer applied by HVLP spray, achieving a fully bonded base layer.',
      },
      {
        title: 'Topcoat Application',
        description:
          'A minimum of two full coats of the specified 2K topcoat applied, achieving a consistent, even finish across both door faces and all surrounding profiles.',
      },
      {
        title: 'De-mask, Inspect & Handover',
        description:
          'All masking removed, door mechanisms checked for free operation, and a quality inspection completed before the building re-opens.',
      },
    ],
    popularColours: [
      'Metallic Silver / Brushed Steel Effect',
      'Any RAL Classic colour',
      'Corporate brand colours',
      'NCS and Pantone-matched shades',
      'Gloss, satin, or matte finishes',
    ],
    faqs: [
      {
        q: 'How much does lift door spraying cost?',
        a: 'Lift door spraying at Sparta Coatings starts from £299 per door set. Full building programmes covering all floors are priced on a free site survey.',
      },
      {
        q: 'Can you spray stainless steel lift doors?',
        a: 'Yes. We use a two-component etch primer specifically formulated to chemically bond to the passive oxide layer on stainless steel, followed by a professional 2K two-pack acrylic or polyurethane topcoat.',
      },
      {
        q: 'Can lift door spraying be done out of hours?',
        a: 'Yes — this is standard practice. We work overnight or during low-footfall periods to ensure the lift remains operational and building users experience minimal disruption.',
      },
      {
        q: 'Can you match our corporate brand colour on lift doors?',
        a: 'Yes. We offer full colour matching across RAL Classic, BS 4800, NCS, and Pantone references — ensuring your lift doors align precisely with your building\'s interior design or corporate brand guidelines.',
      },
      {
        q: 'What finishes are available for lift door spraying?',
        a: 'We offer gloss, satin, matte, metallic brushed steel effects, anti-fingerprint clear coats, and specialist textured finishes including crocodile skin.',
      },
    ],
    relatedSlugs: ['shop-front-spraying', 'steelwork-spraying', 'warehouse-industrial-spraying'],
  },
];

export default services;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: 'residential' | 'commercial'): Service[] {
  return services.filter((s) => s.category === category);
}

export function getAllSlugs(): string[] {
  return services.map((s) => s.slug);
}
