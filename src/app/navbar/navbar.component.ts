import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust offset to avoid overlap with the fixed navbar
        behavior: 'smooth' // Enables smooth scrolling
      });
    }
  }

  downloadResume() {
    const resumeUrl = 'assets/hrishikeshresume.pdf'; // Correct path
    window.open(resumeUrl, '_blank');
  }
  
}
