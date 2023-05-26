export default function Image(props) {
  console.log(props.image);
  return (
        <div className='imageSection'>
            <img className='image' src={require("../" + props.image)} ></img>
        </div>
  )
}