 import React from 'react'

const About = (props) => {
    // const[mystyle,setmyStyle] = useState({
    //     color : "black",
    //     backgroundColor : "white"
    // })
      let mystyle={
          color : props.mode === 'dark'?'white':'#042743',
          backgroundColor : props.mode === 'dark'?'#042743':'white'
      }

  return (
    <div className='container' > 
        <h1 className='my-2' style={{color : props.mode === 'dark'?'#042743':'white'}}>About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
               I'm prepare the Frontend Developer.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                   I'm Learn React with free resources.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong>Browser Copmatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                   After complete this Frontend courses move on Full-Stack Developer.
            </div> 
            </div>
        </div>
        </div>
            </div>
  );
};

export default About;
