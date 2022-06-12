import '../assets/css/Technologies.css'
import image1 from '../assets/images/TechnologieBg.gif'
import 'font-awesome/css/font-awesome.min.css';
import icone1 from '../assets/images/icone1.png'
import icone2 from '../assets/images/icone3.png'
import icone3 from '../assets/images/icone2.png'
function Technologies() {
  return (
            <div className="BgContainer"  style={{
              backgroundImage: 'url('+image1+')',
              backgroundSize: "cover",
              height: "100vh",
              color: "#f5f5f5" ,
              backgroundAttachment:"fixed" ,
              backgroundPosition: "center" ,
            }}>
                <br />
                <div className="row justify-content-center div-Style">
                    <div className="col-lg-7 col-md-12  ">
                        <div className="section-title text-center">
                            <div className="techno-title">
                            <h1>Our technologies</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row container-technologies " >
                    <div className='technologie-card-container'>
                        <div className='card-circle-container'>
                            <div className='card-circle blue'><img src={icone3}/></div>
                        </div>
                        <div className='technologie-card-text-container'>
                            <h2>Machine Learning</h2>
                            <p>First class machine learning researchers</p>
                        </div>
                    </div>
                    <div className='technologie-card-container blue'>
                        <div className='card-circle-container'>
                            <div className='card-circle'><img src={icone1}/></div>
                        </div>
                        <div className='technologie-card-text-container'>
                            <h1>Big Data</h1>
                            <p>Big Data expertise</p>
                        </div>
                    </div>
                    <div className='technologie-card-container'>
                        <div className='card-circle-container'>
                            <div className='card-circle blue'><img src={icone2}/></div>
                        </div>
                        <div className='technologie-card-text-container'>
                            <h1>Blockchain</h1>
                            <p>Blockchain driven technology</p>
                        </div>
                    </div>
                </div>
            </div>

  );
}

export default Technologies;