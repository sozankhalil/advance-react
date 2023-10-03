function DessertsList(props) {
    // Implement the component here.

    const lowCaloriesdesert =props.data.filter((desert)=> desert.calories <500)
    .sort((a,b)=> {return a.calories - b.calories})
    .map((desert)=>{
        return(<li key={desert.name}>`${desert.name} - ${desert.calories} cal`</li>)
    }) ;
   
    
    return (
    <>
<ul>
{lowCaloriesdesert}

</ul>
    </>
    );
  }
  
  export default DessertsList;
  