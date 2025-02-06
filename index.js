import vi_text_editor from "./commands/vi_text_editor.js";
import aws_access_key_editor from "./commands/aws.js";

const displayCommands = (comObj) => {
    for(const key in comObj){
        if(key === "Title"){
            console.log(`Title: ${comObj[key]}`)
        }
        else {
            const {command, description} = comObj[key]
            console.log(`Action:${key} \nCommand: ${command} \nDescription: ${description} \n`);
        }
    }
}

displayCommands(vi_text_editor)
displayCommands(aws_access_key_editor)