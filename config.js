// ─────────────────────────────────────────────────────────────────────────────
// config.js — Edit this file to personalize your academic homepage.
// No HTML/CSS knowledge required.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "Transient Catalysis Lab",
  initials:   "TCL",
  role:       "for <i>operando</i> spectrokinetics",
  university: "UCD",
  email:      "abdullah.alabdulghani@ucd.ie",
  bio:        "Exploring the frontiers of your research area, machine learning, and artificial intelligence. Building intelligent systems that advance scientific discovery.",
  photo:      "",   // optional: path to your photo, e.g. "assets/photo.jpg"

  stats: [
    { value: "20+",  label: "Publications" },
    { value: "600+", label: "Citations" },
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
	{
      year:     2025,
      title:    "Development of Modulation-Excitation Synchrotron Small-Angle X-ray Scattering with Subnanometer Resolution",
      authors:  "Abdullah J. Al Abdulghani; Yoichi M. A. Yamada; Junji Hyodo; Takeharu Sugiyama; Nobutaka Maeda",
      venue:    "The Journal of Physical Chemistry C",
      links:    {URL: "https://doi.org/10.1021/acs.jpcc.5c03542"},
      abstractImg: "assets/graphicalAbstracts/18.png",
    },
	{
      year:     2025,
      title:    "Uncovering the pressure-dependent mechanism of CO2 hydrogenation to methanol on Ga-promoted Cu/ZrO2 using operando modulation-excitation DRIFTS",
      authors:  "Abdullah J. Al Abdulghani; Sudipta Ganguly; Ryan H. Hagmann; Zhuoran Sun; Matias Alvear; Lesli O. Mark; Eranda Nikolla; Yomaira J. Pagán-Torres; Ive Hermans",
      venue:    "Journal American Chemical Society",
      links:    {URL: "https://doi.org/10.1021/jacs.5c04835"},
      abstractImg: "assets/graphicalAbstracts/17.png",
    },
	{
      year:     2025,
      title:    "CO2 Capture and Reduction to CO in the Presence of CO over In-Cs/ZrO2 Dual-Functional Materials",
      authors:  "Yuxuan Xie; Shinta Miyazaki; Lingcong Li; Kai Li; Fei Wang; Akira Oda; Atsushi Satsuma; Abdullah J. Al Abdulghani; Nobutaka Maeda; Akihiko Anzai; Takashi Toyao; Ken-ichi Shimizu",
      venue:    "ACS Catalysis",
      links:    {URL: "https://doi.org/10.1021/acscatal.5c02675"},
      abstractImg: "assets/graphicalAbstracts/16.png",
    },
	{
      year:     2025,
      title:    "Surface Dynamics and Size Sensitivity of Pt-Catalyzed Methane Oxidation Probed by Modulation-Excitation X‑ray Absorption Spectroscopy",
      authors:  "Abdullah J. Al Abdulghani; Yucheng Qian; Ken-ichi Shimizu; Takeharu Sugiyama; Nobutaka Maeda",
      venue:    "The Journal of Physical Chemistry Letters",
      links:    {URL: "https://doi.org/10.1021/acs.jpclett.5c00380"},
      abstractImg: "assets/graphicalAbstracts/15.png",
    },
	{
      year:     2025,
      title:    "Toward Low-Temperature Regeneration of CO2 Capture Adsorbents: Functionalization of Polyethylenimine",
      authors:  "Abdullah J. Al Abdulghani; Florian Weisshar; Jannis Hack; Adroit T. N. Fajar; Guillaume Lambard; Nobutaka Maeda",
      venue:    "ACS Sustainable Chemistry & Engineering",
      links:    {URL: "https://doi.org/10.1021/acssuschemeng.5c01250"},
      abstractImg: "assets/graphicalAbstracts/14.png",
    },
	{
      year:     2025,
      title:    "Preventing Loss of Selectivity during the Oxidative Dehydrogenation of Propane over Supported Vanadium Catalysts",
      authors:  "Abdullah J. Al Abdulghani; Unni Kurumbail; Son Dong; Natalie R. Altvater; Rick W. Dorn; Melissa C. Cendejas; William P. McDermott; Theodore O. Agbi; Collin M. Queen; Matias Alvear; Ashley R. Head; Aaron J. Rossini; Ive Hermans",
      venue:    "ACS Catalysis",
      links:    {URL: "https://doi.org/10.1021/acscatal.5c00720"},
      abstractImg: "assets/graphicalAbstracts/13.png",
    },
	{
      year:     2025,
      title:    "Can the Hock Process Be Used to Produce Phenol from Polystyrene?",
      authors:  "Doohyun Baek; Abdullah J. Al Abdulghani; Dylan J. Walsh; Dillon T. Hofsommer; James B. Gerken; Changxia Shi; Eugene Y.-X. Chen; Ive Hermans; Shannon S. Stahl",
      venue:    "Journal of the American Chemical Society",
      links:    {URL: "https://doi.org/10.1021/jacs.4c18143"},
    },
	{
      year:     2025,
      title:    "Ammonia: A vital additive in the epoxidation of propylene over TS-1 extrudates",
      authors:  "Matias Alvear; Jadiel Lopez-Gonzalez; Christopher Stäglich; Abdullah J. Al Abdulghani; Kari Eränen; Stefan Haase; Tapio Salmi; Ive Hermans",
      venue:    "Chemical Engineering Journal",
      links:    {URL: "https://doi.org/10.1016/j.cej.2025.160229"},
    },
	{
      year:     2024,
      title:    "The Aqueous and Acetonitrile Bond Dissociation Free Energies of N‑Hydroxyphthalimide",
      authors:  "James B. Gerken; Shannon L. Goes; Paige E. Piszel; Abdullah J. Al Abdulghani; Ive Hermans; Shannon S. Stahl",
      venue:    "The Journal of Organic Chemistry",
      links:    {URL: "https://doi.org/10.1021/acs.joc.4c01734"},
    },
	{
      year:     2024,
      title:    "Realizing synergy between Cu, Ga, and Zr for selective CO2 hydrogenation to methanol",
      authors:  "Abdullah J. Al Abdulghani; Edgar E. Turizo-Pinilla; Maria J. Fabregas-Angulo; Ryan H. Hagmann; Faysal Ibrahim; Jacob H. Jansen; Theodore O. Agbi; Samiha Bhat; Miguel Sepúlveda-Pagán; Morgan O. Kraimer; Collin M. Queen; Zhuoran Sun; Eranda Nikolla; Yomaira J. Pagán-Torres; Ive Hermans",
      venue:    "Applied Catalysis B: Environment and Energy",
      links:    {URL: "https://doi.org/10.1016/j.apcatb.2024.124198"},
      abstractImg: "assets/graphicalAbstracts/9.png",
    },
	{
      year:     2024,
      title:    "Sustainable and Stable Esterification Catalysts Made from Titanium–Bismuth Clusters",
      authors:  "Jacob H. Jansen; Destiny Mathews; Alexander Marrione; Jalianet Román-Matías; Abdullah Al Abdulghani; Adam B. Powell; Selim Gerislioglu; William Keown; Sarah E. Specht; Ive Hermans",
      venue:    "ACS Sustainable Chemistry & Engineering",
      links:    {URL: "https://doi.org/10.1021/acssuschemeng.4c00561"},
    },
	{
      year:     2024,
      title:    "Ti-MWW Catalysts for Propylene Oxide Production: Influence of Si/Ti Ratio and Calcination Conditions",
      authors:  "Matias Alvear; Christoph Schmidt; Ole Reinsdorf; Edgard Lebron-Rodrigez; Abdullah Al Abdulghani; Ive Hermans; Markus Peurla; Mika Lastusaari; Kari Eränen; Dmitry Yu. Murzin; Narendra Kumar; Tapio Salmi",
      venue:    "Catalysis Letters",
      links:    {URL: "https://doi.org/10.1007/s10562-023-04350-x"},
    },
	{
      year:     2023,
      title:    "Catalytic conversion of model compounds of plastic pyrolysis oil over ZSM-5",
      authors:  "Son Dong; Houqian Li; Iris K. Bloede; Abdullah J. Al Abdulghani; Edgard A. Lebrón-Rodríguez; George W. Huber; Ive Hermans",
      venue:    "Applied Catalysis B: Environmental",
      links:    {URL: "https://doi.org/10.1016/j.apcatb.2022.122219"},
    },
	{
      year:     2022,
      title:    "Quantification of Exchanged Copper Species in Cu-Chabazite Zeolite using Cryogenic Probe Infrared Spectroscopy",
      authors:  "Shao-Chun Wang; Abdullah Al Abdulghani; Edgard A. Lebrón-Rodríguez; Wei-Shang Lo; Haiyang Zhu; Ahmad Moini; Ivan Petrovic; Subramanian Prasad; Ive Hermans",
      venue:    "ChemCatChem",
      links:    {URL: "https://doi.org/10.1002/cctc.202200725"},
      abstractImg: "assets/graphicalAbstracts/5.png",
    },
	{
      year:     2020,
      title:    "Methane dry reforming on supported cobalt nanoparticles promoted by boron",
      authors:  "Abdullah J. Al Abdulghani; Jung-Hyun Park; Sergey M. Kozlov; Dong-Chang Kang; Bedour AlSabban; Srikanth Pedireddy; Antonio Aguilar-Tapia; Samy Ould-Chikh; Jean-Louis Hazemann; Jean-Marie Basset; Luigi Cavallo; Kazuhiro Takanabe",
      venue:    "Journal of Catalysis",
      links:    {URL: "https://doi.org/10.1016/j.jcat.2020.09.015"},
    },
	{
      year:     2019,
      title:    "Turning a Methanation Co Catalyst into an In–Co Methanol Producer",
      authors:  "Anastasiya Bavykina; Irina Yarulina; Abdullah J. Al Abdulghani; Lieven Gevers; Mohamed Nejib Hedhili; Xiaohe Miao; Adrian Ramírez Galilea; Alexey Pustovarenko; Alla Dikhtiarenko; Amandine Cadiau; Antonio Aguilar-Tapia; Jean-Louis Hazemann; Sergey M. Kozlov; Samy Oud-Chikh; Luigi Cavallo; Jorge Gascon",
      venue:    "ACS Catalysis",
      links:    {URL: "https://doi.org/10.1021/acscatal.9b01638"},
    },
	{
      year:     2019,
      title:    "Tandem Conversion of CO2 to Valuable Hydrocarbons in Highly Concentrated Potassium Iron Catalysts",
      authors:  "Adrian Ramirez; Samy Ould-Chikh; Lieven Gevers; Abhishek Dutta Chowdhury; Edy Abou-Hamad; Antonio Aguilar-Tapia; Jean-Louis Hazemann; Nimer Wehbe; Abdullah J. Al Abdulghani; Sergey M. Kozlov; Luigi Cavallo; Jorge Gascon",
      venue:    "ChemCatChem",
      links:    {URL: "https://doi.org/10.1002/cctc.201900762"},
    },
	{
      year:     2019,
      title:    "Interfacial Activity of Characterized Middle Eastern Asphaltenes",
      authors:  "Bastian Sauerer; Abdullah J. Al Abdulghani; Muhammad S. Abdallah; Wael Abdallah",
      venue:    "Energy & Fuels",
      links:    {URL: "https://doi.org/10.1021/acs.energyfuels.8b03085"},
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
