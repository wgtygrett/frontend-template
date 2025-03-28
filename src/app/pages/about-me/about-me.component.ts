import { Component, OnInit, AfterViewInit, ChangeDetectorRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  standalone: false
})
export class AboutMeComponent implements OnInit {
  currentMonthYear: string
  
  text = "Tygrett"; // Change this to your name
  displayedText = this.text; // Display the full text without typing effect
  tabs: string[] = ["About", "Projects", "Contact"];
  activeTab: string = "About";

  workTabs: string[] = ["CGI 2023-2025", "CGI 2022-2023", "CGI 2019-2022"];
  otherTabs: string[] = ["Engineering Ambassador", "ACM Chapter President", "ACM Chapter Secretary", "Robotics Camp Instructor", "Android Workshop Instructor"];
  skillsTabs: string[] = ["Industry Knowledge", "Disciplines", "Tech Specs", "Other Skills"];
  
  activeWorkTab: string = this.workTabs[0];
  activeOtherTab: string = this.otherTabs[0];
  activeSkillsTab: string = this.skillsTabs[0];
  
  descriptions: { [key: string]: string } = {
    "CGI 2023-2025": "Details about your role from 2023 to 2025.",
    "CGI 2022-2023": "Details about your role from 2022 to 2023.",
    "CGI 2019-2022": "Details about your role from 2019 to 2022.",
    "Engineering Ambassador": "Your experience as an Engineering Ambassador.",
    "ACM Chapter President": "Your role as ACM Chapter President.",
    "ACM Chapter Secretary": "Your role as ACM Chapter Secretary.",
    "Robotics Camp Instructor": "Your experience teaching at the Robotics Camp.",
    "Android Workshop Instructor": "Your experience instructing an Android Workshop.",
    "Industry Knowledge": "Your industry knowledge.",
    "Disciplines": "Your disciplines and methodologies.",
    "Tech Specs": "Your technical specifications and expertise.",
    "Other Skills": "Miscellaneous skills and tools you are proficient in."
  };

  // descriptions: { [key: string]: string } = {
  //   About: "I am a front-end engineer passionate about UI/UX and data analytics.",
  //   Projects: "Check out my latest work in Angular, SQL, and UI/UX design.",
  //   Contact: "Feel free to reach out via LinkedIn or email!"
  // };
  
  constructor() {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    this.currentMonthYear = now.toLocaleDateString('en-US', options);
  }
  ngOnInit() {
    // For any animations maybe
  }



  // setActiveTab(tab: string) {
  //   this.activeTab = tab;
  // }

  setActiveWorkTab(tab: string) {
    this.activeWorkTab = tab;
  }

  setActiveOtherTab(tab: string) {
    this.activeOtherTab = tab;
  }

  setActiveSkillsTab(tab: string) {
    this.activeSkillsTab = tab;
  }
}
