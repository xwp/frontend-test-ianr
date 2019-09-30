## Front-end Challenge

### Comments

#### Methodology

HTML markup and CSS classes are used to describe the content as required by the brief. Modifications for responsive layout (eg media queries or changes to flex ordering) are implemented in the CSS source files.

As opposed to using multiple BEM classes or the Tailwind/Bootstrap style of an excessive amount of class names to allocate modifications. This is done to make the markup more readable and the logic of the components broken done into multiple files in attempts to make the codebase self documenting.

This is also informed from development experiences using ReactJS with Styled Components. However the component is written assuming that it would be included using Blade/PHP into a WordPress theme.

Built desktop first.

I normally use small / medium / large rather than mobile / tablet / desktop

#### Build

Added BrowserSync. Just a very quick and dirty implementation.

Requires two terminal tabs to run both the watch tasks for the assets using the Undercurrent package and the BrowserSync watch tasks to load the browser on either changes to the `index.html` file or the compilation of the CSS/JS build files in the `dist` directory.

```
npm run dev
npm run watch
```

Browser is hardcoded in `package.json` file.

#### Component naming

`l-` used for layout elements, no further styling applied without modifier classes

`c-` component elements with BEM naming conventions

`h-` helper or utility classes, to make the BEM naming a little more readable

`js-` JS interactivity triggers, no styling attached to these

`is-` or `has-` state / modifier classes, interacted with by `js-` classes

#### Wrapper and parent elements

Assumed that the card is iterated out as part of collection or listing of items.
```
<div class="l-container">
  <div class="c-panel">
    <ul class="c-card-list">
      <li class="c-card-list__item">
        <!-- Card component here -->
      </li>
    </ul>
  </div>
</div>
```

#### Third party packages

FontAwesome for the Facebook icon.

Basic CSS reset from [Normalize](https://github.com/).

#### Improvements

Likely a lazy load technique would be used on the full site. Perhaps the avatar image could load using the [lazysizes](https://github.com/aFarkas/lazysizes) package.

Designer would be asked if image dimensions could be even numbers (180px width by 160px height) to allow multiplication / division of images used in `srcset` attribute be whole pixels incase subpixel rounding is an issue.

Technique for image compression / optimisation would be needed. Product owner / account manager would be suggested that client training involve explaining when to use JPG or PNG (as well as dimensions, and whether additional image sizes are created automatically, and whether image optimisation occurs automatically or at all!).

#### Misc

Added the social follow link as a list item as other cards may have more than one social platform to follow.

The Facebook icon added to demonstrate how I would handle BG images/icons. In reality I'd used FontAwesome with a stripped down set of icons to suit

Facebook follow button is just a link to the user's profile or page URL and not using a JS/PHP SDK to auto authorise and follow/like the user or perform other actions with the Graph API. Ensuring the deprecated follow button from Facebook is not used.

Perhaps the WordPress KSES would be used to determine whether singular or plural of 'stories' needed for the case when only 1 new story features.

Would also have a src/dist for images.

Provided image @2x not actually twice as large. Image dimensions mean proportions are slightly out ie 180/159 vs 324/286 - would need confirm this doesn't have any flow on effect.

Use a package to show CSS/JS errors in overlay in browser refer to [Sage](https://github.com/roots/sage/tree/master/resources/assets/build) or [CRA](https://github.com/facebook/create-react-app) webpack configurations.

2 new stories with down chevron implies load in content rather than take user out to a new page with an archive/listing of stories. Two design patterns make sense / common in use therefore familiar to user. Either a dropdown - over the text - clunky; or push text down.

Or is the text the "2 new stories" already in down position as indicated by chevron? Unlikely. Chose most likely - let me know if revisions needed, in real project would've got clarity from PO or designer. Assumed this is the bio page so new stories link out.

Match js-toggle and is-hidden better?
How to deal with is/has when used as helpers in lieu of many BEM - just use h-?

Aware it's not using the XWP styleguide for WP themes

Error was not picked up for missing variable in global and silent failure.

Stripped back the additional common/helper SCSS but only a cursory run through

Add html comments on wrappers

Would prefer to have all the @imports in all the index files listed in main.scss as I have so many tabs in my IDE called index, and means I can quick open main.scss to add new imports

Specified the <img> width and height attributes to simulate requests from SEO "experts" or anyone insisting on hitting 100 on Google PageSpeed

Naming and nesting of classes might change based on the context of fitting the card into the remainder of the site, and whether to abstract some of the elements if they are re-used in other components.

In hinsight would've been waay faster to do this with CRA or at the very least using the webpack / gulp I'm comfortable with that is much better suited to the two screens and how I use the terminal

Made avatar 75x75 rather than 75x74 in Zeplin

I've done no fall back for IE

Height 450px - set in card componentf but maybe this wouldn't be in production?

Chose the SCSS version of FontAwesome as the package version of v5 defaulted to the SVG with JS version and had an visualluy awful JS loading error with a missing icon almost like a FOUC when you're waiting for a webfont to load.

Normally would have watch task on fonts/images to move/optimise src->dist
Looks like this does fonts

Wuld otkmsis FA to only the fonts used and ince via package.json

Didn't check if autoprefixer is running / part of undercurrent - assumed so, if not would use

Container max width 1248 frpm zeplin Desktop

Haven't used a 12 column grid as using Flexbox - would just use floats to fall back for IE if needed, would chat to PO to ensure client expectations

Is there an XWP decree for CSS being grouped or alphabetically sorted? I'd have stylelint do the heavy lifting here anyway.

Explain dropdown ie is it JS or just CSS hover etc

Assumed the 1px grey border around each card is not part of the design as inspection in Zeplin does not provide any border values.

Mobile view didn't put the slight flattening under the photo bottom edge - would query if this is needed or was an oversight.

Better fallback or extends of font-family for guardiansans on FB on mobile vifew

Assumed the mobile view Follow on FB button being same width as Mister Name is coincidence rather that used on all cards.

Would've used FontAwesome Pro (paid) for a lighter weight chevron down for button. Would've extended or created a round icon mixin to enter size


### Requirements

Build a front-end component based on the [designs previewed here](https://scene.zeplin.io/project/59d45ae164ae4f837e3366d5).

### Design assets

The .sketch source is provided inside of the designs folder.
If you don't have the [Sketch application](https://www.sketchapp.com/), request access to the [project on Zeplin](zpl.io/2EmoJ1Y) instead.

### Installation

**The workflow requires Node >=8.11.x**

Install using the following command:

`npm install`

The front-end node workflow for watching for changes and compiling the assets is already setup, and you can use it after installing the npm project with the following command:

`npm run dev`

## [License](LICENSE)
