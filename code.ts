figma.showUI(__html__, { width: 320, height: 620, title: "Iconur by @MilanGladis" });

figma.on('drop', (event: DropEvent) => {
  const { files, node, dropMetadata } = event;

  if (files.length > 0 && files[0].type === `image/svg+xml`) {
    files[0].getTextAsync().then((iconElement: string) => {
      let newNode = figma.createNodeFromSvg(iconElement);
      
      const name = dropMetadata.iconName;
      // console.log(name);
      newNode.x = event.x;
      newNode.y = event.y;
      newNode.name = name;
      // node.appendChild(newNode);

      figma.currentPage.selection = [newNode];
    });

    return false;
  }
});

var settingsSize:string;
var settingsStroke:string;
var settingsStrokeWeight:string;
var settingsColor:string;

// (async () => {
//   try {
//     settingsSize = await figma.clientStorage.getAsync('iconurSize');
//     settingsStroke = await figma.clientStorage.getAsync('iconurStroke');
//     settingsStrokeWeight = await figma.clientStorage.getAsync('iconurStrokeWeight');
//     settingsColor = await figma.clientStorage.getAsync('iconurColor');
//     banner = await figma.clientStorage.getAsync('iconurColor');

//     if (settingsSize && settingsStroke && settingsStrokeWeight && settingsColor) {
//       figma.ui.postMessage({
// 				'type': 'settings',
// 				'status': true,
// 				'settingsStroke': settingsStroke,
// 				'settingsSize': settingsSize,
// 				'settingsStrokeWeight': settingsStrokeWeight,
// 				'settingsColor': settingsColor,
// 			});
//     } else {
//       returnEmptyStorage()
//     }
//   } catch (err) {
//     returnEmptyStorage();
//   }
// })();


(async () => {
  try {
    // figma.clientStorage.setAsync('iconurBannerBoolean', true);
    let iconurBannerBoolean = await figma.clientStorage.getAsync('iconurBannerBoolean');
    console.log('storage: ' + iconurBannerBoolean)
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

// function returnEmptyStorage() {
//   figma.ui.postMessage({ 
//     type: 'settings', 
//     status: false 
//   });
// }


figma.ui.onmessage = msg => {
  console.log(msg)
  if (msg.type === 'banner') {
    if (msg.status === false) {
      figma.clientStorage.setAsync('iconurBannerBoolean', false);
    }
  }

};