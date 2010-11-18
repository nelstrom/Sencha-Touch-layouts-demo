This Git repository includes all of the source code used in creating a tutorial about [layouts in Sencha Touch][tutorial].

Each of the links below represents a snapshot of the code at a point in the video (timestamps are in brackets). You'll find instructions below on how to check out each snapshot from this git repository.

## Auto

* [auto][01a] (0:56)
* [auto "Lorem ipsum"][01b] (1:09)

## Fit

* [fit with 1 panel][02a] (1:17)
* [fit with 2 panels][02b] (1:30)

## Card

* [card with 3 panels][03] (2:00)

## TabPanel

* [TabPanel with 3 panels][04a] (2:48)
* [TabPanel with fade transition][04b] (3:07)

## Carousel

* [Carousel][05a] (3:37)
* [Carousel `{direction: 'vertical'}`][05b] (4:02)

## Box layouts

* [Vbox][06a] (4:33)
* [Vbox `{align: 'stretch'}`][06b] (4:48)
* [Vbox `{pack: 'center'}`][06c] (5:05)
* [Vbox `{defaults: {flex: 1}}`][06d] (5:49)
* [Hbox `{defaults: {flex: 1}}`][06e] (5:58)

## Mix and match

* [Traffic light carousels][07] (6:48)
* [Exquisite corpse][08a] (7:18)
* [Exquisite corpse with credits][08b] (7:48)
* [Exquisite corpse with docked credits][08c] (8:12)

## Using this repository to follow the screencast

First, you'll have to clone this repository:

    git clone git://github.com/nelstrom/Sencha-Touch-layouts-demo.git

Change into the directory:

    cd Sencha-Touch-layouts-demo

By default, the git clone command will only create the master branch locally. If you want to study the code at each checkpoint, you will have to fetch each of the other branches. You can do so by running the following:

    git checkout -b 00_blank_slate origin/00_blank_slate
    git checkout -b 01a_auto_layout origin/01a_auto_layout
    git checkout -b 01b_auto_layout origin/01b_auto_layout
    git checkout -b 02a_fit_layout origin/02a_fit_layout
    git checkout -b 02b_fit_layout origin/02b_fit_layout
    git checkout -b 03_card_layout origin/03_card_layout
    git checkout -b 04a_tab_panel origin/04a_tab_panel
    git checkout -b 04b_tab_panel origin/04b_tab_panel
    git checkout -b 05a_carousel origin/05a_carousel
    git checkout -b 05b_carousel origin/05b_carousel
    git checkout -b 06a_box_layout origin/06a_box_layout
    git checkout -b 06b_box_layout origin/06b_box_layout
    git checkout -b 06c_box_layout origin/06c_box_layout
    git checkout -b 06d_box_layout origin/06d_box_layout
    git checkout -b 06e_box_layout origin/06e_box_layout
    git checkout -b 07_traffic_light_carousel origin/07_traffic_light_carousel
    git checkout -b 08a_exquisite_corpse origin/08a_exquisite_corpse
    git checkout -b 08b_exquisite_corpse origin/08b_exquisite_corpse
    git checkout -b 08c_exquisite_corpse origin/08c_exquisite_corpse

You can review the list of local branches by running:

    git branches

And you can switch between branches with the checkout command. For example, to check out the `03_generated_golden_spiral` branch, run:

    git co 08c_exquisite_corpse

## Live demo

Here is a live demo of the [Exquisite corpse][corpse] example.

[tutorial]: http://vimeo.com/15888504
[corpse]: http://exquisite-corpse.heroku.com

[00]:  https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/00_blank_slate
[01a]: https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/01a_auto_layout
[01b]: https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/01b_auto_layout
[02a]: https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/02a_fit_layout
[02b]: https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/02b_fit_layout
[03]:  https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/03_card_layout
[04a]: https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/04a_tab_panel
[04b]: https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/04b_tab_panel
[05a]: https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/05a_carousel
[05b]: https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/05b_carousel
[06a]: https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/06a_box_layout
[06b]: https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/06b_box_layout
[06c]: https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/06c_box_layout
[06d]: https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/06d_box_layout
[06e]: https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/06e_box_layout
[07]:  https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/07_traffic_light_carousel
[08a]: https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/08a_exquisite_corpse
[08b]: https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/08b_exquisite_corpse
[08c]: https://github.com/nelstrom/Sencha-Touch-layouts-demo/tree/08c_exquisite_corpse
