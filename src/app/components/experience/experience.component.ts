import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface Experience {
  position: string;
  company: string;
  duration: string;
  location?: string;
  type?: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experienceData: Experience[] = [
  {
    position: 'Software Developer',
    company: 'DevLogix Pvt. Ltd.',
    duration: 'Nov 2023 - Present',
    location: 'Lucknow, Uttar Pradesh, India',
    type: 'Full-time',
    responsibilities: [
      'Developed full-stack web applications',
      'Worked with React, Angular and Node.js',
      'Collaborated with cross-functional teams',
      'Delivered projects on time'
    ]
  },
  {
    position: 'MERN Stack Developer',
    company: 'Techpile Technology',
    duration: 'Aug 2022 - Apr 2023',
    location: 'Lucknow, Uttar Pradesh, India',
    type: 'Apprenticeship',
    responsibilities: [
      'Built responsive web interfaces',
      'Learned modern web technologies',
      'Participated in code reviews',
      'Fixed bugs and improved UI/UX'
    ]
  }
];
}
