"use client"
import React, { useEffect,useState } from 'react';

import Thead from '../tradeassess/thead';
import PrintingTableRow from './printingTable';
import PrintingRow from './printingRow';
import TotalRow from './totalRow';
import Validate from './validate';
import { useRouter } from 'next/navigation'; // corrected import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ttitle from './ttitle';
import Header from './header';

export default function Home() {
  const [sums, setSums] = useState([0, 0, 0, 0, 0]);
  const router = useRouter();

  // useEffect(() => {
  //     printValues();
  // }, [sums]);

  const printValues = () => {
      let grand1 = 0;
      let grand2 = 0;

      for (let i = 1; i <= 4; i++) {
          const value = parseInt(sums[i], 10);

          if (i % 2 === 0) {
              grand2 += value;
          } else {
              grand1 += value;
          }
      }

      const gp = ((grand1 / 66) * 100).toFixed(2);
      const gp1 = ((grand2 / 134) * 100).toFixed(2);

      setGrand1(grand1);
      setGrand2(grand2);
      setGp(gp);
      setGp1(gp1);
      const averagePercentage = (parseFloat(gp) + parseFloat(gp1)) / 2;

      if (averagePercentage < 30) {
        toast.error('Need exclusive training', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 1,
            theme: "colored",
            transition: "bounce",
        });
    } 
    
    else if(averagePercentage<60){
      toast.warn('need concurrent training', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 1,
        theme: "colored",
        transition: "bounce",

    })}
    else if(averagePercentage<80){
      toast.info('concurrent training along with other training', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 1,
        theme: "colored",
        transition: "bounce",

    })}
    else {
      toast.success('Promoted for skill training', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 1,
        theme: "colored",
        transition: "bounce",
    });
        // Do something if condition is not met
    }
  };

  const [grand1, setGrand1] = useState(0);
  const [grand2, setGrand2] = useState(0);
  const [gp, setGp] = useState(0);
  const [gp1, setGp1] = useState(0);

    return (

            <div>
              <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum scale=1,user-scalable=yes" />
              <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
              <style dangerouslySetInnerHTML={{__html: "          \nbody{\n    margin: 0;\n    padding: 0;   \n    width: 100%;\n    font-family: Arial, sans-serif;\n    background: #FFF3E6 ; \n    font-weight: bolder;\n}\n \n    \n .main{\n    font-size : 21px;\n    padding-top: 60px;\n    font-feature-settings : 'lnum' 1;\n     font-family:sans-serif;\n    color : #2F2E2E;\n        \n    }\n\n h1{\n    text-align: center;\n    font-size: 20px;\n    font-weight: bolder;\n    color: black;\n    background-color: transparent;\n    margin-bottom: 50px;\n}\n \n \n \n \nbody{\n    position: absolute;\n\tfont-family: 'Montserrat', sans-serif;\n\tline-height: 1.6;\n\tmargin: 0;\n\tmin-height: 100vh;\n}\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n\nh2,\nh3,\na {\n\tcolor: #34495e;\n}\n\na {\n\ttext-decoration: none;\n}\n\nul li a .icon\n{\n    width: 40px;\n    height: 40px;\n    text-align: center;\n    overflow: hidden;\n    margin: 0 auto 10px;\n}\n    \nul li a .icon .fa\n{\n    width: 100%;\n    height: 100%;\n    line-height: 40px;\n    font-size: 34px;\n     \n    transition: 0.5s;\n    color: #000;\n    top: 30px;\n}\n\n\nul li a .icon .fa:last-child{\n    color:#e91e63;\n}\n\nul li a:hover .icon .fa {\n    transform: translateY(-100%);\n    \n}\n\n.logo {\n\tmargin: 0;\n\tfont-size: 1.45em;\n}\n\n.main-nav {\n\tmargin-top: 5px;\n\n}\n.logo a,\n.main-nav a {\n\tpadding: 10px 15px;\n\ttext-transform: uppercase;\n\ttext-align: center;\n\tdisplay: block;\n}\n\n\n\n.header {\n\tpadding-top: .5em;\n\tpadding-bottom: .5em;\n\tborder: 1px solid #FFF;\n\tbackground-color: #fff;\n\t-webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\n\t-moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\n\tbox-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\n\t-webkit-border-radius: 5px;\n\t-moz-border-radius: 5px;\n\tborder-radius: 5px;\n}\n\n\n/* ================================= \n  Media Queries\n==================================== */\n\n\n\n\n@media (min-width: 769px) {\n\t.header,\n\t.main-nav {\n\t\tdisplay: flex;\n\t}\n\t.header {\n\t\tflex-direction: column;\n\t\talign-items: center;\n    \t.header{\n\t\twidth: 80%;\n\t\tmargin: 0 auto;\n\t\tmax-width: 1150px;\n\t}\n\t}\n\n}\n\n@media (min-width: 1025px) {\n\t.header {\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t}\n\n}\n\n  .logo img {\n\twidth: 200px;\n    height: 80px;\n \n}\n    \n    \nul li a .name\n{\n    position: relative;\n    height: 20px;\n    width: 100%;\n    display: block;\n     \n} \n\nul li a .name span\n{\n  display: block;\n    position: relative;\n    color:  #000;\n    font-size: 18px;\n    line-height: 20px;\n    transition: 0.5s;\n    \n}\n\nul li a .name span:before\n{\n    content: attr(data-text);\n    position: absolute;\n    top: -100%;\n    left: 0%;\n    width: 100%;\n    height: 100%;\n    color: #e91e63;\n    \n}\n\nul li a:hover .name span\n{   \n     background-color: white;\n     color: #e91e63;\n     transform: translateY(5px);\n}\n \nnav {\n  position: relative;\n  display: block;\n  background-color: #FFF;\n  padding: 10px;\n  border-radius: 40px;\n  transform: scale(1.8);\n  overflow: hidden;\n}\n\nnav a {\n  position: relative;\n  text-decoration: none;\n  color: #53588b;\n  font-family:inherit;\n  font-size: 15px;\n  line-height: 1;\n  text-align: center;\n  display: inline-block;\n  width: 65px;\n  padding: 5px;\n  /* box-sizing: border-box; */\n  z-index: 2;\n}\nnav b {\n    font-size: 10px;\n    display: block;\n    left: 23%;\n    }\nnav a b {\n  position: relative;\n  top: 40px;\n  transition: 0.3s ease top;\n}\n\nnav a i {\n  position: relative;\n  left: 5%;\n    margin-top: 10px;\n  transition: 0.3s ease left;\n}\n\nnav span {\n  position: fixed;\n  width: 100px;\n  background-color: \t#FFFAFA;\n  top: 10px;\n  margin-top: 3px;\n  bottom: 10px;\n  left: 400px;\n  border-radius: 100px;\n  z-index: 1;\n  transition: 0.3s ease left;\n}\n\nnav a:hover b {\n  top: 0;\n}\n\nnav a:hover i {\n  left: 25%;\n}\n\nnav a:nth-child(1):hover ~ span {\n  left: 400px;\n}\n\nnav a:nth-child(2):hover ~ span {\n  left: 505px;\n}\n \nnav a:nth-child(3):hover ~ span {\n  left: 610px;\n}\n \nnav a:nth-child(4):hover ~ span {\n  left: 710px;\n}\n\nnav a:nth-child(5):hover ~ span {\n  left: 816px;\n}\n  \nnav a:nth-child(6):hover ~ span {\n  left: 921px;\n}\n  \n/*\n.sublimation{\n    width: 1100px;\n    max-width: 2000px;\n    font-size: 1.0em;  \n    margin: auto;    \n    background-color:#FFFFF0;  \n    border-radius: 5px;\n    margin-bottom: 50px;\n    -webkit-filter: drop-shadow(1px 2px 5px rgba(0,0,0,.3));\n    filter: drop-shadow(1px 2px 5px rgba(0,0,0,.3)); \n    box-shadow: \n    0 2px 2px rgba(243,49,128,.5),\n    0 0px 5px rgba(243,49,128,.15),\n    0 0px 4px rgba(0,0,0,.35),\n    0 5px 20px rgba(243,49,128,.25),\n    0 5px 15px rgba(0,102,255,1),\n    inset 0 0 15px rgba(255,255,255,.05);\n    width: calc(60% - -420px);\n    }*/\n    \n \ntable {\n  \n  width: 1400px;\n  max-width: 2000px;  \n  border-collapse: collapse;\n  border-radius: 2em;\n  overflow: hidden;\n  background-color:#FFF; \n  margin-bottom: 50px;\n  font-size: 1.0em;  \n  -webkit-filter: drop-shadow(1px 2px 5px rgba(0,0,0,.3));\n  filter: drop-shadow(1px 2px 5px rgba(0,0,0,.3)); \n  width: calc(60%-420px);\n}\n    \ntable, tr, td,th {\n    border: none;\n}\ntd {\n      \n     padding-left: 10px;\n    padding-right: 10px;\n     vertical-align:baseline;     \n     text-align: justify-all;\n}\n    \n\n@media screen and (max-width: 300px) {\n  table {\n    border: 0;\n  }\n\n  \n  table thead {\n    border: none;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n      \n  }\n  \n  table tr {\n    border-bottom: 3px solid #ddd;\n    display: block;\n    margin-bottom: .625em;\n  }\n  \n  table td {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: .8em;\n    text-align: right;\n  }\n  \n  table td::before {\n    /*\n    * aria-label has no advantage, it won't be read inside a table\n    content: attr(aria-label);\n    */\n    content: attr(data-label);\n    float: left;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n  \n  table td:last-child {\n    border-bottom: 0;\n  }\n}\n    \n.suggest{\nwidth: 700px;        \n    }\n.criteria{\n        width: 500px;\n    }\n       \n     \n select {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  outline: 0;\n  border-radius: 10px 10px 10px 10px;     \n   box-shadow: -1px 1px 1px rgba(0,0,0,0.15);\n   background: #F5FFFA;\n  background-image: none;\n     \n  \n     \n}\n/* Remove IE arrow */\nselect::-ms-expand {\n  display: none;\n}\n/* Custom Select */\n.select {\n  position: relative;\n  display: flex;\n  width: 15em;\n  height: 3em;\n  line-height: 3;\n  background: #2c3e50;\n  overflow: hidden;\n  border-radius: .25em;\n  margin-bottom: 10px;\n  margin-top: 10px;\n    \n}\nselect {\n  flex: 1;\n  padding: 0 .5em;\n  color: #000;\n  cursor: pointer;\n  font-size: 1.2em;\n}\n/* Arrow */\n.select::after {\n  content: '\\25BC';\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0 1em;\n  background: #8A2BE2;\n  cursor: pointer;\n  pointer-events: none;\n  -webkit-transition: .25s all ease;\n  -o-transition: .25s all ease;\n  transition: .25s all ease;\n}\n/* Transition */\n.select:hover::after {\n  color: #fff;\n}\n .select option {\n  font-size: 22px;\n    \n     \n}    \n.select option:hover {\n    color: black;\n}\n  \ntable input[type=\"text\"]{\n  background: lightblue ;\n  padding: 8px;\n  border-radius: 12px;\n  border: 0;\n  font-family: 'Lucida Grande', Serif;\n  font-size: 22px;  \n  font-weight: bold;\n  color: #2c3e50 ;\n\n    \n}\n    \n.button {\n  min-width: 250px;\n  min-height: 60px;\n  font-family: 'Nunito', sans-serif;\n  font-size: 22px;\n  text-transform: uppercase;\n  letter-spacing: 1.3px;\n  font-weight: 700;\n  color: #313133;\n  background: #4FD1C5;\n  background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);\n  border: none;\n  border-radius: 1000px;\n  box-shadow: 12px 12px 24px rgba(79,209,197,.64);\n  transition: all 0.3s ease-in-out 0s;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  padding: 10px;\n  }\n\nbutton::before {\ncontent: '';\n  border-radius: 1000px;\n  min-width: calc(250px + 12px);\n  min-height: calc(60px + 12px);\n  border: 6px solid #00FFCB;\n  box-shadow: 0 0 60px rgba(0,255,203,.64);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: all .3s ease-in-out 0s;\n}\n\n.button:hover, .button:focus {\n  color: #313133;\n  transform: translateY(-6px);\n}\n\nbutton:hover::before, button:focus::before {\n  opacity: 1;\n}\n\nbutton::after {\n  content: '';\n  width: 30px; \n  height: 30px;\n  border-radius: 100%;\n  border: 6px solid #00FFCB;\n  position: absolute;\n  z-index: -1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation: ring 1.5s infinite;\n}\n\nbutton:hover::after, button:focus::after {\n  animation: none;\n  display: none;\n}\n\n@keyframes ring {\n  0% {\n    width: 30px;\n    height: 30px;\n    opacity: 1;\n  }\n  100% {\n    width: 200px;\n    height: 200px;\n    opacity: 0;\n  }\n}\n  \n       \n " }} />
              <div className="sublimation">
               {/* <Header/> */}
                <br /> <br /><br /><br /> <br /> <br /> <br /> 
                <center>
                  <table border={1} cellSpacing={0}>
                   <Thead/>
                   <Ttitle/>
                    <tbody>
                      
                    <PrintingTableRow outcome="1.पेपर बैग बनाने की गतिविधि प्रक्रिया" crieteria="1.कार्यस्थल की सफाई एवं व्यवस्था करना
कार्यस्थल पर सामग्री की व्यवस्था करना" outof={100} totalMarks={10} rowspan={13} marksCount={3} marks1Count={7} no={1} setSums={setSums}/>
                    <PrintingRow criteria="2.सामग्रियों की पहचान करना और उनका नामकरण करना" totalMark={10} marksCount={3} marks1Count={7} no={1} setSums={setSums}/>
                    <PrintingRow criteria="3.हाथ से बना कागज लें
कागज को ऊपर से 2 इंच अंदर मोड़ें" totalMark={4} marksCount={2} marks1Count={2} no={1} setSums={setSums} />
                    <PrintingRow criteria="4.दोनों पक्षों के सिरों को आपस में जोड़ें" totalMark={4} marksCount={2} marks1Count={2} no={1} setSums={setSums}/>
                    <PrintingRow criteria="5.डिवाइस से किनारों को दबाएं" totalMark={4} marksCount={2} marks1Count={2} no={1} setSums={setSums}/>
                    <PrintingRow criteria="6.नीचे की ओर और दो विपरीत भुजाओं को मोड़ना" totalMark={4} marksCount={2} marks1Count={2} no={1} setSums={setSums}/>
                    <PrintingRow criteria="7.अन्य दो विपरीत भुजाओं को मोड़ना" totalMark={4} marksCount={2} marks1Count={2} no={1} setSums={setSums}/>
                    <PrintingRow criteria="8.गोंद लगाकर विपरीत दिशा में चिपका दें" totalMark={10} marksCount={3} marks1Count={7} no={1} setSums={setSums}/>
                    <PrintingRow criteria="9.हैंडल लगाने के लिए छेदों को चिह्नित करें और छेदें" totalMark={10} marksCount={3} marks1Count={7} no={1} setSums={setSums}/>
                    <PrintingRow criteria="10.पलकें फिट करना" totalMark={10} marksCount={3} marks1Count={7} no={1} setSums={setSums}/>
                    <PrintingRow criteria="11.सुराख़ों में धागा डालें" totalMark={10} marksCount={3} marks1Count={7} no={1} setSums={setSums}/>
                    <PrintingRow criteria="12.धागे को दोनों तरफ से गूंथ लें" totalMark={10} marksCount={3} marks1Count={7} no={1} setSums={setSums}/>
                    <PrintingRow criteria="13.अंतिम उत्पाद को उपयुक्त स्थान पर रखना" totalMark={10} marksCount={3} marks1Count={7} no={1} setSums={setSums}/>
                     <TotalRow outOf={100} totalMarks={100} ti={1} no={1} sums={sums} theory={34} practical={66}/>
                     <PrintingTableRow outcome="2.पेपर बैग सामग्री को पहचानें, जानें और उसका उपयोग करें" crieteria="1.पेपर बैग सामग्री को पहचानें, जानें और उसका उपयोग करें" outof={100} totalMarks={10} rowspan={12} marksCount={3} marks1Count={7} no={2} setSums={setSums}/>
                    <PrintingRow criteria="2.कार्यस्थल में समय की पाबंदी" totalMark={10} marksCount={3} marks1Count={7} no={2} setSums={setSums}/>
                    <PrintingRow criteria="3.पर्यवेक्षक और टीम के सदस्यों को नमस्कार" totalMark={10} marksCount={3} marks1Count={7 } no={2} setSums={setSums}/>
                    <PrintingRow criteria="4.रजिस्टर पर हस्ताक्षर करें" totalMark={5} marksCount={2} marks1Count={3} no={2} setSums={setSums}/>
                    <PrintingRow criteria="5.काम शुरू करो" totalMark={5} marksCount={2} marks1Count={3} no={2} setSums={setSums}/>
                    <PrintingRow criteria="6.उपयोग करते समय सामग्री को सावधानीपूर्वक संभालें" totalMark={10} marksCount={3} marks1Count={7} no={2} setSums={setSums}/>
                    <PrintingRow criteria="7.उपयोग के बाद सामग्री, उपकरण सुरक्षा को सुरक्षित रखता है" totalMark={10} marksCount={3} marks1Count={7} no={2} setSums={setSums}/>
                    <PrintingRow criteria="8.कार्य में गड़बड़ी होने पर जिम्मेदार व्यक्ति को सूचना दें" totalMark={10} marksCount={3} marks1Count={7} no={2} setSums={setSums}/>
                    <PrintingRow criteria="9.बर्बादी कम से कम करें" totalMark={10} marksCount={3} marks1Count={7} no={2} setSums={setSums}/>
                    <PrintingRow criteria="10.टीम के सदस्यों के साथ काम करें" totalMark={10} marksCount={3} marks1Count={7} no={2} setSums={setSums}/>
                    <PrintingRow criteria="11.कथित जोखिमों के मामले में पर्यवेक्षकों या अन्य अधिकृत कर्मियों से स्पष्टीकरण मांगें" totalMark={5} marksCount={2} marks1Count={3} no={2} setSums={setSums}/>
                    <PrintingRow criteria="12.पर्यवेक्षक या अन्य अधिकृत कर्मियों से नीतियों और प्रक्रियाओं के बारे में जानकारी लें।" totalMark={5} marksCount={2} marks1Count={3} no={2} setSums={setSums}/>
                    <TotalRow outOf={100} totalMarks={100} ti={2} sums={sums} theory={32} practical={68}/>
                    
                      <tr>
                        <td />
                        <td>कुल</td>
                        <td />
                        <td align="center">200</td>
                        <td align="center"><input type="text" id="grand1" value={grand1} disabled /></td>
                        <td align="center"><input type="text" id="grand2" value={grand2} disabled /></td>
                      </tr>
                      <tr>
                        <td />
                        <td>प्रतिशतता</td>
                        <td />
                        <td />
                        <td align="center"><input type="text" id="gp" value={gp} disabled /></td>
                        <td align="center"><input type="text" id="gp1" value={gp1} disabled /></td>
                      </tr>
                      <tr>
                        <td />
                        <td>अर्हता प्राप्त करने के लिए न्यूनतम उत्तीर्ण प्रतिशत
                        </td>
                        <td colSpan={4} align="center"> <br /><br />60%<br /><br /><br /></td>
                      </tr>
                    </tbody>
                  </table>
                  <center>       
                    <Validate/>
                    <p>&nbsp;</p>
                    <br /><br /> 
                    <div className="wrap">
                    <button className="button" id='submit' type="button" onClick={printValues}>SUBMIT</button>
                </div></center>
                  <br /><br /> <br /><br />

                </center>
              </div>
              <ToastContainer /> 
            </div>
          );
        }
   




