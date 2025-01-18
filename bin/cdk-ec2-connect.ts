#!/usr/bin/env node
import 'source-map-support/register';
import { SimpleEc2Stack } from '../lib/cdk-ec2-connect-stack';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

const stack = new cdk.Stack(new cdk.App(), 'test', {
  env: {
    region: 'us-east-1',
    account: '12345678910', // your account here
  },
})

    const app = new cdk.App();
    new SimpleEc2Stack(app, 'SimpleEc2Stack', {
    description: 'This is a simple EC2 stack'
    })
