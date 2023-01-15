# MeTV
<img align="right" width="400" src="https://66.media.tumblr.com/debbab62c677fb25c174230b78556afa/tumblr_mjaufwsS5T1rfjowdo1_500.gif">

## Inspiration
Ever had the awkward moment when your ah ma (colloquial term for grandmother) wants to watch meWATCH but you are stucked in school and cannot be tech support? Introducing MeTV, the solution to all your ah ma's watching needs.

## What it does
Most people call this a smart TV, but we call it ah ma's TV. We made the streaming experience seamless for the elderly, akin to making netflix for the elderly. MeTV scrapes meWATCH for all the programmes and episodes and easily sorts it by channels and then by programmes. With an interface needing only the arrow keys of the remote and the ok and back button to operate, MeTV will surely be a delight to all the ah ma's out there wanting to catch up with the latest episodes or rewatch past episodes with a click of a button!

## How we built it
The tech used was react, fastapi, python for the local server while c++ and Tinkercad was used for the Arduino uno.

## Challenges we ran into
You may wonder why are we using a phone as our remote. The answer is that we were met with a lot of challenges using the stock remote given to us. Challenge 1 was to deconflict the codec used due to the same encoding of different buttons, next challenge was to make the said remote anti-ghost using delays and input filtration. However, after fixing our issues, we were met with the greatest issue of them all, the remote refused to work beyond 2m and even when it worked the signal was really weak.

## Accomplishments that we're proud of
We are proud of building a hack that incorporates our solution of a web app and arduino into a platform that taps on the free service of meWATCH to create something that our ah ma would use.

## What we learned
Shawn learnt React - Joel learnt Selenium

## What's next for MeTV
1. Refactoring of the code base
3. Configure a physical remote (not an arduino remote) to work with MeTV
2. User Testing with ah ma
