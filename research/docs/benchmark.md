# Benchmark

**The dimension: trust without leaving the place of reading.** Can a person tell how far a number can be trusted, right where they read it, without going anywhere to find out.

Chosen on 2026-08-11 over two alternatives: speed from doubt to answer, and legibility of provenance for a non-specialist. Both of those are already served reasonably well by competitors (dbt runs four health states, Sifflet writes an AI root cause analysis), while this one is the coridor that step 3 found open: in every competitor product provenance is a destination you have to decide to visit.

The products below are **not** the aspirational competitors from step 3. Those are leaders of our category. These come from other categories entirely, chosen because this dimension is the core of what they do.

All five were opened in the browser on 2026-08-11. Narrow-width results are measured, not estimated: the viewport was set to 375 px so that `document.documentElement.clientWidth` reads exactly 360, and overflow was read as `scrollWidth > clientWidth`.

## Criteria, scale 1 to 5

| # | Criterion | 1 means | 5 means |
| --- | --- | --- | --- |
| 1 | **Freshness adjacency** | the age of the value lives on another page | the age sits on the same line as the value |
| 2 | **State vocabulary** | one red alarm for every kind of trouble | several named states with distinct treatment |
| 3 | **Provenance in one action** | the source is unreachable from here | the source opens in one action without losing the number |
| 4 | **Uncertainty made explicit** | uncertainty is never quantified | the degree is stated in the value's own terms |
| 5 | **Attribution on the claim** | nobody and nothing is named | who asserted it and when, visible without hunting |
| 6 | **Legibility for a layperson** | needs domain knowledge to decode | a first-time reader gets it |
| 7 | **Survives 360** | trust signal breaks or overflows | intact at a measured 360 px |
| 8 | **No false calm** | a stale value looks exactly like a fresh one | the system says plainly when it does not know |

## The five, scored

| Criterion | Wikipedia | Yahoo Finance | GitHub Status | FlightAware | NWS forecast |
| --- | --- | --- | --- | --- | --- |
| 1 Freshness adjacency | 2 | 5 | 5 | 5 | 2 |
| 2 State vocabulary | 4 | 3 | 5 | 4 | 3 |
| 3 Provenance in one action | 5 | 2 | 4 | 3 | 3 |
| 4 Uncertainty explicit | 3 | 3 | 4 | 4 | 5 |
| 5 Attribution on the claim | 2 | 3 | 3 | 2 | 3 |
| 6 Layperson legibility | 4 | 4 | 5 | 5 | 4 |
| 7 Survives 360 (measured) | 5 | 2 | 5 | 5 | 5 |
| 8 No false calm | 5 | 4 | 5 | 4 | 3 |
| **Total** | **30** | **26** | **36** | **32** | **28** |

### Wikipedia, article "Data quality" (`en.wikipedia.org/wiki/Data_quality`; screen: `research/screens/bench-wikipedia-citations.png`)

Evidence sits on the claim itself: a superscript number next to a sentence opens the source without leaving the page, and where evidence is missing the text carries `[citation needed]` in the same position. Section-level problems get their own banner, quoted here in full: "This section is in list format but may read better as prose. You can help by converting this section, if appropriate. (May 2026)". Freshness is the weak point, and it is instructive: the only date is a footer line, "This page was last edited on 15 July 2026, at 13:50 (UTC)", which tells you nothing about the age of the specific sentence you are reading. Measured at 360: `clientWidth` 360, `scrollWidth` 360, no overflow.

### Yahoo Finance, AAPL quote (`finance.yahoo.com/quote/AAPL/`; screens: `research/screens/bench-yahoo-finance-quote.png`, `bench-yahoo-finance-360.png`)

The canonical case of a number carrying its own age: "313.33 +0.92 (+0.29%) At close: August 7 at 4:00:01 PM EDT", with after hours given its own value and its own timestamp. The failure is placement of the doubt: on the day it was opened the page carried "We are experiencing some temporary issues. The market data on this page is currently delayed." as a strip **above** the quote rather than on it, so a reader who starts at the number never meets the warning. Measured at 360 it is the only one of the five that overflows: `clientWidth` 360, `scrollWidth` 364, horizontal scroll present.

### GitHub Status (`githubstatus.com`; screen: `research/screens/bench-github-status.png`)

