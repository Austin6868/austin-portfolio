import React from 'react';
import logo from './logo.svg';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Card from "../components/DemoCard";
import Background from "../components/Background"

function Homepage(){
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
    return(
        <div className="text-slate-500 dark:text-slate-400 flex items-center">
            <Background/>
                <ScrollContainer>
                    <ScrollPage>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <span style={{ fontSize: "70px" }}>Scroll Down</span>
                        <div className ="animate-bounce inline-block" style={{ fontSize: "70px" }}> &nbsp;⬇️ </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={batch(Fade(), Sticky())}>
                        <span style={{ fontSize: "50px" }}>Here are some projects I've done</span>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={batch(Fade(), Sticky(), MoveIn(-500, 0))}>
                        <Card/>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={batch(Fade(), Sticky(), MoveIn(-500, 0))}>
                        <Card/>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={batch(Fade(), Sticky())}>
                        <span style={{ fontSize: "40px" }}>Done</span>
                        <br/>
                        <span style={{ fontSize: "30px" }}>
                            There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
                        </span>
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>
            
        </div>
    );
}

export default Homepage;
