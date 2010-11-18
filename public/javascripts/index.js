Ext.setup({
    onReady: function() {

        var red = {
          dock: 'top',
          style: "background-color: #B22222; color:white;",
          title: "Red",
          html: "Red"
        };

        new Ext.Panel({
            fullscreen: true,
            layout: 'auto',
            items: [red],
            dockedItems: []
        });
    }
});
