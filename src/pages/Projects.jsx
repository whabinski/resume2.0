// src/sections/ProjectsSection.jsx
import ProjectCard from "../components/ProjectCard";
import projectBackground from "../assets/project.jpeg";

import doodleImage from "../assets/doodleAI_desktop.jpeg";
import doodleVideo from "../assets/doodleAI_preview.mp4";

import beatifyImage from "../assets/beatify_desktop.jpeg";
import beatifyVideo from "../assets/beatify_preview.mp4";

import dieSpyImage from "../assets/DieSpy_logo.jpeg";
import dieSpyVideo from "../assets/DieSpy_presentation.mp4";

import resumeImage from "../assets/resume_mobile.jpeg";

import rariRacingImage from "../assets/rariRacing.jpeg";
import rariRacingVideo from "../assets/rariRacing_preview.mp4";

const PROJECTS = [
  // 1. DoodleAI
  {
    title: "DoodleAI – Sketch Recognition Game",
    context: "Personal Project",
    tech: [
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "react-sketch-canvas",
      "TensorFlow.js",
      "Python",
      "Keras",
    ],
    description:
      "Doodle recognition game where an AI tries to guess your sketches across 15 categories from Google’s Quick, Draw! dataset, using a convolutional neural network trained on over 1 million samples. Check out my live site on mobile or desktop!",
    bullets: [
      "Implemented a prompt-driven game loop that randomly selects a class for the user to draw, captures the sketch on a responsive canvas, and displays the model’s prediction.",
      "Built a preprocessing pipeline that converts canvas strokes to a 256×256 working image, detects the ink bounding box, then crops, pads, rescales to 28×28, converts to grayscale, inverts, and normalizes to match training inputs.",
      "Trained a compact CNN in Python/Keras on over 1 million samples from 15 Quick, Draw! classes (up to 70k sketches per class) with a 10% validation split to monitor generalization.",
      "Designed the CNN with three convolutional blocks (Conv–BatchNorm–MaxPool), followed by GlobalAveragePooling, Dropout regularization, and dense layers, and trained the weights using Adam optimization.",
      "Converted the trained Keras model to TensorFlow.js format and served it from public so inference runs entirely on device with no backend or data upload.",
    ],
    imageSrc: doodleImage,
    videoSrc: doodleVideo,
    liveLink: "https://whabinski.github.io/doodleAI/",
    repoLink: "https://github.com/whabinski/doodleAI",
  },

// 2. Beatify
  {
    title: "Beatify – Music Visualizer",
    context: "Personal Project",
    tech: [
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Web Audio API",
    ],
    description:
      "Audio visualization web app that turns songs and/or live microphone input into dynamic animations across multiple visualizer modes including 'bar', 'wave', and 'radial'. Check out my live site on mobile or desktop!",
    bullets: [
      "Supports multiple audio sources including local mp3 file uploads, bundled demo tracks, and live microphone input.",
      "Samples both frequency domain data (spectrum) and time domain data (waveform) from the audio signal each animation frame.",
      "Bars mode maps frequency magnitudes to vertical bar height and colour, creating an equalizer style view of how loud different parts of the spectrum are over time.",
      "Wave mode renders the time domain samples as a glowing, mirrored waveform so users can see the instantaneous amplitude of the audio signal as it rises and falls.",
      "Radial mode arranges frequency magnitudes in a circular layout, turning each band into a radial spoke whose length tracks the strength of that frequency, producing a spectrum burst.",
    ],
    imageSrc: beatifyImage,
    videoSrc: beatifyVideo,
    liveLink: "https://whabinski.github.io/beatify/",
    repoLink: "https://github.com/whabinski/beatify",
  },


  // 3. DieSpy
  {
    title: "DieSpy – ML Dice Detection App",
    context: "Capstone Project",
    tech: [
      "Kotlin",
      "Android",
      "TensorFlow Lite",
      "YOLOv10",
      "Firebase Firestore",
      "Android Studio",
    ],
    description:
      "Android app that uses a custom YOLOv10 model and TensorFlow Lite to detect and count physical dice rolls in real time via the phone camera. Complete with account and party creation with synced sessions, chat, and roll logs for remote or in person tabletop games. Download now on your android device through the available APK!",
    bullets: [
      "Integrated a TensorFlow Lite version of a custom-trained YOLOv10 model to perform real time dice detection directly on the device using the phone camera.",
      "Trained the YOLOv10 model on tens of thousands of annotated dice images with augmentations (scaling, rotation, grayscale transforms, etc.), and designed post processing logic that cross references detections across multiple frames to stabilize results and achieve over 95% roll-count accuracy in testing.",
      "Uses Firebase Firestore serving as a cloud backend to manage persistent user accounts, party sessions, roll history, and chat messages.",
      "Developed in Android Studio using screens with Kotlin fragments and XML layouts, structured around dedicated manager classes for UI, ML integration, and backend interaction to keep concerns separated.",
      "Packaged and distributed the app as an installable APK for android devices",
    ],
    imageSrc: dieSpyImage,
    videoSrc: dieSpyVideo,
    liveLink: "https://github.com/puscasp-mcmaster/DieSpy/releases/download/v1.0.0/DieSpy.apk",
    liveLabel: "Download APK",
    repoLink: "https://github.com/puscasp-mcmaster/DieSpy",
  },


 // 4. Resume Website
  {
    title: "Resume Portfolio Site",
    context: "Personal Project",
    tech: [
      "JavaScript",
      "React",
      "React Router",
      "Tailwind CSS",
    ],
    description:
      "My personal website and interactive portfolio you’re currently viewing right now! A multi section website that showcases some of my experience, education, and fun projects.",
    bullets: [
      "Built as a React single page application with React Router powering sections like Profile, Experience, Education, Courses, Skills, and Projects.",
      "Implemented reusable layout components (header, footer, accordions, project cards, side-by-side sections, badges) to keep structure and styling consistent across the site.",
      "Designed for both mobile and desktop, the responsive layout was built with JavaScript and Tailwind CSS",
    ],
    imageSrc: resumeImage,
    liveLink: "https://wyatthabinski.com/",
    repoLink: "https://github.com/whabinski/resume2.0",
  },


  // 5. Rari Racing
  {
    title: "Rari Racing – Elm Math Game",
    context: "First-Year User-Centred Design Project",
    tech: [
      "Elm",
      "Functional Programming",
      "Model–View–Update",
      "HTML / Canvas-style Graphics",
    ],
    description:
      "Educational racing game I built in Elm as a project during my first year in university. It was designed to help early middle school students practise arithmetic through a car race theme, designed end-to-end using a user-centred design process. Check out my live site on desktop!",
    bullets: [
      "Conducted interviews with middle school students to understand where they struggled with math and used those insights to shape the game mechanics, difficulty levels, and tutorial flow.",
      "Implemented an Elm Model, View, Update architecture with explicit state machines for title, tutorial, difficulty selection, gameplay, and a math visualizer screen.",
      "Designed gameplay where players answer addition, subtraction, multiplication, and division questions to move their car forward and beat an AI opponent, with easy/medium/hard modes controlling question sets and opponent speed.",
      "Built an in-game visualizer that renders questions as concrete visual scenes (rows of balls, grouped sets, splits) to support conceptual understanding alongside symbolic equations.",
      "Used purely functional code and strong static typing in Elm to manage game state, input handling, and animation timing, keeping update logic predictable and easy to reason about.",
    ],
    imageSrc: rariRacingImage,
    videoSrc: rariRacingVideo,
    liveLink:
      "https://stabl.rocks/ShowModulePublish?modulePublishId=1cdf92aa-7e30-4c2f-bcb7-a0c6aaf80b13",
    repoLink: "https://github.com/whabinski/rariRacing",
  },

];

export default function Projects() {
  return (
    <div className="relative">
      {/* Full background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${projectBackground})` }}
      />

      {/* Content container */}
      <section id="projects" className="mx-auto max-w-6xl px-4">
        <div className="space-y-5">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
