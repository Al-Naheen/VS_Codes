import React from 'react';
import Story from './Story/Story';
import './StoryReel.css';


function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image='https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg'
        profileSrc="https://yt3.ggpht.com/ytc/AAUvwnhX-ru36W1YU1VLUksDy7A0iH-p4prcqptZ9QYOUQ=s176-c-k-c0x00ffffff-no-rj-mo"
        title="Al Naheen"
      />
      <Story
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8H4NvOF4aVOhgO7o-Erxdehe8LPEAaOfaQ&usqp=CAU'
        profileSrc="https://yt3.ggpht.com/ytc/AAUvwnj0RZ4V5xQUonkbHHFEMa50ZIcQ5uCz0PEA-VU5naY=s176-c-k-c0x00ffffff-no-rj-mo"
        title="Sonny Sangha"
      />
      <Story
        image='https://i.pinimg.com/originals/a9/d6/af/a9d6af3e3034bb01f1e5956b7155bcae.jpg'
        profileSrc="https://yt3.ggpht.com/ytc/AAUvwni-Wm0ZBDYJYFwySP2esxgc8s9mKiwmI3yJrmjlHQ=s176-c-k-c0x00ffffff-no-rj-mo"
        title="The Net Ninja"
      />
      <Story
        image='https://media.wired.com/photos/5e3213bcb2731f000816e10d/master/w_1600%2Cc_limit/facebook_bookjacket.jpg'
        profileSrc="https://i.dlpng.com/static/png/1298373--mark-zuckerberg-png-380_380_preview.png"
        title="Mark Zuckerberg"
      />
      <Story
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtgLJq0PHH4sE5U6HToPeUkO1YUXnzE9DMQ&usqp=CAU'
        profileSrc="https://render.fineartamerica.com/images/rendered/default/flat/round-beach-towel/images/artworkimages/medium/1/steve-jobs-afterdarkness.jpg?&targetx=0&targety=-131&imagewidth=788&imageheight=1050&modelwidth=788&modelheight=788&backgroundcolor=1A222C&orientation=0"
        title="Steve Jobs"
      />
    </div>
  );
}

export default StoryReel;
