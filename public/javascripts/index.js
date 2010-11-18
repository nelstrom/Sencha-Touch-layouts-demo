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

        new Ext.Panel({
            fullscreen: true,
            layout: 'fit',
            items: [red, amber],  // fit layout can't accomodate >1 item
            dockedItems: []
        });
    }
});
