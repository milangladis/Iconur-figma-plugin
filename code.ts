figma.showUI(__html__, { width: 320, height: 620, title: "Iconur by @MilanGladis" });

figma.on('drop', (event: DropEvent) => {
  const { files, node, dropMetadata } = event;

  if (files.length > 0 && files[0].type === `image/svg+xml`) {
    figma.ui.postMessage({ 
      type: 'debug', 
      msg: event
    });
    files[0].getTextAsync().then((iconElement: string) => {
      figma.ui.postMessage({ 
        type: 'metadata', 
        msg: dropMetadata
      });
      // console.log('page');
      const newNode = figma.createNodeFromSvg(iconElement);
      
      const name = dropMetadata.name;
      // console.log(event);
      newNode.x = event.x - dropMetadata.size/2;
      newNode.y = event.y - dropMetadata.size/2;
      newNode.name = name;
      
      node.appendChild(newNode);
      if (node.appendChild) {
        node.appendChild(newNode);
      }
      
      // figma.currentPage.selection = [newNode];
      
    });

    return false;
  }
});

var settingsSize:string;
var settingsStroke:string;
var settingsStrokeWeight:string;
var settingsColor:string;

(async () => {
  try {
    // figma.clientStorage.setAsync('iconurBannerBoolean', true);
    let iconurBannerBoolean = await figma.clientStorage.getAsync('iconurBannerBoolean');
    // console.log('storage: ' + iconurBannerBoolean)
    if (iconurBannerBoolean !== undefined) {
      figma.ui.postMessage({ 
        type: 'banner', 
        status: iconurBannerBoolean 
      });
    } else {
      figma.ui.postMessage({ 
        type: 'banner', 
        status: true
      });
    }
  } catch (err) {
  }
})();

figma.ui.onmessage = msg => {
  // console.log(msg)
  if (msg.type === 'banner') {
    if (msg.status === false) {
      figma.clientStorage.setAsync('iconurBannerBoolean', false);
    }
  }

};