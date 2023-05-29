export default function Description(props) {
  let animalLocation = props.animalDescription[0];
  let animalCharacteristics = props.animalDescription[1];
  let animalFact = props.animalDescription[2];

    if ((animalCharacteristics === undefined)) {
          return <div>Animal description not found</div>
    }

    return (
        <div className='descriptionSection'>
          <p>Found in:</p>
          <ul className="listOfAnimalCharacteristics">
            {animalLocation.map((value) => (
              <li key={value} className="animalCharacteristics">- {value}</li>
            ))}
          </ul>
          <br></br>
          <p>Characteristics:</p>
          <ul className="listOfAnimalCharacteristics">
            {Object.entries(animalCharacteristics).map(([key, value]) => (
              <li key={key} className="animalCharacteristics">- {key.charAt(0).toUpperCase() + key.slice(1)}: {value}</li>
            ))}
          </ul>
          <br></br>
          <p>Fun fact: {animalFact}</p>
        </div>       
  )
}


  