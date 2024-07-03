export async function copyText(text:string):Promise<boolean>  {
    
    return new Promise<boolean>((resolve) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Texte copier dans le presse-papiers : ', text);
            resolve(true)
        }).catch(err => {
            console.error('Erreur lors de la copie du texte : ', err);
            resolve(false)
        });
    })
}

export async function pasteText(): Promise<{ done: boolean, text:string}> {
return new Promise<{ done: boolean, text:string}>((resolve) => {
    navigator.clipboard.readText().then(text => {
        console.log('Texte collé depuis le presse-papiers : ', text);
        resolve({done:true, text})
    }).catch(err => {
        console.error('Erreur lors du collage du texte : ', err);
        resolve({done:false, text:''})
    });
})
    
}