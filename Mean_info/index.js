function NewApp(){
    return(
      <div className="first">
          <div className="main">
          <div className='div1'> 
           <ul className="menu-ul">
              <li className="li" type="button" >Home</li>
              <li className="li" type="button">Offers</li>
              <li className="li" type="button">WishList</li>
              <li className="li" type="button">Your Orders</li>
          </ul>
          </div>
          <div className="div2">
              <h2>About This page</h2>
              <div className="p1">
              <p>Hello friends this is my page which i created for practise perpers i know you found a lots and lot of spelling mistakes here but it's kind of ok </p>
              </div>
          </div>
          <div className='div3'>
              <div>
                  <h2>What is MERN ?</h2>
              </div>
              <div>
                  <ul>  
                    <li>MeRN is a full stack developement enviroinments which contains the properties that can create a complete web application.
                    </li>
                    <li>
                        These are the list of components we are going to use in order to achive a full stack application developement.
                        </li>
                        <br></br>
                        <ul>
                                 <li>Mongo Db</li>
                                <li>Express js</li>
                                <li>React js</li> 
                                <li>Node js</li>
                               
                        </ul>
                        <br></br>
                    <li>
                            This all combined and make a stack called MERN (M-Mongo Db , E - EXpress JS , R - React JS , N - Node JS)
                    </li>
                    </ul>
                  
              </div>
              <div>
                  <h2>Mongo DB</h2>
              <div>
                  <ul>
                      <li>
                          Mongo Db is a NoSQL data base which allows the users to access the data more flexibely.
                      </li>
                      <li>
                          In SQL data base user needs to give a formatted data , that SQL only accepts the Data which is in correct format.
                      </li>
                      <li>
                          for implement and use the Mongo Db on your laptop or Desktop you need to load MongoDB Application.
                      </li>
                  </ul>
              </div>
              </div>
              <div>
                  <h2>Express Js</h2>
                  <div>
                      <ul>
                          <li>
                              Express Js is a one of the package which present in node package manager <span>(npm)</span> it help us to perform all server operation including connecting the database with your application
                          </li>
                          <li>
                            Express contains some of the few operations likly
                            <ul className="express-properties">
                                <li>Get</li>
                                <li>Put</li>
                                <li>Post</li>
                                <li>Use</li>
                                <li>Update</li>
                                <li>Delete         ...  etc</li>
                            </ul>
                          </li>
                      </ul>
                  </div>
              </div>
              <div>
                  <h2>React JS</h2>
                  <div>
                      <ul>
                          <li>
                          React is the frame work which allow the users to maek it easy to acces the webpage and application.
                          </li>
                          <li>
                          With a help of react we can create a front-end which is accessable to clints.
                          </li>
                      </ul>
                  </div>
              </div>
              <div>
                  <h2>Node JS</h2>
                  <div>
                      <ul>
                          <li>Node is the most important componet to make all things work because node is a power full enviroiment that allow the developers to access it from anywhere</li>
                      </ul>
                  </div>
              </div>
          </div>
            {/* end of the contents line */}
         <div className="foot">
           <p className="copyright">Copyrights@2022</p>
           <span type="mailto" className="foot2">vigneshmgr99@gmail.com</span><span>
               <form className="foot2">
                   <h3 className="foot2">Comment your view</h3>
                   <ul className="foot2">
                       <li className="foot2"><input className="foot2" type="text" placeholder="enter your name"></input></li>
                       <li className="foot2"><input className="foot2"type="text" placeholder="enter your query"></input></li>
                       <li className="foot2"><input className="foot2" type="submit"/></li>
                   </ul>
               </form>
           </span>
          </div>
          </div>
      </div>
    
    )
}

ReactDOM.render(
    <div>
      <NewApp/>
    </div>
,document.getElementById('root'));