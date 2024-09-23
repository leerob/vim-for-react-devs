# Vim for React Developers

by [leerob](https://leerob.com)

This mini-course is designed to help **React developers** learn **Vim** commands and apply them to real-world scenarios by fixing and editing React code. The course focuses on the most helpful Vim commands when working with React and JavaScript.

**https://vimforreactdevs.com**

## Prerequisites

Before starting this course, you should have neovim installed and configured:

1. macOS: `brew install nvim fzf ripgrep`
2. Follow [this Neovim quickstart](https://github.com/nvim-lua/kickstart.nvim)

That's it! Download the [course file](./public/course.tsx) and start neovim with `nvim course.tsx`.

## Course Content

View the completed [course file](./public/course.tsx).

## Cheat Sheet

### Modes

- Normal Mode: Default mode for navigation and commands (`Esc`)
- Insert Mode: `i`, `I`, `a`, `A` (exit with `Esc`)
- Visual Mode: `v` (character), `V` (line), `Ctrl+v` (block)
- Command Mode: `:`

### Navigation

- Basic: `h` (left), `j` (down), `k` (up), `l` (right)
- Words: `w` (next word), `b` (previous word), `e` (end of word)
- Lines: `0` (start), `^` (first non-whitespace), `$` (end)
- Scrolling: `Ctrl+d` (down), `Ctrl+u` (up)
- File: `gg` (top), `G` (bottom)

### Actions

- `d`: Delete
- `c`: Change (delete and enter Insert Mode)
- `y`: Yank (copy)
- `v`: Visual selection

### Motions

- `i`: Inside
- `a`: Around

### Objects

- `w`: Word
- `p`: Paragraph
- `t`: Tag
- `q`: Quote (or `'`, `"`, ```)
- `b`: Bracket (or `(`, `{`, `[`, `<`)

### Examples

- `dw`: Delete Word
- `cw`: Change Word
- `yy`: Copy Entire Line
- `y$`: Copy To End Of Line
- `diq`: Delete Inside Quotes
- `ca{`, `ci(`: Change Around Braces
- `yap`: Yank Paragraph
- `dab`: Delete Around Brackets
- `yiw`: Yank Inside Word
- `ciw`: Change Inside Word
- `vit`: Visual Selection Inside Tag
- `ct"`: Change To Next `"` (leaving the `"`)
- `df|`: Delete to Next `|` (including the `|`)

### Miscellaneous

- `.`: Repeat Last Command
- `gd`: Go To Definition
- `f<char>`: Find Character
- `t<char>`: To Character
- `ZZ`: Save & Close Vim
- `u`: Undo
- `Ctrl+r`: Redo
