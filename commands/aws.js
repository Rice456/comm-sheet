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
    },
    "DynamoDB": {
        command: "$aws dynamodb query \\\n" +
            "    --table-name DetailResults-eks-stage \\\n" +
            "    --expression-attribute-name '{ \"#myKey\": \"key\" }' \\\n" +
            "    --key-condition-expression \"#myKey = :val\" \\\n" +
                "    --expression-attribute-values '{ \":val\": { \"S\": \"xxxxxxx|title|apple_web|US\" } }' \\\n" +
            "    --no-scan-index-forward\n" +
            "    --max-items 5" +
        "$aws dynamodb list-tables | jq -r '.TableNames[]' | grep KSR3_ | xargs -I % bash -c 'echo \"%, $(aws dynamodb describe-table --table-name % | jq '.Table.ItemCount')\"'" +
        "$aws dynamodb scan --table-name tableName --query \"Items[].timestamp\" --output text | sort",
        description: "Sample query"
    },
    "S3": {
        command:
            "$aws s3 ls s3://s3Path --recursive | sort | tail -n 10" +
            "$aws configure\n" +
            "$aws configure list\n" +
            "$aws iam list-access-keys\n" +
            "$aws iam create-access-key" +
            "aws s3 ls s3://s3Path | grep PRE | wc -l",
        description:"Update access key: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html?icmpid=docs_iam_console#Using_CreateAccessKey"
    }
}

export default commands;