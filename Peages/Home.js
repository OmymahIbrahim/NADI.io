import React from 'react';
import Typewriter from 'typewriter-effect';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faPaperPlane ,faCheck ,faPlane ,faRocket ,faAngleDown ,faAngleUp ,} from '@fortawesome/free-solid-svg-icons';
import { FaTimes , FaPlay  } from 'react-icons/fa';
import Flip from 'react-reveal/Flip';


{/*
const accordion = document.getElementsByClassName('contentBx');


for(let i = 0; i < accordion.length; i++) {
   accordion[i].addEventListener('click' , function(){
     this.classList.toggle('active')
     
   })
   } 

*/}


function Home() {
    return  ( 
        
    
        <div className="mainContent" 
            style={{ 
            marginTop: 140 , 
            letterSpacing: 1 ,
            LineHeight: 26 , 
            
             
            }}>
{/* main text */} 
           <Fade right  cascade>

            <h1
                style={{ 
                fontSize:42 , 
                LineHeight: 160 , 
                marginLeft: 60 ,
                fontFamily: "Gabriola" ,
                color: "#1976d4" ,
                
            }}>  The First Platform Build For 
        <div className="autoInput" >
                <Typewriter   
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                    onInit={(Typewriter) => {
                        Typewriter 
                        .typeString("personal Trainers.")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Nutrition Coachs.")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Coaches.")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Gym Owners.")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Fitness Training.")
                        .start()
                        

                    }}
                    
                /> 
            </div>
            
                  </h1>
         <p  style={{
                fontSize:25 , 
                LineHeight: 100 , 
                marginLeft: 60 ,
                padding: 1 ,
                fontFamily: "Gabriola" ,
                fontWeight: "bold" ,
                color: "#000" ,
          }}> 
            Train Your Client Online and Grow your<br/>
             Business To Massive Earn<span style={{color:"green"}}> $$$ </span>.</p>

               <a href="#" style={{
                   color: '#fff' ,
                   marginTop: 20 ,
                   marginLeft: 80 ,
                   marginRight: 20 ,
                   backgroundColor: "#1976d4" ,
                   display: 'inlineBlock' ,
                   borderRadius: 100 ,
                   border: "7px solid #1976d4" ,
                   padding: "10 30 " ,
                   fontFamily: "Gabriola",
                   fontWeight: "bold",
                   textTransform: "uppercase" ,
                   
                   }}> Start 14-Day FREE TRIAL </a>
               <a href="#" style={{
                   color: '#1976d2' ,
                   borderBottom: "1.8px solid #1976d4" ,
                   borderBottomWidth: "2px" ,
                   padding: "3.7px" ,
                   fontFamily: "Gabriola",
                   fontWeight: "bold" ,
                   textTransform: "uppercase" , 
                   
                   
                   }}><FaPlay size="9"/> Learn More </a> 

                <h1 className="side-b" style={{ 
                       fontWeight: "bold" ,
                       fontFamily: "Gabriola" ,
                       marginTop: 35 ,
                       marginLeft: 60 ,
                       marginRight: 20 ,
                       
                }}
                > No credit card required,Cancel any time. </h1>
                   
                   </Fade>
{ /* img section */ } 
                <div >
                <Bounce top>
            <img className="intro-img" alt="personal trainer illustrations"
                 src="https://d.top4top.io/p_21603x59h1.png"  
            style={{ 
                width: 508 ,
                position: "absolute",
                right: "1%" ,
                top: "14%" ,
                bottom: 0 , 
                
            }} /> 
            
            </Bounce>
{/* Trust us Card */} 
        <Slide top cascade>
            <div style={{
                     backgroundColor: "#e3f2fd" ,
                     marginTop: 120 ,
                     padding: 50 ,
                     display: "flex" ,
                     justifyContent: "center",
                     
                     }} >
                <card >
                    <h1 
                    style={{
                     fontSize: 38 ,
                     fontFamily: "Gabriola" ,
                     fontWeight: "bold" ,
                     marginTop: -30 ,
                     color:"#60768b" ,
                     display: "flex" ,
                     justifyContent: "center" ,
                     
                     }}>
                        Over 20,000 Business Of All Size Trust Us
                    </h1>
                    <div className = "trust-img" 
                    style={{
                        marginLeft: "30px" , 
                        gap: "26px",
                    }}
                    > 
                        <img src="https://e.top4top.io/p_21664gq2f1.png" 
                        style={{
                            height: "100px" ,
                            width: "100px" ,
                        }}
                        />
                        <img src="https://f.top4top.io/p_2166oh5g02.png" 
                         style={{
                            height: "100px" ,
                            width: "100px" ,
                        }}
                        />
                        <img src="https://g.top4top.io/p_2166ufefw3.png" 
                        style={{
                            height: "100px" ,
                            width: "100px" ,
                        }}
                        />
                        <img src="https://h.top4top.io/p_2166z65uc4.png" 
                        style={{
                            height: "100px" ,
                            width: "100px" ,
                        }}
                        />
                        <img src="https://i.top4top.io/p_2166r100a5.png"
                        style={{
                            height: "100px" ,
                            width: "100px" ,
                        }}
                        />
                        <img src="https://j.top4top.io/p_2166it13q6.png" 
                        style={{
                            height: "100px" ,
                            width: "100px" ,
                        }}
                        />
                        <img src="https://l.top4top.io/p_21664tivj7.png" 
                        style={{
                            height: "90px" ,
                            width: "90px" ,
                        }}
                        />
                        <img src="https://a.top4top.io/p_2166x8cxx8.png" 
                        style={{
                            height: "90px" ,
                            width: "90px" ,  
                        }}
                        />
                        
                    </div>
                </card>
            </div>
            </Slide>
       </div>

