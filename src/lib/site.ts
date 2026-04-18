export const SITE = {
  name: "Srivatsala Silver House",
  tagline: "Gold & Silver Jewellery",
  address:
    "Opposite Gayathri Clinic, Revallapalem Road, Madhurawada, Visakhapatnam-530048, Andhra Pradesh",
  city: "Visakhapatnam",
  phone: "+91 97041 10147",
  phoneRaw: "919704110147",
  whatsappMessage:
    "Hi Srivatsala Silver House, I want to enquire about jewellery",
  hours: "Mon–Sun · 10:30 AM – 9:00 PM",
};

export const waLink = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(msg)}`;
