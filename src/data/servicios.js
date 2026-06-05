import DesignIcon from "../components/icons/DesignIcon.astro";
import ProjectsIco from "../components/icons/ProjectsIcon.astro";
import WorkShopIco from "../components/icons/WorkShopIcon.astro";
import AudioVisualIco from "../components/icons/AudioVisualIcon.astro";
import CoachingIco from "../components/icons/CoachingIcon.astro";
import TechnologyIcon from "../components/icons/TechnologyIcon.astro";


export const servicios = [
  {
    titulo: "Diseño Instruccional",
    descripcion: "Diseño de entornos educativos experienciales, lúdicos y centrados en las personas.",
    icono: DesignIcon,
    color:  "text-blue-500"
  },
  {
    titulo: "Desarrollo de proyectos educativos",
    descripcion: "Elaboración y diseño de proyectos pedagógicos con enfoque constructivista.",
    icono: ProjectsIco,
    color: "text-orange-500"
  },
  {
    titulo: "Talleres y capacitaciones",
    descripcion: "Experiencias formativas innovadoras en desarrollo humano, disciplina positiva, etc.",
    icono: WorkShopIco,
    color: "text-pink-500"
  },
  {
    titulo: "Diseño audiovisual",
    descripcion: "Elaboración de material audiovisual con énfasis didáctico.",
    icono: AudioVisualIco,
    color: "text-yellow-400"
  },
  {
    titulo: "Coaching educativo",
    descripcion: "Acompañamiento a docentes, padres de familia y estudiantes para el desarrollo de planes estratégicos educativos.",
    icono: CoachingIco,
    color: "text-red-500"
  },
  {
    titulo: "Tecnología educativa",
    descripcion: "Diseño y enseñanza de ambientes virtuales para el aprendizaje, objetos virtuales de aprendizaje y recursos virtuales de enseñanza.",
    icono: TechnologyIcon,
    color: "text-cyan-500"
  }
];
