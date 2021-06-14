import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  personalData = [
    {
      icon: "custom-icon fas fa-phone",
      link: "tel:9606514697",
      data: "9606514697"
    },
    {
      icon: "custom-icon fas fa-at",
      link: "mailto:akhouriankitprakash@gmail.com",
      data: "akhouriankitprakash@gmail.com"
    },
    {
      icon: "custom-icon fab fa-github",
      link: "https://github.com/ankit1329",
      data: "https://github.com/ankit1329"
    },
    {
      icon: "custom-icon fab fa-linkedin-in",
      link: "https://www.linkedin.com/in/ankit1329",
      data: "https://www.linkedin.com/in/ankit1329"
    },
    {
      icon: "custom-icon fas fa-map-marker-alt",
      link: "http://maps.google.com/?q=RNR Enclave Bengaluru",
      innerHtml: "S4, RNR Enclave, Maruthi Layout,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Munnelkola, Bengaluru - 560037"
    }
  ]
  softSkills = [
    "Strong Communication", "Problem Solving", "Creative Thinking"
  ]
  techSkills = [
    {
      name: "Node.js",
      rating: 5,
    },
    {
      name: "Angular",
      rating: 5,
    },
    {
      name: "MongoDB",
      rating: 5
    },
    {
      name: "Python",
      rating: 4
    },
    {
      name: "Java",
      rating: 3
    },
    {
      name: "ELK Stack",
      rating: 3
    },
    {
      name: "Linux",
      rating: 5
    },
    {
      name: "Windows",
      rating: 4
    },
    {
      name: "Angular Material",
      rating: 5
    },
    {
      name: "MySQL",
      rating: 3
    },
    {
      name: "Kubernetes",
      rating: 3
    }
  ]

  experience = [
    `Developed a multiproject document search application to find relevant documents (emails, docs, excels, ppts, pdfs, txt, images) 
    from milions of documents per project. Used <a href='https://bodybuilder.js.org' target='_blank'>Bodybuilder.js</a>
    to build complex Elastic Serach queries in Node.js.`,
    `Automated excel creation process through a web application which brought douwn 2 days of manual effort 
    to 4-6 hours. User can select type of excel to be generated, upload the required data (csv) files and download
    all excels in zip once the progress reaches 100%. Used <a href='https://www.npmjs.com/package/exceljs' target='_blank'>excel.js</a>
    to create styled excels in Node.js.`,
    `Developed an invoice processing application. Financial analyst often used to sit and manually enter data from a
    pdf/image invoice in excel sheets. With this application users can easily get the data points from invoices which
    is directly used to find money leakages in an automated pipeline.`,
    `Developed many critical microservices of an upcoming product. Some examples are:
    <br>• Authentication service which can connect to any IDP that tenant uses to authenticate users.
    <br>• Email Service which connects to users mailbox (Gsuite and O365), sends emails, 
    listens to incoming reply emails and track if email is opened by the receiver.
    <br>• Log Service which gathers log from all microservices through <a href='https://nats.io' target='_blank'>NATS</a> 
    and pushes into elk stash. Also published nodejs <a href='https://www.npmjs.com/package/dd-stan-logger', target='_blank'>logger</a> 
    library on NPM which makes connecting to NATS and pushing logs easier.`,
    `Developed multiple demo applications on short notice. Some of them are:
    <br>• Workflow management system to track approvals on tasks in a organisation using a decision table built using Camunda Modeler
    <br>• Workbench application to run a python script in backend that finds claims (money leakages) using uploaded set of files`,
    `Worked on data presentation in multiple applications using many charting libraries to represent business data through charts and graphs.
    Used <a href='https://swimlane.github.io/ngx-charts/#/ngx-charts/bar-vertical' target='_blank'>Swimlane Ngx Charts</a> recently.`
  ]
  education = {
    time: "2012 -<br>2016",
    name: "B.Tech, Silicon Institute of Technology, Bhubaneswar",
    stream: "Stream: Electronics and Communication Engineering"
  }
  publications = [
    {
      name: "<a href='https://www.npmjs.com/package/eml-parser' target='_blank'>Eml-Parser</a>",
      description: "Used to parse .eml files or convert to pdf, html, jpeg or png format.<br>Can also extract headers and attachments from .eml files."
    },
    {
      name: "<a href='https://www.npmjs.com/package/ngx-mat-alert-confirm' target='_blank'>Ngx-Mat-Alert-Confirm</a>",
      description: "A highly customizable library to display alerts and confirm boxes using angular material components."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  getPageUrl() {
    return window.location.href;
  }
  getSpreadArray(n: Number) {
    return Array.from(Array(n).keys());
  }

}
