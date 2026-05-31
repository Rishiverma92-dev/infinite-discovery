export default function DiscoveryPopup({title}){

if(!title) return null

return(

<div className="
fixed
top-8
right-8

border
border-white/15

bg-black/90

px-6
py-4

z-[9999]
">

<div className="
text-xs
tracking-[0.3em]
text-white/50
mb-2
">

NEW ENTRY RECOVERED

</div>

<div className="
text-white
">

{title}

</div>

</div>

)

}