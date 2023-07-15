### About
Iconur is a Figma plugin that contains a library of minimalistic and consistent line icons made by [Milan Gladiš](https://milangladis.com/).

You can also grab the icons directly from [Iconur.com](https://iconur.com/)

![image](https://github.com/milangladis/Iconur-figma-plugin/assets/1476427/bce85d05-76a0-42ed-89d5-c965032a23e2)

### Features:
- Fetch a JSON with icons from Iconur.com
- Drag & drop icons to the canvas
- Set up the icon's size, colour and stroke size

---
### Do you want to contribute?
Any ideas of how to improve the plugin or do you want to contribute with new icons? Let me know.

---
### Support icons creation
Hi there 👋 If you found the plugin or icons useful, consider supporting my works via [Github Sponsor page](https://github.com/sponsors/milangladis)


---
### How to install the plugin locally?
Below are the steps to get your plugin running. You can also find instructions at:

  https://www.figma.com/plugin-docs/setup/

This plugin template uses Typescript and NPM, two standard tools in creating JavaScript applications.

First, download Node.js which comes with NPM. This will allow you to install TypeScript and other
libraries. You can find the download link here:

  https://nodejs.org/en/download/

Next, install TypeScript using the command:

  npm install -g typescript

Finally, in the directory of your plugin, get the latest type definitions for the plugin API by running:

  npm install --save-dev @figma/plugin-typings

If you are familiar with JavaScript, TypeScript will look very familiar. In fact, valid JavaScript code
is already valid Typescript code.

TypeScript adds type annotations to variables. This allows code editors such as Visual Studio Code
to provide information about the Figma API while you are writing code, as well as help catch bugs
you previously didn't notice.

For more information, visit https://www.typescriptlang.org/

Using TypeScript requires a compiler to convert TypeScript (code.ts) into JavaScript (code.js)
for the browser to run.

We recommend writing TypeScript code using Visual Studio code:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Open this directory in Visual Studio Code.
3. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
    then select "npm: watch". You will have to do this again every time
    you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.
