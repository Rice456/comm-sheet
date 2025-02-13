

const commands = {
    "Title": "k8s",
    "Jobs": {
        command:
            "$kubectl get jobs\n" +
            "$kubectl describe job <jobName>\n" +
            "$kubectl delete job <jobName>\n" +
            "$kubectl delete jobs --field-selector status.successful=1\n" +
            "$kubectl get job job-name -o yaml" +
            "$echo \"review-scrape-1 review-scrape-2\" | xargs -n 1 kubectl -n jobs delete job",
        description: "N/A"
    },
    "Pods": {
        command:
            "$kubectl top pods\n" +
            "$kubectl get pods\n" +
            "$kubectl get pods --output=wide\n" +
            "$kubectl get pods -o wide\n" +
            "$kubectl get pods <podsName> -o yaml\n" +
            "$kubectl describe pod <podsName>\n" +
            "$kubectl logs <podName>",
        description: "N/A"
    },
    "Cronjob": {
        command:
            "$kubectl get cronjobs\n" +
            "$kubectl patch cronjobs <job-name> -p '{\"spec\" : {\"suspend\" : true }}'" +
            "$kubectl edit cronjobs jobxxxxx",
        description: "N/A"
    },
    "Nodes": {
        command:
            "$kubectl get nodes\n" +
            "$kubectl get nodes --show-labels\n" +
            "$kubectl describe nodes",
        description: "N/A"
    },
    "Service-account": {
        command:
            "$kubectl get serviceaccounts",
        description: "N/A"
    },
    "API-resources": {
        command:
            "$kubectl api-resources",
        description: "Check API groups"
    },
    "Secrets": {
        command:
            "$kubectl get secrets --namespace jobs\n" +
            "$kubectl get sercrets <secretID> -o json",
        description: "N/A"
    },
    "ConfigMap": {
        command:
            "$kubectl get configmap <configmap-name> --namespace=<namespace-name>\n" +
            "$kubectl delete configmap <configmap-name> --namespace=<namespace-name>",
        description: "N/A",
    },
    "Config": {
        command:
            "$kubectl config view\n" +
            "$kubectl config current-context\n" +
            "$kubectl config use-context my-cluster-name\n" +
            "$kubectl config unset users.foo\n" +
            "$kubectl config set-context --current --namespace=jobs\n" +
            "$kubectl config delete-cluster my-cluster\n" +
            "$kubectl config delete-context my-cluster-context\n" +
            "$kubectl config unset users.my-cluster-admin",
        description: "N/A"
    },
    "Spark-UI": {
        command:
            "$kubectl port-forward <driverPodName> 4040:4040",
        description: "Check spark UI => http://localhost:4040/"
    },
    "Deno-deploy":{
        command:
            "$deno run job-spec.js | kubectl create -f - --dry-run -o yaml\n" +
            "$deno run job-spec.js | kubectl create -f -",
        description: "Deploy Deno JS"
    },
    "More": {
        command: "N/A",
        description: "# More commands: https://kubernetes.io/docs/reference/kubectl/cheatsheet/"
    }
}

export default commands;