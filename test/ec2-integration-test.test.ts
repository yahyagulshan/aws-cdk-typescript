import * as AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });  // Replace with your region

const ec2 = new AWS.EC2();

test('EC2 instance should have an attached EBS volume', async () => {
  // Replace with your actual EC2 instance ID and EBS volume ID
  const instanceId = 'i-0982bb309532a7b75';
  const volumeId = 'vol-0903b23131f3f282a';

  // Describe the instance
  const instanceData = await ec2.describeInstances({
    InstanceIds: [instanceId],
  }).promise();

  const instance = instanceData.Reservations?.[0]?.Instances?.[0];
  expect(instance).toBeDefined();

  // Check for attached volumes
  const volumes = instance?.BlockDeviceMappings || [];
  const volumeAttached = volumes.some(volume => volume.Ebs?.VolumeId === volumeId);

  expect(volumeAttached).toBe(true);
});

