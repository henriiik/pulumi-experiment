import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

export type VpcArgs = {
  argOverrides?: { vpc?: Partial<aws.ec2.VpcArgs> };
  optOverrides?: { vpc?: Partial<pulumi.CustomResourceOptions> };
};

export class Vpc extends pulumi.ComponentResource {
  vpc: aws.ec2.Vpc;

  constructor(
    name: string,
    args?: VpcArgs,
    opts?: pulumi.ComponentResourceOptions
  ) {
    super("pex:Vpc", name, args, opts);

    this.vpc = new aws.ec2.Vpc(name, args?.argOverrides?.vpc, {
      parent: this,
      ...args?.optOverrides?.vpc,
    });
  }
}
