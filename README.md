# UBC BEST Website

## Steps to set up, maintain and push code:

### Download developer tools

1. Download [Git](https://git-scm.com/downloads/) - Download method varies depending on your computer operating system (Linux, Windows or MacOS)

2. Download [Node.js](https://nodejs.org/en/download)

3. Download [Visual Studio Code](https://code.visualstudio.com/Download)

### Set up files in Visual Studio Code

4. Open VSCode and in the terminal, open the directory that you want to clone the files in and then clone this repository:

`git clone https://github.com/BESTubc/ubcbest.github.io`

For more information on navigating file directories, adding folders, adding files, and etc. check out this [article](https://gomakethings.com/navigating-the-file-system-with-terminal/#:~:text=Type%20the%20cd%20command%2C%20followed,you%20want%20to%20navigate%20to.&text=Paths%20are%20relative%20to%20the,the%20currently%20logged%20in%20user.)

5. Open the newly cloned directory and open the 'src' directory using:

`cd ubcbest.github.io`

`cd src`

6. Install all necessary dependencies using npm.

`npm install`

### Maintain and debug

7. For aesthetics, use 'App.css'. For content, use their respective .jsx files.

8. When working on the codebase with other people, git pull before editing any files.

`git pull`

9. To see local changes, visit "http://localhost:3000/" after running:

`npm start`

To exit/shutdown the local server, use `CTRL + C`.

### Pushing code

10. After finishing editing any code, use git to add, commit and push code to the GitHub repository (which will also auto deploy via Vercel).

`git add .`

`git commit -m "A DESCRIPTION OF CHANGES YOU HAVE MADE"`

`git push`

11. Check this GitHub repository to see if your changes have been pushed; it might take some time.

12. Once pushed, check if your changes have been pushed to Vercel, either in Vercel projects or under 'Deployments' on this repository.
