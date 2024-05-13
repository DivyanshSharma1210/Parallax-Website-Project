# Git Notes

Created by: Divyansh Sharma
Created time: May 12, 2024 10:37 PM
Status: In progress
Tags: Engineering

1. `git init`-> Powers your folder to be managed by git, and initialises a new empty repository. It also creates a .git folder that has all the relevant logic to manage versions of your project.
2. `Working Area`->There can be a bunch of files that are not currently handled by git. It means that changes done or to be done in those files are not managed by git yet. A file which is in working area is considered to be not in the staging area.When we do `git status` and we see a bunch of `untracked files` then these are actually called to be in the working area.
3. `Staging area`-> what all files are going to be the part of the next version that we will create.This staging area is the place where git knows what changes will be done from the last version to the next version.
4. `Repository Area` → This area actually contains the details of all you previous registered version. And the files in this area, git already manages them and knows their version history.
5. `git add <file>` →moves file from working area to staging area.
6. `git rm - - cached <file>` → moves file back from staging area to working area.
7. `commit` → Commit is a particular version of your project .It captures a snapshot of the project’s staged changes and create a version out of it.
8. `git commit` → registers staging changes to a commit.
9. `git log` → lists down all the commits of the repository. If you want to exit out of git log prompt press `q`.
10. `git restore <file>` → It removes all files changes from the staging area to be committed. This can be useful, if we did some dirty piece of code and now you no more want it . instead of deleting every change line by line , we can restore it or you can say restore last clean version of the file.
11. `git restore - - staged <file>` → It removes file from changes from staging area to the working area. this only works if changes are in your staging area.
12. `Difference between git rm and git restore` → If you want to move the whole file back to the untracked state, then we do `git rm` , otherwise if we just want the changes to be moved in working area or staging area then we do git restore.
13. `git diff commit1 commit2` → It gives difference of all the files changes between two commits.
14. `git commit -m “<your commit message>”` → If we want to avoid opening a text editor like vim/nano to add commit message we can use this following command.
15. `git remote` → List down all connection names.
16. `Remote connection` → It helps you to link two git repositories for uploading and downloading changes from each otherwise.
17. `git remote add <name of remote> <link of the remote>` → This command helps us to add a new link to the remote repo and give a name to it .
18. `git remote rm <name of the remote>` → This command deletes a remote connection.
19. `git remote rename <oldname> <newname>` → This command renames the remote connection.
20. `git add <file1> <file2> <file3>` → This command will add multiple file changes together in the staging area.
21. `git add .` → This command will add all files from working area to staging area.
22. `git pull <remote name> <branch name>` → Downloads latest changes from the branch of the mentioned remote in your local repo.

## ## Recommended Practice to do :

` → Make change

   → git add <file>

  → git commit

  → git pull

   → git push`

23.Merge Conflicts are a very common scenario merge conflicts can occur if multiple people try to make changes to the same file and then collaborate.

## What are git branches?

Git branches are a pointer to a snapshot of your changes. When you want to add a new feature or fix a bug—no matter how big or small—you spawn a new branch to encapsulate your changes. This makes it harder for unstable code to get merged into the main code base, and it gives you the chance to clean up your feature’s history before merging. It is a core concept in git that helps developers to work simultaneously on different features while keeping the developments organized and segregated.

Here are some common commands related to git branches:

- `git branch`: Lists all the local branches in the current repository.
- `git branch <branch>`: Creates a new branch called `<branch>`. This does not check out the new branch.
- `git branch -d <branch>`: Deletes the branch `<branch>`. The `d` option will delete the branch only if it has already been fully merged in its upstream branch.
- `git branch -D <branch>`: Forces the deletion of the branch `<branch>`, irrespective of its merged status.
- `git checkout <branch>`: Switches to branch `<branch>`.
- `git checkout -b <branch>`: Creates a new branch `<branch>` and switches to it.
- `git merge <branch>`: Merges the branch `<branch>` into the current branch.

For example, if you want to create a new branch to work on a new feature:

```bash
git checkout -b new-feature

```

This will create a new branch called "new-feature" and switch to it. You can work on your feature in this branch. When you're done, you can merge it back to the main branch:

```bash
git checkout main
git merge new-feature

```

This will merge the changes from "new-feature" into the "main" branch.

## What is Git Stash?

Git Stash is a powerful Git feature that allows you to temporarily shelve (or stash) changes you've made to your working copy so you can work on something else, and then come back and re-apply them later on. This is particularly useful when you are in the middle of working on a feature or bug and need to switch context to work on something else, but don't want to commit half-done work.

Here are some common commands related to git stash:

- `git stash save "message"`: Takes your modified tracked files and staged changes and saves them on a new stash with a descriptive message.
- `git stash list`: Lists all stashes that you currently have. Each stash is listed with its name (e.g., stash@{0}), message, and details about the commit it was based on.
- `git stash apply`: Re-apply the changes recorded in the latest stash. The stash will still exist in the stash list.
- `git stash apply stash@{n}`: Re-apply the changes recorded in the stash number n. The stash will still exist in the stash list.
- `git stash pop`: Apply the changes recorded in the latest stash, and then drop the stash from your list.
- `git stash drop stash@{n}`: Discard the stash number n.
- `git stash clear`: Remove all stashes.

For example, if you're in the middle of working on a new feature and you need to fix a bug:

```bash
git stash save "Work in progress for new feature"

```

This will stash your changes and revert your working copy to the last commit. You can then create a new branch to fix the bug. When you're done, you can go back to your original branch and re-apply the stashed changes:

```bash
git stash apply

```

This will re-apply your stashed changes, and you can continue where you left off.

## Mystery of .git folder resolved !!!

The `.git` folder is a hidden directory in a project. It contains all the necessary information required for version control by Git. Let's break down the importance of some of its subfolders:

- `objects`: This directory stores all the data for your commits, trees (which are like directories), and the files themselves. Each of these objects is identified by a unique SHA-1 hash.
- `refs`: This directory holds pointers to commits. These are essentially the "branches" and "tags" in your repository. For instance, the file `refs/heads/master` contains the SHA-1 hash of the commit that `master` points to.
- `HEAD`: This is not a directory but a file that contains the reference to the checked-out branch.
- `hooks`: This directory can contain scripts that are automatically executed by various Git commands. They are used for automation of different tasks like enforcing a commit message format, email notifications, and automatically running tests.
- `info`: This directory contains the global excludes file that has a list of patterns for files that Git should ignore.
- `logs`: This directory contains a record of when refs were updated in the repository. It's essentially a log of every commit.
- `config`: This file holds project-specific configuration options. It is where you can configure Git options for the specific repository that the `.git` directory resides in.

Remember that directly altering any files within the `.git` directory can potentially corrupt your Git repository, so it's always best to interact with this directory through Git commands.

## What is cherry Picking?