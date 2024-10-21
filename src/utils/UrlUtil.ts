

export const getBreedNameFromUrl = (URL:string):string=>{
 
    const reg = /\/breeds\/([a-zA-Z\-]+)\//;
    let breedName = reg.exec(URL)?.at(1);
 
    if(breedName === undefined)
        return "";
 
    const finalBreedName = breedName.split("-").
 
    map(word=>word.charAt(0).toLocaleUpperCase() + word.slice(1)).join(" ");
 
    return finalBreedName;
}