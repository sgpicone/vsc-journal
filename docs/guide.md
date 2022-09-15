---
tree_title: Usage Guide
---
<!-- cSpell: ignore momentjs -->
# How to Use This Journal
<!-- cSpell: disable -->
- [How to Use This Journal](#how-to-use-this-journal)
  - [Basics](#basics)
    - [Initial Setup](#initial-setup)
    - [Creating a New Journal Entry](#creating-a-new-journal-entry)
    - [Creating a Non-Journal Entry](#creating-a-non-journal-entry)
    - [Locking/Unlocking the Journal](#lockingunlocking-the-journal)
  - [Advanced](#advanced)
    - [The Configuration File](#the-configuration-file)
    - [Running scripts directly from the `.scripts` directory](#running-scripts-directly-from-the-scripts-directory)
    - [VS Code Settings](#vs-code-settings)
    - [VS Code Snippets](#vs-code-snippets)
    - [VS Code Extensions](#vs-code-extensions)
      - [Code Spell Checker](#code-spell-checker)
      - [Insert Date String](#insert-date-string)
      - [VS Code Markdown Lint](#vs-code-markdown-lint)
      - [Markdown All-in-One](#markdown-all-in-one)
      - [Google Search](#google-search)
      - [Markdown Emoji](#markdown-emoji)
      - [Markdown Extended](#markdown-extended)
      - [Markdown Checkbox](#markdown-checkbox)
      - [Webster Search](#webster-search)
      - [Markdown Mermaid](#markdown-mermaid)
      - [Mermaid Markdown Syntax Highlighting](#mermaid-markdown-syntax-highlighting)
      - [LTeX Spelling and Grammar Check](#ltex-spelling-and-grammar-check)

<!-- cSpell: enable -->
## Basics

At its core, using this journal is *meant* to be pretty straightforward. Here are the basics.

By the way - if you're reading this in VS Code, press `ctrl+shift+p` and type `preview` into the search bar that appears; then, select `Markdown: Open Preview to the Side`. Alternatively, you can press `Ctrl+k` followed by `v`.

### Initial Setup

If you're not a software developer or you're not familiar with any of these tools, don't be discouraged! I promise it's not as daunting as it seems!

1. Download and install the following applications/tools:
   1. [NodeJS and npm](https://nodejs.org)
   2. [VS Code](https://code.visualstudio.com/)
   3. [Git](https://git-scm.com/) (optional)
2. Download this template or use it to start a new git repository
   1. Click `Code -> Download ZIP` on the GitHub page to download the template
   2. Click `Use this Template` to make a new git repository using the template.
   3. If you're already familiar with Git, you also know that you can clone the repository.
3. Extract the ZIP file you just downloaded (right click -> Extract All...)
4. Right-click the folder you just extracted and click `Open with Code`
   1. If you don't see that option, then you can just open VS Code normally and go to `File -> Open Folder -> <your folder>`
5. In VS Code, at the top of the window, click `Terminal`, then `Run Build Task`.
   1. Alternatively, click `Terminal -> New Terminal` and then type `npm install` into the terminal window that appears.
6. When `npm install` finishes, click `Terminal -> Run Task... -> new journal entry`
   1. You can also type `npm run new` in your terminal window.
7. After a few seconds, you should see a blank file in front of you with today's date at the top.
8. Start writing!

### Creating a New Journal Entry

By default, you can always use the `new journal entry` task to create a new journal entry for the day. It will be saved in the following folder structure:

```tree
+-- main
|   +-- <year>
|   |   +-- <month number> - <MONTH>
|   |   |   +-- <year-mo-day>.md
```

This task is just a shortcut for running `npm run new` in the terminal, which affords you a few other options:

> ⚠ Quick note! <br/>
> When passing options to `npm run new` you must always follow the command with two hyphens, `--`, e.g. `npm run new -- <options>`

- `npm run new -- --date YYYY-MM-DD` - creates a new entry for the specific date provided.
  - You can also use `npm run new -- -d YYYY-MM-DD`

### Creating a Non-Journal Entry

You can use the `new non-journal page` task to create a new page outside of your journal. You'll be prompted to provide a folder and a page name. Simply enter this information and you're off to the races!

Note, though, that if you want spaces in either your folder or your page name, you must wrap them in quotation marks `""`.

Additionally, if your folders do not exist yet, the task will create them for you automatically!

Once again, the VS Code task is just a shortcut for running the `npm run new` command from the terminal, which affords you the following options:

- `npm run new -- page --folder "folder name" --name "file name"` - creates a new non-journal page with the name provided and located in the provided folder.
  - You can also use `-f` in place of `--folder` and `-n` in place of `--name`
  - If you want to use spaces in either the folder name or the file name, you MUST wrap them in quotation marks `""`
  - You can nest your folder as many layers deep as you want, e.g. `folder-one/two/three/four`
  - If the folders don't exist already, they will be created!

### Locking/Unlocking the Journal

As with creating entries, you can use VS Code tasks to lock and unlock your journal. The `lock journal` and `unlock journal` tasks will allow you to lock and unlock the journal, respectively. They will both prompt you to enter a password to use for the encryption.

The tasks are limited in scope; they will only work with the encryption package's strict password rules, and they will only lock/unlock your primary journal folder and no other files (by default, this folder is `main`, but it is configurable in [The Configuration File](#the-configuration-file)).

If you'd like to use the full extent of the encryption package, you'll need to use the terminal. You have three commands available to you:

- `npm run crypt`
- `npm run lock`
- `npm run unlock`

`crypt` runs the base encryption command and must be provided with parameters in order to anything useful. `lock` and `unlock` are just shortcuts for `npm run crypt -- lock` and `npm run crypt -- unlock`

The options you have available are:

- `--password` or `-p`: the password to use for encryption/decryption
- `--loose` or `-o`: include to remove the password rules
- `--silent` or `-s`: include to prevent the tool from printing information to the terminal
- `--target` or `-t`: the file(s) (or folder(s)) to lock or unlock. Uses the `private-directories` configuration value (in [The Configuration File](#the-configuration-file)) by default. When running from `npm`, it must be the last option.

Here are some examples on how to use them&mdash;remember that you need to include `--` after your `npm run` commands in order to pass your options.

```bash
# locks the default journal
# uses the password "ThisIsMySecret123!
# does not print to terminal
npm run crypt -- lock -p ThisIsMySecret123! -s 

# locks all of the files in notes/secrets and notes/surprises, 
# as well as the file notes/other stuff with spaces/file.md
# uses the password "password"
# *allows* the use of "password" as a password
# Note that targets must be the last option
npm run crypt -- lock -p password -o --target notes/secrets notes/surprises "notes/other stuff with spaces/file.md"

# unlocks the default journal
# uses the password Secret123!
npm run unlock -- -p Secret123!

# uses the password "password"
# allows the use of "password" as a password
# unlocks the notes/secrets folder
# Note again that targets must be the last option
npm run unlock -- -p password -o -t notes/secrets
```

## Advanced

Below are some more "advanced" features and configuration options for using the journal. Play around!

### The Configuration File

The configuration file is in the root directory of the workspace -- it's called [config.json](../config.json). It looks like this:

```json
{
    "journalDirectory": "main",
    "privateDirectories": [
        "main"
    ],
    "shortDateFormat": "yyyy-MM-DD",
    "longDateFormat": "dddd, MMMM DD, yyyy",
    "yearDirFormat": "yyyy",
    "monthDirFormat": "MM-MMMM",
    "makeTreeConfig": {
        "ignore": [
            "res",
            "img"
        ],
        "numberSpaces": 2,
        "includeAllDirectoriesByDefault": false,
        "linkToSubdirectoryReadme": true,
        "noSubdirectoryTrees": false,
        "notesBeforeDirectories": false,
        "orderNotesByTitle": false,
        "silent": false,
        "subdirectoryDescriptionOnNewLine": false,
        "useTabs": false
    }
}
```

These configuration options are used by the scripts in the `.scripts` directory and changing them will modify the way those scripts behave. Here's a handy reference table describing what each option does:

|Option|Action|
|---|---|
|journalDirectory|changes the folder where journal entries are stored|
|privateDirectories|changes the folders that will be locked/unlocked by the default lock/unlock commands|
|shortDateFormat|changes the [momentjs](https://momentjs.com/docs/#/displaying/format/) format used for short dates, primarily the one used when creating new journal entries|
|longDateFormat|changes the [momentjs](https://momentjs.com/docs/#/displaying/format/) format used for long dates, primarily the one used for the titles of new journal entries|
|yearDirFormat|changes the [momentjs](https://momentjs.com/docs/#/displaying/format/) format used for the year folders when creating journal entries|
|monthDirFormat|changes the [momentjs](https://momentjs.com/docs/#/displaying/format/) format used for month folders when creating journal entries|
|makeTreeConfig|controls all of the options for the [markdown-notes-tree](https://www.npmjs.com/package/markdown-notes-tree) command, which creates README files at every level of the journal with a table of contents linking to every file/subfolder. These options are all described at length on the tool's web page, so I won't reiterate them here|

### Running scripts directly from the `.scripts` directory

All of the scripts we talked about above -- `npm run crypt`, `npm run new`, etc. -- can all be run from the terminal directly instead of through `npm`.

To do that, simply run `node ./.scripts/<script name>.js` from the terminal. When you run the scripts this way, you don't need `--` before you start including your options; so, for example:

`npm run crypt -- lock --password Secret123!`

becomes

`node ./.scripts/crypt.js lock --password Secret123!`

You don't gain a *whole lot* doing it this way, but it's there if you're interested!

### VS Code Settings

At its core, this journal is really just a VS Code workspace with a couple little extra bits chucked in to help with file management. So, that being the case, [there are a lot of settings that you can play around with](https://code.visualstudio.com/docs/getstarted/settings).

VS Code has a hierarchy of settings levels that basically results in *most* settings being overridden by workspace-level settings. If you modify the settings contained within `.vscode/settings.json` in this journal, these workspace settings are the ones you're modifying. They will apply to this journal and *only* this journal, so if you open other projects or folders in VS Code, your journal settings will be separate from those settings.

For example, if you use VS Code for writing code and generally prefer dark color themes, but you like light color themes for writing and journaling, you can add the line

```json
"workbench.colorTheme": "Visual Studio Light",
```

to make it so that your journal (and only your journal) uses the default Visual Studio Light theme. There are *lots* of themes in the Visual Studio Marketplace -- definitely check them out!

Most of the settings I've included by default in the `settings.json` file actually only apply to the optional extensions. They're just a few things I thought might be useful to have around by default. You can feel free to change these as you wish.

A few that might be immediately interesting to you are

```json
"cSpell.enabled": true,
"cSpell.diagnosticLevel": "Warning",
```

These are settings for the [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) extension I recommended. The first setting sets whether the extension should be enabled at all - that is, whether it should spell check your work or not. The second one determines how it will identify your spelling errors - your options are

- Hint
- Information
- Warning
- Error

Warning and Error will appear in the `Problems` view in VS Code, as well as a count next to the filename in the file explorer on the left. Information will include them in the `Problems` view, but not in the file explorer. Hint will not include them in any other views, but will very...*gently* highlight them in your editor.

I personally like Warning because I don't like to see `RED` (stresses me out) but I'm also pretty particular about my spelling, so I like to know where my mistakes are. You can obviously feel free to set this to whatever you prefer.

The extensions in VS Code generally all have their own settings and loads of features - you should check out their pages for more information on how to configure and use them. I'll link to them all below.

### VS Code Snippets

[Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets) in VS Code are templates that make repeatable patterns a little faster and easier to implement. I included a couple basic ones in the [snippets.code-snippets](../.vscode/snippets.code-snippets) file. The ones I included are very basic - they'll wrap text in HTML code to color them according to your specifications.

For example, to make text <span style="color: red">red</span>, you can highlight it, then type `bad`, and press `ctrl+space`, then `enter`. The text you highlighted will return, surrounded by `<span style="color: red"></span>` to color it red.

Similarly, you can use `meh` for <span style="color: yellow">yellow</span> and `good` for <span style="color: green">green</span>. You can also use `mm` to <span style="color: purple">specify a color of your choice</span>.

I also added a `prompt` snippet. Simply type `prompt` and press `ctrl+space` and it will add 3 question prompts to your journal entry and allow you to easily answer and `tab` through them. You can edit the questions or add new ones by modifying the [snippets.code-snippets](../.vscode/snippets.code-snippets) file!

There's also a `time` snippet, which will insert a second-level heading with the current time. This way, if you're like me and like to do this, you can easily mark sections of your journal with the time at which you're updating it.

These are just a few snippets I made that served a purpose for me, but feel free to play around and write your own!

### VS Code Extensions

I'd love to say the extensions I've included are *specially curated to improve your journaling experience*, but the truth is that I just picked what worked best for me&mdash;often this meant that I was either choosing the first/highest rated option, or the *only* option.

You don't need to install any of them if you don't want to, and you're free to shop around and use your own personal favorites. These are just a few that I felt worked well with journaling and that helped me out.

#### [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

I use this extension for spell-checking my code at my day job, and it works great for that. It works somewhat *less* great for journaling, because its dictionaries aren't the most inclusive, but I really like it. It's highly configurable too, which is a big plus in my book.

#### [Insert Date String](https://marketplace.visualstudio.com/items?itemName=jsynowiec.vscode-insertdatestring)

This is a neat little extension that just lets you quickly insert date/time strings with a few keystrokes. Just press `ctrl+shift+P` and type `Insert` to find the options Insert Time, Insert Date, Insert DateTime...

They look like this:

Time: 17:51:30

Date: Tuesday, August 16, 2022

DateTime: 2022-08-16 17:51:45

You can change the formats they use via the [settings.json](../.vscode/settings.json) file.

#### [VS Code Markdown Lint](https://marketplace.visualstudio.com/items?itemName=davidanson.vscode-markdownlint)

`Linters` are tools used by developers for maintaining and enforcing code style and quality. Sort of like advanced spell-checkers. This is just the linter I prefer for Markdown.

#### [Markdown All-in-One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

I'll be honest, I don't know *everything* this one does, but I know it adds a lot of extra *oomph* to writing Markdown.

#### [Google Search](https://marketplace.visualstudio.com/items?itemName=kameshkotwani.google-search)

This just adds an option to the right-click menu that let's you Google the text you've highlighted.

#### [Markdown Emoji](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji)

Adds :emoji: syntax support to VS Code's built-in Markdown preview. So you can include emojis like :smile: or :joy:.

This one might actually be covered by Markdown All-in-One, but I was (and remain) too lazy to check. I included it because I'm used to typing out emojis inside colons (e.g. `:joy:`) due to it being used in Slack.

#### [Markdown Extended](https://marketplace.visualstudio.com/items?itemName=jebbs.markdown-extended)

Extends a lot of the functionality of Markdown and adds some extra snippets and features to the Markdown exporter.

#### [Markdown Checkbox](https://marketplace.visualstudio.com/items?itemName=pkief.markdown-checkbox)

Adds some extra commands/snippets for quickly creating checkboxes in Markdown, and enables you to check/uncheck checkboxes by pressing `Ctrl+Shift+Enter`, which is really useful for to-do lists and goals.

#### [Webster Search](https://marketplace.visualstudio.com/items?itemName=loosegoose.webster-search)

This is a really simple extension I wrote by modifying the Google Search extension above. It adds a right-click option that allows you to search Webster's online dictionary for the text you've highlighted.

#### [Markdown Mermaid](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid)

Adds support to preview [Mermaid diagrams](https://mermaid-js.github.io/mermaid/#/) in your Markdown documents. Mermaid is a really cool and pretty easy way to generate graphs and charts and whatnot.

#### [Mermaid Markdown Syntax Highlighting](https://marketplace.visualstudio.com/items?itemName=bpruitt-goddard.mermaid-markdown-syntax-highlighting)

Similar to the above, but this one just adds syntax highlighting for Mermaid code blocks.

#### [LTeX Spelling and Grammar Check](https://marketplace.visualstudio.com/items?itemName=valentjn.vscode-ltex)

I found this well after finding Code Spell Checker, and I might like it a bit more because it will also check your grammar. That being said, I still like Code Spell Checker because it spell-checks *code* as well as regular old text and prose, and I'm not certain that LTeX does the same. Or, if it does, that it does it similarly as reliably. Remains to be seen.

The good news is, you can definitely run both alongside each other and just make it so that cSpell doesn't run for file types like `markdown` or `txt` or whatever file types you choose to use.
