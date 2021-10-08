## Serverless Framework

---

### Creating serverless function in nodejs (Javascript)

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

**Invoking API locally**

**1. Install plugin `serverless-offline` as dev dependency**

**2. Add `serverless-offline` plugin in the plugins section of the `serverless.yaml` file**

**3. Run the command `sls offline start --httpPort 5000`**
