## Introduction

Thank you for your interest in contributing to maginai's development!  

At this point, we're open to contributions without many strict restrictions or rules.  
For improvements to code or documentation, you don't necessarily have to submit a PR or create an issue.  
If you encounter any problems or find solutions, we'd be grateful if you could share even small pieces of information with us using the contact details provided in the README.  

Of course, if you do create an issue and have a fix for it, submitting a PR linked to that issue would be very helpful and make our work easier.  

## Development

### Requirement

Node.js v18 or higher

Verified development environment:
Ubuntu 22.04 LTS

### Install and Dev Build

After cloning the repository, copy the Creator of Another World folder as `game/`  

```text
./
├── types
│   └── maginai-images.d.ts
├── CONTRIBUTION.md
├── README.md
├── game
│   ├── Game.exe
│   ├── Game.exe.config
│   ├── game
│   ├── libs
│   ├── ★はじめにお読みください.txt
│   ├── ★更新内容.txt
│   ...
```

```sh
npm install
```

Build the mod loader with the following command:  

```
npm run dev
```

Since it's output to `game/js/mod`, you can launch the game directly and verify its functionality.  

### Branches
- `develop` 
  - Development branch
  - PRs should be directed here
- `master`
  - Release branch
  - Updated only through PRs from `develop`
- `gh-pages`
  - For [documentation](https://spoonail-iroiro.github.io/maginai/) on GitHub Pages
  - Automatically updated by Actions

### Test
Using vitest  
Test files with the extension `*.test.ts` located in the `tests` folder are considered test code  
The directory structure should correspond to the structure of the code being tested, with `js/mod` as the root (for example, the test for `js/mod/modules/maginai.ts` would be `tests/modules/maginai.test.ts`)  

### Release
\* The following tasks are primarily performed by Spoonail.

- Update the version using `npm run bump-version:{major/minor/patch}`
- Create a [release PR](https://github.com/spoonail-iroiro/maginai/compare/master...develop?quick_pull=1&template=release.md&title=Release:+vX.Y.Z) from `develop` to `master`
  - The title should be `Release: vX.Y.Z`
- Once the PR passes all checks, merge it into `master`
  - Actions will automatically create a release draft
- Review the created draft, generate the changelog, and make any necessary changes
  - Binary attachments and version number tags are added automatically
- Finalize the release
  - Actions will generate TypeDoc documentation and push it to `gh-pages`
  - Actions will execute `npm publish`

### Scripts

#### Building Type Definition Package
```
npm run build:package
```

Outputs type definitions for MOD development packages under the `libs/` directory  

#### Building the Distribution ZIP
```
npm run build:dist
```

Outputs the distribution zip under the `dist/` directory  
The `dist/maginai/` folder contains the contents of the zip  

#### Documentation
```
npm run preview:docs
```
Build the documentation excluding external modules  
This is generally used for checking during development  

```
npm run build:docs
```
Build all pages (including external modules, which makes it slower).



