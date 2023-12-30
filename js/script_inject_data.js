// Note: build sql connector for this section 

// build proxy version 

let data_journey = {
    "Education":{
        "High School": ["Merewether High School", "2007-01-01", "2012-12-31" ,"Achieved .... blah"]
        ,"University":["University of Newcastle", "2007-01-01", "2012-12-31" , "Achieved this and that"]
        , "University": ["University of New South Wales", "Achieved this and yyy"]
    }
    ,"Professional Career" : {
        "NIB" : ["Actuarial Analyst", "2019-09-01", "2020-04-01", ""]
        ,"NIB2" : ["Actuarial Analyst", "2019-09-01", "2020-04-01", ""]

    }
}

let journey = document.querySelector(".education-row")

console.log(journey)

console.log(data_journey['Education'])

let add_html_component = ''

for( const [key, value] of Object.entries(data_journey)){

    for( const [key2, value2] of Object.entries(data_journey[key])){
        console.log(key2, value2, value2[0])
    }
}


console.log("Inject Data")
// console.log(journey)

const educationData = [
    {
      year: '2016-2018',
      place: 'Combined Actuarial & Mathematics - University of New South Wales',
      result: 'Distinction - WAM: 77 (all subjects included)',
      description: 'I decided I was better suited to Maths than the law and moved to Sydney to pursue Actuarial/Maths'
    },
    {
      year: '2013-2015',
      place: 'Commerce - Finance Major - University of Newcastle (with 1st Year Law)',
      result: 'Distinction',
      description: 'Started studying combined Commerce-Law - Finished the commerce component majoring in Finance'
    }
];

const workData = [
    
    {
      year: '2020 - Present',
      place: 'BTIG: Analyst / Designated Trading Representative',
      description: 'Worked on live markets, produced market based reporting & middle office reporting',
      projects: []
    },
    {
      year: '2019-2020',
      place: 'NIB - Actuarial Analyst',
      description: 'Worked as an Actuarial Analyst where I was responsible for improving and updating a claims model',
      projects: []
    }
];

const projectsPersonalData = [
  {
    primaryTool: 'Javascript',
    secondaryTools: 'HTML, CSS',
    purpose: 'Linear Programming For Diet Optimisation',
    description: 'This website located at <url> has been designed as a tool for ' +
    'ghghg'
  },
  {
    primaryTool: 'Python',
    secondaryTools: 'YYYYYYYYYYYS',
    purpose: 'Bachelor DegreeXXX - University',
    description: 'YLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus soluta recusandae tenetur fuga porro ducimus quisquam, consectetur placeat alias veniam, itaque laborum, et natus voluptate asperiores nisi distinctio dolor sit.'
  },
  {
    primaryTool: '2017-2018',
    secondaryTools: 'ZZZZZZZZZZZZZZZ',
    purpose: 'Bachelor DegreeXXX - University',
    description: 'ZLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus soluta recusandae tenetur fuga porro ducimus quisquam, consectetur placeat alias veniam, itaque laborum, et natus voluptate asperiores nisi distinctio dolor sit.'
  }
];

const projectsProfessionalData = [
  {
    primaryTool: 'Javascript',
    secondaryTools: 'HTML, CSS',
    purpose: 'Website Detailing Skills & Abilities',
    description: 'XLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus soluta recusandae tenetur fuga porro ducimus quisquam, consectetur placeat alias veniam, itaque laborum, et natus voluptate asperiores nisi distinctio dolor sit.'
  },
  {
    primaryTool: '2017-2018',
    secondaryTools: 'YYYYYYYYYYYS',
    purpose: 'Bachelor DegreeXXX - University',
    description: 'YLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus soluta recusandae tenetur fuga porro ducimus quisquam, consectetur placeat alias veniam, itaque laborum, et natus voluptate asperiores nisi distinctio dolor sit.'
  },
  {
    primaryTool: 'Python',
    secondaryTools: 'css,html',
    purpose: 'Bachelor DegreZZZ - University',
    description: 'ZLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus soluta recusandae tenetur fuga porro ducimus quisquam, consectetur placeat alias veniam, itaque laborum, et natus voluptate asperiores nisi distinctio dolor sit.'
  }
];

const projectsUniversityData = [
  {
    primaryTool: 'R',
    primaryToolIcon: 'R',
    secondaryTools: '',
    purpose: 'Actuarial Modelling For Hurricanes',
    description: 'XLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus soluta recusandae tenetur fuga porro ducimus quisquam, consectetur placeat alias veniam, itaque laborum, et natus voluptate asperiores nisi distinctio dolor sit.'
  },
  {
    primaryTool: 'R',
    secondaryTools: 'Excel',
    purpose: 'Baseball Simulator - Estimating Output in Baseball',
    description: 'YLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus soluta recusandae tenetur fuga porro ducimus quisquam, consectetur placeat alias veniam, itaque laborum, et natus voluptate asperiores nisi distinctio dolor sit.'
  }
];
  

