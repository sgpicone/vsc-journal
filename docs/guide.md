---
tree_title: Usage Guide
---

# How to Use This Journal

- [How to Use This Journal](#how-to-use-this-journal)
  - [Basics](#basics)
    - [Initial Setup](#initial-setup)
    - [Creating a New Journal Entry](#creating-a-new-journal-entry)
    - [Creating a Non-Journal Entry](#creating-a-non-journal-entry)
    - [Locking/Unlocking the Journal](#lockingunlocking-the-journal)
  - [Advanced](#advanced)
    - [The Configuration File](#the-configuration-file)
    - [VSCode Extensions](#vscode-extensions)
      - [Code Spell Checker](#code-spell-checker)
      - [Insert Date String](#insert-date-string)
      - [VSCode Markdown Lint](#vscode-markdown-lint)
      - [Markdown All-in-One](#markdown-all-in-one)
      - [Google Search](#google-search)
      - [Markdown Emoji](#markdown-emoji)
      - [Markdown Extended](#markdown-extended)
      - [Markdown Checkbox](#markdown-checkbox)
      - [Webster Search](#webster-search)
    - [VSCode Tasks](#vscode-tasks)
    - [VSCode Snippets](#vscode-snippets)

## Basics

At its core, using this journal is *meant* to be pretty straightforward. Here are the basics.

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



## Advanced

### The Configuration File

### VSCode Extensions

#### Code Spell Checker

"streetsidesoftware.code-spell-checker"

#### Insert Date String

"jsynowiec.vscode-insertdatestring"

#### VSCode Markdown Lint

"davidanson.vscode-markdownlint"

#### Markdown All-in-One

"yzhang.markdown-all-in-one"

#### Google Search

"kameshkotwani.google-search"

#### Markdown Emoji

"bierner.markdown-emoji"

#### Markdown Extended

"jebbs.markdown-extended"

#### Markdown Checkbox

"pkief.markdown-checkbox"

#### Webster Search

"loosegoose.webster-search"


### VSCode Tasks

### VSCode Snippets
