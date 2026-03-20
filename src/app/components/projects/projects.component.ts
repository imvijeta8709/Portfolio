import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Project {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
  demoLink?: string;
  isBlog: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
   projects: Project[] = [

    {
imgPath: 'assets/Projects/chatify.png',
title: 'Chatify',
description: 'Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.',
ghLink: 'https://github.com/soumyajit4419/Chatify',
demoLink: 'https://chatify-49.web.app/',
isBlog: false
},
{
imgPath: 'assets/Projects/blog.png',
title: 'Bits-0f-C0de',
description: 'My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.',
ghLink: 'https://github.com/soumyajit4419/Bits-0f-C0de',
demoLink: 'https://blogs.soumya-jit.tech/',
isBlog: false
},
{
imgPath: 'assets/Projects/codeEditor.png',
title: 'Editor.io',
description: 'Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage',
ghLink: 'https://github.com/soumyajit4419/Editor.io',
demoLink: 'https://editor.soumya-jit.tech/',
isBlog: false
},
{
imgPath: 'assets/Projects/leaf.png',
title: 'Plant AI',
description: 'Used the plant disease dataset from Kaggle and trained a image classifer model using \'PyTorch\' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.',
ghLink: 'https://github.com/soumyajit4419/Plant_AI',
demoLink: 'https://plant49-ai.herokuapp.com/',
isBlog: false
},
{
imgPath: 'assets/Projects/suicide.png',
title: 'Ai For Social Good',
description: 'Using \'Natural Launguage Processing\' for the detection of suicide-related posts and user\'s suicide ideation in cyberspace and thus helping in sucide prevention.',
ghLink: 'https://github.com/soumyajit4419/AI_For_Social_Good',
isBlog: false
},
{
imgPath: 'assets/Projects/emotion.png',
title: 'Face Recognition and Emotion Detection',
description: 'Trained a CNN classifier using \'FER-2013 dataset\' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person.',
ghLink: 'https://github.com/soumyajit4419/Face_And_Emotion_Detection',
isBlog: false
}

  ];
  // projects: Project[] = [
  //   {
  //     imgPath: 'assets/Projects/realtime-analytics.png',
  //     title: 'Real-Time Data Analysis with Highcharts',
  //     description: 'Developed APIs for data transmission between IoT devices and server using MQTT protocol. Integrated real-time data handling and processing in the server using Node.js. Managed data storage in MySQL, ensuring efficient retrieval for real-time analysis. Designed and implemented real-time charts using Highcharts to visualize data from PLC Device.',
  //     ghLink: 'https://github.com/vijeta',
  //     isBlog: false
  //   },
  //   {
  //     imgPath: 'assets/Projects/healthcare.png',
  //     title: 'CareOne Healthcare Web Application',
  //     description: 'Developed and implemented a comprehensive healthcare data management system for patient records. Worked with a team to design a user-friendly interface for healthcare providers to access patient information quickly and efficiently. Focused on ensuring secure video calls and appointment scheduling using Angular, Node.js, WebRTC, and MongoDB.',
  //     ghLink: 'https://github.com/vijeta',
  //     isBlog: false
  //   },
  //   {
  //     imgPath: 'assets/Projects/student-management.png',
  //     title: 'Student Management System',
  //     description: 'A centralized platform for student management that facilitates student enrollment, manages academic records, tracks attendance, and enables communication within the educational institution. Built with MERN stack (MongoDB, Express.js, React, Node.js), it serves as a one-stop solution for both administrative and academic needs.',
  //     ghLink: 'https://github.com/vijeta',
  //     isBlog: false
  //   }
  // ];
}
