import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { Component, HostListener } from '@angular/core';
import { ExperienceComponent } from "./experience/experience.component";
import { TechnnicalSkilsComponent } from "./technnical-skils/technnical-skils.component";
import { EducationComponent } from "./education/education.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactusComponent } from "./contactus/contactus.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ExperienceComponent, TechnnicalSkilsComponent, EducationComponent, ProjectsComponent, ContactusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hrishi_Portfolio';

  // Listen for the scroll event
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const aboutMeSection = document.getElementById('about-me');
    const skillsSection = document.getElementById('technical-skills-section');
    const educationSection = document.getElementById('education-section');
    const experienceSection = document.getElementById('experience-section');
    const projectSection = document.getElementById('projects-section');
    const contactSection = document.getElementById('contact-section');


    if (aboutMeSection && this.isInView(aboutMeSection)) {
      aboutMeSection.style.opacity = '1'; // Make it visible
      if (skillsSection) skillsSection.style.opacity = '0';  // Hide skills until about is fully visible
      if (educationSection) educationSection.style.opacity = '0'; 
      if (projectSection) projectSection.style.opacity = '0'; 
      if (contactSection) contactSection.style.opacity = '0'; 
      if (experienceSection) experienceSection.style.opacity = '0'; // Hide experience until skills are visible
    }
  
    if (skillsSection && this.isInView(skillsSection)) {
      skillsSection.style.opacity = '1';  // Show skills section
      skillsSection.style.backgroundColor = 'black';
      if (experienceSection) experienceSection.style.opacity = '0'; // Hide experience until skills are fully visible
      if (educationSection) educationSection.style.opacity = '0'; 
      if (projectSection) projectSection.style.opacity = '0'; 
      if (contactSection) contactSection.style.opacity = '0'; 
    }
  
    if (experienceSection && this.isInView(experienceSection)) {
      experienceSection.style.opacity = '1';  // Show experience section
      if (educationSection) educationSection.style.opacity = '0'; 
      if (projectSection) projectSection.style.opacity = '0'; 
      if (contactSection) contactSection.style.opacity = '0'; 
    }

    if (educationSection && this.isInView(educationSection)) {
      educationSection.style.backgroundColor = 'black';
      educationSection.style.opacity = '1';  // Show experience section
      if (projectSection) projectSection.style.opacity = '0'; 
      if (contactSection) contactSection.style.opacity = '0'; 
    }
    if (projectSection && this.isInView(projectSection)) {
      projectSection.style.opacity = '1';  // Show experience section
      if (contactSection) contactSection.style.opacity = '0'; 
    }

    if (contactSection && this.isInView(contactSection)) {
      contactSection.style.backgroundColor = 'black';
      contactSection  .style.opacity = '1';  // Show experience section
    }
  }

  // Helper function to check if an element is in the viewport
  isInView(element: any) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
}
