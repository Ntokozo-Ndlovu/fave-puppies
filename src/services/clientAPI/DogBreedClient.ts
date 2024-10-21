import { get } from "./HttpClient"

export const fetchAllBreeds = () =>{
    return get<{message:{[key:string]:string[]} ,status:string }>(`list/all`)
}

export const fetchImageListByBreed = (breedName:string)=>{
    return get<{message:string[], status:string}>(`${breedName}/images`)
}

export const fetchImageListBySubBreed = (breedName:string, subBreedName:string)=>{
    return get<{message:string[], status:string}>(`${breedName}/${subBreedName}/images`)
}

export const fetchRandomImage = ()=>{
    return get<{message:string ,status:string }>(`image/random`);
}

export const fetchRandomImageByBreed = (breedName:string)=>{
    return get<{message:string, status:string}>(`${breedName}/images/random`)
}

export const fetchMultipleRandomImages = (numberOfImages:number = 10) =>{
    if(numberOfImages > 50)
        return get<{message:string[] ,status:string }>(`image/random/${50}`) 
    return get<{message:string[] ,status:string }>(`image/random/${numberOfImages}`)
}

export const fetchListSubBreeds = (breedName:string)=>{
    return get<{message:string[], status:string}>(`${breedName}/list`)
}







