/*
  Start Here — the video list.

  To add a video, copy one of the { ... } blocks into the right stage's
  "videos" list and fill it in:
    youtube : the ID from the YouTube link (the part after "watch?v=")
    start   : optional, seconds into the video to start playing
    preface : optional, a large lead-in line shown above the title
    title   : the video's title as you want it shown
    by      : who made it (leave as '' if you'd rather not say)
    tool    : "ChatGPT", "Claude", "Claude Code", "Copilot",
              or "All AI tools" for one that isn't about a single tool
              (those always show first in their stage)
    note    : your "What I like about it" note

  A stage with an empty videos list shows a "More videos coming soon" card.
*/
window.START_HERE_STAGES = [
  {
    id: 'starting-line',
    name: 'At the Starting Line',
    intro: "Mostly asking it questions, like a search engine? That's where most people start. These show you what it can really do, and you'll be ahead of most owners in no time.",
    videos: [
      {
        youtube: '4JNSP_Dfh4M',
        title: 'What is an LLM? AI, explained clearly',
        by: 'Jay Mayor',
        tool: 'All AI tools',
        note: "A must-watch for everyone, because it explains what AI actually is. Most of what we hear called \"AI\" is really an LLM, a large language model, and that's what sits underneath ChatGPT, Claude and the rest."
      },
      {
        youtube: '33N-sveycoE',
        start: 192,
        title: 'Projects vs chats',
        by: 'Tim Harris',
        tool: 'ChatGPT',
        note: 'He explains really clearly how chats and projects work. These are the fundamentals everyone needs to understand before building on anything else.'
      }
    ]
  },
  {
    id: 'testing-the-waters',
    name: 'Testing the Waters',
    intro: "You've had a go, but it hasn't stuck yet. These show you the one thing that changes that: getting AI to know you and your business.",
    videos: [
      {
        youtube: 'x85BP5Ltjak',
        title: 'Set up your first project',
        by: 'Morgan DeBaun',
        tool: 'ChatGPT',
        note: "She explains really well how the project's memory works, and how to get responses that sound like you instead of AI."
      },
      {
        youtube: 'r2vYObllqJU',
        title: 'How to use Claude, step by step',
        by: 'Kevin Stratvert',
        tool: 'Claude',
        note: 'Covers the basics, then moves quickly into real, practical examples of using Claude day to day, with a taste of connecting it to your other tools.'
      }
    ]
  },
  {
    id: 'getting-traction',
    name: 'Getting Traction',
    intro: "You're using it most days. Now let's make it work across your whole business, and your life outside it. Plenty of the people I work with end up using it just as much at home, and keeping pace with kids who are growing up with it.",
    videos: [
      {
        youtube: 'KBgZsV-0Fdo',
        title: 'The 6 Claude features that get you ahead',
        by: "Tristen O'Brien",
        tool: 'Claude',
        note: "This is an excellent run-through of Claude's features and products. My favourite part is how Skills are explained. Skills are used across all the big AI tools, and they're a really important thing to know about. Also covered: Claude Chat, Cowork, Dispatch (handing Claude a task from your phone while it works on your computer), Claude Code and plugins."
      }
    ]
  },
  {
    id: 'out-in-front',
    name: 'Out in Front',
    intro: "Ready to build something of your own? This is the kit, step by step. Don't skip the basics to get here.",
    videos: [
      {
        youtube: '93zz5r1lbWc',
        title: 'Deploy your Claude Code app: GitHub → Vercel → your own domain',
        by: 'Clearmud',
        tool: 'Claude Code',
        note: 'Breaks the complex parts down nicely, and shows in a real, practical way how Claude Code and Vercel work together.'
      },
      {
        youtube: 'pdjbSjaGGAA',
        preface: 'Are you ready to start building something?',
        title: "So you've vibe coded something brilliant. Now what?",
        by: 'Kyle Balmer',
        tool: 'Claude Code',
        note: "I really like how he explains things, quite simply. Do ignore anything that isn't Claude Code, GitHub, Vercel and Supabase. An excellent video overall, and it goes that bit further for those feeling adventurous."
      }
    ]
  }
];
