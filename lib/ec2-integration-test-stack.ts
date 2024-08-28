import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class Ec2IntegrationTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Replace with your existing EC2 instance ID and EBS volume ID
    const instanceId = 'i-0bcd606d19a82d357';  // Example EC2 instance ID
    const volumeId = 'vol-055f56e73ef404439';  // Example EBS volume ID

    // Attach EBS Volume to EC2 Instance
    new ec2.CfnVolumeAttachment(this, 'VolumeAttachment', {
      device: '/dev/sdh',
      instanceId: instanceId,
      volumeId: volumeId,
    });
  }
}
