import { Link, useLocation } from "react-router-dom";


export default function Sidebar(){

const location = useLocation();


const menu = [

{
name:"Dashboard",
path:"/faculty",
icon:"📊"
},

{
name:"Apply Leave",
path:"/faculty/apply-leave",
icon:"📝"
},

{
name:"Timetable",
path:"/faculty/timetable",
icon:"📅"
},

{
name:"Leave History",
path:"/faculty/history",
icon:"📚"
},

{
name:"Notifications",
path:"/faculty/notifications",
icon:"🔔"
}

];


return (

<div className="
w-64
min-h-screen
bg-blue-600
text-white
p-5
">


<h1 className="
text-2xl
font-bold
mb-8
">

SmartLeave AI

</h1>



<div className="space-y-3">


{
menu.map(item=>(


<Link

key={item.path}

to={item.path}

className={`
block
px-4
py-3
rounded-lg

${
location.pathname===item.path

?
"bg-white text-blue-600"

:

"hover:bg-blue-500"

}

`}

>


{item.icon}

&nbsp;

{item.name}


</Link>


))
}


</div>


</div>


)

}