import React from 'react';
import logo from './logo.svg';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Card from "../components/DemoCard";
import Background from "../components/Background"
import { TypeAnimation } from 'react-type-animation';

function Homepage(){
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
    return(
        <div className="text-slate-500 dark:text-slate-400 flex items-center">
            <Background/>
                <ScrollContainer>
                    <ScrollPage>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <TypeAnimation
                            sequence={[
                                'Hi:)', // Types 'One'
                                1000, // Waits 1s
                                'my name is Austin:)', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                "I'm a software engineer 💻", // Types 'Three' without deleting 'Two'
                                2000,
                                "software / business student 👨‍🎓",
                                2000,
                                "scroll down ⬇️",
                                2000,
                                () => {
                                console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                }
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '4em' }}
    />
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
                            Check out nav bar:)
                        </span>
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>
            
        </div>
    );
}

export default Homepage;
