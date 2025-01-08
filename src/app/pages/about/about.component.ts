import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  workExperiences = [
    {
      title: 'Software Developer Intern',
      company: 'D360° Technologies Inc',
      dates: 'January 2024 - May 2024',
      responsibilities: [
        'Developing a chatbot, which takes queries in Natural Language and fetches data from the customer\'s database on GCP. \
        Worked on file pre-processing and query processing.',

        'File pre-processing: Manual testing of code on 70 distinct files. Adjusted weights used in column detection (probability based) \
         and incorporating more keywords. Separated data from code using YAML',

        'Made file pre-processing more robust with 7+ significant changes including logic for multiple sheets handling, corrupt cell\
        color formats, logic for better detection of column headers in spreadsheets, handling files of .csv, .xls and .xlsx extension,\
        designed regex and replace corrupt/expired links with new links',

        'Bypass probability based column detection process for specific huge files (100+ mb) with known formats, and reduce\
        processing time from avg 1500s to 65s',

        'Implemented indexation, storing indexes based on diamond properties and improved query processing time from O(n) to\
        Ω(indexes) where n >> indexes',
        
      ]
    },
    {
      title: 'SDE Summer Intern',
      company: 'D360° Technologies Inc',
      dates: 'June 2023 - July 2023',
      responsibilities: [
        'Developed various Google Cloud functions which cater the needs of company’s front-end.',
        'Developed cloud function for fetching dates when a user uploaded and has the processed file in cloud storage',
        'Developed cloud function for keeping 10 latest files in a different storage section.',
        'Designed unit tests for their chatbot’s query processing engine. Designed in unittest framework (python).'
      ]
    }
  ];
}
