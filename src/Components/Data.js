export const data = [
    {
        question: "Do you prefer music made by popular artists or those outside of the mainstream?",
        options: ["Mainstream", "Non-mainstream"],
        answers: ["mainstream", "indie"]
    },
    {
        question: "Do you often seek out the music you listen to, or use algorithmic recommendations?",
        options: ["Seek them out", "Algorithm recommendations"],
        answers: ["indie", "mainstream"]
    },
    {
        question: "Are there any points in your life that you regret or wish you could try again?",
        options: ["Yes", "No"],
        answers: ["depression", "satisfied"]
    },
    {
        question: "Which musical styles do you tend to gravitate towards?",
        options: ["Pop", "Rock", "Hip-Hop/Electronica"],
        answers: [{pop:1}, {rock:1}, {hiphopelectronica:1}]
    },
    {
        question: "Do you believe in the safety that a government provides?",
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
        question: "Would you rather live a short but happy life or a long but unfulfilling life?",
        options: ["A short but happy life", "An unfulfilling but long life"],
        answers: ["feel", "suppress"]
    },
    {
        question: "Are you satisfied with your life?",
        options: ["Yes", "No"],
        answers: ["satisfied", "depression"]
    }
]