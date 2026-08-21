// ─────────────────────────────────────────────────────────────────────────────
// config.js — Edit this file to personalize your academic homepage.
// No HTML/CSS knowledge required.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "Transient Catalysis Lab",
  initials:   "YN",
  role:       "for <i>operando</i> spectrokinetics",
  university: "UCD",
  email:      "your.email@university.edu",
  bio:        "Exploring the frontiers of your research area, machine learning, and artificial intelligence. Building intelligent systems that advance scientific discovery.",
  photo:      "",   // optional: path to your photo, e.g. "assets/photo.jpg"

  stats: [
    { value: "10+",  label: "Publications" },
    { value: "200+", label: "Citations" },
    { value: "5+",   label: "Projects" },
  ],

  links: {
    scholar: "https://scholar.google.com/citations?user=2mBlMQ8AAAAJ&hl=en",
    github:  "https://github.com/",
    twitter: "",          // leave empty to hide
    cv:      "assets/cv.pdf",
  },

  publications: [
    {
      year:     2026,
      title:    "Impurity Detection and Quantification in Polymer Films by Two-Dimensional Infrared Spectroscopic Imaging and Multivariate Analysis",
      authors:  "Abdullah J. Al Abdulghani; Nobutaka Maeda; Guillaume Lambard; Adroit T. N. Fajar",
      venue:    "Analytical Chemistry",
      links:    {URL: " https://doi.org/10.1021/acs.analchem.6c01498"},
      abstract: "Impurities in polymer films dramatically influence activity and stability, highlighting the necessity of detecting their presence accurately and rapidly. Herein, we report multivariate analytical approaches based on transflection infrared spectroscopic imaging as a proof of concept for the detection and quantification of impurities. The developed methodology enables impurity detection, quantitative estimation of concentration, and spatial mapping within polymer films. When the IR spectra of the impurities were known, classical least-squares (CLS) analysis and supervised machine learning models predicted impurity concentrations with mean absolute errors below 0.1% and 0.8%, respectively, in controlled synthetic benchmarking data sets. When impurities or their spectra were unknown, a principal component analysis (PCA)-based unsupervised approach identified anomalous spectra associated with impurities with a detection accuracy exceeding 90% under synthetic test conditions. The workflow was further evaluated on experimentally collected data sets, demonstrating practical applicability for rapid, high-throughput detection with minimal preprocessing and compatibility with automated sample handling. We finally identify opportunities for further improvement, particularly in mitigating the influence of atmospheric water vapor and carbon dioxide fluctuations during IR measurements.",
      abstractImg: "assets/graphicalAbstracts/21.png",
    },
    {
      year:     2026,
      title:    "Interfacial Dynamics of Pt/TiO2 Encapsulation by Strong Metal–Support Interaction under Repeated Redox Cycles",
      authors:  "Abdullah J. Al Abdulghani; Yucheng Qian; Akihiko Anzai; Shuhei Shimoda; Ken-ichi Shimizu; Keiko Kojima; Takeharu Sugiyama; Nobutaka Maeda",
      venue:    "The Journal of Physical Chemistry C",
      links:    {URL: " https://doi.org/10.1021/acs.jpcc.6c01787"},
      abstract: "Strong metal–support interaction (SMSI) represents a fundamental phenomenon in heterogeneous catalysis, significantly influencing activity, selectivity, and stability. Traditionally, SMSI has been characterized only at its final state, overlooking the transient evolution of interfacial processes. In this study, we provide a direct visualization of interfacial SMSI dynamics under repeated rapid redox cycles using modulation-excitation X-ray absorption spectroscopy (ME-XAS), providing real-time insights into structural and electronic transformations at the metal–support interface. Our findings systematically reveal how critical factors governing SMSI (metal loading, gas atmosphere, and temperature) induce distinct spectral changes at the Pt LIII- and Ti K-edges. Complete and reversible encapsulation occurred under rapid reductive treatment at 600 °C for the sample with the lowest Pt loading (1 wt %) and a mean particle size of 2.7 nm. Our analysis indicates that lower Pt loading enhances the reducibility of the titania support and accelerates reduction kinetics. The ME methodology revealed the relative rates of the SMSI encapsulation process, confirming a sequential mechanism: initial TiO2 reduction, subsequent Pt surface reduction, and eventual formation of Pt–Ti interfacial bonds. This comprehensive understanding of SMSI dynamics offers new insights for designing robust and efficient catalysts for industrial applications.",
      abstractImg: "assets/graphicalAbstracts/20.png",
    },
  ],

  projects: [
    {
      name: "Project Name",
      desc: "Brief description of your project and its impact.",
      tags: ["Python", "PyTorch"],
      url:  "#",
    },
  ],

  news: [
    { date: "2025.01", badge: "New",   text: "Paper accepted at Conference 2025!" },
    { date: "2024.09", badge: "Award", text: "Received fellowship / award." },
  ],

  education: [
    { period: "2020–Present", degree: "Ph.D. in Computer Science", institution: "Your University" },
    { period: "2016–2020",    degree: "B.S. in Computer Science",  institution: "Your University" },
  ],

  experience: [
    { period: "Summer 2024", role: "Research Intern", institution: "Research Lab / Company" },
  ],
};
