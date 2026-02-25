http://localhost:3000/control-center/restaurants
http://localhost/generate-card/c3b7e4c4-6f0a-4e3e-9c7d-9b8c2e6f4a11
http://localhost:3000/generate-card?id=c3b7e4c4-6f0a-4e3e-9c7d-9b8c2e6f4a11
http://localhost:3000/generate-card?id=91c731ee-fa69-4d6e-8a66-6aa67c979a7a
http://localhost:3000/generate-sample-card?id=91c731ee-fa69-4d6e-8a66-6aa67c979a7a

githi@DESKTOP-R2GJ38N MINGW64 ~/ottawa-menus/app/generate-card/[id] (menu-card)
$ ls -l ~/ottawa-menus/app/generate-card
$ grep -R "No restaurant id provided" -n .
find app -maxdepth 2 -iname "generate*"



Embed codes: 

to google menu link, Google Business Profile → Edit Profile → Menu Link → paste your URL

This gives them:

a clean, mobile‑friendly menu

visible directly from Google Search

visible on Google Maps

no need to update anything manually

no need to maintain a PDF or messy website menu

This is actually better than embedding.

https://ottawa-menus.ca/generate-card?id=91c731ee-fa69-4d6e-8a66-6aa67c979a7a


to squarespace

<iframe 
  src="https://ottawa-menus.ca/generate-card?id=91c731ee-fa69-4d6e-8a66-6aa67c979a7a" 
  width="100%" 
  height="1400" 
  style="border:none;">
</iframe>

If you want, I can walk you through:

deploying to Vercel from Git Bash

generating the final public URL

testing the Mahal Tanjore card

preparing the embed code

preparing the Google Business link

writing the pitch to restaurant owners

Just tell me what you want to do next.

✔ Google Posts (like social posts)
You can upload:

your menu card screenshot

your intro sentence

your signature line

This appears in their “Updates” section.

1. Can your menu cards be posted to Google Business?
YES — absolutely.  
But only in the ways Google officially supports.

Google Business Profile (GBP) allows:

✔ A “Menu Link”
This is the big one.
You can give the restaurant owner:





ALTER TABLE restaurants
ADD COLUMN order_online_url TEXT,
ADD COLUMN uber_eats_url TEXT,
ADD COLUMN door_dash_url TEXT,
ADD COLUMN skip_the_dishes_url TEXT,
ADD COLUMN website_url TEXT;


