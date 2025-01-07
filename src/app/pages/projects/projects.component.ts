import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'mySchedules',
      description: 'Web-app to streamline the process of shift assigning and picking among part time employees and managers.\
      Built using Angular, Django & PostgresQL',
      githubLink: 'https://github.com/sahajpatel008/mySchedules'
    },
    {
      name: 'Conversational AI Chatbot',
      description: 'A conversational AI chatbot using Google-assisted NLP engine: Dialogflow to process natural language queries \
      pertaining to different types of diamonds and thereby generating filtering parameters to query out diamonds having these mentioned properties.',
      githubLink: 'https://github.com/SheshangPatel/BitBombers_Mined'
    },
    {
      name: 'codeTracker',
      description: 'Desktop app that tracks your IDE activity and updates it on your Google Calendar. \
      The project will use Google OAuth Client ID to commit event details of your coding activity .',
      githubLink: 'https://github.com/sahajpatel008/codeTracker'
    },
    {
      name: ' Typing Speed Test',
      description: 'Desktop app made with Tkinter. Measures your typing speed from a fixed pool of randomly picked common words\
       and displays your typing progress.',
      githubLink: 'https://github.com/sahajpatel008/Typing-Speed-Test'
    }
  ];
}