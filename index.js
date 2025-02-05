import vi_text_editor from "./vi_text_editor.js";

for(const key in vi_text_editor){
    const {command, description} = vi_text_editor[key]
    console.log(`Action:${key} \nCommand: ${command} \nDescription: ${description} \n`);
}