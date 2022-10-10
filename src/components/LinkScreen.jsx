import React, { Component } from 'react';
import { Link } from "react-router-dom";
import codechef from "../images/codechef.png"
import codeforces from "../images/codeforces.png"
import leetcode from "../images/leetcode.png"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import hackerrank from "../images/hackerrank.png"

class LinkScreen extends Component {
    box(img, text, link) {
        return (
            <div className='box'>
                <Link to={link}><img src={img} alt="a logo" className='box-img' /></Link>
                <h4>{ text }</h4>
            </div>
        )
    }
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column"}}>
                <h2>SIDDU SIRASANAMBETI</h2>
                <h2>{this.props.match.params.id}</h2>
                <div className='boxes-container'>
                    {this.box(codechef, "CODE CHEF", "/student/1/codechef")}
                    {this.box(codeforces, "CODE FORCES", "/student/1/codeforces")}
                    {this.box(leetcode, "LEET CODE", "/student/1/leetcode")}
                    {this.box(linkedin, "LINKED IN", "/student/1/linkedin")}
                    {this.box(github, "GIT HUB", "/student/1/github")}
                    {this.box(hackerrank, "HACKER RANK", "/student/1/hackerrank")}
                </div>
            </div>
        );
    }
}

export default LinkScreen;