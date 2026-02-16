

const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 2,
    name: "Contact",
    type: "contact",
  },
  {
    id: 3,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  // {
  //   id: "safari",
  //   name: "Articles",
  //   icon: "safari.png",
  //   canOpen: true,
  // },
  // {
  //   id: "photos",
  //   name: "Gallery",
  //   icon: "photos.png",
  //   canOpen: true,
  // },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  // {
  //   id: "trash",
  //   name: "Trash",
  //   icon: "trash.png",
  //   canOpen: false,
  // }
];

// const blogPosts = [
//   {
//     id: 1,
//     date: "Sep 2, 2025",
//     title:
//       "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
//     image: "/images/blog1.png",
//     link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
//   },
//   {
//     id: 2,
//     date: "Aug 28, 2025",
//     title: "The Ultimate Guide to Mastering Three.js for 3D Development",
//     image: "/images/blog2.png",
//     link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
//   },
//   {
//     id: 3,
//     date: "Aug 15, 2025",
//     title: "The Ultimate Guide to Mastering GSAP Animations",
//     image: "/images/blog3.png",
//     link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
//   },
// ];

const techStack = [
  {
    category: "Programming",
    items: ["Python", "C", "Java"],
  },
  {
    category: "ML/AI",
    items: ["PyTorch", "TensorFlow", "Scikit-Learn"],
  },
  {
    category: "",
    items: ["Hugging Face", "OpenCV", "Numpy", "Pandas"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Flask", "Firebase"],
  },
  {
    category: "Database",
    items: ["MySQL", "SQL Server", "Firebase"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
  {
    category: "Design",
    items: ["Figma", "Blender"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#333",
    link: "https://github.com/whitebloodsel",
  },
  {
    id: 2,
    text: "Email",
    icon: "/icons/mail.svg",
    bg: "#c71610",
    link: "mailto:gisella.j05@gmail.com",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0a66c2",
    link: "https://www.linkedin.com/in/gisella-jayata",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  // blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

export const TAGS = [
  { id: "t1", name: "AI/ML", color: "#ff6b6b", type: "tag" },
  { id: "t2", name: "Mobile", color: "#ff922b", type: "tag" },
  { id: "t3", name: "Web", color: "#fcc419", type: "tag" },
  { id: "t4", name: "UI/UX", color: "#51cf66", type: "tag" },
  { id: "t5", name: "Academic", color: "#339af0", type: "tag" },
  { id: "t6", name: "Hackathon", color: "#cc5de8", type: "tag" },
  { id: "t7", name: "Personal", color: "#845ef7", type: "tag" },
];

// Helper function to create tag locations with filtered children
const createTagLocation = (tag) => {
  const WORK_LOCATION_REF = {
    id: 1,
    type: "work",
    name: "Projects",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
      // ...existing projects will be populated from WORK_LOCATION
    ],
  };

  return {
    id: tag.id,
    name: tag.name,
    color: tag.color,
    type: "tag",
    icon: "/icons/tag.svg",
    kind: "folder",
    children: [], // Will be populated dynamically
  };
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Projects",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Terra",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-10", // icon position inside Finder
      windowPosition: "top-[7vh] left-7", // optional: Finder window position
      tags: ["Web", "Hackathon"],
      children: [
        {
          id: 1,
          name: "terra.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An urban planning platform that leverages NASA Earth data to help city planners develop sustainable growth strategies. Terra provides environmental risk assessment, climate data visualization, and AI-powered insights.",
            "",
            { text: "🚀 TECH STACK:", style: "bold" },
            "Next.js, Tailwind CSS",
            { text: "📡 DATA SOURCES:", style: "bold" },
            "NASA POWER API, WAQI, OpenStreetMap",
            "",
            { text: "🔑 KEY FEATURES:", style: "bold" },
            "1. Interactive Map: An immersive 3D globe for exploring location-specific environmental data.",
            "2. Real-Time Data: Live metrics for temperature and air quality.",
            "3. Terra Bot: A context-aware climate analyst providing localized policy insights.",
            "4. Visualization: An intuitive dashboard with color-coded climate severity indicators.",
          ],
        },
        {
          id: 2,
          name: "terra.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://terranasa.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "terra-github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Jaliem/nasahackathon",
          position: "top-35 right-50",
        },
        {
          id: 4,
          name: "terra.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          images: [
            {
              id: 401,
              url: "/images/terra/landing.png",
              name: "Landing Page",
            },
            {
              id: 402,
              url: "/images/terra/landing-1.png",
              name: "Why Terra",
            },
            {
              id: 403,
              url: "/images/terra/landing-2.png",
              name: "Key Features",
            },
            {
              id: 404,
              url: "/images/terra/dashboard.png",
              name: "Dashboard Overview",
            },
            {
              id: 405,
              url: "/images/terra/dashboard-1.png",
              name: "Loading Analysis",
            },
            {
              id: 406,
              url: "/images/terra/dashboard-2.png",
              name: "Analysis Result",
            },
            {
              id: 407,
              url: "/images/terra/dashboard-3.png",
              name: "Terra Bot",
            },
          ],
        },
        {
          id: 5,
          name: "terra.mp4",
          icon: "/images/video.png",
          kind: "file",
          fileType: "fig",
          href: "https://youtu.be/tVUQzoj-hxs?si=ICdCvyg2KrxhTmwi",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Cura",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-35",
      windowPosition: "top-[20vh] left-7",
      tags: ["AI/ML", "Web", "Hackathon"],
      children: [
        {
          id: 1,
          name: "cura.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Cura is an intelligent healthcare ecosystem designed for modern hospitals to empower patients. It utilizes a network of specialized agents to coordinate care, manage prescriptions, and secure sensitive medical data.",
            "",
            { text: "🚀 TECH STACK:", style: "bold" },
            "React.js, Tailwind CSS, Fetch.ai Agents, Motoko, Python, Flask",
            "",
            { text: "🔑 KEY FEATURES:", style: "bold" },
            "1. Clinical Integration: Empowers users by connecting them directly to hospital practitioners for instant medical diagnoses and appointment scheduling",
            "2. Seamless Prescription: Allows doctors to prescribe medication directly through the Pharmacy Agent for real-time inventory and prescription fulfillment.",
            "3. Patient-Centric: Gives users full control over their medical journey by syncing hospital with personal wellness tracking.",
            "4. Decentralized: Built on a privacy-first architecture that ensures patient records are secure, immutable, and owned solely by the user.",
          ],
        },
        {
          id: 2,
          name: "cura-github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Jaliem/cura",
          position: "top-20 left-20",
        },

        {
          id: 4,
          name: "cura.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          images: [
            {
              id: 401,
              url: "/images/cura/landing.png",
              name: "Landing Page",
            },
            {
              id: 402,
              url: "/images/cura/landing-1.png",
              name: "Cura's Agents",
            },
            {
              id: 403,
              url: "/images/cura/landing-2.png",
              name: "Choose Plan",
            },
            {
              id: 404,
              url: "/images/cura/profile-1.png",
              name: "Profile Page",
            },
            {
              id: 405,
              url: "/images/cura/health1.png",
              name: "Health Agent",
            },
            {
              id: 406,
              url: "/images/cura/health2.png",
              name: "Agent Analysis",
            },
            {
              id: 407,
              url: "/images/cura/health5.png",
              name: "Doctor Agent",
            },
            {
              id: 408,
              url: "/images/cura/health6.png",
              name: "Set Doctor Booking",
            },
            {
              id: 409,
              url: "/images/cura/health7.png",
              name: "Pharmacy Agent",
            },
            {
              id: 410,
              url: "/images/cura/wellness0.png",
              name: "Wellness Agent",
            },
            {
              id: 411,
              url: "/images/cura/doc-analysis.png",
              name: "Document Analysis",
            },
            {
              id: 412,
              url: "/images/cura/doctor.png",
              name: "Doctor Page",
            },
            {
              id: 413,
              url: "/images/cura/pharmacy.png",
              name: "Pharmacy Page",
            },
            {
              id: 414,
              url: "/images/cura/wellness.png",
              name: "Wellness Page",
            },
            {
              id: 415,
              url: "/images/cura/reminder.png",
              name: "Reminder Page",
            },
            {
              id: 416,
              url: "/images/cura/user-activity.png",
              name: "Admin Page - User Activity",
            },
            {
              id: 417,
              url: "/images/cura/add-doc.png",
              name: "Admin Page - Add Doctor/Pharmacy",
            },
          ],
        },
        {
          id: 5,
          name: "cura.mp4",
          icon: "/images/video.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.youtube.com/watch?v=2Wo7EhBm-Gk",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Iris",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-60",
      windowPosition: "top-[33vh] left-7",
      tags: ["Mobile", "Academic"],
      children: [
        {
          id: 1,
          name: "iris.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A mobile app that helps visually impaired and elders navigate their surroundings. By leveraging real-time text recognition, object recognition and spatial audio cues, Iris provides an intuitive way for users to understand and interact with their environment.",
            "",
            { text: "🚀 TECH STACK:", style: "bold" },
            "Flutter, YOLOv11, Google Cloud (Vision & TTS), Firebase (Firestore, Auth)",
            "",
            { text: "🔑 KEY FEATURES:", style: "bold" },
            "1. Real-Time Text Recognition: Uses OCR to read signs, menus, and documents aloud.",
            "2. Object Recognition: Identifies nearby objects and obstacles, providing spatial audio cues for navigation.",
            "3. Proactive Care Reminders: Automated, timely alerts for medication schedules and essential health tasks.",
            "4. Natural Voice Interaction: Provides clear, high-quality auditory feedback and navigation.",
          ],
        },
        {
          id: 2,
          name: "iris-github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/valentypo/iris_application",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "iris.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          isMobileFormat: true,
          images: [
            {
              id: 401,
              url: "/images/iris/login.png",
              name: "Login Page",
            },
            {
              id: 402,
              url: "/images/iris/dashboard.png",
              name: "Dashboard Page",
            },
            {
              id: 403,
              url: "/images/iris/reminder0.png",
              name: "Add Reminder",
            },
            {
              id: 404,
              url: "/images/iris/reminder.png",
              name: "Set Reminder Time",
            },
            {
              id: 405,
              url: "/images/iris/dashboard1.png",
              name: "Dashboard Page",
            },
            {
              id: 406,
              url: "/images/iris/text-recog.png",
              name: "Text Recognition",
            },
            {
              id: 407,
              url: "/images/iris/obj_recog.png",
              name: "Object Recognition",
            },
            {
              id: 408,
              url: "/images/iris/obj.png",
              name: "Object Recognition",
            },
          ],
        },
        {
          id: 5,
          name: "iris.mp4",
          icon: "/images/video.png",
          kind: "file",
          fileType: "url",
          href: "https://drive.google.com/file/d/1wqCd9k1_z7zeduwQUfpjJzqOxzsBXKPb/view",
          position: "top-60 right-20",
        },
      ],
    },
    // Project 4
    {
      id: 8,
      name: "Spacepen",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-82",
      windowPosition: "top-[46vh] left-7",
      tags: ["UI/UX", "Hackathon"],
      children: [
        {
          id: 1,
          name: "spacepen.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "SpacePen is a global pen pal platform designed to launch meaningful connections between curious minds. Unlike instant messaging, it uses a unique delivery pace to encourage thoughtful letters and genuine cultural exchange.",
            "",
            { text: "🚀 TECH STACK:", style: "bold" },
            "Figma",
            "",
            { text: "🔑 KEY FEATURES:", style: "bold" },
            '1. Meet the Universe: Connect with a diverse "astronaut crew" of pen pals without the need for profile pictures, prioritizing personality and shared interests.',
            '2. Distance Creates Depth: A unique "interstellar wait" mechanic where the delivery time of your letter is based on the physical distance between you and your pen pal.',
            "3. Friendship Beyond Borders: Easily find companions who share your specific interests, regardless of where they are located on Earth.",
          ],
        },
        {
          id: 4,
          name: "spacepen.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          images: [
            {
              id: 401,
              url: "/images/spacepen/start.png",
              name: "Start Page",
            },
            {
              id: 402,
              url: "/images/spacepen/welcome.png",
              name: "Welcome Page",
            },
            {
              id: 403,
              url: "/images/spacepen/pick-topics.png",
              name: "Pick Topics Page",
            },
            {
              id: 404,
              url: "/images/spacepen/role.png",
              name: "Choose Role Page",
            },
            {
              id: 405,
              url: "/images/spacepen/discover.png",
              name: "Discover New Friends",
            },
            {
              id: 406,
              url: "/images/spacepen/friends.png",
              name: "Friends Page",
            },
            {
              id: 407,
              url: "/images/spacepen/letters.png",
              name: "Read All Letters",
            },
            {
              id: 408,
              url: "/images/spacepen/write.png",
              name: "Write Letter",
            },
            {
              id: 409,
              url: "/images/spacepen/read-letter.png",
              name: "Read Letter",
            },
            {
              id: 410,
              url: "/images/spacepen/profile.png",
              name: "Profile Page",
            },
          ],
        },
        {
          id: 3,
          name: "spacepen.mp4",
          icon: "/images/video.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/O4FI8_x92ug?si=tedzGQ6rHcDcvPDt ",
          position: "top-30 right-24",
        },
        {
          id: 5,
          name: "spacepen.fig",
          icon: "/images/figma.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/proto/rO6jrYRNirOuuA6qeRWbYz/SpacePen?node-id=0-1&t=hKP9b50lMNlSf9Cx-1",
          position: "top-60 right-20",
        },
      ],
    },

    {
      id: 9,
      name: "Genrify",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-110",
      windowPosition: "top-[59vh] left-7",
      tags: ["AI/ML", "Web", "Academic"],
      children: [
        {
          id: 1,
          name: "genrify.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A deep learning web application that classifies music genres from audio recordings using a CNN-BiLSTM model trained on the GTZAN Music Genre Dataset.",
            "",
            { text: "🚀 TECH STACK:", style: "bold" },
            "Next.js, Tailwind CSS, Python, Flask, Librosa, Tensorflow, Keras",
            "",
            { text: "📡 MODEL INFO:", style: "bold" },
            "By transforming raw audio into Mel-Spectrograms, the model leverages a CNN-BiLSTM network and AdamW optimization to achieve precise classification across 10 musical genres.",
            "",
            { text: "🔑 KEY FEATURES:", style: "bold" },
            "1. Record or upload music directly from the browser.",
            "2. Classify music into 10 genres using deep learning.",
            "3. View prediction confidence and Top-3 predictions.",
          ],
        },
        {
          id: 2,
          name: "genrify-github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/revckries/music-genre-classifier",
          position: "top-30 right-30",
        },
        {
          id: 4,
          name: "genrify.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          images: [
            {
              id: 401,
              url: "/images/ai music/landing.png",
              name: "Landing Page",
            },
            {
              id: 402,
              url: "/images/ai music/features.png",
              name: "Features Page",
            },
            {
              id: 403,
              url: "/images/ai music/genres.png",
              name: "Genres Page",
            },
            {
              id: 404,
              url: "/images/ai music/record.png",
              name: "Classifier Page",
            },
            {
              id: 405,
              url: "/images/ai music/result.png",
              name: "Result Page",
            },
          ],
        },
        {
          id: 3,
          name: "genrify.mp4",
          icon: "/images/video.png",
          kind: "file",
          fileType: "url",
          href: "https://drive.google.com/file/d/185KgRv1rY1LcmaswcjN2njK2kFhlmD4d/view",
          position: "top-5 right-80",
        },
        {
          id: 5,
          name: "genrify.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://music-genrify.vercel.app",
          position: "top-60 right-20",
        },
      ],
    },

    {
      id: 10,
      name: "Zenva",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-10",
      windowPosition: "top-[7vh] left-30",
      tags: ["AI/ML", "Web", "Academic"],
      children: [
        {
          id: 1,
          name: "zenva.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An AI-powered yoga assistant designed to provide real-time pose detection and corrective feedback using deep learning and spatial analysis.",
            "",
            { text: "🚀 TECH STACK:", style: "bold" },
            "Next.js, Tailwind CSS, Python, MediaPipe, OpenCV, TensorFlow",
            "",
            { text: "📡 MODEL INFO:", style: "bold" },
            "Utilizes a yoga pose dataset from Roboflow to train a Support Vector Machine (SVM) classifier, achieving high-precision pose recognition based on 33 spatial keypoints extracted via MediaPipe.",
            "",
            { text: "🔑 KEY FEATURES:", style: "bold" },
            "1. Real-time pose estimation and tracking via webcam.",
            "2. Instant auditory and visual feedback for posture adjustment.",
            "3. Automated angle calculation to ensure safe and effective movement.",
          ],
        },
        {
          id: 2,
          name: "zenva-github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/ve11yn/yoga-pose-correction",
          position: "top-30 right-30",
        },
        {
          id: 4,
          name: "zenva.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          images: [
            {
              id: 401,
              url: "/images/yoga/landing.png",
              name: "Landing Page",
            },
            {
              id: 402,
              url: "/images/yoga/features.png",
              name: "Features Page",
            },
            {
              id: 403,
              url: "/images/yoga/how-work.png",
              name: "How It Works",
            },
            {
              id: 404,
              url: "/images/yoga/begin-practice.png",
              name: "Begin Practice",
            },
            {
              id: 405,
              url: "/images/yoga/trial.png",
              name: "Practice Page",
            },
          ],
        },
        {
          id: 3,
          name: "zenva.mp4",
          icon: "/images/video.png",
          kind: "file",
          fileType: "url",
          href: "https://www.youtube.com/watch?v=Egh7fh0YLYE",
          position: "top-5 right-80",
        },
        {
          id: 5,
          name: "zenva.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://zenva-yogaflow.vercel.app/",
          position: "top-60 right-20",
        },
      ],
    },

    {
      id: 11,
      name: "Sehatin",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-35",
      windowPosition: "top-[20vh] left-30",
      tags: ["Mobile", "Academic"],
      children: [
        {
          id: 1,
          name: "sehatin.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Sehatin is a native Android health-tech solution focused on maternal and child welfare, integrating real-time health tracking with AI-driven advisory services.",
            "",
            { text: "🚀 TECH STACK:", style: "bold" },
            "Java, XML, Android Studio, Firebase (Firestore & Auth), Groq API, Open-Meteo API",
            "",
            { text: "🔑 KEY FEATURES:", style: "bold" },
            "1. Sehatin Chatbot: Automated health consultation for mothers and children powered by Groq API.",
            "2. Comprehensive Digital Health Records: Integrated management for child identity, growth metrics, and health history.",
            "3. Smart Immunization Scheduling: Automated tracking and reminders for critical child vaccinations.",
            "4. Emergency Services: One-tap emergency call functionality for immediate medical assistance.",
          ],
        },
        {
          id: 2,
          name: "sehatin-github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/StyNW7/Mobile_Programming_Final_Project",
          position: "top-30 right-30",
        },
        {
          id: 4,
          name: "sehatin.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          images: [
            {
              id: 401,
              url: "/images/sehatin/onboarding.png",
              name: "Onboarding Page",
            },
            {
              id: 402,
              url: "/images/sehatin/login.png",
              name: "Login Page",
            },
            {
              id: 403,
              url: "/images/sehatin/register.png",
              name: "Register Page",
            },
            {
              id: 404,
              url: "/images/sehatin/add-child.png",
              name: "Add Child",
            },
            {
              id: 405,
              url: "/images/sehatin/add-record.png",
              name: "Add Child's Health Record",
            },
            {
              id: 406,
              url: "/images/sehatin/immunisation.png",
              name: "Immunisation Page",
            },
            {
              id: 407,
              url: "/images/sehatin/emergency-call.png",
              name: "Emergency Call",
            },
            {
              id: 408,
              url: "/images/sehatin/health-articles.png",
              name: "Health Articles Page",
            },
            {
              id: 409,
              url: "/images/sehatin/weather.png",
              name: "Weather Page",
            },
            {
              id: 410,
              url: "/images/sehatin/chatbot.png",
              name: "Sehatin Chatbot",
            },
          ],
        },
        {
          id: 3,
          name: "sehatin.mp4",
          icon: "/images/video.png",
          kind: "file",
          fileType: "url",
          href: "https://drive.google.com/file/d/1TpX60HEeo3mY2axjQbWMR6CxZqTgW820/view?usp=sharing",
          position: "top-5 right-80",
        },
        {
          id: 5,
          name: "sehatin.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://drive.google.com/file/d/1UaLy_KtKzdTGj5C5e4f9BMsPWlmRWqWx/view?usp=sharing",
          position: "top-60 right-20",
        },
      ],
    },

    {
      id: 12,
      name: "Meth",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-60",
      windowPosition: "top-[33vh] left-30",
      tags: ["AI/ML", "Web", "Academic"],
      children: [
        {
          id: 1,
          name: "meth.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Meth is a handwritten math-solver that uses a Convolutional Neural Network (CNN) to recognize and solve math problems from uploaded images.",
            "",
            { text: "🚀 TECH STACK:", style: "bold" },
            "Next.js, Typescript, Tailwind CSS, Python, Flask, Tensorflow, Keras, OpenCV",
            "",
            { text: "📡 MODEL INFO:", style: "bold" },
            "We designed a custom CNN model inspired by LeNet, trained on a handwritten math symbol dataset from Kaggle. By training on both single-digit symbols and arithmetic operators, the model reaches a final accuracy of 0.98.",
            { text: "🔑 KEY FEATURES:", style: "bold" },
            "1. Image upload and real-time OCR processing of handwritten problems.",
            "2. Automated segmentation of mathematical symbols and characters using OpenCV.",
            "3. Digit and operator classification using a custom deep learning pipeline.",
            "4. Immediate computation and step-by-step logic for solved expressions.",
          ],
        },
        {
          id: 2,
          name: "meth-github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/ve11yn/Meth",
          position: "top-30 right-30",
        },
        {
          id: 4,
          name: "meth.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          images: [
            {
              id: 401,
              url: "/images/meth/dashboard.png",
              name: "Upload Math Problem",
            },
            {
              id: 402,
              url: "/images/meth/result.png",
              name: "Obtain Result",
            },
            {
              id: 403,
              url: "/images/meth/processing.png",
              name: "Processing Steps",
            },
          ],
        },
        {
          id: 3,
          name: "meth.mp4",
          icon: "/images/video.png",
          kind: "file",
          fileType: "url",
          href: "https://drive.google.com/drive/folders/1gYr2cnB3cQ5ZEI_6qN8rdwR2bkoHVLDA",
          position: "top-5 right-80",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    // {
    //   id: 1,
    //   name: "casual-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-10 left-5",
    //   imageUrl: "/images/casual.png",
    // },
    {
      id: 2,
      name: "lab-assistant-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-18 right-55",
      imageUrl: "/images/lab-gisella.png",
    },
    {
      id: 3,
      name: "professional-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-89",
      imageUrl: "/images/gisella.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-50 left-20",
      subtitle: "Nice to meet you! 👋",
      image: "",
      description: [
        "Hey! I’m Gisella, an aspiring developer who enjoys combining cool AI stuff with sleek, modern UI.",
        "I’m always on the lookout for new things to learn and enjoy diving into new subjects—especially in the AI/ML realm.",
        "There’s so much to explore, so let’s team up, swap ideas, and build something awesome together! 🚀"
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
