// Panels can act as components (i.e. content) or as a container for other 
// components. So it is possible to mix and match the layout types.
// Here, a vbox layout contains 3 compenents, each of which is a carousel.

Ext.setup({
  onReady: function() {

    var topChanger = new Ext.Carousel({
      items: [
        {cls: "head-1 head"},
        {cls: "head-2 head"},
        {cls: "head-3 head"},
      ]
    });

    var centerChanger = new Ext.Carousel({
      items: [
        {cls: "torso-1 torso"},
        {cls: "torso-2 torso"},
        {cls: "torso-3 torso"},
      ]
    });

    var bottomChanger = new Ext.Carousel({
      items: [
        {cls: "legs-1 legs"},
        {cls: "legs-2 legs"},
        {cls: "legs-3 legs"},
      ]
    });

    var credits = new Ext.Panel({
      dock: 'bottom',
      html: 'Illustrations by <a href="http://www.veryworrying.com/">Laurie Pink</a>'
    });

    new Ext.Panel({
      fullscreen: true,
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      defaults: {flex: 1},
      items: [topChanger, centerChanger, bottomChanger],
      dockedItems: [credits]
    });

  }
});