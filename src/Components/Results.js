import React from 'react';
import { songs } from './Songs';

const Results = ({depressionScore, mainstreamScore, musicScore, emotionScore, ageScore, genreScore}) => {
    const getProfile = () => {
        const topGenre = Object.entries(genreScore)
            .sort((a, b) => b[1] - a[1])[0][0];

        return {
            depression: depressionScore <= 0 ? "high" : "low",
            mainstream: mainstreamScore > 0 ? "mainstream" : "indie",
            music: musicScore > 0 ? "instrumental" : "lyrical",
            emotion: emotionScore > 0 ? "feel" : "suppress",
            age: ageScore > 0 ? "classic" : "modern",
            genre: topGenre
        };
    };

    const getReccs = () => {
        let reccArray = null;
        let reccScore = -1;
        songs.forEach(songSet => {
            let score = 0;
            songSet.results.forEach(attribute => {
                if(profArray.includes(attribute)){
                    score++;
                }
            });
            if(score>reccScore){
                reccScore=score;
                reccArray=songSet;
            }
        });
        return reccArray;
    };

    const profile = getProfile();
    const profArray = Object.values(profile);

    const renderResult = () => {
        const results = [];
        const songMatches = getReccs();
        //Header - depression or not
        if (profile.depression === "high") {
            results.push(
                <>
                    <h2>You might be in a heavier emotional space right now.</h2>
                </>
            );
        }
        else{
            results.push(
                <>
                    <h2>You seem like you're relatively satisfied with your life right now.</h2>
                    <span>I wish I could relate, haha...</span>
                </>
            );
        }
        
        //Rock outcomes
        if (profile.genre === "rock") {
            results.push(
                <>
                    <p>Well, we're pretty much on the same page in terms of taste, because it seems like you prefer the energy and passion that comes with rock music.</p>
                </>
            );
            //age check
            if(profile.age === "classic"){
                results.push(
                    <>
                        <p>I think you'd enjoy some tunes from before the 2000s, I mean, I never really left classic rock behind. It's always been a part of me.</p>
                    </>
                );
            }
            else{
                results.push(
                    <>
                        <p>It's a bit weird to give reccs from modern rock acts since there's like a huge range of material out there for different vibes. I kinda feel like there's really
                            a vibe for everyone. I usually gravitate towards the more pop-punk and emo side of things. It was never a phase.
                        </p>
                    </>
                );
            }
            //depression results
            if(profile.depression === "high"){
                //if you prefer to feel emotions
                if(profile.emotion === "feel"){
                    //if you prefer instrumental
                    if(profile.music === "instrumental"){
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Depression + Feel Emotions + Prefer Instrumental + Rock + Classic
                                results.push(
                                    <>
                                        <p>
                                        </p>
                                    </>
                                );
                            }
                            else{
                                //Mainstream + Depression + Feel Emotions + Prefer Instrumental + Rock + Modern
                                results.push(
                                    <>
                                        <p>
                                        </p>
                                    </>
                                );
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Depression + Feel Emotions + Prefer Instrumental + Rock + Classic

                            }
                            else{
                                //Indie + Depression + Feel Emotions + Prefer Instrumental + Rock + Modern
                                
                            }
                        }
                    }
                    else{
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Depression + Feel Emotions + Prefer Lyrics + Rock + Classic
                                results.push(
                                    <>
                                        <p>I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are timeless and popular for a reason. I know it seems like you're not really in the best headspace right now, and I'm sorry about that. Like you, I'm someone who likes to feel their emotions because I want to validate whatever I'm going through. There's a lot of classic rock out there that I really like where there's this orchestral vibe with lyrics about feeling down and out. I always listen listening to stuff like that because I can just process my emotions while also allowing myself to feel them to their fullest potential.I feel like these tunes might help with you processing your feelings. There's this nostalgic yet cinematic vibe I get with these songs that make them the perfect soundtrack for falling apart in a bar to.
                                        </p>
                                    </>
                                );
                            }
                            else{
                                //Mainstream + Depression + Feel Emotions + Prefer Lyrics + Rock + Modern
                                results.push(
                                    <>
                                        <p>I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are popular for a reason. I know it seems like you're not really in the best headspace right now, and I'm sorry about that. Like you, I'm someone who likes to feel their emotions because I want to validate whatever I'm going through. These are some of the songs I really like raging to. <i>Lowlife</i> by Green Day is a song I genuinely consider to be one of their masterpieces that never got released, and I really feel like screaming the chorus is something that's really theraputic to me. Same goes for <i>Brooklyn Bridge to Chorus.</i> As someone who constantly struggles with their self-worth and feeling alienated, that is a song I love to just dance to while dealing with my emotions. There's a lot of modern rock hits out there that strike a good balance with relatable lyrics and danceable melodies to rage to, and I feel like these might help with what you're going through right now.
                                        </p>
                                    </>
                                );
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Depression + Feel Emotions + Prefer Lyrics + Rock + Classic
                            }
                            else{
                                //Indie + Depression + Feel Emotions + Prefer Lyrics + Rock + Modern
                            }
                        }
                    }
                }
                else{
                    if(profile.music === "instrumental"){
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Depression + Suppress Emotions + Prefer Instrumental + Rock + Classic

                            }
                            else{
                                //Mainstream + Depression + Suppress Emotions + Prefer Instrumental + Rock + Modern
                                
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Depression + Suppress Emotions + Prefer Instrumental + Rock + Classic

                            }
                            else{
                                //Indie + Depression + Suppress Emotions + Prefer Instrumental + Rock + Modern
                                
                            }
                        }
                    }
                    else{
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Depression + Suppress Emotions + Prefer Lyrics + Rock + Classic
                            }
                            else{
                                //Mainstream + Depression + Suppress Emotions + Prefer Lyrics + Rock + Modern
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Depression + Suppress Emotions + Prefer Lyrics + Rock + Classic
                            }
                            else{
                                //Indie + Depression + Suppress Emotions + Prefer Lyrics + Rock + Modern
                            }
                        }
                    }
                }
            }
            else{
                //if you prefer to feel emotions
                if(profile.emotion === "feel"){
                    //if you prefer instrumental
                    if(profile.music === "instrumental"){
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Satisfied + Feel Emotions + Prefer Instrumental + Rock + Classic

                            }
                            else{
                                //Mainstream + Satisfied + Feel Emotions + Prefer Instrumental + Rock + Modern
                                
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Satisfied + Feel Emotions + Prefer Instrumental + Rock + Classic

                            }
                            else{
                                //Indie + Satisfied + Feel Emotions + Prefer Instrumental + Rock + Modern
                                
                            }
                        }
                    }
                    else{
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Satisfied + Feel Emotions + Prefer Lyrics + Rock + Classic
                            }
                            else{
                                //Mainstream + Satisfied + Feel Emotions + Prefer Lyrics + Rock + Modern
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Satisfied + Feel Emotions + Prefer Lyrics + Rock + Classic
                            }
                            else{
                                //Indie + Satisfied + Feel Emotions + Prefer Lyrics + Rock + Modern
                            }
                        }
                    }
                }
                else{
                    if(profile.music === "instrumental"){
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Satisfied + Suppress Emotions + Prefer Instrumental + Rock + Classic

                            }
                            else{
                                //Mainstream + Satisfied + Suppress Emotions + Prefer Instrumental + Rock + Modern
                                
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Satisfied + Suppress Emotions + Prefer Instrumental + Rock + Classic

                            }
                            else{
                                //Indie + Satisfied + Suppress Emotions + Prefer Instrumental + Rock + Modern
                                
                            }
                        }
                    }
                    else{
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Satisfied + Suppress Emotions + Prefer Lyrics + Rock + Classic
                            }
                            else{
                                //Mainstream + Satisfied + Suppress Emotions + Prefer Lyrics + Rock + Modern
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Satisfied + Suppress Emotions + Prefer Lyrics + Rock + Classic
                            }
                            else{
                                //Indie + Satisfied + Suppress Emotions + Prefer Lyrics + Rock + Modern
                            }
                        }
                    }
                }
            }
        }

        //Pop outcomes
        if (profile.genre === "pop") {
            results.push(
                <>
                    <p>It seems like you gravitate towards the melodic hooks and pleasant melodies that comes with pop music.</p>
                </>
            );
            //age check
            if(profile.age === "classic"){
                results.push(
                    <>
                        <p>I think you'd enjoy some tunes from before the 2000s, and I mean the real oldies. I feel like we have a pretty good idea of what pop means now, but honestly it's such
                            an umbrella term when you're talking about what that means from the '60s to the '90s.
                        </p>
                    </>
                );
            }
            else{
                results.push(
                    <>
                        <p>It also seems like you'd be a pop girlie, or honorary pop girlie. No shame at all in liking modern pop, I for one consider myself a part time swiftie after all.
                            Plus, there's a plethora of great pop music that goes under the radar as well. It's a much better group of music than most people give it credit for.
                        </p>
                    </>
                );
            }

            //depression results
            if(profile.depression === "high"){
                //if you prefer to feel emotions
                if(profile.emotion === "feel"){
                    //if you prefer instrumental
                    if(profile.music === "instrumental"){
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Depression + Feel Emotions + Prefer Instrumental + Pop + Classic
                                results.push(
                                    <>
                                    <p>
                                        I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are timeless and popular for a reason.
                                        I know it seems like you're not in the best headspace right now, but it seems like you're the type that really wants to feel their emotions.

                                    </p>
                                    </>
                                );
                            }
                            else{
                                //Mainstream + Depression + Feel Emotions + Prefer Instrumental + Pop + Modern
                                
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Depression + Feel Emotions + Prefer Instrumental + Pop + Classic

                            }
                            else{
                                //Indie + Depression + Feel Emotions + Prefer Instrumental + Pop + Modern
                                
                            }
                        }
                    }
                    else{
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Depression + Feel Emotions + Prefer Lyrics + Pop + Classic
                                results.push(
                                    <>
                                    <p>
                                        I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are timeless and popular for a reason.
                                        I know it seems like you're not in the best headspace right now, and I'm not going to say stuff like "oh, it'll get better!" or any of the positivity bullshit like that.
                                        This kind of thing is really only something you can overcome yourself, especially since it seems like you're the type that really wants to feel their emotions. 
                                        That's good. I'm in the same boat as you. Feeling your emotions is simply a way of making sure they are absolutely valid, and they are. But hey, music is a healing factor to the soul for a reason. 
                                        The cool part about classic pop music, especially the oldies, is that they usually have this orchestral sound going for it, and there's a bunch that really speaks to dealing with hardship.
                                        I feel like that's the kind of stuff you might enjoy at the moment. Some real classic tunes about tough times and melancholy nostalgia, because in the end, we all just want to fall apart to a beat
                                        that understands our pain.
                                    </p>
                                    </>
                                );
                            }
                            else{
                                //Mainstream + Depression + Feel Emotions + Prefer Lyrics + Pop + Modern
                                results.push(
                                    <>
                                    <p>
                                        I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are popular bops for a reason.
                                        I know it seems like you're not in the best headspace right now, and I'm not going to say stuff like "oh, it'll get better!" or any of the positivity bullshit like that.
                                        This kind of thing is really only something you can overcome yourself, especially since it seems like you're the type that really wants to feel their emotions. 
                                        That's good. I'm in the same boat as you. Feeling your emotions is simply a way of making sure they are absolutely valid, and they are. But hey, music is a healing factor to the soul for a reason. 
                                        There's this whole ongoing niche of pop songs where they sound happy, but are actually depressing as hell. I feel like that's the kind of stuff you'd be into. Hell, that pretty much describes the
                                        entirety of Paramore's <i>After Laughter</i>, which is one of my favorite albums of all time, and perfect for this kind of situation. I often find that listening to songs where the artist is singing
                                        about processing their own emotions and dealing with the messiness of life is very theraputic. It's almost like they're saying "you're not alone. I know how you feel." 
                                        Feel free to give these songs a spin. I hope they help just a little bit.
                                    </p>
                                    </>
                                );
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Depression + Feel Emotions + Prefer Lyrics + Pop + Classic
                            }
                            else{
                                //Indie + Depression + Feel Emotions + Prefer Lyrics + Pop + Modern
                            }
                        }
                    }
                }
                else{
                    if(profile.music === "instrumental"){
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Depression + Suppress Emotions + Prefer Instrumental + Pop + Classic

                            }
                            else{
                                //Mainstream + Depression + Suppress Emotions + Prefer Instrumental + Pop + Modern
                                
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Depression + Suppress Emotions + Prefer Instrumental + Pop + Classic

                            }
                            else{
                                //Indie + Depression + Suppress Emotions + Prefer Instrumental + Pop + Modern
                                
                            }
                        }
                    }
                    else{
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Depression + Suppress Emotions + Prefer Lyrics + Pop + Classic
                            }
                            else{
                                //Mainstream + Depression + Suppress Emotions + Prefer Lyrics + Pop + Modern
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Depression + Suppress Emotions + Prefer Lyrics + Pop + Classic
                            }
                            else{
                                //Indie + Depression + Suppress Emotions + Prefer Lyrics + Pop + Modern
                            }
                        }
                    }
                }
            }
            else{
                //if you prefer to feel emotions
                if(profile.emotion === "feel"){
                    //if you prefer instrumental
                    if(profile.music === "instrumental"){
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Satisfied + Feel Emotions + Prefer Instrumental + Pop + Classic

                            }
                            else{
                                //Mainstream + Satisfied + Feel Emotions + Prefer Instrumental + Pop + Modern
                                
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Satisfied + Feel Emotions + Prefer Instrumental + Pop + Classic

                            }
                            else{
                                //Indie + Satisfied + Feel Emotions + Prefer Instrumental + Pop + Modern
                                
                            }
                        }
                    }
                    else{
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Satisfied + Feel Emotions + Prefer Lyrics + Pop + Classic
                            }
                            else{
                                //Mainstream + Satisfied + Feel Emotions + Prefer Lyrics + Pop + Modern
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Satisfied + Feel Emotions + Prefer Lyrics + Pop + Classic
                            }
                            else{
                                //Indie + Satisfied + Feel Emotions + Prefer Lyrics + Pop + Modern
                            }
                        }
                    }
                }
                else{
                    if(profile.music === "instrumental"){
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Satisfied + Suppress Emotions + Prefer Instrumental + Pop + Classic

                            }
                            else{
                                //Mainstream + Satisfied + Suppress Emotions + Prefer Instrumental + Pop + Modern
                                
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Satisfied + Suppress Emotions + Prefer Instrumental + Pop + Classic

                            }
                            else{
                                //Indie + Satisfied + Suppress Emotions + Prefer Instrumental + Pop + Modern
                                
                            }
                        }
                    }
                    else{
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Satisfied + Suppress Emotions + Prefer Lyrics + Pop + Classic
                            }
                            else{
                                //Mainstream + Satisfied + Suppress Emotions + Prefer Lyrics + Pop + Modern
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Satisfied + Suppress Emotions + Prefer Lyrics + Pop + Classic
                            }
                            else{
                                //Indie + Satisfied + Suppress Emotions + Prefer Lyrics + Pop + Modern
                            }
                        }
                    }
                }
            }
        }

        //Hiphopelectronica outcomes
        if (profile.genre === "hiphopelectronica") {
            results.push(
                <>
                    <p>You're someone who lives for the vibes and general headspace that is often given by electronic based genres like hip-hop and synthwave.</p>
                </>
            );

            //age check
            if(profile.age === "classic"){
                results.push(
                    <>
                        <p>I think you'd enjoy some tunes from before the 2000s. I'm gonna be honest, it's kind of a ghost town out here, especially since we only really
                            got synth-based music off the ground in like the '80s, though there's definitely some good progenitors to electronic based music and hip hop before the '00s.
                        </p>
                    </>
                );
            }
            else{
                results.push(
                    <>
                        <p>
                        </p>
                    </>
                );
            }

            //depression results
            if(profile.depression === "high"){
                //if you prefer to feel emotions
                if(profile.emotion === "feel"){
                    //if you prefer instrumental
                    if(profile.music === "instrumental"){
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Depression + Feel Emotions + Prefer Instrumental + Hiphop/electronica + Classic

                            }
                            else{
                                //Mainstream + Depression + Feel Emotions + Prefer Instrumental + Hiphop/electronica + Modern
                                
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Depression + Feel Emotions + Prefer Instrumental + Hiphop/electronica + Classic

                            }
                            else{
                                //Indie + Depression + Feel Emotions + Prefer Instrumental + Hiphop/electronica + Modern
                                
                            }
                        }
                    }
                    else{
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Depression + Feel Emotions + Prefer Lyrics + Hiphop/electronica + Classic
                            }
                            else{
                                //Mainstream + Depression + Feel Emotions + Prefer Lyrics + Hiphop/electronica + Modern
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Depression + Feel Emotions + Prefer Lyrics + Hiphop/electronica + Classic
                            }
                            else{
                                //Indie + Depression + Feel Emotions + Prefer Lyrics + Hiphop/electronica + Modern
                            }
                        }
                    }
                }
                else{
                    if(profile.music === "instrumental"){
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Depression + Suppress Emotions + Prefer Instrumental + Hiphop/electronica + Classic

                            }
                            else{
                                //Mainstream + Depression + Suppress Emotions + Prefer Instrumental + Hiphop/electronica + Modern
                                
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Depression + Suppress Emotions + Prefer Instrumental + Hiphop/electronica + Classic

                            }
                            else{
                                //Indie + Depression + Suppress Emotions + Prefer Instrumental + Hiphop/electronica + Modern
                                
                            }
                        }
                    }
                    else{
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Depression + Suppress Emotions + Prefer Lyrics + Hiphop/electronica + Classic
                            }
                            else{
                                //Mainstream + Depression + Suppress Emotions + Prefer Lyrics + Hiphop/electronica + Modern
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Depression + Suppress Emotions + Prefer Lyrics + Hiphop/electronica + Classic
                            }
                            else{
                                //Indie + Depression + Suppress Emotions + Prefer Lyrics + Hiphop/electronica + Modern
                            }
                        }
                    }
                }
            }
            else{
                //if you prefer to feel emotions
                if(profile.emotion === "feel"){
                    //if you prefer instrumental
                    if(profile.music === "instrumental"){
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Satisfied + Feel Emotions + Prefer Instrumental + Hiphop/electronica + Classic

                            }
                            else{
                                //Mainstream + Satisfied + Feel Emotions + Prefer Instrumental + Hiphop/electronica + Modern
                                
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Satisfied + Feel Emotions + Prefer Instrumental + Hiphop/electronica + Classic

                            }
                            else{
                                //Indie + Satisfied + Feel Emotions + Prefer Instrumental + Hiphop/electronica + Modern
                                
                            }
                        }
                    }
                    else{
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Satisfied + Feel Emotions + Prefer Lyrics + Hiphop/electronica + Classic
                            }
                            else{
                                //Mainstream + Satisfied + Feel Emotions + Prefer Lyrics + Hiphop/electronica + Modern
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Satisfied + Feel Emotions + Prefer Lyrics + Hiphop/electronica + Classic
                            }
                            else{
                                //Indie + Satisfied + Feel Emotions + Prefer Lyrics + Hiphop/electronica + Modern
                            }
                        }
                    }
                }
                else{
                    if(profile.music === "instrumental"){
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Satisfied + Suppress Emotions + Prefer Instrumental + Hiphop/electronica + Classic

                            }
                            else{
                                //Mainstream + Satisfied + Suppress Emotions + Prefer Instrumental + Hiphop/electronica + Modern
                                
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Satisfied + Suppress Emotions + Prefer Instrumental + Hiphop/electronica + Classic

                            }
                            else{
                                //Indie + Satisfied + Suppress Emotions + Prefer Instrumental + Hiphop/electronica + Modern
                                
                            }
                        }
                    }
                    else{
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Satisfied + Suppress Emotions + Prefer Lyrics + Hiphop/electronica + Classic
                            }
                            else{
                                //Mainstream + Satisfied + Suppress Emotions + Prefer Lyrics + Hiphop/electronica + Modern
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Satisfied + Suppress Emotions + Prefer Lyrics + Hiphop/electronica + Classic
                            }
                            else{
                                //Indie + Satisfied + Suppress Emotions + Prefer Lyrics + Hiphop/electronica + Modern
                            }
                        }
                    }
                }
            }
        }

        //add reccs
        results.push(
            <>
            <div>
                <h2>Recommendations</h2>
                <ul>
                    {songMatches.reccs.map((song, i) => (
                    <li key={i}>
                        <a href={songMatches.links[i]} target="_blank" rel="noreferrer">
                            {song}
                        </a>
                    </li>
                     ))}
                </ul>
            </div>
            </>
        );

        return (<>{results}</>);
    };

    return (
        <div className="container">
            <h1>Results</h1>

            {renderResult()}

            <hr />

            {/* Optional debug info */}
            <p><strong>Top Genre:</strong> {profile.genre}</p>
            <p><strong>Style:</strong> {profile.mainstream}</p>
            <p><strong>Emotion Type:</strong> {profile.emotion}</p>
            <p><strong>Age Score:</strong> {profile.age}</p>
            <p><strong>Prefer:</strong> {profile.music}</p>
        </div>
    );
};

export default Results;