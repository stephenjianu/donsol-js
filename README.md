# DonsolJavascript
Javascript version of Donsol

### Original authors
The original Javascript+Electron version of Donsol was created by Hundred Rabbits.

### About this branch
This branch ("web") will be used for development on the web-based version of Donsol, which in turn is heavily based on the main branch, stripping out parts related to Electron and NodeJS.
None of this is official; it's a passion project, so please do not contact Hundred Rabbits regarding issues with this web version of the game.

### Limitations
In the project's current state, you can play the base game of Donsol, with some limitations.
The following do not currently work:
* ~~Card faces do not render properly, as these were previously loaded with NodeJS functions that aren't available to use in a pure browser-based application (as far as I'm aware). I have an idea on how to accomplish this.~~ Fixed in commit ff787f7
* Aspects of the game that relied on being selected from a menu in the Electron version currently have no way of being toggled. These include things like difficulty selection and themeing support.

### Contributing
If you wish to contribute to the project, please follow the standard practice of forking this repository and submitting a pull request.
