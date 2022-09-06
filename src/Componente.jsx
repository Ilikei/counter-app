
import PropTypes from 'prop-types'


export const firstApp = ({title, subtitle}) =>{
    console.log(props);

if (title) {
    throw new Error ('El title no existe');
}
   return(
    <>
    <h1> {title} </h1>
    <p>{subtitle}</p>
    </>
    )
}
firstApp.PropTypes = {
    title:PropTypes.string.isRequired
}
