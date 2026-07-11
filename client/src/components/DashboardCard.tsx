interface Props{

title:string;
value:string;
icon:string;

}


export default function DashboardCard({

title,
value,
icon

}:Props){


return (

<div className="
bg-white
shadow
rounded-xl
p-5
flex
justify-between
">


<div>

<p className="text-gray-500">

{title}

</p>


<h2 className="
text-2xl
font-bold
">

{value}

</h2>


</div>



<div className="
text-3xl
">

{icon}

</div>


</div>

)


}