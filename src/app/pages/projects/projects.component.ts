import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio website built with Angular and Angular Material.',
      githubLink: 'https://github.com/yourusername/portfolio-website'
    },
    {
      name: 'Weather App',
      description: 'A weather forecasting app using Angular and OpenWeatherMap API.',
      githubLink: 'https://github.com/yourusername/weather-app'
    },
    {
      name: 'Chat Application',
      description: 'A real-time chat application built with Angular and Firebase.',
      githubLink: 'https://github.com/yourusername/chat-application'
    }
  ];
}