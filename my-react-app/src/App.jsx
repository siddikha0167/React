function app(){
const name="Birds";
let num1=32;
let num2=12;
let num =num1+num2;
let age=18;
let userage=20;
const warn=()=>{
  alert("Warning")
};
 return (
    <div>
    {
      (userage>age)?<p style={{color:"green"}}>User logged IN</p>:
      <p style={{color:"red"}}>Invalid user</p>
    }
    <h1 style={{color:"blue"}}>Page for {name}</h1>
    <div style={{display:"flex"}}>
    <img style={{width:200, height:400}}
    src="https://i.pinimg.com/736x/46/ad/37/46ad37b4ef8971da79c0ce547d79d430.jpg" alt="Birds" />
    <p className="Avian">Birds are a group of warm-blooded vertebrate animals constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart,
       and a strong yet lightweight skeleton.Birds live worldwide and range in size from the <b><u>{num}</u></b> (2.2 in) bee hummingbird to the 2.8 m (9 ft 2 in) common ostrich. There are over 11,000 living species and they are split into 44 orders.
        More than half are passerine or "perching" birds. Birds have wings whose development varies according to species; the only known groups without wings are the extinct moa and elephant birds. Wings, which are modified forelimbs, 
        gave birds the ability to fly, although further evolution has led to the loss of flight in some birds, including ratites, penguins, and diverse endemic island species. The digestive and respiratory systems of birds are also uniquely adapted for flight. 
        Some bird species of aquatic environments,
        particularly seabirds and some waterbirds, have further evolved for swimming. The study of birds is called ornithology.</p>
    </div>
    <button onDoubleClick={warn} >Danger</button>
    </div>
  );
}
export default app;