import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

interface TechStack {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  techStack: TechStack[] = [
    { name: 'JavaScript', icon: 'assets/TechIcons/Javascript.svg' },
    { name: 'TypeScript', icon: 'assets/TechIcons/Typescript.svg' },
    { name: 'Node.js', icon: 'assets/TechIcons/Node.svg' },
    { name: 'Angular', icon: 'assets/TechIcons/angular-icon.webp' },
    { name: 'MySql', icon: 'assets/TechIcons/mysql-icon.webp' },
    { name: 'React', icon: 'assets/TechIcons/React.svg' },
    // { name: 'Next.js', icon: 'assets/TechIcons/Next.svg' },
    { name: 'MongoDB', icon: 'assets/TechIcons/Mongo.svg' },
    { name: 'Python', icon: 'assets/TechIcons/Python.svg' },
    // { name: 'Java', icon: 'assets/TechIcons/Java.svg' },
    // { name: 'C++', icon: 'assets/TechIcons/C++.svg' },
    // { name: 'Go', icon: 'assets/TechIcons/go.svg' },
    { name: 'SQL', icon: 'assets/TechIcons/SQL.svg' },
    // { name: 'Firebase', icon: 'assets/TechIcons/Firebase.svg' }
  ];

  tools: TechStack[] = [
    { name: 'VS Code', icon: 'assets/TechIcons/vscode.svg' },
    { name: 'Jenkins', icon: 'assets/TechIcons/jenkins-icon.webp' },
    { name: 'Git', icon: 'assets/TechIcons/Git.svg' },
    { name: 'Docker', icon: 'assets/TechIcons/Docker.svg' },
    // { name: 'Kubernetes', icon: 'assets/TechIcons/Kubernates.svg' },
    // { name: 'AWS', icon: 'assets/TechIcons/AWS.svg' },
    { name: 'Postman', icon: 'assets/TechIcons/Postman.svg' },
    // { name: 'Redis', icon: 'assets/TechIcons/Redis.svg' }
  ];
}
