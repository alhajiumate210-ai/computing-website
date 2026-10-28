# Git and GitHub Practical Guide

## 1. Install and configure Git
Install Git from https://git-scm.com/downloads. Open Git Bash or a terminal and run:
```bash
git --version
git config --global user.name "Your Full Name"
git config --global user.email "your-email@example.com"
```
Use your own name and email.

## 2. Create the initial commit
Open the terminal inside this project folder:
```bash
git status
git add .
git commit -m "Create department website pages"
git log --oneline
```

## 3. Record a homepage improvement
After editing the homepage or styling:
```bash
git status
git add index.html style.css
git commit -m "Improve homepage content and design"
git log --oneline
```

## 4. Create a branch for Contact Us
```bash
git switch -c feature/contact-page
```
Edit `contact.html` (for example, improve the contact information or layout), then:
```bash
git status
git add contact.html
git commit -m "Build contact us page"
git switch main
git merge feature/contact-page
git branch
git log --oneline --graph --all
```
If your default branch is called `master`, use `master` instead of `main`.

## 5. Create a GitHub repository and push
1. Sign in to https://github.com.
2. Create a new repository, e.g. `department-computing-website`. For an existing local project, create it without adding a README, licence, or `.gitignore`.
3. Copy the repository HTTPS URL from GitHub.
4. In your project terminal, run (replace the URL with your own):
```bash
git remote add origin https://github.com/YOUR-USERNAME/department-computing-website.git
git push -u origin main
git push -u origin feature/contact-page
```
If `origin` already exists, check it with `git remote -v` and use `git remote set-url origin YOUR-REPOSITORY-URL` if necessary.

## 6. Make a later update and push it
After changing a file:
```bash
git status
git add .
git commit -m "Update website content"
git push
```

## 7. Evidence to show your lecturer
- Open each website page in your browser.
- Run `git status` and `git log --oneline --graph --all`.
- Run `git branch` to show the feature branch.
- Run `git remote -v` to show the GitHub connection.
- Open your GitHub repository in a browser to show uploaded files and commits.

## Commit versus push
A **commit** records a snapshot of changes in your local Git repository. A **push** sends committed changes from your computer to a remote repository such as GitHub.
