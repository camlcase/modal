# Modal #

**A simple modal overlay written in JavaScript for modern browsers. The main goal is to keep it small, clean and without third-party library dependencies.**

=======
**Demos:**

* [Minimalistic](http://goo.gl/cVLIKu "Open the minimalistic demo")
* [Boostraped](http://goo.gl/T3VmSc "Open the boostraped demo")
* [Video](http://goo.gl/p9Js4q "Open the video demo")

Features
--------

* Small: < 2kb after compression. < 0.7kb after compression and gzip.
* No third-party library dependencies.
* Simple: Nothing but a modal.
* Customization: Use your own CSS to customize the look and feel. 
* Easy to use: Just include the script in your page.
* Bootstrap: Use the Bootstrap CSS and HTML markup to get the modal Bootstraped.

Browser Support
---------------

IE10+, Chrome, Firefox, Safari, Opera. Has also been tested on Safari (iOS 7.1), IE10 (Windows Phone 8), Chrome 35 (Android 4.4.4).

License
-------

NO COPYRIGHTS. NO LICENSES. DO WHAT YOU LIKE.

Usage
-----

### Include your custom CSS ###

    <link rel="stylesheet" href="modal.css">

### Include modal.js ###

	<script src="modal.js"></script>

### Example modal markup ###

    <div class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalTitle" aria-describedby="modal-content" aria-hidden="true">
        <div class="modal-dialog">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <div class="modal-content">
                <h3 id="myModalTitle">Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>
    </div>

### Button as trigger ###

The modal is triggered through the markup using the data-modal attribute.

	<button data-modal="#myModal">Open modal</button>

### Data attributes ###

- **data-modal:** Activate the modal using the specified selector.
- **data-dismiss:** Close the modal.

Contact
-------

Please feel free to [contact me](http://martincarlsen.com).
