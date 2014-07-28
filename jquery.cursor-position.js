jQuery.fn.cursorPosition = function(position) {
    return this.each(function() {
        var $this = jQuery(this);
        if ($this.get(0).setSelectionRange) {
            $this.get(0).setSelectionRange(position, position);
        } else if ($this.get(0).createTextRange) {
            var range = $this.get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', position);
            range.moveStart('character', position);
            range.select();
        }
    });
};
