## Serverless Framework

---

### Creating serverless function using Nodejs(Javascript)

1. Install serverless on your machine
   `sudo npm i serverless -g`
2. Configure AWS credentials in your system using AWS CLI
   refer documentation to install and configure AWS CLI.
3. To create serverless project use command `serverless`
   select required template and start with the project
4. Edit your yaml file according to your configuration need
5. Deploy the function - `serverless deploy -v`
   To deploy only specific function - `serverless deploy -f <fun_name>`
   To deploy specific stage - `sls deploy --stage dev`
6. Invoke http end point api using API Gateway.

#### Invoking API locally

**1. Install plugin `serverless-offline` as dev dependency**

**2. Add `serverless-offline` plugin in the plugins section of the `serverless.yaml` file**

**3. Run the command `sls offline start --httpPort 5000`**

---

### Creating serverless function using Nodejs(Typescript)

1. Initiate serverless project with starter template
2. Install typescript, node and serverless-plugin-typescript as dev dependecies in your project
3. Add `serverless-plugin-typescript` plugin in the plugins section on the yaml file
4. Organize your folder structure according to you need.
5. Install `@types/aws-lambda` dev dependencies to work with types in your code. refer code block in the repo to see more
6. Then normal deployment and invocation of the api end point, typescript plugin will handle all the conversion related to javascript to typescript.

---