const skillsData = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', percentage: '100%' },
      { name: 'SQL', percentage: '90%' },
      { name: 'VBA/VBScript', percentage: '80%' },
      { name: 'R', percentage: '80%' },
    ],
  },
  {
    title: '_',
    skills: [
      { name: 'Javascript, HTML, CSS', percentage: '100%' },
      { name: 'React', percentage: '90%' },
      { name: 'MongoDB', percentage: '80%' },
      { name: 'Utilising AI for Productivity', percentage: '80%' },
    ],
  }
  ,
  {
    title: 'Data Sources',
    skills: [
      { name: 'Bloomberg', percentage: '100%' },
      { name: 'IRESS', percentage: '85%' },
      { name: 'Yahoo', percentage: '70%' },
      { name: 'Other', percentage: '95%' },
    ],
  },
  {
    title: 'Project Areas',
    skills: [
      { name: 'Financial Engineering', percentage: '100%' },
      { name: 'Data Engineering & ETL', percentage: '85%' },
      { name: 'Automation', percentage: '70%' },
      { name: 'Machine Learning', percentage: '95%' },
    ],
  },
  {
    title: 'Machine Learning & Statistics',
    skills: [
      { name: 'Generalised Linear Models', percentage: '100%' },
      { name: 'Unsupervised Learning', percentage: '90%' },
      { name: 'Natural Language Processing', percentage: '80%' },
      { name: 'Neural Networks', percentage: '80%' },
    ],
  },
  {
    title: 'Visualisation',
    skills: [
      { name: 'Power BI', percentage: '100%' },
      { name: 'Tableau', percentage: '90%' },
      { name: 'HTML for Email', percentage: '80%' },
      { name: 'Excel/Powerpoint', percentage: '80%' },
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'Spanish', percentage: '100%' },
      { name: 'Hungarian', percentage: '85%' },
      { name: 'Teaching', percentage: '70%' },
      { name: 'Stock Market', percentage: '95%' },
    ],
  }
];


//  INJECTION FUNCTIONS

function createEducationColumns(educationData, mytitle) {

    const educationRow = document.querySelector('.education-row');
    const educationColumn = document.createElement('div');
    educationColumn.classList.add('education-column');
  
    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = mytitle;
  
    educationColumn.appendChild(title);
  
    const educationBox = document.createElement('div');
    educationBox.classList.add('education-box');
  
    educationData.forEach((education) => {

      const educationContent = document.createElement('div');
      educationContent.classList.add('education-content');
  
      const content = document.createElement('div');
      content.classList.add('content');
  
      const year = document.createElement('div');
      year.classList.add('year');
      year.innerHTML = `<i class='bx bxs-calendar'></i>${education.year}`;
  
      // Create the education title
      const place = document.createElement('h3');
      place.textContent = education.place;
      
      const result = document.createElement('p');
      result.textContent = education.result;

      // Create the education description paragraph
      const description = document.createElement('p');
      description.textContent = education.description;
  
      // Append all the elements to the respective parents
      content.appendChild(year);
      content.appendChild(place);
      content.appendChild(result);
      content.appendChild(description);
      educationContent.appendChild(content);
      educationBox.appendChild(educationContent);
    });
  
    // Append the education box to the education column
    educationColumn.appendChild(educationBox);
  
    // Append the education column to the education row
    educationRow.appendChild(educationColumn);
}
createEducationColumns(workData, "Professional");

createEducationColumns(educationData, "Education");



let my_icon = '';

function getBoxiconHTML(language) {
  const boxiconsMapping = {
      'python': 'bxl-python',
      'javascript': 'bxl-javascript',
      'java': 'bxl-java',
      'typescript': 'bxl-typescript',
      'react': 'bxl-react',
      'vue': 'bxl-vuejs',
      'angular': 'bxl-angular',
      'html': 'bxl-html5',
      'nodejs': 'bxl-nodejs',
      'mongodb': 'bxl-mongodb',
      'css': 'bxl-css3',
      'flask': 'bxl-flask',
      'php': 'bxl-php',
      'docker': 'bxl-docker',
      'postgresql': 'bxl-postgresql',
      'c++':'bxl-c-plus-plus',
      'github':'bxl-github',
      'aws':'bxl-aws',
      'mysql': 'bxs-data',
      'sql':'bxs-data',
      'r': 'bx-registered',
      'excel':'bx-spreadsheet',
      'vb': 'bx-collapse-alt',
      'vba': 'bx-collapse-alt'

      // Add more mappings as needed
  };

  my_language = language.split(',')[0].trim();

  const boxiconClass = boxiconsMapping[my_language.toLowerCase()];


  if (boxiconClass) {
      return boxiconClass;
  } else {
      return 'bx-expand-horizontal';
  }
}

