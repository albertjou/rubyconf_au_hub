#The Hub: The Digital Content Hub for RubyConf AU

This is the code which builds the [RubyConf Miami AU](http://rubyconfay.multifaceted.io). It's built using [middleman](http://middlemanapp.com) and is designed for easy contribution. If you're interested in how it works, check out the code which drives the extension.

## Installing

It should be pretty simple to get this going:

```
$ git clone https://github.com/ninefold/rubyconf_miami_hub
$ cd rubyconf_miami_hub
$ bundle install
$ middleman server
```

From there, go forth and edit. If you have livereload on your browser, then it should automatically refresh when you make changes.

## Structure

We've aimed to make it as easy to contribute to the hub as possible. For adding content it's simply a matter of adding a file in the right place, or editing one.

All of the content sits inside the `source/` directory.

### Talks
Talks live in the `source/talks` directory. They are free text which makes up the content above the talk preview on each of the talk pages. It's in Markdown format. Go ahead and edit as you see fit to make it better.

For more details, look at the [README for talks](source/talks/README.md)

### Speakers
If you want to update the bio for a speaker, then all that information lives in the `source/speakers` directory. The speaker bios are free text which is in markdown format. 

## The Magic

The magic lives in the [middleman-conference_hub](https://github.com/ninefold/middleman-conference_hub) gem. It's implemented as a Middleman extension. In short, what it does is look at the sitemap and add behaviour to different resources based on where they are in the path (thus a talk, which lives in `source/talks` has methods like `talk.speaker` and `talk.room`.)

To add another kind of resource, copy one of the modules like `TheHub::Talk`, replace the `SELECTOR` regex with one that will match the paths where you'll be keeping the files for your resource type.

### Frontmatter
Frontmatter is really what powers the hub. The metadata stored in front matter allows the planner to be built as it is and allows you to attach useful things to rendered content. Check out the READMEs for talks and events for more information about their frontmatter metadata.

## Contributing

If you want to contribute to the hub, then it's much like any other open source prodject:

1. Fork the project
2. Make your changes
3. Make a pull request

Easy, n'est-ce pas?
