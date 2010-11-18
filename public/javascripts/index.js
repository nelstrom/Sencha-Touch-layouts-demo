// The 'vbox' and 'hbox' layouts can show multiple panels at once.

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

        rootPanel = new Ext.Panel({
            fullscreen: true,
            layout: 'vbox',
            items: [red, amber, green],
            dockedItems: []
        });
    }
});
