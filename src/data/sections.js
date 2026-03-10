export const NAV_SERVICES = [
  { label: 'Warehousing',   href: '#warehousing' },
  { label: 'Air Freight',   href: '#air' },
  { label: 'Ocean Freight', href: '#ocean' },
  { label: 'Road Freight',  href: '#road' },
  { label: 'Supply Chain',  href: '#supply' },
  { label: 'Packaging',     href: '#packaging' },
]

export const SECTIONS = [
  {
    id: 'hero',
    theme: 'dark',
    bg: 'hero',
    eyebrow: 'Global Logistics',
    heading: 'Move Anything.\nAnywhere. Always.',
    sub: 'Precision freight solutions across air, sea, road, and supply chain — engineered for the world\'s most demanding industries.',
    specs: [
      { val: '150+', key: 'Countries Served' },
      { val: '98%',  key: 'On-Time Rate' },
      { val: '3,200',key: 'Global Partners' },
      { val: '24/7', key: 'Live Support' },
    ],
    btns: [
      { label: 'Request a Quote', style: 'secondary', action: 'quote' },
      { label: 'Track a Shipment', style: 'primary',  action: 'track' },
    ],
    footnote: 'Warehouse · Air · Ocean · Road · Supply Chain · Packaging',
    scrollCue: true,
  },
  {
    id: 'warehousing',
    theme: 'light',
    bg: 'warehouse',
    eyebrow: 'What We Do',
    heading: 'Warehousing',
    sub: 'Smart, scalable storage with real-time inventory intelligence across 80+ global facilities.',
    specs: [
      { val: '80+',  key: 'Facilities Worldwide' },
      { val: '2M',   key: 'Sq Ft Storage' },
      { val: '100%', key: 'Inventory Tracked' },
    ],
    btns: [
      { label: 'Learn More',     style: 'dark',  action: 'scroll:#air' },
      { label: 'Request Space',  style: 'light', action: 'contact' },
    ],
  },
  {
    id: 'air',
    theme: 'dark',
    bg: 'air',
    eyebrow: 'What We Do',
    heading: 'Air Freight',
    sub: 'Express, standard & charter cargo across 300+ airports worldwide. Hazmat certified. Cold chain ready.',
    specs: [
      { val: '300+', key: 'Airports' },
      { val: '48h',  key: 'Express Delivery' },
      { val: '99%',  key: 'On-Time' },
    ],
    btns: [
      { label: 'Get Air Quote', style: 'secondary', action: 'quote' },
      { label: 'Track Cargo',   style: 'primary',   action: 'track' },
    ],
  },
  {
    id: 'ocean',
    theme: 'dark',
    bg: 'ocean',
    eyebrow: 'What We Do',
    heading: 'Ocean Freight',
    sub: 'FCL and LCL solutions across all major sea lanes. Break bulk, reefer, and project cargo specialists.',
    specs: [
      { val: '120+', key: 'Shipping Lines' },
      { val: '500+', key: 'Ports Covered' },
      { val: '40yr', key: 'Experience' },
    ],
    btns: [
      { label: 'Get Sea Quote',   style: 'secondary', action: 'quote' },
      { label: 'Vessel Tracker',  style: 'primary',   action: 'track' },
    ],
  },
  {
    id: 'road',
    theme: 'dark',
    bg: 'road',
    eyebrow: 'What We Do',
    heading: 'Road Freight',
    sub: 'GPS-tracked fleets delivering cross-border and last-mile freight across 60+ countries around the clock.',
    specs: [
      { val: '5,000+', key: 'Fleet Vehicles' },
      { val: '60+',    key: 'Countries' },
      { val: '24h',    key: 'Dispatch' },
    ],
    btns: [
      { label: 'Book a Truck',  style: 'secondary', action: 'quote' },
      { label: 'Live Tracking', style: 'primary',   action: 'track' },
    ],
  },
  {
    id: 'supply',
    theme: 'dark',
    bg: 'supply',
    eyebrow: 'What We Do',
    heading: 'Supply Chain',
    sub: 'End-to-end visibility, demand planning, and risk intelligence — from raw material to retail shelf.',
    specs: [
      { val: 'Real-Time', key: 'Visibility' },
      { val: 'AI-Driven', key: 'Demand Planning' },
      { val: 'Zero',      key: 'Blind Spots' },
    ],
    btns: [
      { label: 'Optimize Now',     style: 'red',     action: 'quote' },
      { label: 'Talk to Expert',   style: 'primary', action: 'contact' },
    ],
  },
  {
    id: 'packaging',
    theme: 'light',
    bg: 'packaging',
    eyebrow: 'What We Do',
    heading: 'Packaging',
    sub: 'Custom industrial and retail packaging engineered for protection, brand presentation, and compliance.',
    specs: [
      { val: 'Industrial', key: 'Grade Materials' },
      { val: '100%',       key: 'Hazmat Compliant' },
      { val: 'Eco',        key: 'Sustainable Options' },
    ],
    btns: [
      { label: 'Request Samples', style: 'dark',  action: 'contact' },
      { label: 'View Catalog',    style: 'light', action: 'contact' },
    ],
  },
  {
    id: 'industries',
    theme: 'dark',
    bg: 'industries',
    eyebrow: 'Who We Serve',
    heading: 'Industries We Power',
    sub: 'Specialized logistics built around the unique challenges of your sector.',
    industries: [
      { icon: '🛍️', name: 'Retail & Consumer' },
      { icon: '🔬', name: 'Sciences & Healthcare' },
      { icon: '⚙️', name: 'Industrial & Chemical' },
      { icon: '⚡', name: 'Power Generation' },
      { icon: '🍎', name: 'Food & Beverage' },
      { icon: '🛢️', name: 'Oil & Gas' },
    ],
    btns: [
      { label: 'Find Your Solution',   style: 'secondary', action: 'quote' },
      { label: 'Talk to a Specialist', style: 'primary',   action: 'contact' },
    ],
  },
  {
    id: 'quote',
    theme: 'dark',
    bg: 'quote',
    eyebrow: 'Quick Links',
    heading: 'Request a Quote',
    sub: 'Tell us what you need to move. We\'ll respond within 2 hours.',
    isQuoteSection: true,
    btns: [
      { label: '📦 Track & Trace',   style: 'ghost', action: 'track' },
      { label: '🗺 Find a Location', style: 'ghost', action: 'contact' },
      { label: '📞 Contact Us',      style: 'ghost', action: 'contact' },
    ],
  },
]

