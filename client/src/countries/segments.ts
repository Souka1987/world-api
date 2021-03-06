const segments = [
  //  Continents
  "america π",
  "oceania π",
  "europe π",
  "africa π",
  "asia π",
  // Affiliation
  "United Nations πΊπ³",
  "European Union πͺπΊ",
  "NATO",
  "G7",
  "G20",
];

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default segments.map((segment) => ({
  id: segment,
  name: capitalizeFirstLetter(segment),
}));
