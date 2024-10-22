/**
 * The method checks if answer contains all of the guess words.
 * @param guess User guess
 * @param answer Correct answer
 */

export const checkBreedNameMatch = (guess:string, answer:string)=>{
    if(guess !== ''){
    let numberOfGuessWordsContained:number = 0;
    const guessWords:string[] = guess.split(" ").map(word => word.toLowerCase());
    const answerWords:string[] = answer.split(" ").map(word => word.toLowerCase());
    guessWords.forEach(guessWord=>{
        if(answerWords.some(answerWord => answerWord === guessWord))
            numberOfGuessWordsContained++;
        })

        if(numberOfGuessWordsContained == guessWords.length){
            return true;
        }
        return false;
    }
    return false;
}

