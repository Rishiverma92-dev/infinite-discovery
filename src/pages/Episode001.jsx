import { useState } from "react";

import SignalVisualizer from "../components/SignalVisualizer";
import DiscoveryPopup from "../components/DiscoveryPopup";
// import signalChamberImg
// from "../assets/images/archive_one_signal_chamber.png";
// import classroomImg
// from "../assets/images/classroom.png";
import signalChamberVideo
from "../assets/videos/signal_chamber.mp4"
import recoveryClassVideo
from "../assets/videos/recovery_classroom.mp4"
import vaelorClassroomVideo
from "../assets/videos/vael_classroom.mp4"
import signalVideo from "../assets/videos/signal_pattern_zero.mp4"

// import arenVaelImg
// from "../assets/images/aren_vael_reference.png"

// import vaelorClassroomImg
// from "../assets/images/vaelor_classroom.png"

// import studentsImg
// from "../assets/images/five_students.png"

// import markImg
// from "../assets/images/mark_of_return.png"
import arenVaelVideo
from "../assets/videos/aren_vael.mp4"

import hallOfInquiryVideo
from "../assets/videos/hall_of_inquiry.mp4"

import markReturnVideo from "../assets/videos/mark_of_return.mp4"


export default function Episode001(){
const [subtitle,setSubtitle] =useState("")

const [fade,setFade] = useState(false)
const [popup,setPopup]=
useState("");

const [stage,setStage]=
useState(0);

return(

<div className="
min-h-screen
bg-black
text-white
p-10
">

<div className="
flex
justify-between
items-center
border-b
border-white/10
pb-6
mb-10
">

<div>

<h1 className="
text-3xl
tracking-[0.2em]
">
ARCHIVE 001
</h1>

<p className="
text-white/50
mt-2
">
THE SIGNAL
</p>

</div>

<div className="
text-right
text-white/60
">

RECOVERY STATUS
<div className="
w-[180px]
h-[4px]
bg-white/10
mt-2
ml-auto
overflow-hidden
">

<div

className="
h-full
bg-white/70
transition-all
duration-700
"

style={{

width:

stage===0 ? "0%" :

stage===1 ? "12%" :

stage===2 ? "24%" :

stage===3 ? "42%" :

stage===4 ? "58%" :

stage===5 ? "74%" :

stage===6 ? "82%" :

stage===7 ? "91%" :

"100%"

}}

></div>

</div>
<br/>

{
stage===0 && "0%"
}

{
stage===1 && "12%"
}

{
stage===2 && "24%"
}

{
stage===3 && "42%"
}

{
stage===4 && "58%"
}
{
stage===5 && "74%"
}

{
stage===6 && "82%"
}

{
stage===7 && "91%"
}

{
stage===8 && "100%"
}

{
stage===9 && "100%"
}

</div>

</div>

<div className="
border
border-white/10
rounded-xl
min-h-[650px]
flex
items-center
justify-center
text-center
p-8
bg-white/[0.02]
backdrop-blur-sm
">
 {
stage===0 &&

<div>

<h2 className="
text-5xl
font-light
tracking-[0.15em]
mb-8
">
SIGNAL PATTERN ZERO
</h2>
<div className="
text-left
text-xs
tracking-[0.25em]
text-white/50
mb-3
">
ARCHIVE FRAGMENT 001
</div>
<video

autoPlay
playsInline
preload="auto"
controls={false}
style={{
aspectRatio:"16/9",
objectFit:"cover"
}}
onEnded={()=>{

setStage(1)

}}
onLoadedData={()=>{

setSubtitle(
"SIGNAL PATTERN ZERO • SOURCE UNKNOWN"
)

}}

className="
w-full
max-w-[1200px]
mx-auto
block
border
border-white/10
rounded-xl
shadow-2xl
mb-8
"

>

<source
src={signalVideo}
type="video/mp4"
/>

</video>
<div className="
max-w-[900px]
mx-auto
text-center
text-xl
text-white/90
leading-8
min-h-[120px]
mb-8
">
{subtitle}
</div>

<p className="
text-white/60
mb-8
">
A repeating structure
has been detected
outside mapped space.
</p>

</div>

}
{
stage===1 &&

<div>

<h2 className="
text-5xl
font-light
tracking-[0.15em]
mb-6
">
ARCHIVE ONE
</h2>

<video

autoPlay
playsInline
controls={false}
preload="auto"
style={{
aspectRatio:"16/9",
objectFit:"cover"
}}
onEnded={()=>{

setStage(2)

}}
onLoadedData={()=>{

setSubtitle(
"Archive One Signal Chamber • Investigation In Progress"
)

}}

className="
w-full
max-w-[1200px]
mx-auto
block
border
border-white/10
rounded-xl
shadow-2xl
mb-8
"

>

<source
src={signalChamberVideo}
type="video/mp4"
/>

</video>
<div className="
max-w-[900px]
mx-auto
text-center
text-xl
text-white/90
leading-8
min-h-[120px]
mb-8
">
{subtitle}
</div>

<p className="
text-white/60
mb-8
">
Signal Chamber.
Investigation in progress.
</p>

</div>

}

{
stage===2 &&

<div>

<h2 className="
text-5xl
font-light
tracking-[0.15em]
mb-8
">
INVESTIGATION LOG
</h2>

<p className="
text-white/60
mb-8
leading-8
">

The pattern repeats
every eighteen hours.

<br/><br/>

No language found.

<br/><br/>

No origin found.

</p>

<button

onClick={()=>{

setStage(3)

}}

className="
px-6
py-3
border
border-white/20
"

>

RECONSTRUCT ARCHIVE

</button>

</div>

}
{
stage===3 &&

<div>

<h2 className="
text-5xl
font-light
tracking-[0.15em]
mb-6
">
ARCHIVE FRAGMENT 001
</h2>
<div className="
text-left
text-xs
tracking-[0.25em]
text-white/50
mb-3
">
ARCHIVE FRAGMENT 001
</div>
<video

autoPlay
playsInline
preload="auto"
controls={false}
style={{
aspectRatio:"16/9",
objectFit:"cover"
}}
onEnded={()=>{

setStage(4)

}}
onLoadedData={()=>{

setSubtitle(
"Corrupted Educational Recording Recovered"
)

}}

className="
w-full
max-w-[1200px]
mx-auto
block
border
border-white/10
rounded-xl
shadow-2xl
mb-8
"

>

<source
src={recoveryClassVideo}
type="video/mp4"
/>

</video>
<div className="
max-w-[900px]
mx-auto
text-center
text-xl
text-white/90
leading-8
min-h-[120px]
mb-8
">
{subtitle}
</div>

<p className="
text-white/60
mb-8
">
Corrupted educational
recording recovered.
</p>



</div>
}
{
stage===4 &&

<div>

<div className="
text-white/40
tracking-[0.3em]
mb-4
">

MEMORY VIEWER

</div>

<h2 className="
text-5xl
font-light
tracking-[0.15em]
mb-8
">
RECOVERED MEMORY
</h2>

<div className="
border
border-white/10

p-10

mb-8

max-w-[900px]
">

<p className="
text-white/60
leading-8
">

Archive integrity restored.

<br/><br/>

Source:
Educational Memory

<br/><br/>

Estimated Age:
Unknown

<br/><br/>

Participants:
Detected

</p>

</div>

<button

onClick={()=>{

setPopup(
"Educational Memory"
)

setTimeout(()=>{

setPopup("")

},3000)

setStage(5)

}}

className="
px-6
py-3
border
border-white/20
"

>

ENTER MEMORY

</button>

</div>

}
{
stage===5 &&

<div>

<div className="
text-white/40
tracking-[0.3em]
mb-4
">

PRIMARY SPEAKER IDENTIFIED

</div>
<div className="
text-left
text-xs
tracking-[0.25em]
text-white/50
mb-3
">
ARCHIVE FRAGMENT 001
</div>
<video

autoPlay
playsInline
preload="auto"
controls={false}
style={{
aspectRatio:"16/9",
objectFit:"cover"
}}
onEnded={()=>{

setStage(6)

}}
onLoadedData={()=>{

setSubtitle(
"PRIMARY SPEAKER IDENTIFIED • AREN VAEL"
)

}}

className="
w-full
max-w-[1200px]
mx-auto
block
border
border-white/10
rounded-xl
shadow-2xl
mb-8
"

>

<source
src={arenVaelVideo}
type="video/mp4"
/>

</video>
<div className="
max-w-[900px]
mx-auto
text-center
text-xl
text-white/90
leading-8
min-h-[120px]
mb-8
">
{subtitle}
</div>

<h2 className="
text-5xl
font-light
tracking-[0.15em]
mb-4
">

AREN VAEL

</h2>

<p className="
text-white/60
mb-8
">

Teacher of Inquiry

</p>

</div>

}
{
stage===6 &&

<div>

<div className="
text-white/40
tracking-[0.3em]
mb-4
">

MEMORY STABILIZED

</div>
<div className="
text-left
text-xs
tracking-[0.25em]
text-white/50
mb-3
">
ARCHIVE FRAGMENT 001
</div>
<video

autoPlay
playsInline
preload="auto"
controls={false}
style={{
aspectRatio:"16/9",
objectFit:"cover"
}}
onEnded={()=>{

setStage(7)

}}
onLoadedData={()=>{

setSubtitle(
"Educational Memory Successfully Reconstructed"
)

}}

className="
w-full
max-w-[1200px]
mx-auto
block
border
border-white/10
rounded-xl
shadow-2xl
mb-8
"

>

<source
src={hallOfInquiryVideo}
type="video/mp4"
/>

</video>

<h2 className="
text-5xl
font-light
tracking-[0.15em]
mb-4
">

HALL OF INQUIRY

</h2>

<p className="
text-white/60
mb-8
leading-8
">

Educational Memory
Successfully Reconstructed.

<br/><br/>

Participants Detected:
6

</p>



</div>

}
{
stage===7 &&

<div>

<div className="
text-white/40
tracking-[0.3em]
mb-4
">
CLASSROOM RECORDING
</div>

<div className="
text-left
text-xs
tracking-[0.25em]
text-white/50
mb-3
">
ARCHIVE FRAGMENT 001
</div>

<video

autoPlay
playsInline
preload="auto"
controls={false}

style={{
aspectRatio:"16/9",
objectFit:"cover"
}}

onTimeUpdate={(e)=>{

const t = e.target.currentTime

if(t < 3){

setSubtitle(
"Memory: Intelligence is remembering what matters."
)

}

else if(t < 6){

setSubtitle(
"Logic: Intelligence is predicting outcomes."
)

}

else if(t < 9){

setSubtitle(
"Emotion: Intelligence is understanding another mind."
)

}

else if(t < 13){

setSubtitle(
"Adaptation: Intelligence is becoming what survival requires."
)

}

else{

setSubtitle(
"Curiosity: Intelligence is the ability to become something else."
)

}

}}

onEnded={()=>{

setStage(8)

}}

className="
w-full
max-w-[1200px]
mx-auto
block
border
border-white/10
rounded-xl
shadow-2xl
mb-8
"

>

<source
src={vaelorClassroomVideo}
type="video/mp4"
/>

</video>

<h2 className="
text-5xl
font-light
tracking-[0.15em]
mb-4
">
AREN VAEL
</h2>

<div className="
inline-block
px-6
py-3
bg-black/50
border
border-white/10
rounded-lg
text-xl
mb-8
">
"What is intelligence?"
</div>

<div className="
max-w-[900px]
mx-auto
text-center
text-xl
text-white/90
leading-8
min-h-[120px]
mb-8
">
{subtitle}
</div>

</div>

}
{
stage===8 &&

<div>

<div className="
text-white/40
tracking-[0.3em]
mb-4
">

ARCHIVE CORRUPTION DETECTED

</div>
<div className="
text-left
text-xs
tracking-[0.25em]
text-white/50
mb-3
">
ARCHIVE FRAGMENT 001
</div>
<video

autoPlay
playsInline
preload="auto"
controls={false}
style={{
aspectRatio:"16/9",
objectFit:"cover"
}}
onEnded={()=>{

setStage(9)

}}
onTimeUpdate={(e)=>{

const t = e.target.currentTime

if(t < 2){

setSubtitle(
"ARCHIVE CORRUPTION DETECTED"
)

}

else if(t < 4){

setSubtitle(
"RECOVERY PROCESS INTERRUPTED"
)

}

else{

setSubtitle(
"CONNECTION LOST"
)

}

}}

className="
w-full
max-w-[1200px]
mx-auto
block
border
border-white/10
rounded-xl
shadow-2xl
mb-8
"

>

<source
src={markReturnVideo}
type="video/mp4"
/>

</video>
<div className="
max-w-[900px]
mx-auto
text-center
text-xl
text-white/90
leading-8
min-h-[120px]
mb-8
">
{subtitle}
</div>

<h2 className="
text-5xl
font-light
tracking-[0.15em]
mb-6
">

THE MARK OF RETURN

</h2>

<p className="
text-white/60
leading-8
mb-8
">

Final frame recovered.

<br/><br/>

Archive integrity collapsing.

<br/><br/>

Unknown significance.

</p>

</div>

}
{
stage===9 &&

<div>

<div className="
text-white/40
tracking-[0.3em]
mb-4
">

INVESTIGATION COMPLETE

</div>

<h2 className="
text-4xl
mb-8
">

ARCHIVE FRAGMENT 001

STATUS: PARTIAL RECOVERY

</h2>




<div className="
text-white/60
leading-8
mb-10
">

SOURCE:
VAELOR EDUCATIONAL ARCHIVE

<br/><br/>

Primary Speaker:
Aren Vael

<br/><br/>

Archives Found:
2

<br/><br/>

Artifacts Found:
1

<br/><br/>

Questions Recorded:
5

<br/><br/>

NEXT ARCHIVE:
UNLOCKED

</div>

<button

onClick={()=>{

localStorage.setItem(
"episode1_complete",
"true"
)

localStorage.setItem(
"episode2_unlocked",
"true"
)

localStorage.setItem(
"archives_found",
"2"
)

localStorage.setItem(
"artifacts_found",
"1"
)

localStorage.setItem(
"questions_found",
"5"
)

localStorage.setItem(
"return_to_archive",
"true"
)

window.location.reload()

}}

className="
px-6
py-3

border
border-white/20
"

>

RETURN TO ARCHIVE

</button>

</div>

}
</div>

<DiscoveryPopup
title={popup}
/>

</div>

)

}