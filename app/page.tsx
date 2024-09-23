export default function Page() {
  const totalLines = 96;

  const topics = [
    'How to quickly navigate through code with Vim',
    'Examples for how to refactor React patterns',
    'Searching, finding, and replacing text',
    'Time-saving vim motions to memorize',
    'Recommended patterns and neovim configuration',
  ];

  const benefits = [
    'Created specifically for React developers',
    'Focused on practical, real-world scenarios',
    'Learn to navigate and edit code faster',
    'Includes a comprehensive cheat sheet',
  ];

  return (
    <div className="max-w-xl mx-auto px-4 pt-8 pb-2 text-[#c0c8f0] relative overflow-hidden">
      <div className="absolute left-0 top-8 bottom-8 w-8 flex flex-col text-[#3c425f] select-none tabular-nums">
        {Array.from({ length: totalLines }, (_, i) => (
          <div
            key={i}
            className="w-full text-right pr-2 h-5 flex items-center justify-end"
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className="pl-10" style={{ lineHeight: '20px' }}>
        <h1 className="font-semibold text-[#7aa2f7] mb-5">
          Vim for React Developers
        </h1>

        <p className="mb-5">
          Vim has been around for over 30 years, and vi (which Vim extends)
          almost 50 years.
        </p>

        <p className="mb-5">
          So why does it feel like everyone is talking about Vim right now?
          There’s been a Vim renaissance lately from the popularity of Neovim
          and its growing community.
        </p>

        <p className="mb-5">
          Yet, somehow, I had never tried out Vim (or Neovim). I had been using
          VS Code for the past six years, and honestly, hadn’t spent much time
          exploring other options.
        </p>

        <p className="mb-5">
          I’ve used Notepad, Eclipse, Android Studio, XCode, Sublime Text, and
          finally VS Code over the years. VS Code felt like the best place to do
          web development with its git integration and ecosystem of extensions.
          But it’s started to feel bulky and slow (to me at least).
        </p>

        <p className="mb-5">
          The web community has largely chosen VS Code as the go-to IDE.
          However, the landscape is changing fast. There’s new tools, like Zed
          and Cursor, that are providing AI-enhanced editors. Yet, I haven’t
          seen as many web developers considering Neovim as another contender.
        </p>

        <p className="mb-5">
          I’ve spent the past month learning Vim motions, making Neovim my
          default editor, and I believe it’s one of the better options for web
          developers right now. Everything I love about VS Code I’m able to get
          with Neovim, including fantastic options for git, time-saving
          shortcuts for common web dev actions, and even AI tools.
        </p>

        <p className="mb-5">
          As I learned Vim motions, I applied them to a React codebase to see
          what patterns would work well. This mini course takes those patterns
          and tips and is designed to get you up to speed on the Vim motions you
          need to know. I’ve also included a cheat sheet of the most common
          commands needed (and how to think about them as a vocabulary, making
          them easier to utilize).
        </p>

        <p className="mb-5">
          This free course will not teach you every possible Vim motion.
          Instead, it will focus on the commands I've found to be most helpful
          when working with React and JavaScript. However, they apply more
          generally outside React. Are you ready?
        </p>

        <div className="mb-5">
          <h2 className="font-semibold text-[#7aa2f7] mb-5">
            What You'll Learn
          </h2>
          <ul className="list-disc pl-5">
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>

        <div className="mb-5">
          <h2 className="font-semibold text-[#7aa2f7] mb-5">Course Benefits</h2>
          <ul className="list-disc pl-5">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div>
          <a
            target="_blank"
            href="https://github.com/leerob/vim-for-react-devs"
            className="inline-block bg-[#7aa2f7] text-[#1a1b26] font-medium px-4 py-1 rounded hover:bg-[#2ac3de] transition-colors duration-300"
          >
            Start Course
          </a>
        </div>
      </div>
    </div>
  );
}
