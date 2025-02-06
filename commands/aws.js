import 'dotenv/config'

const {EKS_STAGE_NAME, STAGE_JOB_ROLE_ARN, STAGE_JOBS, STAGE_ROLE_SESSION_NAME} = process.env

const commands = {
    "Title": "aws",
    "Updated context .kube/config": {
        command: `$aws eks update-kubeconfig --name ${EKS_STAGE_NAME}`,
        description: "Update k9s config for EKS, No role setup."
    },
    "Updated context .kube/config with role": {
        command: `$aws eks update-kubeconfig --name ${EKS_STAGE_NAME} --role-arn ${STAGE_JOB_ROLE_ARN}`,
        description: "This command will add clusters with setting default roles."
    },
    "Manually set up role": {
        command:
            "$aws sts get-caller-identity\n" +
            "$aws iam list-roles --query 'Roles[*].RoleName'\n" +
            `$aws iam get-role --role-name ${STAGE_JOBS}\n` +
            `$aws sts assume-role --role-arn ${STAGE_JOB_ROLE_ARN} --role-session-name ${STAGE_ROLE_SESSION_NAME}\n` +
            "$ export AWS_ACCESS_KEY_ID=<your-access-key-id>\n" +
            "$ export AWS_SECRET_ACCESS_KEY=<your-secret-access-key>\n" +
            "$ export AWS_SESSION_TOKEN=<your-session-token>",
        description: "Previous step will give you ID KEY TOKEN, and pass them to env"
    }
}

export default commands;