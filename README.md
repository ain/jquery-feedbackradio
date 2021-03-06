# jQuery FeedbackRadio [![Build Status](https://travis-ci.org/ain/jquery-feedbackradio.png?branch=master)](https://travis-ci.org/ain/jquery-feedbackradio) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

jQuery FeedbackRadio plugin turns consecutive radio buttons into rating feedback stars without affecting data that is submitted:

| Before | After |
|:------:|:------:|
|![Original radio inputs](https://github.com/ain/jquery-feedbackradio/raw/master/example/original.png) | ![Interpreted radio inputs](https://github.com/ain/jquery-feedbackradio/raw/master/example/converted.png) |

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/ain/jquery-feedbackradio/master/dist/jquery-feedbackradio.min.js
[max]: https://raw.github.com/ain/jquery-feedbackradio/master/src/jquery-feedbackradio.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="jquery-feedbackradio.min.js"></script>
<script>
jQuery(function($) {
  // Call on the ID of the fieldset radio inputs reside in.
  $('#feedback-fieldset').feedbackradio();
});
</script>
```

## Requirements
- jQuery 1.2.6+

## Documentation
See inline JSDoc comments in [source](https://github.com/ain/jquery-feedbackradio/blob/master/src/jquery-feedbackradio.js).

## Examples
See the [example/](https://github.com/ain/jquery-feedbackradio/tree/master/example) folder.

## Contributing
See [Contributing](https://github.com/ain/jquery-feedbackradio/blob/master/CONTRIBUTING.md).

## Release History
- 2013-10-29  v0.2.0  Optional vertical block layout for feedback stars.
- 2013-10-27  v0.1.0  First production-ready release with basic functionality.
