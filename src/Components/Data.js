export const data = [
    {
        question: "First thing's first: Do you prefer music made by popular artists or those outside of the mainstream?",
        options: ["Mainstream", "Non-mainstream"],
        answers: ["mainstream", "indie"]
    },
    {
        question: "You know, I don't even really know what I would pick in that regard either. Really just depends on the day doesn't it? What even is the definition of \"mainstream\" anyway? Something that was once all over the airwaves 30 years ago might just be another forgotten tune with a cult following today. Anyways, moving on. Out of curiosity, do you often seek out the music you listen to, or use algorithmic recommendations?",
        options: ["Seek them out", "Algorithm recommendations"],
        answers: ["indie", "mainstream"]
    },
    {
        question: "Well, that definitely says a lot about the way you chose to engage with music. I personally prefer the idea of choice in my playlists, though I can't deny that some algorithm pulls have led me to discovering some of my favorite artists. Now, I want to know more about how you are feeling right now. Think about this and be honest, are there any points in your life that you regret or wish you could try again?",
        options: ["Yes", "No"],
        answers: ["depression", "satisfied"]
    },
    {
        question: "You have access to the aux: what style out of these three speaks to you?",
        options: ["Pop", "Rock", "Hip-Hop/Electronica"],
        answers: [{pop:1}, {rock:1}, {hiphopelectronica:1}]
    },
    {
        question: "Interesting selection... I'd like to think of myself as a musical connoisseur, though even I have to admit my limits. No matter how much content I consume, I'm never going to be an objective recommender since there will always be musical styles I gravitate towards the most, and those three are the ones. \n\nBack to the hypotheticals. This time, I'll expand things to the world at large. It's damn near impossible to ignore how fucked up everything is in the world right now, especially under the current poltical climate. Now, this question can be approached from many different perspectives, and I won't specify which is correct. Do you believe in the safety that a government provides?",
        options: ["Yes", "No"],
        answers: ["mainstream", "indie"]
    },
    {
        question: "Do you tend to feel your emotions or suppress them?",
        options: ["I prefer to feel my emotions", "I prefer to suppress my emotions"],
        answers: ["feel", "suppress"]
    },
    {
        question: "Would you say you prefer old classics or modern media?",
        options: ["The classics", "Modern hits"],
        answers: ["classic", "modern"]
    },
    {
        question: "Are you finding your relationships with friends, family, and/or romantic partner to be fulfilling?",
        options: ["Yes", "No"],
        answers: ["satisfied", "depression"]
    },
    {
        question: "Do you connect more with instrumental and melody or lyrics?",
        options: ["Instrumentals", "Lyrics"],
        answers: ["instrumentals", "lyrics"]
    },
    {
        question: "Do you currently feel like you have a good sense of balance in your work, academics, and personal life?",
        options: ["Yes", "No"],
        answers: ["satisfied", "depression"]
    },
    {
        question: "Do you prefer acoustic or electronic elements in music?",
        options: ["Acoustic", "Electronic"],
        answers: [{rock: 1}, {rock:-1, hiphopelectronica:1}]
    },
    {
        question: "Do you currently feel like you have control over most aspects of your life?",
        options: ["Yes", "No"],
        answers: ["satisfied", "depression"]
    },
    {
        question: "Do you often put music on in the background while multitasking or do you actively engage with the music you listen to?",
        options: ["Background", "Focus"],
        answers: ["instrumentals", "lyrics"]
    },
    {
        question: "When you are feeling down, would you rather engage with media that validates your feelings or negates them? (e.g. if you are sad, do you listen to sad songs or happy songs?)",
        options: ["Validate my feelings", "Make me feel better"],
        answers: ["feel", "suppress"]
    },
    {
        question: "Do you have a strong sense of purpose and have goals you wish to achieve in this lifetime?",
        options: ["Yes", "No"],
        answers: ["instrumentals", "lyrics"]
    },
    {
        question: "Which decades of music do you often find yourself listening to the most?",
        options: ["1960s-1980s", "1990s-2000s", "2010s-2020s"],
        answers: ["classic", "N/A", "modern"]
    },
    {
        question: "If you had the chance to rewind time and redo any moment in your life, but there would be no way to return to the present, would you do it?",
        options: ["Rewind time", "Live with regrets"],
        answers: ["classic", "modern"]
    },
    {
        question: "What do you feel like you've been needing more of lately?",
        options: ["A fun decompression", "An emotional release", "Some peace of mind and vibes", "Some motivation"],
        answers: [{pop:1},{rock:1, hiphopelectronica:-1},{hiphopelectronica:1, rock:-1}, {pop:1, rock:1}]
    },
    {
        question: "Another hypothetical: Would you rather live a short but happy life or a long but unfulfilling life?",
        options: ["A short but happy life", "An unfulfilling but long life"],
        answers: ["feel", "suppress"]
    },
    {
        question: "Just one more question, and I really want you to think hard on this: Are you satisfied with your life?",
        options: ["Yes", "No"],
        answers: ["satisfied", "depression"]
    }
]