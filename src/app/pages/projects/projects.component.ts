import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'BitTorrent Client',
      tech: 'Java 21, Spring Boot, React, Vite',
      date: 'February 2026',
      description: 'Fully-qualified BitTorrent client with complete downloading and seeding capabilities. Handles 100+ concurrent peer connections via multi-threaded architecture with non-blocking I/O and custom thread-safe pools. Features decentralized Peer Exchange (PEX) protocol reducing tracker dependency by 60% through epidemic-style peer discovery. Implements robust magnet link support, torrent file parsing, and piece verification with SHA-1 checksums. Fault-tolerant state management ensures zero data loss with automatic JSON persistence across restarts. Real-time observability dashboard visualizes live telemetry using React/Vite and Server-Sent Events.',
      githubLink: 'https://github.com/sahajpatel008/bittorrent'
    },
    {
      name: 'LogiSOC',
      tech: 'ReactJS, Flask, Docker',
      date: 'March 2025',
      description: 'Full-stack web app to detect anomalies in web server logs including brute-force attacks and data exfiltration. \
      Integrated VirusTotal API to identify malicious domains and detect high-frequency suspicious requests. \
      Containerized using Docker Compose with secure authentication via Clerk. \
      Visualized traffic trends and anomalies using custom timeline charts and HTTP status breakdowns.',
      githubLink: 'https://github.com/sahajpatel008/LogiSOC'
    },
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