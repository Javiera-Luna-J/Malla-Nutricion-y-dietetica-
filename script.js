// ----- Datos (nombre, semestre, prerrequisitos) -----
const courses = [
  // 1º Año – Semestre 1
  { name: "Biología", semester: 1, prereqs: [] },
  { name: "Química General y Orgánica", semester: 1, prereqs: [] },
  { name: "Morfología", semester: 1, prereqs: [] },
  { name: "Los Alimentos en la Nutrición Humana", semester: 1, prereqs: [] },
  { name: "Formación Integral Oferta Institucional", semester: 1, prereqs: [] },
  { name: "Inglés Comunicacional I", semester: 1, prereqs: [] },
  // 1º Año – Semestre 2
  { name: "Matemática", semester: 2, prereqs: [] },
  { name: "Bioquímica Nutricional", semester: 2, prereqs: ["Química General y Orgánica"] },
  { name: "Fisiología Humana", semester: 2, prereqs: ["Morfología"] },
  { name: "Técnicas Dietéticas", semester: 2, prereqs: ["Los Alimentos en la Nutrición Humana"] },
  { name: "Formación Integral Extra Programática", semester: 2, prereqs: [] },
  { name: "Inglés Comunicacional II", semester: 2, prereqs: ["Inglés Comunicacional I"] },
  { name: "Taller Integrador de Alimentación Saludable", semester: 2, prereqs: [] },
  // 2º Año – Semestre 3
  { name: "Microbiología y Parasitología", semester: 3, prereqs: ["Biología"] },
  { name: "Metabolismo y Nutrición", semester: 3, prereqs: [
      "Química General y Orgánica",
      "Bioquímica Nutricional",
      "Técnicas Dietéticas",
      "Los Alimentos en la Nutrición Humana",
      "Taller Integrador de Alimentación Saludable"
  ] },
  { name: "Salud Pública", semester: 3, prereqs: [] },
  { name: "Evaluación Estado Nutricional", semester: 3, prereqs: [
      "Química General y Orgánica",
      "Bioquímica Nutricional",
      "Técnicas Dietéticas",
      "Los Alimentos en la Nutrición Humana",
      "Taller Integrador de Alimentación Saludable"
  ] },
  { name: "Formación Integral Oferta Institucional", semester: 3, prereqs: [] },
  { name: "Inglés Comunicacional III", semester: 3, prereqs: ["Inglés Comunicacional I", "Inglés Comunicacional II"] },
  // 2º Año – Semestre 4
  { name: "Higiene Ambiental y Control Sanitario de Alimentos", semester: 4, prereqs: ["Microbiología y Parasitología", "Biología"] },
  { name: "Bioestadística en Nutrición y Salud", semester: 4, prereqs: ["Matemática"] },
  { name: "Psicología en Salud y Alimentación", semester: 4, prereqs: [] },
  { name: "Dietética", semester: 4, prereqs: [
      "Química General y Orgánica",
      "Bioquímica Nutricional",
      "Técnicas Dietéticas",
      "Los Alimentos en la Nutrición Humana",
      "Taller Integrador de Alimentación Saludable",
      "Evaluación Estado Nutricional"
  ] },
  { name: "Formación Integral Extra Programática", semester: 4, prereqs: [] },
  { name: "Inglés Comunicacional IV", semester: 4, prereqs: ["Inglés Comunicacional I", "Inglés Comunicacional II", "Inglés Comunicacional III"] },
  { name: "Taller Integrador de Intervención Alimentario Nutricional en el ciclo vital", semester: 4, prereqs: ["Taller Integrador de Alimentación Saludable"] },
  // 3º Año – Semestre 5
  { name: "Nutrición en el Procesamiento Tecnológico de Alimentos", semester: 5, prereqs: ["Microbiología y Parasitología", "Biología", "Higiene Ambiental y Control Sanitario de Alimentos"] },
  { name: "Administración en Salud y Alimentación", semester: 5, prereqs: [] },
  { name: "Fisiopatología y Farmacología en la Nutrición", semester: 5, prereqs: [
      "Química General y Orgánica",
      "Bioquímica Nutricional",
      "Técnicas Dietéticas",
      "Los Alimentos en la Nutrición Humana",
      "Taller Integrador de Alimentación Saludable",
      "Metabolismo y Nutrición"
  ] },
  { name: "Alimentación y Nutrición en la Actividad Física", semester: 5, prereqs: [
      "Química General y Orgánica",
      "Bioquímica Nutricional",
      "Técnicas Dietéticas",
      "Los Alimentos en la Nutrición Humana",
      "Taller Integrador de Alimentación Saludable",
      "Evaluación Estado Nutricional",
      "Dietética",
      "Metabolismo y Nutrición",
      "Fisiopatología y Farmacología en la Nutrición"
  ] },
  { name: "Formación Integral Oferta Institucional", semester: 5, prereqs: [] },
  { name: "Inglés Técnico", semester: 5, prereqs: ["Inglés Comunicacional I", "Inglés Comunicacional II", "Inglés Comunicacional III", "Inglés Comunicacional IV"] },
  // 3º Año – Semestre 6
  { name: "Gestión de Servicios de Alimentación y Nutrición", semester: 6, prereqs: ["Administración en Salud y Alimentación"] },
  { name: "Bioética en Nutrición y Salud Pública", semester: 6, prereqs: [] },
  { name: "Dietoterapia Adulto y Adulto Mayor", semester: 6, prereqs: [
      "Química General y Orgánica",
      "Bioquímica Nutricional",
      "Técnicas Dietéticas",
      "Los Alimentos en la Nutrición Humana",
      "Taller Integrador de Alimentación Saludable",
      "Metabolismo y Nutrición",
      "Alimentación y Nutrición en la Actividad Física",
      "Fisiopatología y Farmacología en la Nutrición",
      "Evaluación Estado Nutricional",
      "Dietética"
  ] },
  { name: "Comunicación y Educación en Alimentación y Nutrición", semester: 6, prereqs: ["Psicología en Salud y Alimentación"] },
  { name: "Taller Integrador de Alimentación Colectiva", semester: 6, prereqs: [
      "Taller Integrador de Alimentación Saludable",
      "Taller Integrador de Intervención Alimentario Nutricional en el ciclo vital"
  ] },
  // 4º Año – Semestre 7
  { name: "E