{/* The Features Cards */}
       <div>
           
       <Zoom left cascade>
           <div>
               <h3 style={{
                   fontFamily: "Gabriola" ,
                   fontSize: "20px" ,
                   fontWeight: "bold" ,
                   marginTop: "50px" ,
                   display:"flex" ,
                   justifyContent: "center" ,
                   color: "gray" ,
               }} > Features </h3>
      <h1 className="featureCards" 
            style={{ 
                marginTop: "45px" ,
                fontSize: "37px" ,
                marginBottom: "80px" ,
                wordBreak:"break-all",
            }} >  
            Your Fitness Business Deserves To Be The Best </h1>
            </div>  
            <div className="AllFeatureCards"> 
              
            <body className="FCard1">
                <embed src= "https://j.top4top.io/p_220685jjb1.png" 
                style={{
                    height: "150px" ,
                    width: "200px" ,
                    
                }}
                />
                <h3 style={{ 
                    fontFamily: "Gabriola" ,
                    textTransform: "uppercase" ,
                    fontSize: "25px" ,
                    fontWeight: "bold" ,
                    textShadow: "20" ,
                    color: "#1976d4" ,
                    

                }}>
                     Client Management </h3>
                <p  style={{
                    fontFamily: "Gabriola" ,
                    fontSize: "19px" ,
                    fontWeight: "bold" ,
                    
                    
                }}>
                     Manage all of your clients<br/> and their workouts in one <br/> place.  </p>
                     </body>


            <body className="FCard2">
                <img src="https://f.top4top.io/p_2206vs9jl1.png" 
                style={{
                    height: "150px" ,
                    width: "200px" ,
                }}
                />
                <h3 style={{ 
                    fontFamily: "Gabriola" ,
                    fontSize: "25px" ,
                    fontWeight: "bold" ,
                    textTransform: "uppercase" ,
                    textShadow: "20" ,
                    color: "#1976d4" ,
                }}>
                     Email Notifications </h3>
                <p  style={{
                    fontFamily: "Gabriola" ,
                    fontSize: "19px" ,
                    fontWeight: "bold" ,
                    
                }}>
                     Automatically notify your<br/> clients  of upcoming workouts<br/> ahead of time.  </p>
                     </body>


            <body className="FCard3">
                <img src="https://e.top4top.io/p_22061ijus1.png" 
                style={{
                    height: "150px" ,
                    width: "200px" ,
                    
                }}
                />
                <h3 style={{ 
                    fontFamily: "Gabriola" ,
                    fontSize: "25px" ,
                    fontWeight: "bold" ,
                    textShadow: "20" ,
                    textTransform: "uppercase" ,
                    color: "#1976d4" ,

                }}>
                     Progress Tracking </h3>
                <p  style={{
                    fontFamily: "Gabriola" ,
                    fontSize: "19px" ,
                    fontWeight: "bold" ,
                    
                    
                }}>
                     Easy to track exercise<br/> 
                       history and metricsand<br/>
                        and visualize progress.  </p>
                     </body>


            <body className="FCard4">
                <img src="https://i.top4top.io/p_2206gxjvl1.png" 
                style={{
                    height: "150px" ,
                    width: "200px" ,
                    marginTop: "50px" ,
                }}
                />
                <h3 style={{ 
                    fontFamily: "Gabriola" ,
                    fontSize: "25px" ,
                    fontWeight: "bold" ,
                    textShadow: "20" ,
                    textTransform: "uppercase" ,
                    color: "#1976d4" ,

                }}>
                     Custom Theming </h3>
                <p  style={{
                    fontFamily: "Gabriola" ,
                    fontSize: "19px" ,
                    fontWeight: "bold" ,
                    
                }}>
                     Customize your account<br/>
                      with  your logo and colors <br/>to match your branding.  </p>
                     </body>

                     <body className="FCard4">
                <img src="https://c.top4top.io/p_2206omqyp1.png" 
                style={{
                    height: "150px" ,
                    width: "200px" ,
                    marginTop: "50px" ,
                }}
                />
                <h3 style={{ 
                    fontFamily: "Gabriola" ,
                    fontSize: "25px" ,
                    fontWeight: "bold" ,
                    textShadow: "20" ,
                    textTransform: "uppercase" ,
                    color: "#1976d4" ,

                }}>
                     Team Accounts </h3>
                <p  style={{
                    fontFamily: "Gabriola" ,
                    fontSize: "19px" ,
                    fontWeight: "bold" ,
                    
                }}>
                     Invite new coaches to your <br/>
                      team and scale your <br/>
                       business to new levels.  </p>
                     </body>

                     <body className="FCard4">
                <img src="https://c.top4top.io/p_2206jzgor1.png" 
                style={{
                    height: "150px" ,
                    width: "200px" ,
                    marginTop: "50px" ,
                }}
                />
                <h3 style={{ 
                    fontFamily: "Gabriola" ,
                    fontSize: "25px" ,
                    fontWeight: "bold" ,
                    textShadow: "20" ,
                    textTransform: "uppercase" ,
                    color: "#1976d4" ,

                }}>
                     Dashboard </h3>
                <p  style={{
                    fontFamily: "Gabriola" ,
                    fontSize: "19px" ,
                    fontWeight: "bold" ,
                    
                }}>
                     Quickly know what your <br/>
                        clients are doing and<br/>
                         what they accomplished .</p>
                     </body>

            </div>
            </Zoom>
{/* The Price Cards */}
<head>
    {/*<meta charset="UTF-8"/>    
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
    awesome.min.css" rel="stylesheet" integrity="sha384-
    wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" 
            crossorigin="anonymous"/> */}
    </head>
    
        <Flip top cascade>
    
                <body className="bodyCardContainer" >
                <h3 style={{
                   fontFamily: "Gabriola" ,
                   fontSize: "20px" ,
                   fontWeight: "bold" ,
                   marginTop: "35px" ,
                   display:"flex" ,
                   justifyContent: "center" ,
                   color: "gray" ,
                   
               }} > Price </h3>

                <h style={{ 
                marginTop: "35px" ,
                fontSize: "37px" ,
                marginBottom: "30px" ,
                wordBreak:"break-all",
                display:"flex" ,
                justifyContent: "center",
                fontFamily: "Gabriola" ,
                color:"#e91e40",
                wordBreak:"normal" ,
                textTransform: "uppercase" ,
            }} >  
            Invest In Your Personal Training Business </h>

            <p style={{ 
                
                fontSize: "28px" ,
                wordBreak:"break-all",
                display:"flex" ,
                justifyContent: "center",
                textAlign: "center" ,
                fontFamily: "Gabriola" ,
                color:"#000",
                wordBreak:"normal" ,
                
            }} > NADI.io is 100% free for your clients.
            <br/> We will never charge them! </p>

                <div className="containerPrice">
                        <div className="column">
                            <div className="title">
                            <FontAwesomeIcon className="fa" icon={faPaperPlane} /> 
                                <h2>Basic</h2>
                            </div>
                            <div className="price">
                                <h4 style={{
                                    fontSize:30,
                                    fontWeight:"bold",
                                    
                                }}>$<span>25</span>/m </h4>
                            </div>
                            <div className="option">
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheck} />  5 clients</li>
                                    <li><FontAwesomeIcon icon={faCheck} /> 10gp Storage</li>
                                    <li><FontAwesomeIcon icon={faCheck} /> Client Monitoring</li>
                                    <li><FaTimes style={{color: "#f44336",marginBottom:"-5"}}/> Custom Branding</li>
                                    <li><FaTimes style={{color: "#f44336",marginBottom:"-5"}}/> Classes, Bootcamps, Events.</li>
                                    <li><FaTimes style={{color: "#f44336",marginBottom:"-5"}}/> 24 Tech support</li>

                                </ul>
                            </div>
                            <a herf="#">start trial</a>
                        </div>

                        <div className="column">
                            <div className="title">
                            <FontAwesomeIcon className="fa" icon={faPlane} 
                            rotation={270} 
                            transform={{ rotate: 42 }}
                            
                            /> 
                                <h2>Standard</h2>
                            </div>
                            <div className="price">
                                <h4 style={{
                                    fontSize:30,
                                    fontWeight:"bold"
                                }}>$<span style={{color:"#e91e40"}} >50</span>/m </h4>
                            </div>
                            <div className="option">
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheck} />  50 clients</li>
                                    <li><FontAwesomeIcon icon={faCheck} /> 100gp Storage</li>
                                    <li><FontAwesomeIcon icon={faCheck} /> Client Monitoring</li>
                                    <li><FontAwesomeIcon icon={faCheck} /> Custom Branding</li>
                                    <li><FaTimes style={{color: "#f44336",marginBottom:"-5"}} /> Classes, Bootcamps, Events.</li>
                                    <li><FaTimes style={{color: "#f44336",marginBottom:"-5"}} /> 24 Tech support</li>

                                </ul>
                            </div>
                            <a herf="#">start trial</a>
                        </div>

                        <div className="column">
                            <div className="title">
                            <FontAwesomeIcon className="fa" icon={faRocket} /> 
                                <h2>Premium</h2>
                            </div>
                            <div className="price">
                                <h4 style={{
                                    fontSize:30,
                                    fontWeight:"bold"
                                }}>$<span>100</span>/m </h4>
                            </div>
                            <div className="option">
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheck} /> 200 clients</li>
                                    <li><FontAwesomeIcon icon={faCheck} /> Unlimited Storage</li>
                                    <li><FontAwesomeIcon icon={faCheck} /> Client Monitoring</li>
                                    <li><FontAwesomeIcon icon={faCheck} /> Custom Branding</li>
                                    <li><FontAwesomeIcon icon={faCheck} /> Classes, Bootcamps, Events.</li>
                                    <li><FontAwesomeIcon icon={faCheck} /> 24 Tech support</li>

                                </ul>
                            </div>
                            <a herf="#">start trial</a>
                        </div>
                    </div>
                    <div className="price-bar">
            <h1 className="price-bar-title" style={{
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: 'bold' ,
                fontFamily: "Gabriola" ,
                fontSize: 40 ,
                color: "#000" ,
                backgroundColor: "#FFF2F2" ,
                gap: "2%" ,
                paddingBottom: "5%",
                marginTop: "120" ,

            }}> 
            More than 250 clients ?<br/>
             We Have got <span style={{color: "#e91e40"}}>special pricing</span> for you.<br/>
                   Email <a href="mailto:support@hudhudpt.com" style={{
                       textTransform:"lowercase" , 
                       
                   }}>support@NADI.io.com</a> to learn more. </h1>
        </div>
                </body>

                
                
                
            </Flip>
{/* The FAQ Accordion */} 
     {/*    <body className="flip-accordion">
           <div className="accordion">
              <div className="contentBx">
                  <div className="label">List One</div>
                  <div className="content">
                      <p> t is a long established fact that a reader
                           will be distracted by the readable content
                            of a page when looking at its layout. 
                            The point of using Lorem Ipsum is that 
                            it has a more-or-less normal distribution of 
                            letters, as opposed to using 'Content here, 
                            content here', making it look like readable 
                            English. Many desktop publishin </p>
                  </div>
              </div>

              <div className="contentBx">
                  <div className="label">List Two</div>
                  <div className="content">
                      <p> t is a long established fact that a reader
                           will be distracted by the readable content
                            of a page when looking at its layout. 
                            The point of using Lorem Ipsum is that 
                            it has a more-or-less normal distribution of 
                            letters, as opposed to using 'Content here, 
                            content here', making it look like readable 
                            English. Many desktop publishin </p>
                  </div>
              </div>

              <div className="contentBx">
                  <div className="label">List Three</div>
                  <div className="content">
                      <p> t is a long established fact that a reader
                           will be distracted by the readable content
                            of a page when looking at its layout. 
                            The point of using Lorem Ipsum is that 
                            it has a more-or-less normal distribution of 
                            letters, as opposed to using 'Content here, 
                            content here', making it look like readable 
                            English. Many desktop publishin </p>
                  </div>
              </div>

              <div className="contentBx">
                  <div className="label">List Four</div>
                  <div className="content">
                      <p> t is a long established fact that a reader
                           will be distracted by the readable content
                            of a page when looking at its layout. 
                            The point of using Lorem Ipsum is that 
                            it has a more-or-less normal distribution of 
                            letters, as opposed to using 'Content here, 
                            content here', making it look like readable 
                            English. Many desktop publishin </p>
                  </div>
              </div>

           </div>
           <script>
               
           </script>
        </body>  */}  
      
        </div>
        
        <h3 style={{
                   fontFamily: "Gabriola" ,
                   fontSize: "20px" ,
                   fontWeight: "bold" ,
                   marginTop: "35px" ,
                   display:"flex" ,
                   justifyContent: "center" ,
                   color: "gray" ,
                   
               }} > FAQ </h3>

                <h style={{ 
                marginTop: "35px" ,
                fontSize: "37px" ,
                marginBottom: "30px" ,
                wordBreak:"break-all",
                display:"flex" ,
                justifyContent: "center",
                fontFamily: "Gabriola" ,
                color:"#1976d2",
                wordBreak:"normal" ,
                textTransform: "uppercase" ,
                fontWeight: "bold" ,
            }} >  
            Frequently asked question </h>

            <p style={{ 
                
                fontSize: "28px" ,
                wordBreak:"break-all",
                display:"flex" ,
                justifyContent: "center",
                textAlign: "center" ,
                fontFamily: "Gabriola" ,
                color:"#000",
                wordBreak:"normal" ,
                fontWeight: "bold" ,
                marginBottom: "-80px" ,
                
            }} > Something is not clear? You need help? Check our FAQ section</p>

        <div class="container"  >
      <div class="accordion" >
        <div class="accordion-item" id="question1" >
          <a class="accordion-link" href="#question1" style={{backgroundColor: ''}} >
            <div class="flex">
              <h3 style={{
                  fontFamily: "Gabriola" ,
                  fontSize: "25px" ,
                  marginLeft: "15px" ,
                  fontWeight: "bold" ,
              }}>Are There Any Extra Fees ?</h3>
              
            </div>
            <i class="icon ion-md-arrow-forward"><FontAwesomeIcon icon={faAngleDown} size="lg" transform="left-8 up-6" /></i>
            <i class="icon ion-md-arrow-down"><FontAwesomeIcon icon={faAngleUp} size="lg" transform="left-8 up-6" /></i>
          </a>
          <div class="answer">
          <Fade bottom cascade>
            <p style={{
                  fontFamily: "Gabriola" ,
                  fontSize: "22px" ,
                  marginLeft: "8px" ,
                  
              }}> No, what you see is what you get! We only charge extra fees if you act against our Terms and<br/> Conditions or the local legislation.
               You can find the extra fees listed here: https://www.NADI.io/fees</p>
          </Fade>
          </div>
          <hr />
      </div>
        <div class="accordion-item" id="question2">
          <a class="accordion-link" href="#question2">
            <div class="flex">
              <h3 style={{
                  fontFamily: "Gabriola" ,
                  fontSize: "25px" ,
                  marginLeft: "15px" ,
                  fontWeight: "bold" ,
              }}>Is There A Yearly Contract ?</h3>
              
            </div>
            <i class="icon ion-md-arrow-forward"><FontAwesomeIcon icon={faAngleDown} size="lg" transform="left-8 up-6" /></i>
            <i class="icon ion-md-arrow-down"><FontAwesomeIcon icon={faAngleUp} size="lg" transform="left-8 up-6" /></i>
          </a>
          <div class="answer">
          <Fade bottom cascade>
            <p style={{
                  fontFamily: "Gabriola" ,
                  fontSize: "22px" ,
                  marginLeft: "8px" ,
              }}>No, everything is defaulted at month to month. We do offer an annual billing option though if <br/> you
               want to get One month free! Prices above reflect the month to month option.</p>
          </Fade>
          </div>
          <hr />
      </div>
        <div class="accordion-item" id="question3">
          <a class="accordion-link" href="#question3">
            <div class="flex">
              <h3 style={{
                  fontFamily: "Gabriola" ,
                  fontSize: "25px" ,
                  marginLeft: "15px" ,
                  fontWeight: "bold" ,
              }}>What if I have more than <span style={{fontSize: "28px" ,}}>250</span> clients? </h3>
              
            </div>
            <i class="icon ion-md-arrow-forward"><FontAwesomeIcon icon={faAngleDown} size="lg" transform="left-8 up-6" /></i>
            <i class="icon ion-md-arrow-down"><FontAwesomeIcon icon={faAngleUp} size="lg" transform="left-8 up-6" /></i>
          </a>
          <div class="answer">
          <Fade bottom cascade>
            <p style={{
                  fontFamily: "Gabriola" ,
                  fontSize: "22px" ,
                  marginLeft: "8px" ,
              }}>That's awesome! Contact us to discuss custom pricing options.</p>
          </Fade>
          </div>
          <hr />
      </div>
        <div class="accordion-item" id="question4">
          <a class="accordion-link" href="#question4">
            <div>
              <h3 style={{
                  fontFamily: "Gabriola" ,
                  fontSize: "25px" ,
                  marginLeft: "15px" ,
                  fontWeight: "bold" ,
              }}>What does this cost for my clients? </h3>
              
            </div>
            <i class="icon ion-md-arrow-forward"><FontAwesomeIcon icon={faAngleDown} size="lg" transform="left-8 up-6" /></i>
            <i class="icon ion-md-arrow-down"><FontAwesomeIcon icon={faAngleUp} size="lg" transform="left-8 up-6" /></i>
          </a>
          <div class="answer">
          <Fade bottom cascade>
            <p style={{
                  fontFamily: "Gabriola" ,
                  fontSize: "22px" ,
                  marginLeft: "8px" ,
                  
              }}>Nothing! NADI.io is 100% free for your clients. Anything else is just insanity.</p>
          </Fade>
          </div>
          <hr />
      </div>
     </div>
    </div>

        </div>
        
     
    )
}

export default Home ;
