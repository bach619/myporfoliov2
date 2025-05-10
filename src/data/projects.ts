export type ProjectCategory = 'web' | 'mobile' | 'ui';

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  categories: ProjectCategory[];
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A fully responsive e-commerce platform with product filtering, user authentication, and payment processing.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/johndoe/ecommerce',
    categories: ['web']
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces.',
    image: 'https://images.pexels.com/photos/6408282/pexels-photo-6408282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    demoUrl: 'https://example.com/taskmanager',
    githubUrl: 'https://github.com/johndoe/taskmanager',
    categories: ['web', 'ui']
  },
  {
    id: 3,
    title: 'Fitness Tracking Mobile App',
    description: 'A cross-platform mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React Native', 'Redux', 'Express', 'PostgreSQL'],
    demoUrl: 'https://example.com/fitnessapp',
    githubUrl: 'https://github.com/johndoe/fitnessapp',
    categories: ['mobile']
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A weather forecasting application with interactive visualizations, location-based services, and customizable alerts.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['JavaScript', 'Chart.js', 'OpenWeatherMap API'],
    demoUrl: 'https://example.com/weather',
    githubUrl: 'https://github.com/johndoe/weather',
    categories: ['web', 'ui']
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'A unified dashboard for managing and analyzing multiple social media accounts with automated content scheduling.',
    image: 'https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Angular', 'TypeScript', 'Node.js', 'D3.js'],
    demoUrl: 'https://example.com/socialdashboard',
    githubUrl: 'https://github.com/johndoe/socialdashboard',
    categories: ['web', 'ui']
  },
  {
    id: 6,
    title: 'Recipe Finder App',
    description: 'A mobile application for discovering recipes based on available ingredients, dietary restrictions, and user preferences.',
    image: 'https://images.pexels.com/photos/5836767/pexels-photo-5836767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Spoonacular API'],
    demoUrl: 'https://example.com/recipefinder',
    githubUrl: 'https://github.com/johndoe/recipefinder',
    categories: ['mobile', 'ui']
  }
];