export const FOOTER_COLS = [
  {
    title: 'Who We Are',
    links: ['About Us', 'Meet Our Team', 'Contacts', 'Careers', 'Newsroom'],
  },
  {
    title: 'What We Do',
    links: ['Warehousing', 'Air Freight', 'Ocean Freight', 'Road Freight', 'Supply Chain', 'Packaging'],
    hrefs: ['#warehousing','#air','#ocean','#road','#supply','#packaging'],
  },
  {
    title: 'Who We Serve',
    links: ['Retail & Consumer','Sciences & Healthcare','Industrial & Chemical','Power Generation','Food & Beverage','Oil & Gas'],
  },
  {
    title: 'Quick Links',
    links: ['Request a Quote','Track & Trace','Find a Location','Contact Us'],
    actions: ['quote','track','contact','contact'],
  },
]

export const TRACK_SCENARIOS = [
  {
    status: 'In Transit — On Schedule',
    color: '#22c55e',
    steps: [
      { done: true,   label: 'Shipment Collected',        time: 'Mar 07, 2025 · 08:14 — Origin Warehouse' },
      { done: true,   label: 'Departed Origin Hub',       time: 'Mar 08, 2025 · 14:30 — FRA Airport' },
      { active: true, label: 'In Transit — Frankfurt Hub',time: 'Mar 09, 2025 · 07:52 (Live)' },
      { done: false,  label: 'Arrived Destination Hub',   time: 'Estimated Mar 11, 2025' },
      { done: false,  label: 'Out for Final Delivery',    time: 'Estimated Mar 12, 2025' },
    ],
  },
  {
    status: 'Arrived at Destination Hub',
    color: '#f59e0b',
    steps: [
      { done: true,   label: 'Shipment Collected',        time: 'Mar 06, 2025 · 09:00' },
      { done: true,   label: 'Departed Origin Hub',       time: 'Mar 07, 2025 · 11:20' },
      { done: true,   label: 'In Transit',                time: 'Mar 08, 2025 · 06:00' },
      { active: true, label: 'Arrived — Dubai Hub',       time: 'Mar 10, 2025 · 11:20 (Live)' },
      { done: false,  label: 'Out for Final Delivery',    time: 'Estimated Mar 11, 2025' },
    ],
  },
  {
    status: 'Out for Final Delivery',
    color: '#22c55e',
    steps: [
      { done: true,   label: 'Shipment Collected',        time: 'Mar 05, 2025 · 07:45' },
      { done: true,   label: 'Departed Origin Hub',       time: 'Mar 06, 2025 · 13:00' },
      { done: true,   label: 'In Transit',                time: 'Mar 07, 2025 · 09:00' },
      { done: true,   label: 'Arrived Destination Hub',   time: 'Mar 09, 2025 · 15:30' },
      { active: true, label: 'Out for Final Delivery',    time: 'Mar 10, 2025 · 08:05 (Live)' },
    ],
  },
]
