const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0909", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "yayyy <3 ", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode. Hint: Our anniversary date!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Can I marry someone who I met at lab?", // Example trending search query
    "Am I dramatic or is he just wrong?", // Another example query
    `Is it normal that he forgets what I just said... 5 seconds ago?`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been together?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2024-09-09", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    //{ label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Long Time", // Title of the song
      artist: "Shordie Shordie", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
      spotifyUrl: "https://open.spotify.com/embed/track/3bjW6TTjHKtMn9b0Q1D07I?utm_source=generator"
    },
    {
      title: "Love Songs",
      artist: "Kaash Paige",
      left: "40%",
      top: "15%",
      spotifyUrl: "https://open.spotify.com/embed/track/6qL5UWxRSQYml9O99ozoLv?utm_source=generator"
    },
    {
      title: "Feels Like (La La La)",
      artist: "Repiet, Julia Kleijn",
      left: "15%",
      top: "40%",
      spotifyUrl: "https://open.spotify.com/embed/track/66xH0ZJHR3GzjXdTWfpuCP?utm_source=generator"
    },
    {
      title: "From Time",
      artist: "Drake, Jhene Aiko",
      left: "30%",
      top: "75%",
      spotifyUrl: "https://open.spotify.com/embed/track/0GaBIpyHvytM1UBYmqXu08?utm_source=generator"
    },
    {
      title: "Best Friend - Remix",
      artist: "50 Cent, Olivia",
      left: "5%",
      top: "65%",
      spotifyUrl: "https://open.spotify.com/embed/track/34CL7BzCPoHLNT5tE3pHwq?utm_source=generator"
    },
    {
      title: "Never Lose You",
      artist: "Kalan.FrFr",
      left: "25%",
      top: "90%",
      spotifyUrl: "https://open.spotify.com/embed/track/2S16czIeUR0vS7fwq5Fv7T?utm_source=generator"
    },
    {
      title: "feel U luv Me",
      artist: "Knock2",
      left: "35%",
      top: "50%",
      spotifyUrl: "https://open.spotify.com/embed/track/0xDSZ754ZOdthmF784uuE5?utm_source=generator"
    },
    {
      title: "Oakland Pt. 2",
      artist: "Karri",
      left: "10%",
      top: "25%",
      spotifyUrl: "https://open.spotify.com/embed/track/53ZSD18jfaGFqSnj4FL8Lq?utm_source=generator"
    },
  ],

    // 📝 Message Recap Page
    /*
    messageTitle: "Our Messages", // Title for the messages recap page
    messageGallery: [
      { title: "September 3, 2024", description: "A beautiful day to remember." }, // Message entry
      { title: "October 5, 2024", description: "Cherishing moments together." },
      { title: "December 25, 2024", description: "Christmas with love ❤️" },
    ],
    */
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "September 10, 2023", description: "where it all started..." },
      { title: "January 4, 2024", description: "..." },
      { title: "June 29, 2024", description: "our second time at lab!!!" },
      { title: "July 5, 2024", description: "our third time at lab... where i slipped n fell on my ass..." },
      { title: "July 13, 2024", description: "where it actually all started 😁" },
      { title: "July 17, 2024", description: "the only picture we have of our 1st date omg" },
      { title: "July 21, 2024", description: "morning after our 2nd date 😐" },
      { title: "July 28, 2024", description: "626 night market date 😊🥢" },
      { title: "September 7, 2024", description: "our first baecation ❤️‍🔥" }, 
      { title: "September 9, 2024", description: "when i threw us off the jetski 💕" },
      { title: "September 9, 2024", description: "and the same night you asked me out 🥹" },
      { title: "September 10, 2024", description: "ziplining where they lied to us and had us hike all the way to the top in 100 degree weather..." },
      { title: "November 22, 2024", description: "ISOKNOCK!! 😆" },
      { title: "December 30, 2024", description: "😂😂😂😂😂" },
      { title: "January 1, 2025", description: "OUR FIRST NEW YEARS!!!!! 🎉" },
      { title: "January 11, 2025", description: "somewhere not lab..." },
      { title: "January 11, 2025", description: "...where the drinks were $50 and delicious..." },
      { title: "February 16, 2025", description: "our first valentine's day with our amazing photographer 💯" },
      { title: "February 16, 2025", description: "awwwwwwwwwww 💕💕💕" },
      { title: "February 22, 2025", description: "tahoe & snowboarding at heavenly!!! 🏂" },
      { title: "March 26, 2025", description: "OUR SECOND BAECATION!!!! ❤️‍🔥" },
      { title: "March 26, 2025", description: "where we went to so many beaches 😄🌊" },
      { title: "March 27, 2025", description: "and got our first permanent bracelets!!! <3" },
      { title: "March 26, 2025", description: "had to feature one of my fav pics of us duh" },
      { title: "March 28, 2025", description: "RODE MOPEDS DOWN WAIKIKI" },
      { title: "March 28, 2025", description: "....before you fell..... omg help me 😂😕" },
      { title: "March 30, 2025", description: "went to the botanical garden 😊🌴" },
      { title: "May 4, 2025", description: "did stinky puppy yoga...." },
      { title: "May 4, 2025", description: "we have to come back for him :(" },
      { title: "October 26, 2024", description: "how can we forget this motherfucker..." },
      { title: "May 19, 2025", description: "our first (short-lived) edc ⚡️" },
      { title: " ", description: "and our countless long-distance ft calls 🌚" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "your request of a 'ten page paper' of why i love you will be given in person 🙄🫶🏼", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "forever blessed to be loved by you. happy 23rd to my best friend!!! <3", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
    "how long have we been together?",
  ],
};

export default config;
