import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface Education {
  degree: string;
  institution: string;
  year: string;
  percentage?: string;
  location?: string;
  description?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educationData: Education[] = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Abdul Kalam Technical University',
      year: '2023 - 2026',
      percentage: 'CGPA: 8.5/10',
      location: 'Lucknow Uttar Pradesh',
      description: 'Specialized in Software Engineering and Web Development'
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'Government Girls Polytechnic',
      year: '2019 - 2022',
      percentage: '83%',
      location: 'Ayodhya Uttar Pradesh India',
      description: 'Focused on programming fundamentals and computer applications'
    },
    {
      degree: '12th (Higher Secondary)',
      institution: 'Anil Saraswati Vidya Mandir',
      year: '2018 - 2019',
      percentage: '72%',
      location: 'Ayodhya Uttar Pradesh India',
      description: 'Science stream with Mathematics and Information Practice'
    },
    {
      degree: '10th (Secondary)',
      institution: 'Anil Saraswati Vidya Mandir',
      year: '2016 - 2017',
      percentage: 'CGPA: 8.3/10',
      location: 'Ayodhya Uttar Pradesh India',
      description: 'Completed secondary education with distinction'
    }
  ];
}
