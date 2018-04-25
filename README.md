# Publishing calendar

forked from https://github.com/intljusticemission/react-big-calendar

## Use and Setup

`npm install publishing-calendar --save`

Include `publishing-calendar/lib/css/react-big-calendar.css` for styles, and make sure your calendar's container
element has a height, or the calendar won't be visible.

 **TBD:** new UI

## Run examples locally

```
$ git clone git@github.com:BrandEmbassy/publishing-calendar.git
$ cd publishing-calendar
$ npm install
$ npm run examples
```

* Open [localhost:3000/examples/index.html](http://localhost:3000/examples/index.html).

### Localization and Date Formatting

`react-big-calendar` includes two options for handling the date formatting and culture localization, depending
on your preference of DateTime libraries. You can use either the [Moment.js](http://momentjs.com/) or [Globalize.js](https://github.com/jquery/globalize) localizers.

Regardless of your choice, you **must** choose a localizer to use this library:

#### Moment.js

```js
import BigCalendar from 'publishing-calendar'
import moment from 'moment'

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))
```

#### Globalize.js v0.1.1

```js
import BigCalendar from 'publishing-calendar'
import globalize from 'globalize'

BigCalendar.setLocalizer(BigCalendar.globalizeLocalizer(globalize))
```