function createProjectsColumns(projectData, mytitle) {
  // Find the projects row element
  const projectsRow = document.querySelector('.projects-row');

  // Create the projects column div
  const projectsColumn = document.createElement('div');
  projectsColumn.classList.add('projects-column');

  // Create the projects title
  const title = document.createElement('h3');
  title.classList.add('title');
  title.textContent = mytitle;

  // Append the title to the projects column
  projectsColumn.appendChild(title);

  // Create the projects box div
  const projectsBox = document.createElement('div');
  projectsBox.classList.add('projects-box');

  // Loop through the projects data
  projectData.forEach((projects) => {
    // Create the projects content div
    const projectsContent = document.createElement('div');
    projectsContent.classList.add('projects-content');

    // Create the content div
    const content = document.createElement('div');
    content.classList.add('content');

    // Create the Primary div
    const primaryTool = document.createElement('div');
    primaryTool.classList.add('primaryTool');

    my_icon = getBoxiconHTML(projects.primaryTool)
    primaryTool.innerHTML = `<i class='bx ${my_icon}'></i>${projects.primaryTool}`;

    my_icon = getBoxiconHTML(projects.secondaryTools)

    const secondaryTools = document.createElement('div');
    secondaryTools.classList.add('secondaryTools');
    secondaryTools.innerHTML = `<i class='bx ${my_icon}'></i>${projects.secondaryTools}`;

    // Create the Secondary div
    const purpose = document.createElement('div');
    purpose.classList.add('purpose');
    purpose.innerHTML = `<i class='bx bxs-calendar'></i>${projects.purpose}`;

    // Create the projects title
    const degreeTitle = document.createElement('h3');
    degreeTitle.textContent = projects.degree;

    // Create the projects description paragraph
    const description = document.createElement('p');
    description.textContent = projects.description;

    // Append all the elements to the respective parents
    content.appendChild(primaryTool);
    content.appendChild(secondaryTools);
    content.appendChild(purpose);
    content.appendChild(degreeTitle);
    content.appendChild(description);
    projectsContent.appendChild(content);
    projectsBox.appendChild(projectsContent);
  });

  // Append the projects box to the projects column
  projectsColumn.appendChild(projectsBox);

  // Append the projects column to the projects row
  projectsRow.appendChild(projectsColumn);
}

createProjectsColumns(projectsPersonalData, "Personal");

createProjectsColumns(projectsProfessionalData, "Professional");

createProjectsColumns(projectsUniversityData, "University");




function createSkillsRow(data) {
    // Find the skills row element
    const skillsRow = document.querySelector('.skills-row');
  
    // Iterate over each set of skills data
    data.forEach((skillsSet) => {
      // Create the skills column div
      const skillsColumn = document.createElement('div');
      skillsColumn.classList.add('skills-column');
  
      // Create the skills title
      const title = document.createElement('h3');
      title.classList.add('title');
      title.textContent = skillsSet.title;
  
      // Create the skills box div
      const skillsBox = document.createElement('div');
      skillsBox.classList.add('skills-box');
  
      // Create the skills content div
      const skillsContent = document.createElement('div');
      skillsContent.classList.add('skills-content');
  
      // Loop through the skills data in the set
      skillsSet.skills.forEach((skill) => {
        // Create the progress div
        const progress = document.createElement('div');
        progress.classList.add('progress');
  
        // Create the skill title with the skill percentage
        const skillTitle = document.createElement('h3');
        skillTitle.innerHTML = `${skill.name} <span>${skill.percentage}</span>`;
  
        // Create the bar div
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.innerHTML = `<span style="width: ${skill.percentage};"></span>`;
  
        // Append all the elements to the respective parents
        progress.appendChild(skillTitle);
        progress.appendChild(bar);
        skillsContent.appendChild(progress);
      });
  
      // Append the skills content to the skills box
      skillsBox.appendChild(skillsContent);
  
      // Append the title and skills box to the skills column
      skillsColumn.appendChild(title);
      skillsColumn.appendChild(skillsBox);
  
      // Append the skills column to the skills row
      skillsRow.appendChild(skillsColumn);
    });
}
  

createSkillsRow(skillsData);

  
  
  
  
  