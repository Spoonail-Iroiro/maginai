\* You can access the table of contents from the hamburger button in the top right corner. If the button is not visible, reloading this page may make it appear correctly.

# The Simplest Mod
Name your mod and create a folder with that name, then create an `init.js` file inside it.  
For example, let's create a mod named `mysample`.

```text
mysample/
┗━━init.js
```

```js
//init.js
console.log("Hello, world!");
```

Place this `mysample` folder into the `mods` directory and add the mod name to the list in `load_mods.js`, as described in mod installation steps. Then, the mod will be loaded.

Since the mod code uses console.log to output a message to the developer console, let's open it.   
(For how to, see [How to Open the Developer Console Section](README_en.md#how-to-open-the-developer-console).)

![mysample-hello](docassets/mysample-hello.png)

You should see that the code inside `init.js` is executed and the message is displayed.  
Additionally, you'll notice that the code written in `init.js` is executed during mod loading, before the game loads.

Congratulations! You've created your mod.

# Affecting the Game
However, despite being a Mod, it doesn't affect anything in the game yet.  
You could write all the code to modify the game yourself, but maginai provides some convenient mechanisms.  
Methods and modules provided by maginai can be accessed from the `maginai` global variable anywhere in your Mod code.  

## For Those Who Know
This explanation is for those who are already writing code to modify the game.

The execution order of the game's main script `union.js`, maginai's entry point `loader.js`, Mod's `init.js`, and events provided by maginai is as follows:  
1. Execution of `union.js` (the game's main script)
2. Execution of `loader.js` (maginai's main script)
3. `init.js` of a Mod
4. Postprocess of a Mod (does not proceed to step 3 of the next Mod until asynchronous processing is completed)
5. (Repeat steps 3 and 4 until all Mods in `mods_load.js` are loaded)
6. `tWgm = new tGameMain({});`
7. `tWgmLoaded` event
8. `gameLoadFinished` event (just before displaying the title screen)
9. Display the title screen
10. (User selects a save)
11. `saveLoaded` event

The main places where Mods write code to modify the game are as follows:  
- Modifying methods... directly in `init.js`
    - At the time of loading the Mod's `init.js`, `union.js` has already been executed and classes, etc. are defined, so they can be modified
- Data that needs to be loaded asynchronously... Register in Postprocess
    - Use `maginai.setModPostprocess` to set a `Promise` (described later)
- Modifying data... `gameLoadFinished` event (described later)
    - Just before displaying the title screen, the initialization of instances of each class such as `tGameTalkResource`, which are members of `tWgm`, is completed, so it is possible to modify conversation data, etc.
- After loading save data... `saveLoaded` event (described later)
    - After selecting save data and just before loading is completed and it becomes operable, so it is possible to make modifications that access individual save data

### Postprocess
Since only synchronous code can be written in `init.js`, to complete asynchronous processing before loading the next Mod (and before loading the game), use the Postprocess feature provided by maginai.  
By calling `maginai.setModPostprocess` with a `Promise` object as an argument, the next Mod will not be loaded until that `Promise` is completed.  

```js
// init.js
// ...
// Variable to store the loaded message
let message;

// Load the message from an external js file
const postprocess = maginai
  .loadJsData("./js/mod/mods/buildsample/message.js") // Returns a Promise
  .then((loaded) => {
    // Set the loaded message to the variable
    message = loaded["message"];
  });
// Set the Promise using setModPostprocess so that the message loading is guaranteed to finish before the game loads (and before the next Mod loads)
maginai.setModPostprocess(postprocess);
// * If you want to set multiple Promises as Postprocess, you need to use Promise.all or chain them with then to make them into a single Promise before setting
// ...
```

### Events
Under `maginai.events`, events that are executed at specific timings during the game are defined.  
By calling the `addHandler` method and registering a function as an event handler, it will be executed.  

```js
// init.js
// ...
// Register an event handler to display a message when the game loading is finished
maginai.events.gameLoadFinished.addHandler(() => {
  logMessage(message);
});
// ...
```

All events are listed here:  
https://spoonail-iroiro.github.io/maginai/classes/MaginaiEvents.html

## For Beginners
This explanation is for those who haven't created Mods yet.  
(However, understanding the game's internals is still necessary)

### Modifying Loaded Data
By replacing character conversation data, item master data, etc., you can change the behavior in the game.  

Note that `init.js` is loaded during Mod loading, before the game is loaded.  
If you write data replacement processing in `init.js`, an error will occur because the data to be replaced has not been loaded yet.  

In such cases, use the `gameLoadFinished` event defined in `maginai.events`.  
Under `maginai.events`, there are various event objects to which handlers can be registered using the `addHandler` method, and `gameLoadFinished` is an event that occurs **when the game loading is completed and various data is loaded**.  

The following is an example of an `init.js` that replaces the "Loaded." message displayed when starting the game after selecting a save with "Hello, World!".
```js
(function () {
  // init.js
  // Assign to a variable for name shortening
  const ev = maginai.events;

  // When the game loading is finished and the title screen is displayed...
  ev.gameLoadFinished.addHandler(() => {
    // -.load_ok is "Loaded." when loading a save, so replace it
    tWgm.tGameTalkResource.talkData.system.load_ok = "Hello, World!";
  });
})();
```

#### \* What is `(function(){`〜`})();`?
It is an IIFE, a way to prevent variables from interfering with other scripts in script files like `init.js`.  
If you don't understand it well, basically write `(function(){`〜`})();` and write your code between them when creating Mods.  

### Modifying Method Behavior
By replacing (monkey patching) various methods with methods defined in Mods, you can change their behavior.  

maginai provides a convenient method for this purpose, the `patchMethod` method of `maginai.patcher`.
An `init.js` that patches the `tGameLog.addLog` method, which is the in-game log output method, to change the "Loaded." log when loading the game to "Hello, World!" is as follows.

```js
// init.js
(function () {
  // Assign to a variable for name shortening
  const pt = maginai.patcher;

  // Patch the addLog method of the tGameLog class
  // The origMethod passed as an argument to the third argument newMethodFactory is the original addLog method
  pt.patchMethod(tGameLog, "addLog", (origMethod) => {
    // The new addLog method...
    const rtnFn = function (message, ...args) {
      // If the message passed as the first argument is "Loaded.", replace it with "Hello, World"
      const newMessage = message.replace("ロードしました。", "Hello, World!");
      // Call the original addLog with the replaced message
      origMethod.call(this, newMessage, ...args);
    };
    return rtnFn;
  });
})();
```

It's a bit complicated, but patchMethod takes:  

- The first argument is the target class
- The second argument is the method name
- The third argument is a function that returns the new method (in this case, the new `addLog` method)

The function in the third argument receives the pre-patched method origMethod as an argument, so by calling `origMethod.call(this, ...` inside, you can call the original method.  
You can process or preprocess only a part of the arguments, or write only post-processing.  

### Loading External Data
If there are parts that Mod users can modify, it's better to provide external files instead of having them directly edit `init.js`.  
[This example](#postprocess) is an example of file loading processing.

Note that file paths must be relative to `index.html`.  
Therefore, for example, a file placed directly under the Mod folder will have a path like `./js/mod/mods/<Mod name>/<file name>`.

## If It's Difficult to Implement the Desired Functionality
Please feel free to consult with the author.  
I tried to cover various Mod implementation cases, but there may be some oversights.  
(Contact information is at the top of `README.md`)

## Examples
You can use the sample Mods in the Mod installation procedure and the Mod code in this example repository as examples.  

https://github.com/Spoonail-Iroiro/maginai-buildsample

Also, this example repository is an example of a configuration that implements ESModule and converts it to a Mod script by building.  

# `maginai` API
Documentation for all features exposed by `maginai` is available here:  
[maginai API Documentation](https://spoonail-iroiro.github.io/maginai/classes/Maginai.html)  
\* Items marked with `Internal` are for internal use and are not intended to be used from Mods  

`maginai` is actually an instance of the `Maginai` class, so you can use what is exposed under the `Maginai` class.  

The features that are likely to be used frequently are as follows.  
(Basic features introduced so far are omitted)  
For details, please refer to the documentation.  
- `loadJsData` - Load data from a js file in the format `var LOADDATA = ...`
- `logToInGameLogDebug` - Output log to in-game log (for debugging and error display)
- `VERSION`, `VERSION_INFO` - Version information of `maginai`
  - \* Note that these properties do not exist in v0.2.0, so be careful when comparing
- `modSave` - Submodule for reading/writing Mod-specific save data
  - Use in conjunction with the save loaded event `saveLoaded` and the save before event `saveObjectRequired` to read and write Mod-specific data to save data


# Precautions for Implementation
Following the explanations so far is sufficient to implement a working Mod, but there are some precautions to make a user-friendly Mod or due to maginai's constraints.  

## Use a logger instead of console.log for logging
In some examples, `console.log` is used for log output for clarity, but it is not recommended in actual Mod code.  
Instead, obtain a `Logger` object and perform log output as shown in the example below.  

[https://spoonail-iroiro.github.io/maginai/classes/Maginai.html#logging](https://spoonail-iroiro.github.io/maginai/classes/Maginai.html#logging)

Using a logger makes it clear which Mod the log is from, and users can control the display level, etc.  

![logger-log](docassets/log-with-logger.png)

## Execute `init.js` code in an IIFE
As mentioned in the beginner's section, make sure to execute `init.js` in an IIFE.  
If written globally without an IIFE, for example, if multiple Mods using the same `const hoge` variable are loaded, the Mods loaded later will fail.  

\* `const` and `let` create block scopes, but since there is no guarantee that `var` will not slip in and module-based scope restriction cannot be used, IIFE is recommended.  

## The `tGameMain` class cannot be used as is
The `tGameMain` class is a dummy to delay game initialization and cannot be used directly.  
If you want to access it through method patching or other means, please do so as described below.  
https://spoonail-iroiro.github.io/maginai/classes/Maginai.html#origtGameMain

## Give Mods unique names that don't overlap
Since Mods are installed by folders, you cannot put different Mods with the same Mod name.  
Also, for Mods that load external files, there is currently no feature to abstract the reference destination, so changing the Mod folder name will cause it to stop working.  
(This may be improved in updates)  
Try to give names that are unlikely to conflict with others.  

# Q&A

## Q. Can't I implement using ESModule?
Creator of Another World, which runs on local html+javascript, cannot load ESModules as is due to CORS restrictions.  
Specifically, loading with `<script type="module">` or dynamic `import` in scripts will result in an error.  

If you want to implement using ESModule, you need to build it into a script (`iife` library) using Rollup (which uses vite) or similar.  
Please refer to the following for an example configuration.  
https://github.com/Spoonail-Iroiro/maginai-buildsample
\* If you copy and create your own Mod, replace `buildsample` in various settings with your Mod name  

## Q. Aren't there type definitions for `maginai`?
```sh
npm install maginai
```

It can be installed with the above command.  
(Currently, it only contains types, so you need to mock it for testing, etc.)  

### When referencing as a global variable
In a TypeScript project with `moduleResolution` set to `Node16` or `Bundler`, you can define the type of the global variable maginai by including a type definition file with the following content in your project.
```ts
declare var maginai: import('maginai/maginai.js').Maginai;
```

In projects with `moduleResolution` other than the above, you can also define types in a similar way as follows, but it is not recommended as the internal module structure may change in the future.

```ts
declare var maginai: import('maginai/lib/modules/maginai.js').Maginai;
```

### When referencing with import
In a build/bundle configuration, you can reference the maginai module with import in the source as follows, and configure it to reference it as a global variable instead of including it in the bundle after building.
```js
import maginai from 'maginai';

maginai.events.tWgmLoaded.addHandler(...
```

For the configuration to reference it as a global variable instead of including it in the bundle after building, please refer to the following example where it is configured that way in vite.  
https://github.com/Spoonail-Iroiro/maginai-buildsample

### Handler types for `maginai.events` are not displayed
Currently in preparation.  
The types of arguments to handlers are described in JSDoc, so please refer to them.  

### Types for `maginai.logging` are not displayed
Currently in preparation.  
Basically, just obtain the logger with `getLogger` and use `logger.info`, etc. for logging as instructed.

## Q. Aren't there types for `union.js`?
It can be installed as the package `maginai-game-types`.  
For details, please refer to the repository readme below.  
https://github.com/Spoonail-Iroiro/maginai-game-types

## Q. Can't I use async functions?
You can use them.  
Since async functions return a `Promise`, register it as a Postprocess (the registration method is explained above).  

\* Since it is not a module, top-level await in `init.js` will result in an error.  
