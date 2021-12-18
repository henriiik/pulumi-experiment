import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

export class Vpc extends pulumi.ComponentResource {
  inner: aws.ec2.Vpc;

  constructor(
    name: string,
    args?: pulumi.Inputs,
    opts?: pulumi.ComponentResourceOptions
  ) {
    super("pex:Vpc", name, args, opts);
    this.inner = new aws.ec2.Vpc(name);
  }
}
