import React from 'react';
import { Card, } from 'react-bootstrap';
import './style.css';


function Footer() {
    return(
    <div className="Footer">
        <Card className="text-center"  fixed="bottom">
            <Card.Body>
                <Card.Text>
                    Contact Me :  
                    <a href= "https://github.com/LiamStewart8" target="blank"> Github</a> |
                    <a href= "https://www.linkedin.com/in/liamsctewart/" target="blank"> LinkedIn</a> |
                    <a href= "mailto:liamstewartdev@gmail.com"> Email</a> |
                    <a href= "https://docs.google.com/document/d/13zktHzBMcVyeKcVwRHA28_5kkgqI_23KeGyYSLiSvWM/edit?usp=sharing" target="blank"> Resume</a> |
                    <a href= "tel:925-791-8175"> Phone</a> 
                    
                    {/* <a href= ""></a> */}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    );
};

export default Footer;