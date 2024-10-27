/*
       _              __                                  _
__   _(_)_ __ ___    / _| ___  _ __   _ __ ___  __ _  ___| |_
\ \ / / | '_ ` _ \  | |_ / _ \| '__| | '__/ _ \/ _` |/ __| __|
 \ V /| | | | | | | |  _| (_) | |    | | |  __/ (_| | (__| |_
  \_/_|_|_| |_| |_| |_|  \___/|_|    |_|  \___|\__,_|\___|\__|
  __| | _____   _____| | ___  _ __   ___ _ __ ___
 / _` |/ _ \ \ / / _ \ |/ _ \| '_ \ / _ \ '__/ __|
| (_| |  __/\ V /  __/ | (_) | |_) |  __/ |  \__ \
 \__,_|\___| \_/ \___|_|\___/| .__/ \___|_|  |___/
                             |_|

by leerob (leerob.com).

This is a mini-course for React developers to learn Vim commands and apply them
to real-world scenarios by fixing and editing React code. You'll go through a
series of tasks, each with broken or missing code, that you will fix using
specific Vim motions.

This course will not teach every possible Vim motion. Instead, it will focus on
the commands I've found to be most helpful when working with React and
JavaScript. However, they apply more generally outside React. Let's dive in!

Estimated time to complete the setup and course: 1 hour.

NOTE: Prerequisites

Before starting this course, you should have Neovim installed and configured:

- 1) Install Neovim and its dependencies
  - macOS: `brew install nvim fzf ripgrep`
  - Windows: `choco install -y neovim git ripgrep wget fd unzip gzip mingw make`
- 2) Follow this quickstart: https://github.com/nvim-lua/kickstart.nvim
  - Don't feel you need to understand the entire Lua file
  - At the completion of the course, we'll talk about plugins and configuration
  - We'll also link some additional resources if you want to learn more
- 3) That's it! Download this file and start Neovim with `nvim course.tsx`

I recommend using Kickstart to quickly get started with a productive Neovim setup.
Kickstart is not a Neovim distribution (like Lazyvim) where everything is bundled.
Instead, it's a starting point for building your own config, with all of the best
defaults in the ecosystem. Think of a Neovim distro like Create React App (CRA),
and Kickstart like ejecting from CRA, if that helps.

NOTE: Introduction to Vim

Vim is a highly configurable text editor built to enable efficient text editing.
It's based on the concept of modal editing, where the editor operates in
different modes, each designed for specific tasks. This approach allows you to
perform complex text manipulations with minimal keystrokes, increasing your
productivity.

In traditional text editors, you have one mode where all keys are used for
typing text. Vim, however, separates the tasks of navigating and editing text
from inserting text. This separation is what makes Vim so powerful and
efficient once you get the hang of it.

By thinking in terms of actions (what you want to do) and motions (where you
want to do it), you can perform complex edits swiftly.

NOTE: Vim Basics

## Modes

Vim has several modes, but we'll focus on the primary ones:

- Normal Mode: The default mode for navigating and executing commands.
- Insert Mode: Where you insert or modify text.
- Visual Mode: For selecting blocks of text.
- Command Mode: For executing extended commands (accessed by pressing `:`).

## Switching Between Modes

- To Normal Mode:
  - `Esc`: Return to Normal Mode.
- To Insert Mode:
  - `i`: Insert before the cursor.
  - `I`: Insert at the beginning of the line.
  - `a`: Append after the cursor.
  - `A`: Append at the end of the line.
- To Visual Mode:
  - `v`: Start visual selection (character-wise).
  - `V`: Start visual selection (line-wise).
  - `Ctrl+v`: Start visual block selection.
- To Command Mode: Press `:` from Normal Mode.

NOTE: Navigating in Vim

Vim allows you to navigate efficiently without leaving the home row.

## Basic Movements

You can navigate in normal mode with left (`h`), down (`j`), up (`k`), and right (`l`).

      k
      ↑
  h ←   → l
      ↓
      j

It's okay (and expected) if your right pointer finger rests on `j`.
Don't worry if Vim movements feel strange at first. They take time to get used to.
If you still occassionally use your arrow keys or mouse, that's okay — don't put
too much pressure on yourself to have it perfect at the start.

## Word Movements

- Forward by Word: `w` (move to the beginning of the next word).
- Backward by Word: `b` (move to the beginning of the previous word).
- End of Word: `e` (move to the end of the word).

I recommend trying to use `w` and `b` the majority of the time, instead of `h` and `l`.

## Line Movements

- Start of Line: `0` (zero).
- Start of Non-Whitespace Character: `^`.
- End of Line: `$`.

## Scrolling

- Half-Page Down: `Ctrl+d`.
- Half-Page Up: `Ctrl+u`.

## Jumping to Specific Lines

- Go to Line Number: `:<line_number>` and press `Enter` (e.g., `:10`).
- Top of File: `gg`.
- Bottom of File: `G`.

NOTE: Actions and Text Objects

This is where Vim really starts to get powerful. You can combine different
keys together to make something that feels like a cheat code. For example,
let’s inspect the `ciw` command. There are three parts:

1. Action: `c` (change)
2. Motion: `i` (in)
3. Object: `w` (word)

It’s helpful to read this like a sentence — “change in word”. There are multiple
actions, motions, and objects. For example, what if we changed the object from
a word to a paragraph? `cip` or “change in paragraph”. Let’s inspect another command:

1. Action: `v` (select)
2. Motion: `a` (around)
3. Object: `b` (brackets)

For more examples, see the cheat sheet in the README.

NOTE: Undo and Redo

- Undo: `u`.
- Redo: `Ctrl+r`.

Okay, let's get started! Feel free to open and reference the cheat sheet
in the repo README as you make your way through the course.

Cheat sheet: https://github.com/leerob/vim-for-react-devs

*/

