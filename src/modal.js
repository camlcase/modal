/**
 * Modal v1.0.0
 * https://github.com/camlcase/modal/
 *
 * NO COPYRIGHTS. NO LICENSES. DO WHAT YOU LIKE.
 *
 * A simple modal overlay written in JavaScript for 
 * modern browsers. The main goal of this script is 
 * to keep it small (< 2kb after compression and 
 * < 0.7kb after compression and gzip), clean and 
 * without third-party library dependencies.
 */
+(function () {
    'use strict';

    /**
     * @constructor
     */
    var Modal = function (target) {
        this.$target = document.querySelector(target);
        this.$dismiss = this.$target.querySelectorAll('[data-dismiss="modal"]');
        this.$backdrop = null;
        this.isVisible = false;
    };

    Modal.prototype.toggle = function () {
        return this[!this.isVisible ? 'show' : 'hide']();
    };

    Modal.prototype.show = function () {
        if (this.isVisible) {
            return;
        }

        var me = this;

        this.isVisible = true;

        // Disable scrolling of content behind the modal
        document.body.classList.toggle('modal-open');

        this.escape();

        // Add close events
        for (var i = 0; i < this.$dismiss.length; i++) {
            this.$dismiss[i].addEventListener('click', this.hide.bind(this));
        }

        this.backdrop(function () {
            me.$target.style.display = 'block';
            me.$target.scrollTop = 0;
            me.$target.setAttribute('aria-hidden', false);
            
            // Modal must be the focused element
            me.$target.focus();
        });
    };

    Modal.prototype.hide = function (e) {
        if (e) {
            e.preventDefault();
        }

        if (!this.isVisible) {
            return;
        }

        var me = this;

        this.isVisible = false;

        // Enable scrolling of content behind the modal
        document.body.classList.toggle('modal-open');

        this.escape();

        // Remove close events
        for (var i = 0; i < this.$dismiss.length; i++) {
            this.$dismiss[i].removeEventListener('click', this.hide.bind(this));
        }

        this.$target.setAttribute('aria-hidden', true);
        this.$target.style.display = 'none';
        this.backdrop();
    };

    Modal.prototype.backdrop = function (callback) {
        if (this.isVisible && !this.$backdrop) {
            // Create backdrop
            this.$backdrop = document.createElement('div');
            this.$backdrop.className = 'modal-backdrop fade';
            document.body.appendChild(this.$backdrop);

            // Backdrop fade in
            this.$backdrop.classList.add('in');
        } else {
            // Remove backdrop
            this.$backdrop.parentNode.removeChild(this.$backdrop);
            this.$backdrop = null;
        }

        if (callback) {
            callback();
        }
    };

    Modal.prototype.keyDown = function (e) {
        this.isVisible && (e.keyCode === 27) && this.hide();
    };

    Modal.prototype.escape = function () {
        this.isVisible ?
            this.$target.addEventListener('keydown', this.keyDown.bind(this)) :
            this.$target.removeEventListener('keydown', this.keyDown.bind(this));
    };

    Modal.init = function () {
        var modal,
            target,
            triggers = document.querySelectorAll('[data-modal]');

        // Attach click event to modal trigger elements
        for (var i = 0; i < triggers.length; i++) {
            triggers[i].addEventListener('click', function (e) {
                target = this.getAttribute('data-modal');
                if (e) { e.preventDefault(); }
                modal = new Modal(target);
                modal.toggle();
            }, false);
        }
    };

    // Self initialization
    document.addEventListener('DOMContentLoaded', function () {
        Modal.init();
    }, false);
})();