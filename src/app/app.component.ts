import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hrishi_Portfolio';

  // Listen for the scroll event
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const aboutMeSection = document.getElementById('about-me');
    
    // Check if the About Me section is in view
    if (aboutMeSection && this.isInView(aboutMeSection)) {
      aboutMeSection.style.opacity = '1'; // Make it visible
    }
  }

  // Helper function to check if an element is in the viewport
  isInView(element: any) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
}