// NOTE: ✦ Lesson: Basic Motions

// First, let's make sure you know how to exit Vim.
// Steps:
// 1. Press `:` to enter command mode.
// 2. Press `q` and the `Enter`.
// 3. Re-open the course with `nvim course.tsx`.
// You can also use `ZZ` to quickly save and close.

// That's it! Now that we completed the hardest part... on to the rest.

// Steps:
// 1. Place your cursor below the TODO line.
// 2. Press `i` to enter insert mode.
// 3. Type `function App() { }`.
// 4. Press `Esc` to exit insert mode.
// Note: At the end of the course, we'll recommend plugins to
// automatically close tags and brackets for you.

// TODO: Create a simple functional component called `App`.

// Expected result:
// function App() { }

// Now, let's add a return statement inside the `App` function.

// Steps:
// 1. Place your cursor between the curly braces `{ }`.
// 2. Press `i` to enter insert mode.
// 3. Type the following code:
//    ```
//    return (
//      <div>
//      </div>
//    );
//    ```
// 4. Press `Esc` to exit insert mode.

// TODO: Inside the `App` function, add a `return` statement that returns a `<div>`.

function App() { }

// Expected result:
// function App() {
//   return (
//     <div>
//     </div>
//   );
// }

// Let's add a `<p>` tag inside the `<div>`.

// Steps:
// 1. Place your cursor anywhere on the `<div>` line.
// 2. Press `o` to create a new line below and enter insert mode.
// 3. Type `<p>Hello</p>` and press `Esc`.
// Bonus tip: you can also use `O` to create a new line above, rather than below.

// TODO: Add a `<p>` tag with the text "Hello" inside the `<div>`.

function App() {
  return (
    <div>
    </div>
  );
}

// Expected result:
// function App() {
//   return (
//     <div>
//       <p>Hello</p>
//     </div>
//   );
// }

// Now, let's practice moving to the start and end of lines.

// Steps:
// 1. Place your cursor anywhere on the `<p>` line.
// 2. Press `0` (zero) to move to the start of the line.
// 3. Alternatively, to enter insert mode at the beginning of the line, press `I` (capital i).
// 4. Notice how `I` will also match the indentation level – nice!
// 5. When navigating back to the start, you can also use `^` to go to non-whitespace chars.

// TODO: Move to the beginning of the `<p>` line.

