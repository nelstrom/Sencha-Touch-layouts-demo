// The 'card' layout only shows a single panel at a time.
// The Carousel is a special kind of card layout, which provides
// a user interface for changing which card is visible.
//
// Open up the Web inspector (webkit) or Firebug (Firefox)
// and try running:
//
//      rootPanel.setCard(1)
//      rootPanel.setCard(2)
//      rootPanel.setCard(0)
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

        rootPanel = new Ext.Carousel({
            fullscreen: true,
            layout: 'card',
            items: [red, amber, green],
            dockedItems: []
        });
    }
});
