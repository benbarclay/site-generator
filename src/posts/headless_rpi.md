---
title: Headless Raspberry Pi
date: 2015-07-22
---
I have been working on getting my Raspberry Pi up and running again.

In the past I have used it as a local fileserver on my network, a networked Time Machine/Time Capsule volume and bittorrent sync client.

Every time I used it as a local server, it has been as a headless server attached to my router with a network cable and and a USB external hard drive.

The two main problems I have had with this in the past are:

1. The network and USB shares the same bus, leading to very poor performance
2. Whilst running the rPi as a headless server was easy, setting it up to be so was not

Point 1 I can't do anything about :(

As for point 2, this has been somewhat self inflicted as I have used the Noobs bootstrapper for ease of use.

This time though I followed the instructions at [Arch Linux ARM](http://archlinuxarm.org/platforms/armv6/raspberry-pi). This lets me bootstrap the server into a usable networked state from another Linux machine. Sadly this process doesn't work from a OSX machine.

To then provision this raw server I created an ansible repo that has a bootstrap role (to create a user account and enable SSH security) and another playbook to provision services on the rPi once the bootstrap is completed.
