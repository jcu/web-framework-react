Generally large type size with a focus on readability.

<!-- Need to clarify exactly when to use which fonts -->

## Fonts

JCU uses Lora for headlines and Source Sans Pro for all the other
applications.

*Lora* is a well-balanced contemporary serif with roots in calligraphy and
moderate contrast. The overall typographic voice of Lora perfectly aligns with
the JCU logo. Whilst Lora is optimised for its appearance on-screen, it works
equally well in print.

*Source Sans Pro*, Adobe's first open source typeface family, was designed by
Paul D. Hunt. It is a sans serif typeface intended to work well in user
interfaces.

### Variants

* **Lora:** bold, bold italic
* **Source Sans Pro:** regular, italic, semibold, bold, bold italic

### Embed font

To embed these fonts into a webpage, copy this code into the `<head>` of your
HTML document.

```html
<link href="https://fonts.googleapis.com/css?family=Lora:700,700i|Source+Sans+Pro:400,400i,600,600i,700,700i" rel="stylesheet">
```

### Specify in CSS

Use the following CSS rules to specify these families:

```scss
font-family: 'Lora', serif;
/* or */
font-family: 'Source Sans Pro', sans-serif;
```

## Text Elements

### Headings

All HTML headings, `<h1>` through `<h6>`, are available with a line-height of `1.25`.

<h1>Main heading <small>(h1, mobile 34px | tablet/desktop 36px)</small></h1>
<h2>Section heading (h2, mobile 30px | tablet/desktop 32px)</h2>
<h3>Sub section heading (h3, mobile 26px | tablet/desktop 28px)</h3>
<h4>Sub section heading (h4, mobile 22px | tablet/desktop 24px)</h4>
<h5>Sub section heading (h5, mobile 20px | tablet/desktop 22px)</h5>
<h6>Sub section heading (h6, mobile 18px | tablet/desktop 20px)</h6>

```html
<h1>Main heading</h1>
<h2>Section heading</h2>
<h3>Sub section heading</h3>
<h4>Sub section heading</h4>
<h5>Sub section heading</h5>
<h6>Sub section heading</h6>
```
