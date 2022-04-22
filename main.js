import { Temporal } from '@js-temporal/polyfill';

const now = Temporal.Now.plainDateTimeISO();
console.log(now.toString())

const now2 = Temporal.Now.plainDateISO();
console.log(now2.toString())

const now3 = Temporal.Now.plainTimeISO();
console.log(now3.toString())

const now4 = Temporal.Now.zonedDateTimeISO();
console.log(now4.toString())

const now5 = Temporal.Now.instant();
console.log(now5.toString())

// Creating certain dates

const date1 = new Temporal.PlainDate(2022, 5, 1);
console.log(date1.toString())

const date2 = new Temporal.PlainDateTime(2022, 5, 1, 12, 20, 30);
console.log(date2.toString())

const date3 = Temporal.PlainDateTime.from('2022-05-01T13:30:30');
console.log(date3.toString())

const timezoneLA = new Temporal.TimeZone('America/Los_Angeles')
const timezoneTO = new Temporal.TimeZone('America/Toronto')
const date4 = Temporal.ZonedDateTime.from({
  year: 2022,
  month: 5,
  day: 1,
  hour: 12,
  minute: 0,
  timeZone: timezoneLA
});
console.log(date4.toString())

const date5 = timezoneTO.getPlainDateTimeFor(date4)
console.log(date5.toString())

// Addition and Subtraction
const date6 = Temporal.Now.plainDateTimeISO()
const date7 = date6.subtract({ days: 2, hours: 4, minutes: 5 })
console.log(date6.toString())
console.log(date7.toString())

// Duaration
const duration = Temporal.Duration.from({ days: 3, hours: 4})
const date8 = date6.add(duration)
console.log(date8.toString())

// With
const date9 = Temporal.Now.plainDateTimeISO()
const date10 = date9.with({year: 1999})
console.log(date9.toString())
console.log(date10.toString())

// Difference
console.log(date9.until(date10, { largestUnit: 'days'}).days)
console.log(date9.since(date10, { largestUnit: 'minutes'}).minutes)
console.log(date9.equals(date10))

// Rounding
const date11 = Temporal.PlainDateTime.from('2022-04-03T12:27:50');
console.log(date11.toString())

const date12 = date11.round({ smallestUnit: 'hour', roundingMode: 'floor'})

console.log(date12.toString())

// Formatting
const formatted = date11.toLocaleString('en-CA', {
  year: 'numeric',
  month: 'short',
  day: '2-digit'
})

console.log(formatted)

// 03 Apr 22
// 2 days ago, 1 week ago
