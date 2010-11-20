// The 'card' layout only shows a single panel at a time.
// The TabPanel is a special kind of card layout, which provides
// a user interface for changing which card is visible.
//
// Open up the Web inspector (webkit) or Firebug (Firefox)
// and try running:
//
//      rootPanel.setActiveItem(1)
//      rootPanel.setActiveItem(2)
//      rootPanel.setActiveItem(0)
//

var rootPanel;

Ext.setup({
    onReady: function() {

        var red = {
            dock: 'top',
            style: "background-color: #B22222; color:white;",
            title: "Red",
            html: "Red"
        };

        var amber = {
            dock: 'top',
            style: "background-color: #FFBF00; color:white;",
            title: "Amber",
            html: "Amber"
        };

        var green = {
            dock: 'top',
            style: "background-color: #3B7E00; color:white;",
            title: "Green",
            html: "Green"
        };

        rootPanel = new Ext.TabPanel({
            fullscreen: true,
            layout: 'card',
            items: [red, amber, green],
            dockedItems: []
        });
    }
});
// The 'card' layout only shows a single panel at a time.
// The TabPanel is a special kind of card layout, which provides
// a user interface for changing which card is visible.
//
// Open up the Web inspector (webkit) or Firebug (Firefox)
// and try running:
//
//      rootPanel.setActiveItem(1)
//      rootPanel.setActiveItem(2)
//      rootPanel.setActiveItem(0)
//

var rootPanel;

Ext.setup({
    onReady: function() {

        var red = {
            dock: 'top',
            style: "background-color: #B22222; color:white;",
            title: "Red",
            html: "Red"
        };

        var amber = {
            dock: 'top',
            style: "background-color: #FFBF00; color:white;",
            title: "Amber",
            html: "Amber"
        };

        var green = {
            dock: 'top',
            style: "background-color: #3B7E00; color:white;",
            title: "Green",
            html: "Green"
        };

        rootPanel = new Ext.TabPanel({
            fullscreen: true,
            layout: 'card',
            items: [red, amber, green],
            dockedItems: []
        });
    }
});
// The 'card' layout only shows a single panel at a time.
// The TabPanel is a special kind of card layout, which provides
// a user interface for changing which card is visible.
//
// Open up the Web inspector (webkit) or Firebug (Firefox)
// and try running:
//
//      rootPanel.setActiveItem(1)
//      rootPanel.setActiveItem(2)
//      rootPanel.setActiveItem(0)
//

var rootPanel;

Ext.setup({
    onReady: function() {

        var red = {
            dock: 'top',
            style: "background-color: #B22222; color:white;",
            title: "Red",
            html: "Red"
        };

        var amber = {
            dock: 'top',
            style: "background-color: #FFBF00; color:white;",
            title: "Amber",
            html: "Amber"
        };

        var green = {
            dock: 'top',
            style: "background-color: #3B7E00; color:white;",
            title: "Green",
            html: "Green"
        };

        rootPanel = new Ext.TabPanel({
            fullscreen: true,
            layout: 'card',
            animation: {type: 'fade', duration: 500},
            items: [red, amber, green],
            dockedItems: []
        });
    }
});
