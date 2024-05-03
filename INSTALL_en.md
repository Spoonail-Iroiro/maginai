\* In this document, `CoAW/` path means the game directory, which contains `Game.exe`

## How to Install Mod Loader 'maginai'


### 1. Place Mod Loader Files in the Game Directory
Download and unzip latest `maginai-X.Y.Z.zip` (X.Y.Z is the version number) from [Release](https://github.com/Spoonail-Iroiro/maginai/releases).  
Copy `mod` folder inside it to `CoAW/game/js`.  
If you have the following four folders in `CoAW/game/js`: `game`, `jquery`, `libs`, and `mod`, then everything is in the correct state.

![in-game-dir](docassets/in-game-dir.png)

### 2. Edit `index.html`
Open `CoAW/game/index.html` with a text editor (Notepad works fine) and add these two lines after the line of `./js/game/union.js`:

```html
<script src="./js/mod/config.js"></script>
<script src="./js/mod/loader.js"></script>
```

If your `index.html` looks like the following, then everything is in the correct state:

```html
...
<script src="./js/libs/jspng.worker.js"></script>
<script src="./js/libs/jspng2.worker.js"></script>
<script src="./js/game/union.js"></script>
<script src="./js/mod/config.js"></script>
<script src="./js/mod/loader.js"></script>
<script type="text/javascript">
...
```

### 3. Test Installation
If, upon launching the game, you see the text `Mod loader 'maginai' vX.Y.Z` (where X.Y.Z is the version number) at the bottom left of the title, then the mod loader has been successfully installed. 

![mod-load-completed](docassets/mod-load-completed.png)

If the text appears in red or is not displayed at all, please check the installation steps again.   

You can find detailed error messages in the browser's developer console when CoAW is running on a web browser.  
To launch CoAW from a web browser, open `CoAW/game/index.html` with it.

\* Only Google Chrome is officially supported (described in `●Open 『\game\index.html』 in a browser` section in `Please read this first.txt` in the game docs (DLSite ver.))   
\* To access the developer console in Google Chrome, go to Menu > More Tools > Developer Tools.  
\* CoAW (Steam ver.) doesn't load the game when it's launched from a web browser until maginai is installed. Even in that case, you still be able to get some error messages from the developer console. 


### How to Update
If you updated CoAW or want to update maginai, follow this installation steps again.  
However, unless specifically announced, you can simply copy the existing `mods` folder, which contains mods and `mods_load.js`, without any issues.

## Install a Mod
If you completed installing maginai, you can now install a mod by:

- Copy a mod folder, which contains `init.js`, to `mods` directory
- Add the name of the mod folder to the list in `mods_load.js`

### 1. Get a Mod
Get the desired mod from [Discord (CoAW modding)](https://discord.gg/RgYrD3uPZM) or somewhere.  
[README](README.md) also has a mods list.

Now, as an example, let's try installing a sample mod, which just logs a message "sample modがロードされました" when the game starts.  
Download and unzip the distribution file from the following link:

https://drive.google.com/file/d/1dYoioGayloWRBwKY3CJtLIMJibTxRKb7/view?usp=drive_link

Inside the extracted folder, you'll find `readme.txt` and `sample` folder.   
The `sample` folder is the mod's main folder that should be placed in `mods` directory.

Please note that the structure of distribution materials may vary depending on the mod author.  
Follow the instructions in the readme or the author's guidance.   
If you're still unsure where mod's main folder is, the mod's main folder always contains an `init.js` file directly inside it, so find it. 

### 2. Copy Mod's Main Folder to `mods`

You've completed installing maginai, so you have `CoAW/game/js/mod/mods` directory.  
Copy mod's main folder (it's `sample` now) there.

![copy-mod](docassets/copy-mod.png)

### 3. Add Mod's Name to the List in `mods_load.js`

Open the file named `mods_load.js` inside the `mods` directory with a text editor.  
The list defined in `mods` should contain the names of the mods to be loaded.  
Add the name of the mod folder you just placed (it's `sample` now) to the list.  
* Each mod name should be enclosed in either double quotes (`"`) or single quotes (`'`), and a comma `,` is required between each name.
* Lines starting with `//` are comments, so they can be deleted without any issues.

After adding `sample`, the `mods_load.js` will look like this (comments removed):

```js
LOADDATA = {
  // 読み込むModリスト
  mods: [
    "sample",
  ]
};
```
Additionally, the order defined here determines the order in which mods are loaded.   
Some mods may require adjustments to the loading order to function properly alongside others. (Please follow the mod author's guidance).

### 4. Test Installation
If you launch the game and there are no red text in the `Mod Loader 'maginai'...` section of the title screen, the installation is successful.

![mod-load-completed](docassets/mod-load-completed.png)

If an error occurs during loading, a message starting with `Mod load failed:` followed by the name of the mod that caused the error will be displayed in red.

![mod-load-failed](docassets/mod-load-failed.png)

You can find detailed error messages in the browser's developer console.  
Since you can't access the developer console when launching from Game.exe, it's recommended to launch from index.html when you investigate any isssues.

Additionally, only loading errors are displayed on the title screen.   
Follow the instructions provided by each mod for checking errors that occur during gameplay.   
(In many cases, the developer console will provide useful information here again)

/* If you installed maginai, you can launch the game even if CoAW is Steam ver. However it's not officially supported environment and maginai also doesn't support whole gameplay. Use it as debugging only to use the developer console, use Game.exe for your usual gameplay.

Now, if you select a save slot and the game starts, you should see a log message saying 'sample modがロードされました' (means "sample mod has been loaded"), which was added by the `sample` mod.

![sample-mod-message](docassets/sample-mod-message.png)

With this, you've successfully installed a mod and the mod altered the game's behavior.

## How to Remove a Mod
Remove the mod name from the list in `mods_load.js`.  
maginai ignores mods not listed in `mods_load.js`, so you can remove mod's main folder after that.  

## Q&A
### Q. The Game is Laggy!
By default, mods' log level is set to `Info` and too many logs can affect performance.  
Open the `config.js` in `mods` directory and replace `info` in `logLevel: 'info'` with `warn` or `error`.  
It supresses non-important logs, so performance might be improved.

### Q. I want to install a mod by just placing the mod's folder in `mods`. Editing `mods_load.js` is tedious.
CoAW is running on local HTML+JavaScript, so due to CORS restrictions, it's difficult to access all files within a specific directory.  
Additionally, while installation may be possible with just placing the mod folder, there are often scenarios where one wants to configure the loading order of mods, hence the necessity of `mods_load.js,` which serves as a definition for loading order.  
(Having a GUI application or something for editing `mods_load.js` might make it easier. Contributions are always welcome!)"
