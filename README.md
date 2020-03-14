# Touken Helper LITE
This extension now supports Google Chrome and Mozilla Firefox. This is the low memory, basic (OLD) touken helper.

The original Helper was made by weibo user moelynn, then translated into English by Oredare, Maitou, Seijuros, and Miiandering.

- Chrome may display a screen on startup regarding the extension - ignore it. The notice is normal behavior. It does this to every unpacked extension, as a safeguard against potentially malicious ones.
- The extension will malfunction for every new sword/kiwame added to the game. Please update the extension accordingly.
# Installation
## Download
1. For Chrome: Download and extract the zip/rar to your hard drive (the zip/rar contains a folder named 'Touken Ranbu Helper')
2. For Firefox: Simply download the zip (do not extract), or instead, downloaded the .xpi to your hard drive

## Load on Chrome
1. Open Google Chrome
2. Open the Chrome menu > More Tools > Extensions to view the extensions page (you can also open it by typing chrome://extensions in the address bar)
3. Check the 'Developer Mode' on top right of the page
4. Click "Load unpacked extension..." button
5. Choose the 'Touken Ranbu Helper' folder you just unzipped before. ''Do not select the folders inside it.''

## Load on Firefox
1. Open Firefox
2. Open Firefox's menu and select "Add-ons" to open the add-ons manager (you can also open it by pressing Ctrl+Shift+A OR typing about:addons in the address bar)
3. Press the Tool button (the gear icon) and navigate to "Install Add-on From File..."
4. Either select the zip folder you download (the one for Firefox) or select the xpi file

## Use
1. Launch the Touken Ranbu web game
2. Open the Developer tools __before the game window loads__
  * (Chrome: Ctrl+Shift+I OR F12 for Windows / Cmd+Opt+I for Mac)
  * (Firefox: Ctrl+Shift+C OR F12 for Windows / Cmd+Option+C for Mac)
3. On the top row of developer tools, you'll see 'THR+' for the Lite version or '~TRH~' for the Full version. Click it.
  * If you do not see 'THR+', press the double caret [>>].
4. There is an option on the row to the far right, where the extension name is, to change the orientation:
  * Chrome: Press the vetical elipsis, under 'Dock Side' select your orientation.
  * Firefox: Press the ellipsis, select your orientation.
5. Use it!


### Check the [Touken-Ranbu Fandom](https://touken-ranbu.fandom.com/wiki/Touken_Ranbu_Helper) for more info.
```
src─┐
    │  manifest.json
    │
    ├─assets
    │  │  bgs.png                     
    │  │  icon.png                    
    │  │  icon_128.png                
    │  │  sakura.png                  
    │  └─sword
    |     sword_id.png          
    ├─devtools
    │  │  devtools.html
    │  │  devtools.js
    │  │
    │  └─panel
    │      │  index.html           
    │      │
    │      ├─app
    │      │      app.js          
    │      │      config.js       
    │      │      data.js         
    │      │      define.js       
    │      │      event.js        
    │      │      inject.js       
    │      │      log.js          
    │      │      parse.js        
    │      │      router.js       
    │      │      store.js        
    │      │      view.js         
    │      │
    │      ├─assets
    │      │      main.css
    ├─popup
    │      container.html
    │      popup.coffee
    │      popup.html
    │      resize.coffee
    └─thirdparty
            aes.js
            FileSaver.js
            jquery.js
            livereload.js
            lodash.js
            pad-nopadding-min.js
            vue.js
```

## License
CC0 1.0 Universal
