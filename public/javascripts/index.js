// Panels can act as components (i.e. content) or as a container for other 
// components. So it is possible to mix and match the layout types.
// Here, a vbox layout contains 3 compenents, each of which is a carousel.

Ext.setup({
    onReady: function() {

        var topChanger = new Ext.Carousel({
            items: [
                {style: "background-color: #D55B5B;"},
                {style: "background-color: #B22222;"},
                {style: "background-color: #7C0505;"}
            ]
        });

        var centerChanger = new Ext.Carousel({
            items: [
                {style: "background-color: #FFDD00;"},
                {style: "background-color: #FFBF00;"},
                {style: "background-color: #FF8F00;"}
            ]
        });

        var bottomChanger = new Ext.Carousel({
            items: [
                {style: "background-color: #7BB300;"},
                {style: "background-color: #3B7E00;"},
                {style: "background-color: #0E3E00;"}
            ]
        });
        
        new Ext.Panel({
            fullscreen: true,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {flex: 1},
            items: [topChanger, centerChanger, bottomChanger]
        });

    }
});