function Hello(){
    return(
        <h1>Hello </h1>
    );
}
function Galaxy(props){
    return(
        <div style={{
            textAlign:"left"
        }}>
        <h1>Name : {props.name}</h1>
        <h4>Process : {props.process}</h4>
        </div>
    );
}
function Star(){
    return(
        <>
        <Galaxy name="sun" 
        process="Nuclear Fission and Fussion"></Galaxy>

        </>
    );
}
function Summary(props)
{
    return (
        <p style={{textAlign:"justify"}}>
            Results-driven and highly motivated professional 
            seeking a {props.job} position in a leading
            {props.company}. Possess strong knowledge and hands-on
            experience in {props.skill1}, {props.skill2}, and {props.skill3}.
            Adept at problem-solving, teamwork, and delivering
            high-quality technical solutions. Passionate about 
            learning new technologies and contributing to 
            organizational growth through innovation and continuous 
            improvement. 
            Eager to leverage technical expertise and analytical skills 
            to achieve business objectives and drive success in a 
            dynamic corporate environment.
        </p>
    );
}
function Animator (){
    return (
        <Summary
        job="Animator"
        company="Garena"
        skill1="Unreal Engine"
        skill2="Blender"
        skill3="Graphic Design"
        ></Summary>
    );
}
function animal(){
    return(
    <>
    <h1>Animals</h1>
    <h3>wild Animals</h3>
    <div style={{display:"flex",gap:"20px"}}>
         <img style={{width:"500px", height:"200px" ,margin:"30px 0px 0px 0px"}} 
         src="https://th.bing.com/th/id/OIP.FrZAakDbMcEsNcAajyukpQHaEJ?w=295&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg" alt="animal" /> 
         <p>
            Wild animals are undomesticated creatures that live freely in natural habitats, 
            playing vital roles in ecosystems and biodiversity.
        <b>Definition and Characteristics</b>
        Wild animals are species that live independently of humans,
        surviving by finding their own food, shelter, and mates in nature. 
        They include mammals, birds, reptiles, amphibians, fish, and insects, as well as uncultivated plants that grow in the wild 
        Unlike domesticated animals, wild animals are not bred or cared for by humans, 
        although some have adapted to urban environments, such as feral cats, dogs, mice, and rats
    </p>
    </div>
    <Hello></Hello>
    <Star></Star>
    <Animator></Animator>
    </>
        
    );
}
export default animal;