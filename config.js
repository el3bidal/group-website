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
      links:    {URL: "https://doi.org/10.1021/acs.analchem.6c01498"},
      abstractImg: "assets/graphicalAbstracts/21.png",
    },
    {
      year:     2026,
      title:    "Interfacial Dynamics of Pt/TiO2 Encapsulation by Strong Metal–Support Interaction under Repeated Redox Cycles",
      authors:  "Abdullah J. Al Abdulghani; Yucheng Qian; Akihiko Anzai; Shuhei Shimoda; Ken-ichi Shimizu; Keiko Kojima; Takeharu Sugiyama; Nobutaka Maeda",
      venue:    "The Journal of Physical Chemistry C",
      links:    {URL: "https://doi.org/10.1021/acs.jpcc.6c01787"},
      abstractImg: "assets/graphicalAbstracts/20.png",
    },
	{
      year:     2025,
      title:    "Quadruple switchable catalysis: sp3 C–H arylation, aminomethylation, sp2 C–H arylation, and deiodination",
      authors:  "Abhijit Sen; Yuta Matsukawa; Atsuya Muranaka; Yu Hatakenaka; Abdullah J. Al Abdulghani; Nobutaka Maeda; Aya Ohno; Heeyoel Baek; Yoichi M. A. Yamada",
      venue:    "ACS Catalysis",
      links:    {URL: "https://doi.org/10.1021/acscatal.5c08315"},
      abstractImg: "assets/graphicalAbstracts/19.png",
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
