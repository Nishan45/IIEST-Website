import React, { Component, createRef, useEffect, useRef } from 'react'
import '../css/navbar.css'


export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
      }
     
    state = {
        clicked: false,
        drop:false,
        drop1:false,
        drop2:false,
        drop3:false,
        drop4:false,
    }
    handleClick = () => {
        if (!this.state.clicked) {
            document.body.style.overflow = "hidden"
        }
        else {
            this.setState({drop:false})
            this.setState({drop1:false})
            this.setState({drop2:false})
            this.setState({drop3:false})
            this.setState({drop4:false})
            document.body.style.overflow = "scroll"
        }
        this.setState({ clicked: !this.state.clicked })
    }
    handleDrop=()=>{
        this.setState({ drop: !this.state.drop })
        this.setState({drop1:false})
        this.setState({drop2:false})
        this.setState({drop3:false})
        this.setState({drop4:false})
    }
    handleDrop1=()=>{
        this.setState({ drop1: !this.state.drop1 })
        this.setState({drop:false})
        this.setState({drop2:false})
        this.setState({drop3:false})
        this.setState({drop4:false})

    }
    handleDrop2=()=>{
        this.setState({ drop2: !this.state.drop2 })
        this.setState({drop1:false})
        this.setState({drop:false})
        this.setState({drop3:false})
        this.setState({drop4:false})
    }
    handleDrop3=()=>{
        this.setState({ drop3: !this.state.drop3 })
        this.setState({drop1:false})
        this.setState({drop2:false})
        this.setState({drop:false})
        this.setState({drop4:false})
    }
    handleDrop4=()=>{
        this.setState({ drop4: !this.state.drop4 })
        this.setState({drop1:false})
        this.setState({drop2:false})
        this.setState({drop3:false})
        this.setState({drop:false})
    }

    componentDidMount(){
        document.addEventListener('mousedown',this.handler);
    }
    handler=(e)=>{
        
        if(this.ref.current && !this.ref.current.contains(e.target)){
            if(this.state.clicked){
                this.handleClick();
            }
        }
    }

    
    render() {
        
        return (
            < >
                <div className='nav'  >

                    <img src='https://tcgtb.builtcon.in/wp-content/uploads/2023/02/tcgtbilogo_img.png' style={{ width: '10vh', height: '10vh',margin:'0',padding:'0' }} />

                    <div id='navbar' ref={this.ref} className={this.state.clicked ? '#navbar active' : '#navbar'}>
                        <div id='cross' onClick={this.handleClick} style={{ marginTop: '2vh', marginLeft: '40%',marginBottom:'2vh', }}>
                            <i className='fas fa-times'></i>
                        </div>
                        <ul>
                            <li >
                                
                                <a href='/' >HOME</a>
                                
                                <i className="fa fa-angle-down" style={{color:'blue'}} onClick={this.handleDrop} ></i>
                                <ul className='drop-down'>
                                    <li>Overview</li>
                                    <li>Mission</li>
                                    <li>Vision</li>
                                </ul>
                                {this.state.drop &&
                                <div className='drop'>
                                    <div className='sub-menu'>
                                        <a href='#'>&bull; Overview</a>
                                        <a href='#'>&bull; Mission</a>
                                        <a href='#'>&bull; Vision</a>
                                        
                                    </div>
                                </div>}
                            
                                

                            </li>
                            <li>
                                <a href='/AboutUs'>ABOUT US</a>
                                <i className="fa fa-angle-down" style={{color:'blue'}} onClick={this.handleDrop1} ></i>

                                <ul className='drop-down'>
                                    <li>Managing Committee</li>
                                    <li>Member</li>
                                    <li>Mentor</li>
                                    <li>Managing Committee</li>
                                    <li>Partners/Collaborators</li>
                                    <li>Policy & Procedures</li>
                                    <li>Facilities</li>
                                    <li>Supports & Survices</li>
                                </ul>
                                {this.state.drop1 &&
                                <div className='drop'>
                                    <div className='sub-menu'>
                                        <a href='#'>&bull; Managing Committee</a>
                                        <a href='#'>&bull; Member</a>
                                        <a href='#'>&bull; Mentor</a>
                                        <a href='#'>&bull; Managing Committee</a>
                                        <a href='#'>&bull; Partners/Collaborators</a>
                                        <a href='#'>&bull; Policy & Procedures</a>
                                        <a href='#'>&bull; Facilities</a>
                                        <a href='#'>&bull; Supports & Survices</a>
                                    </div>
                                </div>
    }
                                
                            </li>
                            <li>
                                <a href='/Ecosystem'>ECOSYSTEM</a>
                                <i className="fa fa-angle-down" style={{color:'blue'}} onClick={this.handleDrop2} ></i>

                                <ul className='drop-down'>
                                    <li>Pre-Incubation</li>
                                    <li>Incubation at TCGTBi</li>
                                    <li>IIC</li>
                                    <li>EDC</li>
                                    <li>IPR Cell</li>
                                    <li>IIPC</li>
                                </ul>
                                {this.state.drop2 &&
                                <div className='drop'>
                                    <div className='sub-menu'>
                                        <a href='#'>&bull; Pre-Incubation</a>
                                        <a href='#'>&bull; Incubation at TCGTBi</a>
                                        <a href='#'>&bull; IIC</a>
                                        <a href='#'>&bull; EDC</a>
                                        <a href='#'>&bull; IPR Cell</a>
                                        <a href='#'>&bull; IIPC</a>
                                        
                                    </div>
                                </div>
    }
                                
                            </li>
                            <li>
                                <a href='Incubation' >INCUBATION</a>
                                <i className="fa fa-angle-down" style={{color:'blue'}} onClick={this.handleDrop3} ></i>

                                <ul className='drop-down'>
                                    <li>Process</li>
                                    <li>Incubation Application</li>
                                    <li>Draft Agreement</li>
                                    <li>Our Incubates</li>
                                </ul>
                                {this.state.drop3 &&
                                <div className='drop'>
                                    <div className='sub-menu'>
                                        <a href='#'>&bull; Process</a>
                                        <a href='#'>&bull; Incubation Application</a>
                                        <a href='#'>&bull; Draft Agreement</a>
                                        <a href='#'>&bull; Our Incubates</a>
                                    </div>
                                </div>
    }
                            </li>
                            <li>
                                <a href='Gallery'>GALLERY</a>
                            </li>
                            <li>
                                <a href='ContactUs' >CONTACT US</a>
                                <i className="fa fa-angle-down" style={{color:'blue'}} onClick={this.handleDrop4} ></i>

                                <ul className='drop-down'>
                                    <li>Contact Details</li>
                                    <li>Incubation Registration</li>
                                    <li>Join TCGTBi Community</li>
                                </ul>
                                {this.state.drop4 &&
                                <div className='drop'>
                                    <div className='sub-menu'>
                                        <a href='#'>&bull; Contact Details</a>
                                        <a href='#'>&bull; Incubation Registration</a>
                                        <a href='#'>&bull; Join TCGTBi Community</a>
                                    </div>
                                </div>
    }
                            </li>
                        </ul>
                    </div>
                    <div id='mobile' onClick={this.handleClick}>
                        <i className= 'fas fa-bars'></i>
                    </div>

                    
                </div>


            </>

        )
        


    }


}
