import prompt from "prompt"
import mainPrompt from "./prompts/prompt-main.js"

async function main(){
    prompt.get(mainPrompt,async (err, result) =>{
        if(result.select == 1) console.log("escolheu o qrCODE")

        if(result.select == 2) console.log("escolheu o password")
    })

    prompt.start()
}

main()