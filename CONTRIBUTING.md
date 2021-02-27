# Contributing 🤝😎💪
![Hello Gif](https://i.imgur.com/AykhEBG.gif)

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Pull Requests 🅿️🇷

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3. We strictly use **GitFlow** and try to have a linear merge. Please follow the guidelines below.

## Git Flow ⭐➡️🍴➡️💻

1. Navigate to the [praveenscience/Internship-LMS-FrontEnd](https://github.com/praveenscience/Internship-LMS-FrontEnd/tree/main) repository and click on Fork button.  
  
2. You'll either find a way to fork to your own account or you will have a link to go to your forked repository. Clicking on either takes you to the forked repository.  

3. You can confirm that this repository is a fork of the original repository by finding the "forked from [praveenscience/Internship-LMS-FrontEnd](https://github.com/praveenscience/Internship-LMS-FrontEnd)" text under the repository name.  
 
4. Click on Clone or download button on the forked repository. Make sure you are cloning your version (GitHub.com/\<your username>/Internship-LMS-FrontEnd) and not the praveenscience's repository.  
 
5. I use a `git clone` command with my username attached in front of the `github.com`, making the clone command look like `git clone https://praveenscience@github.com/praveenscience/Internship-LMS-FrontEnd.git`. This is for making sure, the compatibility is maximum.  
  
6. Let's say I am going to start working on the `Issue #2`. Create a new branch with the format of `issue#-subject`, here it is `2-cname-update`. I use command line a lot so I am confident of what command I am using. If you're comfortable with GUI, feel free to use it, but make sure you use the right naming convention. The complete command I have used here is `git checkout -b 2-cname-update`.  
  
7. Make all your changes in your favourite IDE. Make sure you adhere to the linting rules given in [My Personal Development Environment](https://blog.praveen.science/my-personal-development-environment/) blog post, under Visual Studio Code. There's also [My Visual Studio Code Settings](https://gist.github.com/praveenscience/ebb5439f31774ad2fdc14cb9e7de1fc0) with all the extensions I use. You don't need to use all but make sure you follow the prettier guidelines at least, which will have mostly the default ones like double quotes, no trailing quotes and spaces, line width of 80 characters or less, etc. If you have issues setting up your development environment, please contact me.

8. Once you make changes, you can see the changed files. Make sure no unintended changes are there (new files added, changed files aren't recognised, etc.), which you can see by checking the `git status` command and looking at the workspace.  

9. Use a good diff tool to check if the changes are indeed intended. I use `git diff --color` to check the diffs between the changes.  
 
10. If everything looks alright, add the files to staging by using `git add <filename>`. If you want to add all the files and if there are many files, you can use `git add .` or `git add *`. Use `git status` again to verify the changes that are added.  
 
11. Once you have added the files to staging and checked the integrity of changes, you can start writing the commit message. The commit message should follow [Git Standards followed in our way of Spotify Agile Methodology](https://blog.praveen.science/git-standards-followed-in-our-way-of-spotify-agile-methodolgy/). The main two points you need to note are 50 characters for commit subjects and 72 characters for commit message lines. At the end of the commit message, make sure you write `Fixes #<issue number>.`. We are following sentence case everywhere and a past tense. Please follow the same. When you push for the first time, please use the `-u` flag and give the full branch name. As my branch name is `2-cname-update` and this is the first time I am pushing, I will do `git push -u origin 2-cname-update`. Once you do this, the command automatically gives you the link for creating Pull Request as a response from remote. In my case, it was `https://github.com/praveenscience/Internship-LMS-FrontEnd/pull/new/2-cname-update`.  
  
12. Either navigate to the URL that you received in the above step or just go to your repository. You can see a banner informing you about your recently pushed branches and will also give you an option to Compare & pull request. Click on the button to open the pull request.  
  
13. In the Open a pull request page, you will be shown with the commit details. Make sure you enter a valid commit message explaining what you have done and give a few points on what has happened. Don't forget to add the last line `Fixes #<issue number>.` at the end. Also, make sure to notify the mentors & admin of the project by clicking on the gear icon next to Reviewers on the right side. Click on Create pull request to create the pull request for review.  

14. Here you have created the pull request successfully. You can check the correct number of commits and the files changed are perfect here. One of the reviewers will be with you shortly to check the Pull Request and gives you feedback, if there are any.  
  
15. Once the pull request looks satisfying to the maintainers / mentors, your pull request will be merged. You may (or may not) delete your branch at this moment.  
  
16. After merging new code into the `praveenscience/Internship-LMS-FrontEnd` repository, your fork's `main` branch might be outdated. To make sure your `main` branch is latest, you need to pull the latest code from the upstream repository `praveenscience/Internship-LMS-FrontEnd` to your local machine's `main` branch and then push to your origin repository `<your username>/Internship-LMS-FrontEnd`.  
  
17. To do the above step, you need to add the remote upstream as `upstream` in `git remote`. **Make sure you do this only once.** This is a repository level configuration, which means, you **don't need** to do it every time you create a new branch. I use this command `git remote add upstream https://praveenscience@github.com/praveenscience/Internship-LMS-FrontEnd.git` to add the upstream repository. Make sure your `upstream` repository points to `praveenscience/Internship-LMS-FrontEnd` while your `origin` repository points to `<your username>/Internship-LMS-FrontEnd`. You can check that by entering the `git remote -v` command.  
   
18. The first step is to pull from the `upstream` and second step is to push to the `origin`. Remember, `upstream` is the author's and `origin` is yours and you are updating your `origin`'s `main` branch with the latest code from `upstream`'s main branch. To do this, check out to main branch by using `git checkout main`, pull the latest code from the upstream's repository by using `git pull upstream main` (at this point, your local is sync'd with author's repo) and update your forked repository's main branch by using `git push`. If you follow the instructions correctly, there shouldn't be any issues pushing, but if you encounter any issues, I'll create a new section, commonly encountered issues, which you may refer. The above said three commands should give you a result like below.  
  
19. Now after pushing the changes, if you check your forked repository in GitHub, you must be able to see `This branch is even with praveenscience:main.`. If that's not present, then either you haven't pushed it yet or you aren't in the main branch.  
   
20. Now this way, your local `main` branch is in sync with the `upstream`'s repository. If you want to work on a new issue, create a new branch by using `git checkout -b <issue number>-subject`. In my case, for my Issue #19, I am going to use this command, `git checkout -b 19-contributions-doc`. Start working and then go to step #6 again and repeat.  
  

As always, if you have any questions regarding Git, please do reach out to me on Slack.

## Code of Conduct 📖📚

### Our Pledge ✌️✌️

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards ✔️

Examples of behavior that contributes to creating a positive environment include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a professional setting

### Our Responsibilities 👩‍💼👨‍💼

Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.

### Scope 🚀📚

This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.

### Enforcement ⚖️

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at `live@praveen.science`. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership.

### Attribution ✒️

This Code of Conduct is adapted from the [Contributor Covenant](http://contributor-covenant.org), [version 1.4](http://contributor-covenant.org/version/1/4/).