function App() {
  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

// Now, let's do the opposite.

// Steps:
// 1. Press `$` to move to the end of the <p> line.
// 2. Alternatively, to enter insert mode at the end of the line, press `A` (capital a).
// 3. Remember to exit insert mode by pressing `Esc`.
// 4. Try going back and forth with `0` and `$` a few times.

// TODO: Move to the end of the `<p>` line.

function App() {
  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

// Now, we want to change "Hello" to "World".

// Steps:
// 1. Use `w` (move forward by word) to move the cursor to "Hello".
// 2. Press `cw` (change word) to change the word. (`cw` stands for "change word").
// 3. Type `World` and press `Esc`.

// TODO: Change "Hello" to "World".

function App() {
  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

// Expected result:
// function App() {
//   return (
//     <div>
//       <p>World</p>
//     </div>
//   );
// }

// Let's add another paragraph below.

// Steps:
// 1. From normal mode, navigate to the end of the `<p>World</p>` line.
// 2. Press `o` to create a new line below and enter insert mode.
// 3. Type `<p>Welcome to the Vim course.</p>` and press `Esc`.

// TODO: Add another `<p>` tag with the text "Welcome to the Vim course."

function App() {
  return (
    <div>
      <p>World</p>
    </div>
  );
}

// Expected result:
// function App() {
//   return (
//     <div>
//       <p>World</p>
//       <p>Welcome to the Vim course.</p>
//     </div>
//   );
// }

// --- End of Basic Motions Lesson ---

// NOTE: ✦ Lesson: Search and Replace

// Let's learn how to search for a keyword and replace it.

// Steps:
// 1. Suppose we have multiple instances of the word "World" in our code.
// 2. Press `/World` and press `Enter` to search for "World".
// 3. Press `n` to go to the next occurrence, and `N` to go back.
// 4. Once you're on the instance you want to change, press `cw` (change word).
// 5. Type `Developer` and press `Esc`.

// TODO: Replace the word "World" with "Developer" using search.

// Add another instance of "World" for practice.

function App() {
  return (
    <div>
      <p>World</p> {/* Change me */}
      <p>Welcome to the Vim course.</p>
      <p>Hello World!</p>
    </div>
  );
}

// Expected result:
// <p>Developer</p>
// <p>Welcome to the Vim course.</p>
// <p>Hello World!</p>

// --- End of Search and Replace Lesson ---

// NOTE: ✦ Lesson: Refactoring

// Inside our `App` function, let's add local state with `useState`.

// Steps:
// 1. Move inside the `App` function, after the opening `{`.
// 2. Press `o` to create a new line below and enter insert mode.
// 3. Type `const [name, setName] = useState();` and press `Esc`.

// TODO: Add a new `useState` declaration for `name`.

function App() {
  return (
    <div>
      <p>Developer</p>
      <p>Welcome to the Vim course.</p>
      <p>Hello World!</p>
    </div>
  );
}

// Expected result:
// const [name, setName] = useState();

// Let's add a `<button>` with an inline `onClick` handler.

// Steps:
// 1. Place your cursor anywhere on the last `<p>` tag line.
// 2. Press `o` to create a new line and enter insert mode.
// 3. Type `<button onClick={() => setName('Lee')}>{'Click Me'}</button>` and press `Esc`.

// TODO: Add a `<button>` element after the last `<p>` tag.

function App() {
  const [name, setName] = useState();

  return (
    <div>
      <p>Developer</p>
      <p>Welcome to the Vim course.</p>
      <p>Hello World!</p>
    </div>
  );
}

// Expected result:
// <button onClick={() => setName('Lee')}>{'Click Me'}</button>

// Let's refactor the `onClick` handler into a separate function.

// Steps:
// 1. Place your cursor at the start of the inline arrow function on the `<button>`.
// 2. Press `ci{` (change inside curly braces) to delete the content inside `{}` and enter insert mode.
//    - This will cut the content and save it to the clipboard.
// 4. Type `handleClick` and press `Esc` to exit insert mode.

// Now, define the `handleClick` function and paste the cut content.

// Steps:
// 1. Navigate to where you want to insert the new function (e.g., after the state declaration).
// 2. Press `o` to create a new line and enter insert mode.
// 3. Type `const handleClick = ` and press `Esc` to exit insert mode.
// 4. Press `p` to paste the previously cut content.
//    - The pasted content should be `() => setName('Lee')`.

// TODO: Replace the inline `onClick` handler with `handleClick` and define the function.

function App() {
  const [name, setName] = useState();

  return (
    <div>
      <p>Developer</p>
      <p>Welcome to the Vim course.</p>
      <p>Hello World!</p>
      <button onClick={() => setName('Lee')}>{'Click Me'}</button>
    </div>
  );
}

// Expected result:
// function App() {
//   const [name, setName] = useState();
//
//   const handleClick = () => setName('Lee')
//
//   return (
//     <div>
//       <p>Developer</p>
//       <p>Welcome to the Vim course.</p>
//       <p>Hello World!</p>
//       <button onClick={handleClick}>{'Click Me'}</button>
//     </div>
//   );
// }

// What if you don't want to replace the entire `onClick` content?

// Steps:
// 1. Place your cursor on the `<button>` line.
// 2. Navigate directly to a character with `f[char]`.
// 3. For example, `fs` to go to the `s` in `setName`.
// 4. You could then `cw` to change just `setName`, or even `cf)` (change until character `)`).
// 5. Let's change that `onClick` to `console.log('clicked')`.

// TODO: Try `fs` and then `cf)` motions at the start of the `<button>` line.

function App() {
  const [name, setName] = useState();

  return (
    <div>
      <p>Developer</p>
      <p>Welcome to the Vim course.</p>
      <p>Hello World!</p>
      <button onClick={() => setName('Lee')}>{'Click Me'}</button>
    </div>
  );
}

// Expected result:
// <button onClick={() => console.log('clicked')}>{'Click Me'}</button>

// --- End of Refactoring Lesson ---

// NOTE: ✦ Lesson: Text Objects

// Let's practice using text objects to manipulate text inside quotes.

// Steps:
// 1. Place your cursor anywhere on the line with `'Click Me'` before the string.
// 2. Press `ci'` (change inside quotes) to delete the content inside the quotes and enter insert mode.
// 3. Type `Update Name` and press `Esc` to exit insert mode.

// TODO: Change the text inside the quotes of `'Click Me'` to `'Update Name'`.

function App() {
  const [name, setName] = useState();

  const handleClick = () => setName('Lee');

  return (
    <div>
      <p>Developer</p>
      <p>Welcome to the Vim course.</p>
      <p>Hello World!</p>
      <button onClick={handleClick}>{'Click Me'}</button>
    </div>
  );
}

// Expected result:
// {'Update Name'}

// Now, let's try changing from `'` to a string template, using `caq`.
// "Change around quotes" is even better than a specific character, as it
// will handle `"`, `'`, and even `` ` ``. `caq` comes from the `mini.ai`
// plugin, which the Neovim Quickstart sets up for us.

// Steps:
// 1. Place your cursor anywhere on the line with `{'Update Name'}`.
// 2. Press `caq` to delete the string and enter insert mode.
// 3. Type `Name: ${name}` and press `Esc` to exit insert mode.

// TODO: Modify the button text to be a string template literal.

function App() {
  const [name, setName] = useState();

  const handleClick = () => setName('Lee');

  return (
    <div>
      <p>Developer</p>
      <p>Welcome to the Vim course.</p>
      <p>Hello World!</p>
      <button onClick={handleClick}>{'Update Name'}</button>
    </div>
  );
}

// Expected result:
// <button onClick={handleClick}>{`Name: ${name}`}</button>

// --- End of Text Objects Lesson ---

// NOTE: ✦ Lesson: More Refactoring

// Let's replace the contents inside the `<div>` tag.

// Steps:
// 1. Navigate anywhere inside of the `<div>` tag in the return statement.
// 2. Press `cit` (change inside tag) to delete all children of `<div>` and enter insert mode.
// 3. Type `<h1>This is the new content.</h1>` and press `Esc` to exit insert mode.

// TODO: Replace the contents inside the `<div>` tag with `<h1>This is the new content.</h1>`.

function App() {
  return (
    <div>
      {/* Existing content */}
    </div>
  );
}

// Expected result:
// function App() {
//   return (
//     <div>
//       <h1>This is the new content.</h1>
//     </div>
//   );
// }

// ✦ Lesson: Quick Deletes

// Let's delete everything inside parentheses, commonly used for React props.

// Steps:
// 1. Place your cursor anywhere on the line with `function Component({ foo: 'bar' }) {`.
// 2. Press `di(` (delete inside parentheses) to delete the content inside `()`.

// TODO: Delete the props inside the component definition.

function Component({ foo: 'bar' }) {
  // ...
}

// Expected result:
// function Component() {
//   // ...
// }

// If you need to change the props, enter insert mode with `ci(`.

// TODO: Try using `ci(` to delete the props and start typing immediately.

function Component({ foo: 'bar' }) {
  // ...
}

// --- End of More Refactoring Lesson ---

// NOTE: ✦ Lesson: Deleting Lines and Repeating Commands

// Steps:
// 1. Place your cursor on the first `<p>` line inside the `<div>`.
// 2. Press `dd` to delete the line.
// 3. Press `.` (dot) to repeat the last command.
// 4. Repeat pressing `.` until you've deleted all the `<p>` lines.

// TODO: Delete multiple lines using `dd` and repeat with `.`.

function App() {
  return (
    <div>
      <p>Line 1</p>
      <p>Line 2</p>
      <p>Line 3</p>
      <p>Line 4</p>
      <p>Line 5</p>
    </div>
  );
}

// Expected result:
// (All `<p>` lines are deleted)
// function App() {
//   return (
//     <div>
//     </div>
//   );
// }

// Now, to delete and change a line.

// Steps:
// 1. Place your cursor on the `<div>` line.
// 2. Press `S` (capital S) to delete the line and enter insert mode at the start.
// 3. Type `<section>`, fill the tag with "New", and press `Esc` to exit insert mode.
// Reminder, you could also do `cit` if you wanted to keep the `div`, but just replace the content.

// This is more efficient than doing `dd` followed by `O`.

// TODO: Replace the `<div>` tag with `<section>`.

function App() {
  return (
    <div>Delete Me</div>
  );
}

// Expected result:
// function App() {
//   return (
//     <section>New</section>
//   );
// }

// --- End of Deleting Lines Lesson ---

// NOTE: ✦ Lesson: Find and Replace

// Let's perform a find and replace operation.

// Steps:
// 1. Press `:` to enter command mode.
// 2. Type `:%s/unique/common/gc` and press `Enter`.
// 3. Press `y` or `n` to confirm replacing found matches.

// This command means:

// - `%`: Apply to all lines in the file.
// - `s`: Substitute.
// - `unique`: The search pattern.
// - `common`: The replacement string.
// - `g`: Global (replace all occurrences in each line).
// - `c`: Prompt for confirmation on each change.

// TODO: Only replace instances of `unique` with `common` inside the component.

function App() {
  return (
    <div>
      <p>unique</p>
      <p>unique</p>
    </div>
  );
}

// Then, hit `u` to undo these changes. 

// --- End of Find and Replace Lesson ---

// NOTE: ✦ Lesson: Visual Mode 

// It's helpful to learn different ways to visually select text. Once text
// is selected, you can then copy it (yank `y`), delete it (`d`), and more.

// Steps:
// 1. Place your cursor on the `return` line.
// 2. Type `vi(` (or `vab`) to select all content inside parenthesis. 
// 3. You currently have the exact text selected (try `c` and see where you cursor lands)
// 4. `Esc`, undo (`u`) the last change, and re-select with `vi(`.
// 5. Type `va(` to select all content around the parenthesis.
// 6. Type 'V' to change to line selection. Now `return` is also selected.
// 7. Type `d` to delete and cut the entire `return` statement.

// TODO: Try selecting and modifying the text below. 

function App() {
  return (
    <div>
      <p>Select Me</p>
    </div>
  );
}

// Expected result:
// function App() {
// }

// When you have content selected, you can also use `>` to indent to the right,
// and `<` to shift content back left.

// --- End of Course ---

// NOTE: Congratulations! You've completed the course. 

// Now, to make this stick, start building using Vim and reference the cheat sheet.
// You will make mistakes — this is okay! If you use the wrong command or mess up,
// stop, undo (`u`), and try again. Try moving slower and think carefully
// about the sequence of commands you'll use before you start typing. Enjoy!

// Cheat sheet: https://github.com/leerob/vim-for-react-devs

// NOTE: ✦ Recommended Neovim Plugins

// Here are the plugins that I recommend for React and TypeScript development:

// Included in the Neovim Kickstart:
// - Telescope (find and open files, search across your directory)
// - nvim-autopairs (Automatically close characters like `(`, `{`, `[`, `'`, `<`, and more)
// - mini.ai (despite the name, not related to AI – this enables `dit`, `ciq`, and more)

// Other Recommended Plugins
// - neo-tree (Press `\` to toggle file system GUI, similar to VSCode)
//   - This is in the Kickstart, but you need to uncomment it
// - lazygit (easy GUI for git commands)
//   - macOS: brew install lazygit
//   - Windows: choco install -y lazygit
// - lazygit.nvim (open lazygit directly from Neovim with <leader>lg)
//   - <leader> defaults to `space` with Quickstart
//   - https://github.com/kdheepak/lazygit.nvim
// - Avante (AI-driven code suggestions, similar to Cursor)
//   - https://github.com/yetone/avante.nvim
// - nvim-ts-autotag (automatically close HTML tags, even from JSX)
//   - https://github.com/windwp/nvim-ts-autotag
// - alpha-nvim (nice startup screen which shows recently used files)
//   - https://github.com/goolord/alpha-nvim
// - inc-rename (rename all instances of a variable in the file)
//   - With a keymap, this can be faster than :%s/
//   - https://github.com/smjonas/inc-rename.nvim
// - mini.comment (`gc` to comment selection, `gcc` to comment line)
//   - https://github.com/echasnovski/mini.nvim/blob/main/readmes/mini-comment.md
//   - Paired with https://github.com/JoosepAlviste/nvim-ts-context-commentstring/wiki/Integrations#minicomment
// - mini.move (select blocks of text and move them up/down with `j`/`k`)
//   - https://github.com/echasnovski/mini.nvim/blob/main/readmes/mini-move.md 

// NOTE: ✦ Neovim > VS Code 

// If you've made it this far, why not try to make Neovim your default editor?
// You might be wondering, can I do everything in Neovim that I could in VS Code?
//
// - Jumping into function definitions (e.g. read the source for `useState`) — yes!
//   - `gd` allows you to "Go To Definition"
// - Fuzzy find search for filenames (e.g. search `page` for `app/page.tsx`) — yes!
//   - Kickstart includes Telescope for this (this is also why we installed `fzf` and `ripgrep`)
//   - <leader>sf – Search Files (I remapped to <D-p>, i.e. Cmd+P, to match VS Code)
//   - <leader>sg - Search across directory
// - Quickly navigate to errors — yes!
//   - Neovim calls these errors "diagnostics"
//   - Again, Telescope makes this _really_ easy
//   - <leader>sd - "Search Diagnostics"
//   - While in a file, you can move between diagnostics with `[d` and `]d`
//   - This is helpful to quick move through TypeScript errors, for example
// - Extensions — yes!
//   - Many of the extensions you love in VS Code are "Language Server Protocol" integrations
//   - Neovim can integrate with any LSP you need, e.g. TypeScript, Tailwind CSS, and more
// - AI Workflows — yes!
//   - Check out the avante.nvim plugin above
// - Navigate forward and backward between files — yes!
//   - `Ctrl + o`: Back
//   - `Ctrl + i`: Forward

// NOTE: Additional Learning Resources

// - Vim Tutor (run `:Tutor` inside Neovim)
// - Understand Kickstart: https://www.youtube.com/watch?v=m8C0Cq9Uv9o
// - Understand Neovim Configs: https://www.youtube.com/playlist?list=PLsz00TDipIffreIaUNk64KxTIkQaGguqn

