import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  typewriterTexts = [
    'Software Developer',
    // 'Freelancer',
    'MERN Stack Developer',
    'Open Source Contributor'
  ];
  currentTextIndex = 0;
  currentText = '';
  isDeleting = false;

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    const fullText = this.typewriterTexts[this.currentTextIndex];
    
    if (this.isDeleting) {
      this.currentText = fullText.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = fullText.substring(0, this.currentText.length + 1);
    }

    let typeSpeed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.currentText === fullText) {
      typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.typewriterTexts.length;
      typeSpeed = 500;
    }

    setTimeout(() => this.typeWriter(), typeSpeed);
  }
}
