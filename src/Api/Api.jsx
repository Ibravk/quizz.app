import he from 'he';

// Fonction pour mélanger les réponses
const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
};

// Fonction pour récupérer les données du quiz
export const fetchQuizData = async (difficulty, amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(url)).json();

    // Décodage et restructuration des données
    return data.results.map((dt) => ({
        question: he.decode(dt.question), // Décoder la question
        correct_answer: he.decode(dt.correct_answer), // Décoder la bonne réponse
        answers: shuffleArray([
            ...dt.incorrect_answers.map(answer => he.decode(answer)), // Décoder les mauvaises réponses
            he.decode(dt.correct_answer) // Inclure la bonne réponse décodée
        ]),
    }));
};
