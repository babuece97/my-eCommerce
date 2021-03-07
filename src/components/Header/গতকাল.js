import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Headerr

 = () => {
    return (
        <div className="headeer">
            <h1> We are here</h1>
            <img src= {logo} alt=""/>
            <p> গতকাল কোভিড-১৯ ভ্যাক্সিন দিয়েছি। গায়ে (মাথা, মাংস-পেশি ও হাড়ের-জয়েন্টে) বেশ ব্যাথা। সর্দি-কাশি ও এলার্জি (আগেই ছিল) সেটা বেড়েছে, কিন্তু জ্বর নেই। 
পরামর্শ থাকলে দিতে পারেন।</p>
            <nav>
                <a href="/butik"> SsHOP</a>
                <a href="/reviewDekho">OrRDER dEKHO </a>
                <a href="/manageIInver"> mAnage KHOjo</a>
            </nav>
            
        </div>
    );
};

export default Headerr
;