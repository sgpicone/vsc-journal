# Why did you do this? What's wrong with you?

I decided one day that I wanted to start keeping a journal. The trouble was that I had been down this road before. I would go out, buy a new journal, then get caught up in a bunch of key problems:

- My handwriting is atrocious, even when I try *very* hard
- I can't write nearly as fast as I can think, and often before I'm done writing I can barely remember what my thought was
  - And if I try to keep up my thoughts, my handwriting quickly becomes completely illegible *and* my hand starts to hurt
- I get self-conscious about writing my run-of-the-mill thoughts in a nice, pretty journal
- I can only ever write in the journal when I have it with me
- I can't keep the journal very private - anyone who finds it can just go ahead and *read* it :scream:
  - And if I hide it, then I have to go *find* it every time and make sure no one sees!
  - And if I write in code or a script like [Elian](https://www.ccelian.com/ElianScriptFull.html) or [Vianaic](https://paulrouget.com/vianaic/), I have to decipher it every time I want to read it!
- I worry about "ruining" or "wasting" pages
- I worry about not having a "good" or "productive" format
- I worry about misspelling things without realizing and looking like a real doofus to my future self
- Eventually, I'll run out of pages in the journal and have to buy another. And another. And another.
  - And I have to keep *all* of them private!

You get it. The list goes on. Maybe you've felt this way before, too. So, being a software engineer by trade, I turned to my trusty pal the `computer`. I saw a few benefits pretty quickly:

- I can type *considerably* faster than I can write. This helps me keep up with my thoughts
- I can be in more control over who can see my journal
- I can more easily correct mistakes
- I can have access to spell checkers and dictionaries with greater ease
- I can have access to my journal anywhere, depending on where and how I save it
- I can have better control over the format and make it look however I want
- It can grow to be as long as I need it to be
- It can be searchable
- It'll be neater and more organized
- I can directly link to things that I'm writing about (songs, videos, pictures, articles, books, etc.) so I have more context when I look back

So, I sat down at my desk and opened a Google Docs file.

Then I got overwhelmed by all of the possibilities. Should I have a header? A footer? Page numbers? Should I use word art? What should I put at the top of the page? What font should I use? What colors? Any colors? Should I use headings? Should I store everything in one big document, or should I make files in folders? Do I have to make a *new file every single time I want to make a journal entry?*

Then I got paranoid about Google having access to my journal. What if there was a leak? What if I accidentally shared my journal folder with someone I didn't intend to?

So I closed Google Docs and opened Microsoft Word. Local files only!

Then I immediately closed Microsoft Word and almost gave up on keeping a journal entirely.

That's when I remembered [Markdown](https://markdownguide.com)!

I love Markdown! It's simple! It's elegant! It's easy to use! It's customizable, but not *too* customizable. You get what you get and that's all there is to it. No mess, no fuss. And, if I did everything in Markdown, well -- surely I could make a few simple shell utilities that would create files and folders exactly how I want them, with just a few clicks of the mouse or strokes of the ol' keyboard.

So I got started. I made a quick little utility that would generate a new journal entry, in a file/folder structure that was tidy and organized, exactly the way I wanted it. And like magic, the words started flowing from me like they'd never done before, with any other journaling method. Before I knew it, I'd been successfully keeping a journal for an entire month -- straight, skipping no days! Using Markdown and VS Code simplified the process of journal writing enough that I was finally able to keep up with it.

Before long, I'd refined my entry generator to the point of being a somewhat proper command line utility. I learned about VS Code tasks and implemented the utility there, too. Then I got worried about security and made a utility to encrypt the entire notebook with a password. I found tools and extensions to auto-generate tables of contents, spell-check my work, and enhance my journal entries even further. Around this time, I started to think that maybe someone else out there could benefit from this, too.

And here you are!

Happy journaling!
