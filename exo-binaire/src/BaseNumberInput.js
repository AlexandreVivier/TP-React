function BaseNumberInput(props) {
    const handleChange = (e) => {
      props.onChange(e);
    };
  
    return <input type="text" value={props.value} onChange={handleChange} class="text-center" />;
  }
  
  export default BaseNumberInput;
  