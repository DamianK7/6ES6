const students = [
    {name: "Michał Kowal", scores: [79, 85, 98]},
    {name: "Bartłomiej Kamyk", scores: [42, 89, 61]},
    {name: "Piotr Nowak", scores: [92, 78, 82]},
    {name: "Ewa Kamińska", scores: [86, 56, 76]},
];

    const testScore = (students) => {
    const averages = students.map(({ name, scores }) => ({
        name, average: scores.reduce((sum, score) => sum + score, 0) / scores.length,
    }));

    const allScores = students.flatMap(({ scores }) => scores); 
    const maxScore = Math.max(...allScores);
    const minScore = Math.min(...allScores);
    const above80 = averages.filter(({ average }) => average > 80);

    averages.forEach(({ name, average }) =>
        console.log(`Student: ${name}, Średnia wyników: ${average.toFixed(0)}%`)
    );
    
    console.log(`Najwyższy wynik: ${maxScore}%`);
    console.log(`Najniższy wynik: ${minScore}%`);
    console.log("Studenci z średnim wynikiem wyższym niż 80%:")
    above80.forEach(({ name, average }) =>
    console.log(`${name}, ze Średnią: ${average.toFixed(0)}%`))
};

testScore(students);
