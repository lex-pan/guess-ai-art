export default function Image(props) {
  return (
        <div className='imageSection'>
            <img className='image' src={require("../" + props.image)} ></img>
        </div>
  )
}