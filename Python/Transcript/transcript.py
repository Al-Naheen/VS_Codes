from typing import final
from youtube_transcript_api import YouTubeTranscriptApi as yta
import re

vid_id = 'FM6kHcXpw98'

data = yta.get_transcript(vid_id)

transcript = ''
for value in data:
    for key,val in value.items():
        if key == 'text':
            transcript += val

l = transcript.splitlines()
final_tra = " ".join(l)

file = open('trans.txt', 'w')
file.write(final_tra)
file.close()