The highest score, and the reason is vocabulary rather than visual craft. Five named states, Operational, Degraded Performance, Partial Outage, Major Outage, Maintenance, sit on the same row as the component they describe, with a single summary line at the top, "All Systems Operational". Incidents progress through named stages, Investigating, Monitoring, Update, Resolved, each stamped in UTC, so "we do not know yet" is a first-class published state rather than silence. Reliability is quantified per component over a fixed window: "Uptime over the past 90 days", with values from 99.42% to 100.0%. Measured at 360: no overflow.

### FlightAware, flight UAL1 (`flightaware.com/live/flight/UAL1`; screen: `research/screens/bench-flightaware-live.png`)

Age is expressed in relative time at the top of the page, "Landed 13 minutes ago", followed by what is happening right now, "Taxiing to gate E28", and the gate itself, "Gate G4". The strongest single idea here is that expectation and reality are printed side by side rather than reconciled for you: scheduled departure "Scheduled 10:50PM PDT" against actual, and even distance flown as "Actual: 8,704 mi (Direct: 8,449 mi)". Attribution is the gap: the page never says which feed the position came from or how old that feed is. Measured at 360: no overflow. Note for later: `WebFetch` returned HTTP 403 on this page while the browser rendered it fine, which is exactly why the pipeline puts Playwright first.

### National Weather Service, point forecast (`forecast.weather.gov`; screen: `research/screens/bench-nws-forecast.png`)

The best of the five at stating uncertainty in the value's own terms, inline with the forecast rather than as a separate confidence widget: "A 40 percent chance of showers and thunderstorms, mainly before 11pm. Some of the storms could be severe." Hazards are named in the forecast period they belong to, for example "Severe Thunderstorms" under Tonight. The freshness handling is the counter-example of the set: "Last Update: 2:38 pm EDT Aug 10, 2026" and "Forecast Valid: 6pm EDT Aug 10, 2026-6pm EDT Aug 17, 2026" are parked in an "ABOUT THIS FORECAST" block at the bottom, below the numbers they qualify. Measured at 360: no overflow.

## The pattern across all five

Nobody scores above 3 on criterion 5, attribution on the claim. Every one of these products tells you *how old* a value is, several tell you *how uncertain* it is, and not one tells you *who is answerable for it*. That is the same hole found in the competitor set from a completely different direction, which makes it the most defensible thing for Plumb to own.

## Top three mechanisms to take into the MVP

**1. A named state vocabulary instead of one alarm.** From GitHub Status, where five named component states and four named incident stages replace a binary up or down. Apply on the metric card and in every list of metrics: a stale number, a broken source and a changed definition are three different states with three different treatments, never one red badge. The mechanism is ambiguity aversion: people discount an unknown risk far more heavily than a known one, so naming the trouble keeps a number usable even when the news about it is bad.

**2. Evidence on the claim, one action away.** From Wikipedia, where a superscript marker next to a sentence opens its source and never moves you off the page. Apply as a provenance marker on the number and on the definition, opening the source inline rather than routing to a lineage screen. The mechanism is cost of verification: when checking costs one action people check, and the visible availability of the check raises trust even in the majority of cases where nobody uses it.

**3. Expectation and reality side by side, with age in relative time.** From FlightAware, "Landed 13 minutes ago" plus scheduled against actual times printed together. Apply on the freshness line of a number: "as of 14:05, 20 minutes ago, expected hourly". The mechanism is comparison without arithmetic: a reader judges deviation instantly when both figures are present, and a relative age is read faster than a timestamp, which matters most in the five minutes before a meeting.

**One honest note on the three mechanism names.** Ambiguity aversion, cost of verification and comparison without arithmetic are framing borrowed from general behavioural literature, not claims verified against a source opened in this session. What is observed is what the products do, which is screenshotted and cited above. The named mechanism is our explanation of why it works, `[?]` in the same sense any explanation is.

## One mechanism that will not work for us

**Aggregate uptime percentage, as in "99.42% over the past 90 days".** It works for GitHub because a service is either callable or not, and the average of that over time is a real property of the service. A metric is not like that. A single figure of the same shape would read as "this number is 99.4% correct", a claim nobody can defend, and worse, it would let a reader skip the only question that matters at the moment of reading: is this particular number, right now, something I can put in front of my boss. We deliberately do not build a trust score.
