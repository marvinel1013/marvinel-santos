import RecipeAppImage from "@/assets/recipeapp.png";
import MovieAppImage from "@/assets/movieapp.png";
import NotesAppImage from "@/assets/notesapp.png";
import LandingPageImage from "@/assets/landingpage.png";
import TodoAppImage from "@/assets/todoapp.png";
import WebsiteV1Image from "@/assets/v1Portfolio.png";
import WebsiteV2Image from "@/assets/v2portfolio.png";
import ProjectCard from "./ProjectCard";

const ProjectsLists = () => {
  return (
    <div className="flex flex-col gap-20 lg:gap-36">
      {/* Meal Recipe App */}
      <ProjectCard
        rightSide={true}
        img={RecipeAppImage}
        title="Meal Recipe App"
        desc="In this project, I created the Meal Recipe Application in React JS plus Vite. I used Tailwind CSS for styling. I also used React Query and Axios for fetching data from the TheMealDB API. In this Project you can search and choose from the badge the recipe of your favorite meals you will know the ingredients and procedure of the meals that you want. You can save your favorite meals and see it in the meals save page I used localStorage to persist the data. Since its a free API so that the recipe lists is limited and for the search meal as well. This Application is hosted in Netlify."
        codeLink="https://github.com/marvinel1013/Recipe-App"
        demoLink="https://recipe-app-by-marvinel.netlify.app/"
        techUsed="ReactJS | TailwindCSS | ReactQuery | ReactRouter"
      />

      {/* Notes App */}
      <ProjectCard
        rightSide={false}
        title="Notes App"
        desc="In this project, I created a Complete Notes Application and Firebase as my back end. I do all the Create, Read, Update and Delete (CRUD) operations in Firebase. I used React JS, Vite and Tailwind CSS and I used Firestore as my back end and data base. In this Application you can search for notes via title. You can create new Notes and choose the color of the notes and also you can update the color you want. This application is fully responsive. This application is hosted in Netlify."
        img={NotesAppImage}
        codeLink="https://github.com/marvinel1013/Notes-App"
        demoLink="https://notes-app-by-marvinel.netlify.app/"
        techUsed="ReactJS | TailwindCSS | Vite | Firebase"
      />

      {/* Simple Movie App Card */}
      <ProjectCard
        rightSide={true}
        title="Simple Movie App"
        desc="In this project, I created the Simple Movie Application in React JS plus Vite. I used Tailwind CSS for styling. I also used Material UI to the Pagination and Headless UI in the Modal component TMDb API as my API.In this Movie App you can see the Weekly Trending and also have a movies page, Tv Series page and a Search page. You can watch the trailer by clicking the See Details button in the Movie Card the modal will appear and click watch trailer button and the app will open the trailer via youtube in new tab of the browser. You can also change the Theme to Darkmode to Lightmode its Darkmode by default. This Application is hosted in Netlify."
        img={MovieAppImage}
        codeLink="https://github.com/marvinel1013/Movie-App"
        demoLink="https://simple-movie-app-by-marvinel.netlify.app/"
        techUsed="ReactJS | TailwindCSS | MaterialUI | ReactRouter"
      />

      {/* Todo List App Card*/}
      <ProjectCard
        rightSide={false}
        title="Todo List App"
        desc="In this project, I created a Complete Todo Application with all features. I do all the Create, Read, Update and Delete (CRUD) operations. I used React JS, Vite and Tailwind CSS and I used Redux/Redux Toolkit to manage my states. Also I add simple animations using Framer Motion and I used localStorage to persist the data in the application. This Application is hosted in Vercel."
        img={TodoAppImage}
        codeLink="https://github.com/marvinel1013/Todo-App"
        demoLink="https://todoapp-by-marvinel.vercel.app/"
        techUsed="ReactJS | TailwindCSS | Redux | FramerMotion"
      />

      {/* Landing Page App Card */}
      <ProjectCard
        rightSide={true}
        title="Animated Landing Page"
        desc="In this project, I created a Landing Page Application with smooth animation. I created it in React JS, Vite and Tailwind CSS as my CSS framework. This porject is only a UI Design with no functionality only the smooth scrool in every navlink and the animated on scroll this application is fully responsive. I created this project to enhance my skill in Tailwind CSS. This application is hosted in Vercel."
        img={LandingPageImage}
        codeLink="https://github.com/marvinel1013/Landing-Page-App"
        demoLink="https://landing-page-by-marvinel.vercel.app/"
        techUsed="ReactJS | TailwindCSS | Vite | AOELibrary"
      />
      {/* Website V1 Card */}
      <ProjectCard
        rightSide={false}
        title="My Website V1"
        desc="In this project, I created my first Porfolio Website with smooth animation. I created it in React JS, Vite and Tailwind CSS as my CSS framework. I used React Router to handle my routing of pages. I used a library called AOS Animate on Scroll Library for the animation. This application is hosted in Vercel."
        img={WebsiteV1Image}
        codeLink="https://github.com/marvinel1013/marvinelsantos-portfolio"
        demoLink="https://marvinel-santos.vercel.app/"
        techUsed="ReactJS | TailwindCSS | ReactRouter | AOSLibrary"
      />

      {/* Website V2 Card */}
      <ProjectCard
        rightSide={true}
        title="My Website V2"
        desc="In this project, I created my second Porfolio Website with page transition animation. I created it in Next JS, TypeScript and Tailwind CSS as my CSS framework. I used a library called Framer Motion for the animation. This application is hosted in Vercel."
        img={WebsiteV2Image}
        codeLink="https://github.com/marvinel1013/portfolio-2"
        demoLink="https://marvinel-portfolio.vercel.app/"
        techUsed="NextJS | TailwindCSS | TypeScript | FramerMotion"
      />
    </div>
  );
};

export default ProjectsLists;
