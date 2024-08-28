# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

### Steps for attach ebs volume with Ec2 

* clone this repo
* get into this directory
* Navigate to the /lib Directory
* modify ec2-integration-test-stack.ts file (in this code change ec2 instance-id and volume-id)
* Synthesize the CDK Stack
* cdk synth
* cdk bootstrap
* cdk deploy

* this will run the cloudformation script and attached the voluem to ec2.

* for integration test to check volume is attached or not

* modify test file in /test directory
* here also change instance id and volume id and save the file. "ec2-integration-test.test.ts".
* and run below commnad
* npm test
