import '../assets/css/securitePage.css';
import img01 from "../assets/images/img01.png"
import team from "../assets/images/team.png"
import shield from "../assets/images/shield.png"
import risk from "../assets/images/risk.png"
import riskmanag from "../assets/images/riskmanag.png"

export default function Securite() {
    return (
        <div class="pageContainer">
            <div class="lightHeader">
                <div class="txtAndImgContainer">
                    <div class="headerText">Our clients trust us <br /> to invest in our systematic crypto trading strategies</div>
                    <div class="headerImage">
                        <img class="head_im" src={img01} />
                    </div>
                </div>
                <div class="clipPath1"></div>
            </div>
            <div class="allTextsContainer">
                <div class="elementZone">
                    <img class="rightieImg" src={team} />
                    <div class="leftiesTxt"> <span class="sousTitre"> Security specialist team </span> <br /> <br /> They ensure the security of our systems , our databases and infrastructure.</div>
                </div>
                <div class="elementZone22">
                    <div class="rightiesTxt"> <span class="sousTitre"> Zero Trust security concept </span> <br /> <br /> Centered on the belief that we should not automatically trust anything inside or outside our perimetres and instead must verify anything and everything trying to connect to our systems before granting access.</div>
                    <img class="leftiesImg" src={shield} />
                </div>
                <div class="elementZone">
                    <img class="rightieImg1" src={risk} />
                    <div class="leftiesTxt"> <span class="sousTitre"> Risk management and <br /> compliance </span> <br /> <br /> An entire departement is dedicated to this function and reports directly to the directors.</div>
                </div>
                <div class="elementZone">
                    <div class="rightiesTxt"> <span class="sousTitre"> Systematic checks </span> <br /> <br /> Our security team have the obligation to test our system periodically, ensure the securityof our operations and report to the directors.</div>
                    <img class="leftiesImg" src={riskmanag} />
                </div>
            </div>
            <div class="safetyCommit">
                <div class="title"> OUR SAFETY COMMITMENT </div>

                <div class="darkBlueClip"></div>

            </div>
            <div class="zeroTrust">
                <div class="lightBlueClipSpace">
                    <div class="lightBlueClip"></div>
                    <div class="yellowClip"></div>
                </div>

            </div>
            <div class="systematicChecks"></div>
          
        </div>
    )
}