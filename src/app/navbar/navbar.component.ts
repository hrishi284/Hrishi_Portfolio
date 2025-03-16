import { Component, HostListener } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatMenuModule, MatButtonModule, MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  isMenuOpen: boolean = false; // Track whether the menu is open or closed
  isMobile: boolean = false; // Track if the screen size is mobile

  // Toggle menu for mobile
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Check if the screen size is mobile
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth <= 768;
  }

  // Initialize isMobile based on the initial screen size
  ngOnInit() {
    this.isMobile = window.innerWidth <= 768; 
  }

  // Scroll to the desired section on the page
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust offset to avoid overlap with the fixed navbar
        behavior: 'smooth' // Enables smooth scrolling
      });
    }
  }

  // Download resume on button click
  downloadResume() {
    const resumeUrl = 'assets/hrishikeshresume.pdf'; // Correct path to the resume file
    window.open(resumeUrl, '_blank');
  }

}
