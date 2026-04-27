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
                        <p>It's a bit weird to give reccs from modern rock acts since there's like a huge range of material out there for different vibes. I kinda feel like there's really a vibe for everyone. I usually gravitate towards the more pop-punk and emo side of things. It was never a phase.
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
                                        <p>I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are timeless and popular for a reason. I know it seems like you're not really in the best headspace right now, and I'm sorry about that. Sometimes, we're going through stuff, and it really sucks, but it is almost theraputic to feel that sadness and feel that pain rather than pretend like everything is alright or like that sadness is something that needs to be extinguished. Like you, I'm someone who likes to feel their emotions because I want to validate whatever I'm going through. There's a lot of classic rock out there that I really like where there's this orchestral and larger than life vibe, and that's perfect for just feeling the music and really resonating with those melodies. I always like listening to stuff like that because I can just process my emotions while also allowing myself to feel them to their fullest potential. I think these tunes might be able to help with you processing your feelings. I know "The Long and Winding Road" is always shit on for being a horrible Beatles song, but I have absolutely no idea why. The wall of sound orchestra just lends a huge cinematic classic Hollywood vibe to it that is perfect for really resonating with the wistful melancholy the song has. ELO also has a bunch of stuff that really nails the vibe that I like whenever I want to truly vibe with the song. There's this nostalgic yet cinematic vibe I get with these songs that make them the perfect soundtrack for falling apart in a bar to.
                                        </p>
                                    </>
                                );
                            }
                            else{
                                //Mainstream + Depression + Feel Emotions + Prefer Instrumental + Rock + Modern
                                results.push(
                                    <>
                                        <p>I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are popular for a reason. I know it seems like you're not really in the best headspace right now, and I'm sorry about that. I'm not gonna say what the right way of dealing with those feelings are. I'm not even a qualified practitioner for Christ's sake. For me though, whenever I'm going through those negative periods, it is really theraputic for me to feel that sadness and feel the pain and frustrations rather than pretend like everything is alright or those negative emotions are something that need to be extinguished. I know it really sucks, but sometimes we need to process that way. For modern rock songs, I usually go to ones that take the time and space to mellow out but also let loose in a large sweeping chorus. That's something that bands like Fall Out Boy and Arctic Monkeys nail well. The pure pain in their voices paired with the emotional melody of those choruses make these songs something I like to scream out at the top of my lungs with every fibre of emotion in my body. Also, Muse is really good at being this modern version of the orchestral classic rock style I like so much. If you're really into that whole symphonic sound, they have a lot of good tunes that fit the bill perfectly.
                                        </p>
                                    </>
                                );
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Depression + Feel Emotions + Prefer Instrumental + Rock + Classic
                                results.push(
                                    <>
                                        <p>You're someone who likes the unconventional, the kind of stuff that has a cult following Honestly, hell yeah. No shade to the mainstream hits, I quite like it too, but there's something special about going to an indie show and knowing "yeah, this is a tight knit but loyal crowd" you know? It's a bit interesting to cherry pick the non mainstream rock songs of old since technically these were all still popular songs after all. I know it seems like you're not in a good headspace right now, and I'm sorry about that. It's in these times where I'd turn to the indie rock of the '90s. The kind of melancholy rock that litters every sad boy playlist. I know it's a meme a this point to joke about that type of listener, but honestly, it's rooted in reality. These songs are very theraputic if you want to mellow out and resonate with something that matches your current state of mind. Sometimes we don't want to be told that things will get better. Sometimes we want to just believe that our melancholy is real and everlasting for just a little more. The music of Radiohead and Jeff Buckley probably embodies this best. Just that sense of utter hopelessness that feels weirdly comforting, like a hug coming from someone who also feels the exact same way as you. Give these a spin and they might help.
                                        </p>
                                    </>
                                );

                            }
                            else{
                                //Indie + Depression + Feel Emotions + Prefer Instrumental + Rock + Modern
                                results.push(
                                    <>
                                        <p>You're someone who likes the unconventional, the kind of stuff that has a cult following Honestly, hell yeah. No shade to the mainstream hits, I quite like it too, but there's something special about going to an indie show and knowing "yeah, this is a tight knit but loyal crowd" you know? There's luckily a plethora of artists out there ready to be discovered. I know it seems like you're not in a good headspace right now, and I'm sorry about that. It's times like this where I turn to music because sometimes, I just want to be alone with my thoughts, but I also want a soundtrack to my grief, and a melody that allows me to properly feel those negative emotions. Here's just a handful of songs I'd typically listen to during a time like that. Panicland exists in this weird spot of essentially becoming known as a Green Day parody, but honestly, that's a good band to emulate. "Rome Falls" is a masterpiece of a lullaby. Really gets you into the zone of just vibing to a mellow beat that allows you to just focus on processing these complex feelings. I remember listening to <i>Ladies and Gentlemen We Are Floating in Space</i> and feeling like I'm ascending to another realm. That's how atmospheric and transcendent Spiritualized's music is. Give these a spin. I feel like you'd at the very least vibe with them.
                                        </p>
                                    </>
                                );
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
                                        <p>I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are timeless and popular for a reason. I know it seems like you're not really in the best headspace right now, and I'm sorry about that. Like you, I'm someone who likes to feel their emotions because I want to validate whatever I'm going through. There's a lot of classic rock out there that I really like where there's this orchestral vibe with lyrics about feeling down and out. I always like listening to stuff like that because I can just process my emotions while also allowing myself to feel them to their fullest potential.I think these tunes might help with you processing your feelings if you're really into that sweeping orchestral vibe with music. Something that can be played at when you're walking alone down an empty boulevard at night with nothing but your emotions to give you company. There's this nostalgic yet cinematic vibe I get with these songs that make them the perfect soundtrack for falling apart in a bar to.
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
                                results.push(
                                    <>
                                        <p>You're someone who likes the unconventional, the kind of stuff that has a cult following Honestly, hell yeah. No shade to the mainstream hits, I quite like it too, but there's something special about going to an indie show and knowing "yeah, this is a tight knit but loyal crowd" you know? It's a bit interesting to cherry pick the non mainstream rock songs of old since, well, technically they're all non mainstream now. Anyway, I feel like you're probably not in a good headspace right now. Really sorry about that. I won't give the generic therapy speech about how things will always get better and it's not always that bad. I'm also feeling really down right now and things don't look like they are going to get better anytime soon. That kinda talk comes from a place of good intention, I know that, but sometimes, you just want to feel your emotions and know that they are valid. Times like these are when I do put on the depressing sad songs because I can rage and cry all I want to tunes that understand the pain I'm going through. It's better for me to feel it all and not act like I'm not absolutely down on my luck right now. Here's some older rock tunes I'd like to listen to during these depressing times. I once looped "Dancing With Myself" nonstop for days, and it's one of those songs where I kinda prefer the original mix than the one that most people know since it has way more punk energy than the solo Billy Idol version. Give these tunes a spin and spend a moment to just dance and rage because you're absolutely valid in your feelings and sometimes music is the best way to really hone in on those.
                                        </p>
                                    </>
                                );
                            }
                            else{
                                //Indie + Depression + Feel Emotions + Prefer Lyrics + Rock + Modern
                                results.push(
                                    <>
                                        <p>You're someone who likes the unconventional, the kind of stuff that has a devoted cult following, but probably wouldn't be on any top 40 charts. Honestly, hell yeah. No shade to the mainstream hits, I quite like it too, but there's something special about listening to an artist and knowing "yeah, this is a tight knit but loyal crowd" you know? Considering the place of rock nowadays, there's more than a plethora of that. Anyway, I think you might not be in a good headspace right now, and I'm really sorry about that. I'm not gonna rattle on about any therapy text or the generic speech about things getting better. I'm in a similar jam myself, and it really doesn't seem like it's gonna get any better, but I accept that I'm feeling this way and I'm someone who woudl want to embrace that pain because it honestly reminds me that I'm human. I feel like you're also the type who would rather feel their emotions rather than hide them away or pretend they're not there. For me, as a music lover, I like putting on songs that allow me to be in the zone and feel all this sadness. In this case, there's also the fact that these songs lyrically also address some of the pain I'm feeling, and it's theraputic to hear it coming from the artist, as if they're saying "you're not alone, I know how this feels." I've only really delved into the modern 2010s emo scene recently, and there's a lot of good gems in there, especially since they combine bits of dream pop with the guitar driven emotion of the original emo sound. I recently got into Turnover and I saw their anniversary show last year, and to be a part of that crowd shouting out the lyrics to "Cutting My Fingers Off" felt really theraputic with how nostalgically sad that song sounds. I'd totally recommend artists from that whole scene since while I have nothing but absolute love for the 2000s scene, there's a different more raw energy to be found with the newer stuff. You might enjoy some of these songs. I would definitely recommend the entirety of <i>Peripheral Vision</i> if you enjoyed that taste of Turnover. The whole record is an incredibly theraputic listen if you want to feel your emotions through well written lyricism.
                                        </p>
                                    </>
                                );
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
                                results.push(
                                    <>
                                    <p>
                                        I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are popular and timeless for a reason. I know it seems like you're not in a good headspace right now, and I'm sorry about that. I won't go on about how things will get better. Honestly, many times in my battle against my own depression, I've never wanted to think about the light at the end of the tunnel. I'd cope by channeling my emotions and negativity through hiding them behind the mask of pretending to be okay. I think you're in the same boat of wanting to hide everything behind that mask, but sometimes that negativity does slip through in the form of frustration and confusion. 
                                    </p>
                                    </>
                                );
                            }
                            else{
                                //Mainstream + Depression + Suppress Emotions + Prefer Instrumental + Rock + Modern
                                results.push(
                                    <>
                                    <p>
                                        I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are popular for a reason. I know it seems like you're not in a good headspace right now, and I'm sorry about that. I won't go on about how things will get better. Honestly, many times in my battle against my own depression, I've never wanted to think about the light at the end of the tunnel. I'd cope by channeling my emotions and negativity through hiding them behind the mask of pretending to be okay. I think you're in the same boat of wanting to hide everything behind that mask, but sometimes that negativity does slip through in the form of frustration and confusion. In this case, I'd actually go for the more mellow yet slightly bittersweet type of songs. Something like The Killers' "Everything Will Be Alright" and Gerard Way's "Drugstore Perfume" have the very shoegazy sound that I usually use whenever I want to dilute my sadness and just sit and vibe to. The entirety of <i>Hesitant Alien</i> would also fit the bill to be honest, since it's a far cry from his work with MCR and more like shoegaze britpop than punk. Feel free to give these a spin, and just take the time to vibe to the bittersweet hope they provide. They might lift your mood during these trying times.
                                    </p>
                                    </>
                                );
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
                                results.push(
                                    <>
                                    <p>
                                        I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are timeless and popular for a reason. I know it seems like you're not in the best headspace right now. I'm sorry about that. I won't say it'll get better because I'm in a similar boat myself, and that is not something I would want to hear right now either. It seems like you'd be the type to use music as a crutch; as a way to boost your mood and distract you from all that pain in your life. It's hard, but you want to try, right? For me, during times like these, I like classic rock songs that are more inquisitive and question human nature as a whole. Stuff like "Life on Mars?" by Bowie exemplifies this notion of feeling isolated but wanting to better understand ourselves and the world around us. As someone who deals with being bipolar, Pink Floyd's "One of My Turns" ended up being a song I looped a lot when one of my depressive periods hit. Even in the context of the story of <i>The Wall</i>, that song is like the breaking point and I definitely think it would be a good venting listen if you're the type to bury your emotions to the point where they finally explode.
                                    </p>
                                    </>
                                );
                            }
                            else{
                                //Mainstream + Depression + Suppress Emotions + Prefer Lyrics + Rock + Modern
                                results.push(
                                <>
                                    <p>
                                        I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are popular for a reason. I know it seems like you're not in the best headspace right now. I'm sorry about that. I won't say it'll get better because I'm in a similar boat myself, and that is not something I would want to hear right now either. It seems like you'd be the type to use music as a crutch; as a way to boost your mood and distract you from all that pain in your life. It's hard, but you want to try, right? For me, during times like these, 2000s pop-punk is the way to go. I hold a lot of regret and anguish in my heart, and songs that actually tackle the themes of looking back and wishing for a better life really hit when I'm feeling that frustration. I still consider <i>Vices and Virtues</i> to be my favorite album of all time, and even if I fell off the Panic! train, that record is perfect for the kind of depression that you're desperately trying to move past. Additionally, I think "Forever Now" is the most underrated Green Day song of all time, and even if it <i>is</i> the lyrical equivalent of a mid-life crisis, I still think it nails the feeling of all that frustration held back finally bursting through. Feel free to give these a listen and it might lift you up. I want you to engrave the chorus of "Famous Last Words" into your soul and scream it at the top of your lungs as a reminder that you still have a little battle within.
                                    </p>
                                    </>
                                );
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Depression + Suppress Emotions + Prefer Lyrics + Rock + Classic
                                results.push(
                                <>
                                    <p>You're someone who likes the unconventional, the kind of stuff that has a cult following Honestly, hell yeah. No shade to the mainstream hits, I quite like it too, but there's something special about going to an indie show and knowing "yeah, this is a tight knit but loyal crowd" you know? It's a bit interesting to cherry pick the non mainstream rock songs of old since, well, technically they're all non mainstream now. Based on what you've told me, I think you might not currently be in the best headspace right now, and I'm sorry about that. It seems like you'd be the type to use music as a crutch, to make sense of your emotions and boost your mood by channeling all that negativity into a different energy. In cases like this, I'd typically listen to '90s alt rock, particularly the angry ones. "Bullet with Butterfly Wings" is kind of emblematic of that whole edgy grunge movement. Same goes for <i>Smash</i> era Offspring. That kind of angry slightly self-deprecating lyricism is something I usually seek out when I've suppressed my emotions to the point where they are on the borderline of exploding. I feel like they might also fit what you're looking for in music.
                                    </p>
                                </>
                                );
                            }
                            else{
                                //Indie + Depression + Suppress Emotions + Prefer Lyrics + Rock + Modern
                                results.push(
                                <>
                                    <p>You're someone who likes the unconventional, the kind of stuff that has a cult following Honestly, hell yeah. No shade to the mainstream hits, I quite like it too, but there's something special about going to an indie show and knowing "yeah, this is a tight knit but loyal crowd" you know? There's such a plethora of indie rock ragers that nail the anger that bubbles inside us all during times like these. Based on what you've told me, I think you might not currently be in the best headspace right now, and I'm sorry about that. It seems like you'd be the type to use music as a crutch, to make sense of your emotions and boost your mood by channeling all that negativity into a different energy. In times like this, I turn to songs like "Reptilia" where I'd loop them nonstop and scream out the words with every emotion in my system to vent out all that anger and frustration I'd been holding in. The early Strokes songs are great for times like this. Same goes for something like "Me First" by Real Friends where I would put it on whenever I felt alienated and treated like an afterthought. Songs like those honestly have a theraputic element to them when you scream out the words because it'll be the one time you can just let out all that frustration you'd been holding in and hide your negativity through the veil of righteous fury.
                                    </p>
                                </>
                                );
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
                        <p>I think you'd enjoy some tunes from before the 2000s, and I mean the real oldies. I feel like we have a pretty good idea of what pop means now, but honestly it's such an umbrella term when you're talking about what that means from the '60s to the '90s.
                        </p>
                    </>
                );
            }
            else{
                results.push(
                    <>
                        <p>It also seems like you'd be a pop girlie, or honorary pop girlie. No shame at all in liking modern pop, I for one consider myself a part time swiftie after all. Plus, there's a plethora of great pop music that goes under the radar as well. It's a much better group of music than most people give it credit for.
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
                                        I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are timeless and popular for a reason. I know it seems like you're not in the best headspace right now. I'm sorry about that. I won't say it'll get better because I'm in a similar position and the light at the end of the tunnel seems a lot dimmer with each passing day, but that's where music comes in to help me deal with those negative feelings. It seems like you're the type that really wants to feel their emotions through melody and instrumentals rather than try and negate them through the mask of positivity. Personally during times like these, I'd listen to '70s pop, because they just nail that perfect melancholy vibe before synths became prevalent in pop. I love synths, but sometimes I need to feel those lush orchestral layers in music. Stuff like the sad ABBA songs, Carole King, and the softer Fleetwood Mac songs might help with what you're going through. They do call "Landslide" the perfect tunnel song after all. Maybe going for a long night drive with that song as your soundtrack would help with really getting into your feelings.
                                    </p>
                                    </>
                                );
                            }
                            else{
                                //Mainstream + Depression + Feel Emotions + Prefer Instrumental + Pop + Modern
                                results.push(
                                    <>
                                    <p>
                                        I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are popular bops for a reason. I know it seems like you're not in the best headspace right now. I'm sorry about that. I won't say it'll get better because I'm in a similar position and the light at the end of the tunnel seems a lot dimmer with each passing day, but that's where music comes in to help me deal with those negative feelings. It seems like you're the type that really wants to feel their emotions through melody and instrumentals rather than try and negate them through the mask of positivity. As someone who's literally going through a post-breakup depression right now, I may have been looping the ten minute version of "All Too Well" for about two months now, but c'mon, despite the obvious jokes to be made, that song does unironically help me to cry out and know that the pain I'm feeling is valid. I'm literally Ryan Gosling in that way. I'll also say Chappell's "The Subway" is also a really great song to just feel musically. Really happy that song finally got released, and on my birthday nonetheless. Talk about a way to welcome 22. Anyway, give these tunes a spin. You might've already heard them before, but listening to these songs in this headspace really helps.
                                    </p>
                                    </>
                                );
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Depression + Feel Emotions + Prefer Instrumental + Pop + Classic
                                results.push(
                                    <>
                                        <p>You're someone who likes the unconventional, the kind of stuff that has a cult following, but probably wouldn't be on any top 40 charts. Honestly, hell yeah. There's something special about listening to songs that only you and a devoted audience can belt at the top of your lungs. It seems like you're not really in the best headspace right now, and I'm sorry about that. It's truly a long road from the top, and I don't have the answers for reaching it when we're at the bottom of the barrel, but for me, music is such a healing tool because I can allow myself to just feel my emotions and process them in a healthy way. Here's a handful of the oldies but goodies that I typically listen to during times of struggle whenever I just want to zone out and vibe with the melodies of classic pop tunes. I'd also honestly also classify theatre bops as songs that probably wouldn't have much appeal to a mainstream audience. Most of Phantom fits that lovelorn feel, though I'll give shoutout to "Music of the Night" for being the big one that is not necessarily negative, but conveys that wistful longing for better times well. Give some of these a spin. They might help with whatever you're going through.
                                        </p>
                                    </>
                                );
                            }
                            else{
                                //Indie + Depression + Feel Emotions + Prefer Instrumental + Pop + Modern
                                results.push(
                                    <>
                                        <p>You're someone who likes the unconventional, the kind of stuff that has a devoted cult following. Honestly, hell yeah. No shade to the mainstream hits, I quite like it too, but there's something special about listening to an artist and knowing "yeah, this is a tight knit but loyal crowd" you know? Anyway, I think you might not be in a good headspace right now, and I'm really sorry about that. I won't give the traditional therapy speech about how things might get better. Sometimes, we don't want to think things will get better, and I know people will say that it's not a good mindset to have, but we do need that space to believe that's the case for just a little while. There's a lot of really cool artists from the indie pop scene that nail the inherent sadness we're all feeling really well. Obviously this is my own personal struggles shining through, but "Want You Back" by Maisie Peters is really something that resonates with me and how I'm processing my own negative emotions right now. On another note, Wolf Alice's <i>Blue Weekend</i> is damn near the top of my list for albums I really want to take the time to listen to one day, and if "Delicious Things" is anything to go by, it's gonna be a whopper. A lot of these songs just have that easygoing and simplistic but powerful composition that reflects how I'm feeling emotionally, and that might be the case for you as well. Feel free to give these a spin, and maybe you might vibe with them.
                                        </p>
                                    </>
                                );
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
                                        I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are timeless and popular for a reason. I know it seems like you're not in the best headspace right now, and I'm not going to say stuff like "oh, it'll get better!" or any of the positivity bullshit like that. This kind of thing is really only something you can overcome yourself, especially since it seems like you're the type that really wants to feel their emotions. That's good. I'm in the same boat as you. Feeling your emotions is simply a way of making sure they are absolutely valid, and they are. But hey, music is a healing factor to the soul for a reason. The cool part about classic pop music, especially the oldies, is that they usually have this orchestral sound going for it, and there's a bunch that really speaks to dealing with hardship. I feel like that's the kind of stuff you might enjoy at the moment. Some real classic tunes about tough times and melancholy nostalgia, because in the end, we all just want to fall apart to a beat
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
                                        I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are popular bops for a reason. I know it seems like you're not in the best headspace right now, and I'm not going to say stuff like "oh, it'll get better!" or any of the positivity bullshit like that.This kind of thing is really only something you can overcome yourself, especially since it seems like you're the type that really wants to feel their emotions. That's good. I'm in the same boat as you. Feeling your emotions is simply a way of making sure they are absolutely valid, and they are. But hey, music is a healing factor to the soul for a reason. There's this whole ongoing niche of pop songs where they sound happy, but are actually depressing as hell. I feel like that's the kind of stuff you'd be into. Hell, that pretty much describes the entirety of Paramore's <i>After Laughter</i>, which is one of my favorite albums of all time, and perfect for this kind of situation. I often find that listening to songs where the artist is singing about processing their own emotions and dealing with the messiness of life is very theraputic. It's almost like they're saying "you're not alone. I know how you feel." Feel free to give these songs a spin. I hope they help just a little bit.
                                    </p>
                                    </>
                                );
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Depression + Feel Emotions + Prefer Lyrics + Pop + Classic
                                results.push(
                                    <>
                                        <p>You're someone who likes the unconventional, the kind of stuff that has a cult following, but probably wouldn't be on any top 40 charts. Honestly, hell yeah. No shade to the mainstream hits, I quite like it too, but there's something special about going to an indie show and knowing "yeah, this is a tight knit but loyal crowd" you know? Anyway, I think you might not be in a good headspace right now, and I'm really sorry about that. I'm not gonna rattle on about any therapy text or the generic speech about things getting better. I'm in a similar jam myself, and it really doesn't seem like it's gonna get any better, but I know how I'm feeling and I'm someone who embraces that pain because it honestly reminds me that I'm human. I feel like you're also the type who would rather feel their emotions rather than hide them away or pretend they're not there. For me, as a music lover, I like putting on songs that allow me to be in the zone and feel all this sadness. In this case, there's also the fact that these songs lyrically also address some of the pain I'm feeling, and it's theraputic to hear it coming from the artist, as if it's saying "you're not alone, I know how this feels." Here's just a handful of pre 2000s pop tunes I'd put on for a time like this. I quite enjoy "Should I Stay," it's something I've been looping since I heard it in the show <i>Blackpool</i>. Give these a try, maybe they'll help.
                                        </p>
                                    </>
                                );
                            }
                            else{
                                //Indie + Depression + Feel Emotions + Prefer Lyrics + Pop + Modern
                                results.push(
                                    <>
                                        <p>You're someone who likes the unconventional, the kind of stuff that has a devoted cult following. Honestly, hell yeah. No shade to the mainstream hits, I quite like it too, but there's something special about listening to an artist and knowing "yeah, this is a tight knit but loyal crowd" you know? Anyway, I think you might not be in a good headspace right now, and I'm really sorry about that. I'm not gonna rattle on about any therapy text or the generic speech about things getting better. I'm in a similar jam myself, and it really doesn't seem like it's gonna get any better, but I know how I'm feeling and I'm someone who embraces that pain because it honestly reminds me that I'm human. I feel like you're also the type who would rather feel their emotions rather than hide them away or pretend they're not there. For me, as a music lover, I like putting on songs that allow me to be in the zone and feel all this sadness. In this case, there's also the fact that these songs lyrically also address some of the pain I'm feeling, and it's theraputic to hear it coming from the artist, as if it's saying "you're not alone, I know how this feels." Here's some stuff I'd put on in a case like this. Yeah, Carly Rae and TOP are quite popular, but they're artists that really have this cult appeal, and it's kinda nice how they're on the borderline where a lot of people can name their biggest hit, but not the stuff that really speaks to their audience. I remember putting on "Cry" before I started really delving into her discography and going "damn, people who only listen to Call Me Maybe are really missing out." Feel free to give these a spin, and maybe you might vibe with them.
                                        </p>
                                    </>
                                );
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
                                results.push(
                                    <>
                                    <p>
                                        I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are timeless and popular for a reason. I know it seems like you're not in a good headspace right now, and I'm sorry about that. I won't go on about how things will get better. Honestly, many times in my battle against my own depression, I've never wanted to think about the light at the end of the tunnel. I'd cope by channeling my emotions and negativity through hiding them behind the mask of pretending to be okay. I think you're in the same boat of wanting to hide everything behind that mask, but sometimes that negativity does slip through in the form of frustration and anger. For this case, I usually use late '70s and early '80s hits to just bop and vibe while also dramatically falling apart to them desperately clinging onto the hope that everything is alright. For the longest time, "Total Eclipse of the Heart" was a song that became associated with me, and it's a great release of anger when you look at the arrangement and explosion of sound and emotion in the chorus. Blondie and Supertramp are in a different but similar area of nailing that confusion with how fucked up life seems to be at the moment while also disguising it through digestible and happy sounding melodies. Give these songs a spin and maybe it'll help with how you're currently feeling.
                                    </p>
                                    </>
                                );
                            }
                            else{
                                //Mainstream + Depression + Suppress Emotions + Prefer Instrumental + Pop + Modern
                                results.push(
                                    <>
                                    <p>
                                        I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are popular bops for a reason. I know it seems like you're not in a good headspace right now, and I'm sorry about that. I won't go on about how things will get better. Honestly, many times in my battle against my own depression, I've never wanted to think about the light at the end of the tunnel. I'd cope by channeling my emotions and negativity through hiding them behind the mask of pretending to be okay. I think you're in the same boat of wanting to hide everything behind that mask, but sometimes that negativity does slip through in the form of frustration and anger. Whenever I'm feeling this way and want to listen to something more current, I put on the aggressive bangers. Songs like "This Hell" and "Obsessed" are great songs to just rage and scream to while venting all your confusion out through straight up danceable melodies. Same goes for TWICE's "Perfect World." TWICE is honestly one of my favorite K-pop groups since they have songs that pretty much fit every emotion, and I consider "Perfect World" to be their most straightforwardly aggressive song. I think these tunes are a great way to mask your pain through pure anger. It's a great outlet for you to distract yourself from your emotions by diverting all that sadness into another feeling. Give these a try.
                                    </p>
                                    </>
                                );
                            }
                        }
                        else{
                            if(profile.age === "classic"){
                                //Indie + Depression + Suppress Emotions + Prefer Instrumental + Pop + Classic
                                results.push(
                                    <>
                                        <p>You're someone who likes the unconventional, the kind of stuff that has a devoted cult following. Honestly, hell yeah. No shade to the mainstream hits, I quite like it too, but there's something special about listening to an artist and knowing "yeah, this is a tight knit but loyal crowd" you know? Anyway, I feel like you're probably not in the best headspace right now. These are really confusing times, and I won't say I know how you feel because truthfully I don't, and chances are most probably won't know either, but I just wanted you to know you're not alone in feeling that way. Sometimes when I'm holding it all in and putting on this mask of being fine when I'm not, I'd usually put on something that matches the confusion and frustration inside me. Usually it'd be early synth pop and new wave, kinda like the experimental post punk of the time but a bit less doomer I guess? Stuff like Orchestral Manoeuvres and Visage kinda capture that specific vibe that's hard to desribe. Feel free to give these a try and see if they resonate with your emotions right now.
                                        </p>
                                    </>
                                );
                            }
                            else{
                                //Indie + Depression + Suppress Emotions + Prefer Instrumental + Pop + Modern
                                results.push(
                                    <>
                                        <p>You're someone who likes the unconventional, the kind of stuff that has a devoted cult following. Honestly, hell yeah. No shade to the mainstream hits, I quite like it too, but there's something special about listening to an artist and knowing "yeah, this is a tight knit but loyal crowd" you know? Anyway, I feel like you're probably not in the best headspace right now. These are really confusing times, and sometimes you want to just put on a happy song and pretend like your world hasn't fallen apart just yet. I've been in a similar position before, and sometimes I just want the happy songs that have a tinge of bittersweetness to them, like theres that inner turmoil underneath that gets masked by the melody. Bol4 is my favorite Korean band (that's technically not even a band anymore, kinda like P!ATD) and they have a lot of songs that nail the nostalgic but kinda bittersweet vibe that I'm thinking of. A lot of indie pop really lives on that specific vibe, so there's often a lot of those in my playlists, like Dom Fera's "Breathe." Give these a listen, and I feel like they'd be good for just lifting your spirits up for a little while longer.  
                                        </p>
                                    </>
                                );
                            }
                        }
                    }
                    else{
                        //if you prefer mainstream
                        if(profile.mainstream === "mainstream"){
                            //if you prefer classics
                            if(profile.age === "classic"){
                                //Mainstream + Depression + Suppress Emotions + Prefer Lyrics + Pop + Classic
                                results.push(
                                    <>
                                    <p>
                                        I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are timeless and popular for a reason. I know it seems like you're not in the best headspace right now. I'm sorry about that. I won't say it'll get better because I'm in a similar boat myself, and that is not something I would want to hear right now either. It seems like you'd be the type to use music as a crutch; as a way to boost your mood and distract you from all that pain in your life. It's hard, but you want to try, right? Personally during times like these, I'd listen to the late '80s and '90s. It kinda nails that liminality between classic and modern pop, which honestly nails how I think you'd use music to process your emotions. Feeling like you're in this weird limbo between making it and falling apart. You want to feel better, but there's that little feeling in the back of your mind that you're not, though you'd want to pretend just a little longer. Thank <i>Stranger Things</i> for bringing Kate Bush into the mainstream, but "Running Up That Hill" is a great song that embodies the ongoing struggle to feel alright. As does The Cranberries' "Dreams." These songs that are honestly pretty sad when you think about it, but as long as that runtime's still going, it will keep on fighting to pretend otherwise. That kind of bittersweet songwriting might be up your alley.
                                    </p>
                                    </>
                                );
                            }
                            else{
                                //Mainstream + Depression + Suppress Emotions + Prefer Lyrics + Pop + Modern
                                results.push(
                                    <>
                                    <p>
                                        I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are popular for a reason. I know it seems like you're not in the best headspace right now. I'm sorry about that. I won't say it'll get better because I'm in a similar boat myself, and that is not something I would want to hear right now either. It seems like you'd be the type to use music as a crutch; as a way to boost your mood and distract you from all that pain in your life. It's hard, but you want to try, right? Personally during times like these, I'd listen to modern day synth-pop. As a Swiftie, "The Archer" is my second favorite Taylor song. It has that melodic but especially lyrical sadness to it by delving into the desire to keep hanging on. The desire to feel alright again. Times are tough, but I would want to pretend for a second that everything will be alright in the end. It is also in that sense that "Good Luck, Babe!" also fits the bill of wanting a sense of control and normalcy over your life. These are just some of the pop tunes that I would want to put on when I want to hear some relatable words of seeking that solace in a world where it doesn't seem to exist.
                                    </p>
                                    </>
                                );
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
                        <p>I think you'd enjoy some tunes from before the 2000s. I'm gonna be honest, it's kind of a ghost town out here, especially since we only really got synth-based music off the ground in like the '80s, though there's definitely some good progenitors to electronic based music and hip hop before the '00s.
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
                                results.push(
                                    <>
                                        <p>I think you'd enjoy the more popular stuff, which hey, no shame at all. These songs are popular for a reason. I know it seems like you're not really in the best headspace right now, and I'm sorry about that. I won't say what the right way of dealing with all that is, but for me, whenever I want to process my feelings in a lower stakes way, I like to put on stuff that's more synth and ambient based just to relax and give the proper time and space for myself to process this negativity. I think you're in the same boat as someone who really wants to mellow out and just feel the vibe of a song. Kendrick's "Sing About Me" is probably his best song, and it's such a good song to just nod your head to when you want to be in the zone. Same goes for "Busted and Blue." I do not encourage listening to that song with edibles, but it really does fit the bill of a song that makes you feel like you're drifting through space. Sit back, give these tunes and spin, and really give them the space to just feel out your emotions and embrace them.
                                        </p>
                                    </>
                                );
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
        <div>
            <h1>Results</h1>
            <br/>
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