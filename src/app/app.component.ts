import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { Component, HostListener } from '@angular/core';
import { ExperienceComponent } from "./experience/experience.component";
import { TechnnicalSkilsComponent } from "./technnical-skils/technnical-skils.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ExperienceComponent, TechnnicalSkilsComponent],
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
    const experienceSection = document.getElementById('experience-section');
debugger
    if (aboutMeSection && this.isInView(aboutMeSection)) {
      aboutMeSection.style.opacity = '1'; // Make it visible
      if (skillsSection) skillsSection.style.opacity = '0';  // Hide skills until about is fully visible
      if (experienceSection) experienceSection.style.opacity = '0'; // Hide experience until skills are visible
    }
  
    if (skillsSection && this.isInView(skillsSection)) {
      skillsSection.style.opacity = '1';  // Show skills section
      skillsSection.style.backgroundColor = 'black';
      if (experienceSection) experienceSection.style.opacity = '0'; // Hide experience until skills are fully visible
    }
  
    if (experienceSection && this.isInView(experienceSection)) {
      experienceSection.style.opacity = '1';  // Show experience section
    }
  }

  // Helper function to check if an element is in the viewport
  isInView(element: any) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
}
