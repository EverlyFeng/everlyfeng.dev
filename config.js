var app = new Vue({
  el: '#page',
  data: {
    webname: 'Hi, I\'m Everly',
    Name: 'Everly Feng',
    tel: '646-925-8899',
    email: 'tf2516@columbia.edu',
    location: 'New York, NY',
    web: 'www.everlyfeng.dev',
    Title: 'CS student @ Columbia University',
    PICADDRESS: 'images/user.jpg',
    /** contacts */
    contacts: [
      {
        method: 'linkedin',
        address: 'https://www.linkedin.com/in/everly-feng'
      },
      {
        method: 'twitter',
        address: 'https://twitter.com/EverlyFeng'
      },
      // {
      //   method: 'discord',
      //   address: 'https://discord.gg/gP8JuVPqRv'
      // },
      // {
      //   method: 'instagram',
      //   address: '234234'
      // }
    ],
    aboutmetitle: 'Welcome!',
    aboutmecontent: 'My name is Everly, I\'m currently working as a full-time Data Analyst in Pem-America Inc ' +
        'and an incoming MS in CS student at Columbia University. ' +
        'I\'m so glad to meet you and let\'s connect on Linkedin.',
    /** experience */
    experience: [
      {
        jobtitle: 'Data Analyst',
        company: 'Pem-America, Inc. ',
        time: 'Aug. 2020 - Present',
        description1:'Analyzed and visualized quarterly sales and commission forecasting reports using sklearn and plotly.',
        description2:'Developed an anomaly detection application to identify and inspect data outliers from human error of manual data entry.',
        // description3:'Formulated business P&L analysis using database management systems such as PostgreSQL and Microsoft SQL Server.',
        description3:'Optimized transaction posting and analyzing process by initiating the automatic data exporting model in excel using xlwings.'
      },
      {
        jobtitle: 'Part-time Office Assistant',
        company: 'Baruch College Student Service',
        time: 'Jan. 2018 - Mar. 2020',
        description1: 'Collaborated with experienced financial professionals to troubleshoot and analyze unsubstantiated fund and voucher usage.',
        description2: 'Authorized and processed payment requests from student organizations for personal reimbursements, vendor invoices and pre-bills.',
        description3: 'Consolidated and maintained monthly account statements through online CashPro platform and physical inspections.'
      },
    ],
    /** education*/
    education: [
      {
        degree: 'MS in Computer Science',
        collegename: 'Columbia University, Fu Foundation School of Engineering and Applied Science',
        time: 'Jun. 2021 - Dec. 2022',
        activities: 'Incoming 2021 MS in CS candidate'
      },
      {
        degree: 'BBA in Accounting',
        collegename: 'Baruch College CUNY, Zicklin School of Business',
        time: 'Aug. 2017 - May 2020',
        activities: 'Zicklin Graduate Student Ambassador - ' +
            ' Represented the college at on and off-campus recruitment and yield events and' +
            ' assisted with developing and implementing student engagement events.'
      },
    ],

    /** skills */
    skills: [
      {
        name: 'Python',
        percentage: 100,
      },
      {
        name: 'SQL',
        percentage: 100
      },
      {
        name: 'JAVA',
        percentage: 80
      },
      {
        name: 'CSS',
        percentage: 80
      },
      {
        name: 'HTML',
        percentage: 80
      },
      {
        name: 'JavaScript',
        percentage: 80
      },
      {
        name: 'R',
        percentage: 70
      },
      {
        name: 'C',
        percentage: 60
      }
    ],
    // /** My Hobbies icon in /fonts/demo.html*/
    // hobbies: [
    //   {
    //     name: 'Guitar',
    //     icon: '..',
    //     // description: ''
    //   },
    //   {
    //     name: 'Hiking',
    //     icon: 'icon-mic',
    //     //description: ''
    //   },
    //   {
    //     name: 'Biking',
    //     icon: 'icon-bike',
    //     //description: ''
    //    }
    // ],
    /** my Projects */
    project: [
       {
        name: 'Humana-Mays Healthcare Analytic Case Competition (Python)',
        web: 'https://mays.tamu.edu/humana-tamu-analytics/',
        pic: 'images/humana.jpg',
        des:'Lead a team of three to build a forecasting model to identify Medicare members most at risk for a transportation challenge and\n' +
            'propose solutions for them to overcome this barrier to accessing care and achieving their best health.'
      },
      {
        name: 'Panic Selling Trader (Python, Flask, Amazon Web Services)',
        // web: 'www.abc.com',
        pic: 'images/stock.jpg',
        des: 'An automated stock trading and tracking web application using AWS Lambda and Flask that' +
            'predicts possible panic selling through comparing and finding shortfall between expected EPS and real time reported EPS data' +
            'from SEC API and continuously price tracking with Robinhood API.'
      }
    ],
  },
  mounted () {
    document.title = this.webname
  }
})